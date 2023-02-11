# ipp5-backend-idp

~~~~~ sh
npm install e53e04ac/ipp5-backend-idp
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-backend-idp"]);
  subgraph "dependencies";
    B_0(["@types/express"]);
    B_1(["express"]);
    B_2(["express-rate-limit"]);
    B_3(["express-slow-down"]);
    B_4(["e53e04ac/hold"]);
    B_5(["joi"]);
    B_6(["e53e04ac/key-value-storage"]);
    B_7(["e53e04ac/key-value-storage-azure-data-tables"]);
    B_8(["e53e04ac/ipp5-token-issuer"]);
  end;
  subgraph "devDependencies";
    B_9(["@types/express-slow-down"]);
    B_10(["@types/node"]);
    B_11(["e53e04ac/ipp5-types"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  A --reference--> B_6;
  A --reference--> B_7;
  A --reference--> B_8;
  A --reference--> B_9;
  A --reference--> B_10;
  A --reference--> B_11;
  click B_0 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_1 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_2 "https://www.npmjs.org/package/express-rate-limit/v/6.7.0";
  click B_3 "https://www.npmjs.org/package/express-slow-down/v/1.5.0";
  click B_4 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_5 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_6 "https://github.com/e53e04ac/key-value-storage/tree/ae6f96e5d498ee7c655a091e18ee657176ce7088";
  click B_7 "https://github.com/e53e04ac/key-value-storage-azure-data-tables/tree/de65cafc82be8baa6347cdfceb455a3851548449";
  click B_8 "https://github.com/e53e04ac/ipp5-token-issuer/tree/2f8f7946f07ec388fd9590558f59652e71715742";
  click B_9 "https://www.npmjs.org/package/@types/express-slow-down/v/1.3.2";
  click B_10 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_11 "https://github.com/e53e04ac/ipp5-types/tree/cb79884ba1349d4abde21ff64705578d8240dc31";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-backend-idp"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:http"
    D0(["Server"]);
  end;
  subgraph "express"
    D1(["default"]);
    D2(["Router"]);
    D9(["Application"]);
    D10(["ErrorRequestHandler"]);
    D11(["RequestHandler"]);
  end;
  subgraph "express-rate-limit"
    D3(["default"]);
  end;
  subgraph "express-slow-down"
    D4(["default"]);
  end;
  subgraph "joi"
    D5(["default"]);
  end;
  subgraph "hold"
    D6(["hold"]);
    D12(["Get"]);
  end;
  subgraph "ipp5-token-issuer"
    D7(["Ipp5TokenIssuer"]);
  end;
  subgraph "key-value-storage-azure-data-tables"
    D8(["KeyValueStorage"]);
  end;
  subgraph "ipp5-types"
    D13(["Ipp5BackendIdpEnvMap"]);
  end;
  subgraph "key-value-storage"
    D14(["KeyValueStorage"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D6 --import--> C0;
  D7 --import--> C0;
  D8 --import--> C0;
  D0 --import--> C1;
  D9 --import--> C1;
  D10 --import--> C1;
  D11 --import--> C1;
  D2 --import--> C1;
  D12 --import--> C1;
  D13 --import--> C1;
  D7 --import--> C1;
  D14 --import--> C1;
~~~~~
