/*!
    @e53e04ac/ipp5-backend-idp/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { Server as HttpServer } from 'node:http';

import { default as express } from 'express';
import { Router as ExpressRouter } from 'express';
import { default as expressRateLimit } from 'express-rate-limit';
import { default as expressSlowDown } from 'express-slow-down';
import { default as Joi } from 'joi';

import { hold } from 'hold';
import { Ipp5TokenIssuer } from 'ipp5-token-issuer';
import { KeyValueStorage } from 'key-value-storage-azure-data-tables';

/** @type {import('.').Application} */
const app = ({
    process: hold(() => {
        return process;
    }),
    env: hold(() => {
        /** @type {import('joi').ObjectSchema<ReturnType<typeof app['env']>>} */
        const schema = Joi.object().unknown(true).keys({
            TZ: Joi.string().max(100).required(),
            WEBSITES_PORT: Joi.number().integer().min(0).max(65535).default(3000),
            CUSTOM_BACKEND_IDP_HTTP_PATH_PREFIX: Joi.string().max(100).required(),
            CUSTOM_BACKEND_IDP_REGISTER_URN: Joi.string().max(100).required(),
            CUSTOM_BACKEND_IDP_REGISTER_PRIVATE_KEY: Joi.string().max(1000).required(),
            CUSTOM_BACKEND_IDP_REGISTER_PUBLIC_KEY: Joi.string().max(1000).required(),
            CUSTOM_BACKEND_IDP_CHALLENGE_TOKEN_URN: Joi.string().max(100).required(),
            CUSTOM_BACKEND_IDP_CHALLENGE_TOKEN_PRIVATE_KEY: Joi.string().max(1000).required(),
            CUSTOM_BACKEND_IDP_CHALLENGE_TOKEN_PUBLIC_KEY: Joi.string().max(1000).required(),
            CUSTOM_BACKEND_IDP_TOKEN_URN: Joi.string().max(100).required(),
            CUSTOM_BACKEND_IDP_TOKEN_PRIVATE_KEY: Joi.string().max(1000).required(),
            CUSTOM_BACKEND_IDP_STORAGE_ACCOUNT_NAME: Joi.string().max(100).required(),
            CUSTOM_BACKEND_API_URN: Joi.string().max(100).required(),
            CUSTOM_EXPRESS_ENV: Joi.string().allow('development', 'production').required(),
            CUSTOM_EXPRESS_SUBDOMAIN_OFFSET: Joi.number().integer().min(2).required(),
            CUSTOM_EXPRESS_TRUST_PROXY: Joi.string().max(100).required(),
        });
        const validationResult = schema.validate(app.process().env);
        if (validationResult.error != null || validationResult.value == null) {
            throw new Error();
        }
        return validationResult.value;
    }),
    pendingItemStorage: hold(() => {
        return KeyValueStorage.fromDefaultCredential({
            storageAccountName: app.env().CUSTOM_BACKEND_IDP_STORAGE_ACCOUNT_NAME,
            tableName: 'pending',
            serialize: (async (value, key) => {
                return {
                    clientOneTimePublicKeyData: Buffer.from(value.clientOneTimePublicKeyData),
                    serverOneTimePrivateKeyData: Buffer.from(value.serverOneTimePrivateKeyData),
                    clientAgentId: value.clientAgentId,
                    clientAgentTime: value.clientAgentTime,
                    clientAgentNonce: value.clientAgentNonce,
                };
            }),
            deserialize: (async (entity, key) => {
                if (!(typeof entity.rowKey === 'string')) {
                    throw new Error();
                }
                if (!(entity.clientOneTimePublicKeyData instanceof Buffer)) {
                    throw new Error();
                }
                if (!(entity.serverOneTimePrivateKeyData instanceof Buffer)) {
                    throw new Error();
                }
                if (!(typeof entity.clientAgentId === 'string')) {
                    throw new Error();
                }
                if (!(typeof entity.clientAgentTime === 'number')) {
                    throw new Error();
                }
                if (!(typeof entity.clientAgentNonce === 'string')) {
                    throw new Error();
                }
                return {
                    clientOneTimeKey: entity.rowKey,
                    clientOneTimePublicKeyData: new Uint8Array(entity.clientOneTimePublicKeyData).buffer,
                    serverOneTimePrivateKeyData: new Uint8Array(entity.serverOneTimePrivateKeyData).buffer,
                    clientAgentId: entity.clientAgentId,
                    clientAgentTime: entity.clientAgentTime,
                    clientAgentNonce: entity.clientAgentNonce,
                };
            }),
        });
    }),
    registeredItemStorage: hold(() => {
        return KeyValueStorage.fromDefaultCredential({
            storageAccountName: app.env().CUSTOM_BACKEND_IDP_STORAGE_ACCOUNT_NAME,
            tableName: 'registered',
            serialize: (async (value, key) => {
                return {
                    clientPublicKeyData: Buffer.from(value.clientPublicKeyData),
                    clientAgentId: value.clientAgentId,
                    clientAgentTime: value.clientAgentTime,
                    clientAgentNonce: value.clientAgentNonce,
                };
            }),
            deserialize: (async (entity, key) => {
                if (!(typeof entity.rowKey === 'string')) {
                    throw new Error();
                }
                if (!(typeof entity.clientAgentId === 'string')) {
                    throw new Error();
                }
                if (!(typeof entity.clientAgentTime === 'number')) {
                    throw new Error();
                }
                if (!(typeof entity.clientAgentNonce === 'string')) {
                    throw new Error();
                }
                if (!(entity.clientPublicKeyData instanceof Buffer)) {
                    throw new Error();
                }
                return {
                    clientId: entity.rowKey,
                    clientPublicKeyData: new Uint8Array(entity.clientPublicKeyData).buffer,
                    clientAgentId: entity.clientAgentId,
                    clientAgentTime: entity.clientAgentTime,
                    clientAgentNonce: entity.clientAgentNonce,
                };
            }),
        });
    }),
    tokenIssuer: hold(() => {
        return Ipp5TokenIssuer({
            idpRegisterUrn: app.env().CUSTOM_BACKEND_IDP_REGISTER_URN,
            idpChallengeTokenUrn: app.env().CUSTOM_BACKEND_IDP_CHALLENGE_TOKEN_URN,
            idpTokenUrn: app.env().CUSTOM_BACKEND_IDP_TOKEN_URN,
            apiUrn: app.env().CUSTOM_BACKEND_API_URN,
            idpRegisterPrivateKey: app.env().CUSTOM_BACKEND_IDP_REGISTER_PRIVATE_KEY,
            idpRegisterPublicKey: app.env().CUSTOM_BACKEND_IDP_REGISTER_PUBLIC_KEY,
            idpChallengeTokenPrivateKey: app.env().CUSTOM_BACKEND_IDP_CHALLENGE_TOKEN_PRIVATE_KEY,
            idpChallengeTokenPublicKey: app.env().CUSTOM_BACKEND_IDP_CHALLENGE_TOKEN_PUBLIC_KEY,
            idpTokenPrivateKey: app.env().CUSTOM_BACKEND_IDP_TOKEN_PRIVATE_KEY,
            pendingItemStorage: app.pendingItemStorage(),
            registeredItemStorage: app.registeredItemStorage(),
        });
    }),
    healthcheckHandler: hold(() => {
        return ((req, res, next) => {
            res.status(200).type('text/plain; charset=utf-8').end('200 OK');
        });
    }),
    expressSlowDown: hold(() => {
        return expressSlowDown({
            windowMs: 60_000,
            delayAfter: 5,
            delayMs: 1_000,
            maxDelayMs: 10_000,
            skipFailedRequests: false,
            skipSuccessfulRequests: true,
            headers: false,
            keyGenerator: ((req, res) => {
                return req.ip.split(/(:(\d+)?)?$/)[0];
            }),
        });
    }),
    expressRateLimit: hold(() => {
        return expressRateLimit({
            windowMs: 60_000,
            max: 10,
            message: undefined,
            statusCode: undefined,
            legacyHeaders: false,
            standardHeaders: false,
            requestPropertyName: 'rateLimit',
            skipFailedRequests: false,
            skipSuccessfulRequests: true,
            keyGenerator: ((req, res) => {
                return req.ip.split(/(:(\d+)?)?$/)[0];
            }),
            handler: ((req, res) => {
                res.status(429).type('text/plain; charset=utf-8').end('429 Too Many Requests');
            }),
        });
    }),
    registerRequestHandler: hold(() => {
        return ((req, res, next) => {
            (async () => {
                const { error, challengeToken } = await app.tokenIssuer().registerRequest({
                    clientAgentId: req.header('client-agent-id'),
                    clientAgentTime: req.header('client-agent-time'),
                    clientAgentNonce: req.header('client-agent-nonce'),
                    clientOneTimeKey: req.header('client-one-time-key'),
                });
                if (error != null || challengeToken == null) {
                    console.error(error);
                    res.status(401).type('text/plain; charset=utf-8').end('401 Unauthorized');
                    return;
                }
                res.status(200).type('text/plain; charset=utf-8').header({ 'challenge-token': challengeToken }).end('OK');
            })().catch((error) => {
                next(error);
            });
        });
    }),
    registerResponseHandler: hold(() => {
        return ((req, res, next) => {
            (async () => {
                const { error, clientId } = await app.tokenIssuer().registerResponse({
                    clientAgentId: req.header('client-agent-id'),
                    clientAgentTime: req.header('client-agent-time'),
                    clientAgentNonce: req.header('client-agent-nonce'),
                    challengeToken: req.header('challenge-token'),
                    challengeResponse: req.header('challenge-response'),
                });
                if (error != null) {
                    console.error(error);
                    res.status(401).type('text/plain; charset=utf-8').end('401 Unauthorized');
                    return;
                }
                res.status(200).type('text/plain; charset=utf-8').header({ 'client-id': clientId }).end('OK');
            })().catch((error) => {
                next(error);
            });
        });
    }),
    tokenRequestHandler: hold(() => {
        return ((req, res, next) => {
            (async () => {
                const { error, challengeToken } = await app.tokenIssuer().tokenRequest({
                    clientAgentId: req.header('client-agent-id'),
                    clientAgentTime: req.header('client-agent-time'),
                    clientAgentNonce: req.header('client-agent-nonce'),
                    clientId: req.header('client-id'),
                });
                if (error != null || challengeToken == null) {
                    console.error(error);
                    res.status(401).type('text/plain; charset=utf-8').end('401 Unauthorized');
                    return;
                }
                res.status(200).type('text/plain; charset=utf-8').header({ 'challenge-token': challengeToken }).end('OK');
            })().catch((error) => {
                next(error);
            });
        });
    }),
    tokenResponseHandler: hold(() => {
        return ((req, res, next) => {
            (async () => {
                const { error, token } = await app.tokenIssuer().tokenResponse({
                    clientAgentId: req.header('client-agent-id'),
                    clientAgentTime: req.header('client-agent-time'),
                    clientAgentNonce: req.header('client-agent-nonce'),
                    challengeToken: req.header('challenge-token'),
                    challengeResponse: req.header('challenge-response'),
                });
                if (error != null || token == null) {
                    console.error(error);
                    res.status(401).type('text/plain; charset=utf-8').end('401 Unauthorized');
                    return;
                }
                res.status(200).type('text/plain; charset=utf-8').header({ 'token': token }).end('OK');
            })().catch((error) => {
                next(error);
            });
        });
    }),
    expressRouter: hold(() => {
        const it = ExpressRouter({
            caseSensitive: false,
            mergeParams: false,
            strict: false,
        });
        it.get('/healthcheck', app.healthcheckHandler());
        it.use(app.expressSlowDown());
        it.use(app.expressRateLimit());
        it.post('/register-request', app.registerRequestHandler());
        it.post('/register-response', app.registerResponseHandler());
        it.post('/token-request', app.tokenRequestHandler());
        it.post('/token-response', app.tokenResponseHandler());
        return it;
    }),
    expressNotFound: hold(() => {
        return ((req, res, next) => {
            res.status(403).type('text/plain; charset=utf-8').end('403 Forbidden');
        });
    }),
    expressInternalServerError: hold(() => {
        return ((err, req, res, next) => {
            console.error(err);
            res.status(500).type('text/plain; charset=utf-8').end('500 Internal Server Error');
        });
    }),
    expressApplication: hold(() => {
        const it = express();
        it.set('case sensitive routing', false);
        it.set('env', app.env().CUSTOM_EXPRESS_ENV);
        it.set('etag', 'weak');
        it.set('jsonp callback name', null);
        it.set('json escape', true);
        it.set('json replacer', null);
        it.set('json spaces', null);
        it.set('query parser', 'extended');
        it.set('strict routing', false);
        it.set('subdomain offset', app.env().CUSTOM_EXPRESS_SUBDOMAIN_OFFSET);
        it.set('trust proxy', app.env().CUSTOM_EXPRESS_TRUST_PROXY);
        it.set('views', null);
        it.set('view cache', null);
        it.set('view engine', null);
        it.set('x-powered-by', false);
        it.use(app.env().CUSTOM_BACKEND_IDP_HTTP_PATH_PREFIX, app.expressRouter());
        it.use(app.expressNotFound());
        it.use(app.expressInternalServerError());
        return it;
    }),
    httpServer: hold(() => {
        const it = new HttpServer({});
        it.on('request', app.expressApplication());
        return it;
    }),
    run: hold(async () => {
        await new Promise((resolve) => {
            app.httpServer().listen(app.env().WEBSITES_PORT, () => {
                resolve(undefined);
            });
        });
    }),
});

await app.run();
