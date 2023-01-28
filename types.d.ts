/*!
    @e53e04ac/ipp5-backend-idp/src/types.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Server as HttpServer } from 'node:http';

import { Application as ExpressApplication } from 'express';
import { ErrorRequestHandler as ExpressErrorRequestHandler } from 'express';
import { RequestHandler as ExpressRequestHandler } from 'express';
import { Router as ExpressRouter } from 'express';

import { Get } from 'hold';
import { KeyValueStorage } from 'key-value-storage';
import { Ipp5BackendIdpLauncher } from 'ipp5-backend-idp-launcher';
import { TokenIssuer } from 'token-issuer';

export declare namespace BackendIdp {

    type Application = {
        readonly process: Get<NodeJS.Process>;
        readonly env: Get<Ipp5BackendIdpLauncher.EnvMap>;
        readonly pendingItemStorage: Get<KeyValueStorage<TokenIssuer.PendingItem>>;
        readonly registeredItemStorage: Get<KeyValueStorage<TokenIssuer.RegisteredItem>>;
        readonly tokenIssuer: Get<TokenIssuer>;
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

}
