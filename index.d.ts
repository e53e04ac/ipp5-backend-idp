/*!
    @e53e04ac/ipp5-backend-idp/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Server as HttpServer } from 'node:http';

import { Application as ExpressApplication } from 'express';
import { ErrorRequestHandler as ExpressErrorRequestHandler } from 'express';
import { RequestHandler as ExpressRequestHandler } from 'express';
import { Router as ExpressRouter } from 'express';

import { Get } from 'hold';
import { Ipp5BackendIdpEnvMap } from 'ipp5-types';
import { Ipp5TokenIssuer } from 'ipp5-token-issuer';
import { KeyValueStorage } from 'key-value-storage';

export declare type Application = {
    readonly process: Get<NodeJS.Process>;
    readonly env: Get<Ipp5BackendIdpEnvMap>;
    readonly pendingItemStorage: Get<KeyValueStorage<Ipp5TokenIssuer.PendingItem>>;
    readonly registeredItemStorage: Get<KeyValueStorage<Ipp5TokenIssuer.RegisteredItem>>;
    readonly tokenIssuer: Get<Ipp5TokenIssuer>;
    readonly logHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly healthcheckHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressSlowDown: Get<ExpressRequestHandler>;
    readonly expressRateLimit: Get<ExpressRequestHandler>;
    readonly registerRequestHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly registerResponseHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly tokenRequestHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly tokenResponseHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressRouter: Get<ExpressRouter>;
    readonly expressNotFound: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressInternalServerError: Get<ExpressErrorRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressApplication: Get<ExpressApplication>;
    readonly httpServer: Get<HttpServer>;
    readonly run: Get<Promise<void>>;
};
