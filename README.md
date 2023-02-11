# ipp5-backend-idp

~~~~~ sh
npm install e53e04ac/ipp5-backend-idp
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["@types/express"]);
    B_1(["express"]);
    B_2(["express-rate-limit"]);
    B_3(["express-slow-down"]);
    B_4(["e53e04ac/hold"]);
    B_5(["joi"]);
    B_6(["e53e04ac/key-value-storage-azure-data-tables"]);
    B_7(["e53e04ac/ipp5-token-issuer"]);
  end;
  subgraph "devDependencies";
    B_8(["@types/express-slow-down"]);
    B_9(["@types/node"]);
    B_10(["e53e04ac/key-value-storage"]);
    B_11(["e53e04ac/ipp5-types"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  A ----> B_8;
  A ----> B_9;
  A ----> B_10;
  A ----> B_11;
  click B_0 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_1 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_2 "https://www.npmjs.org/package/express-rate-limit/v/6.7.0";
  click B_3 "https://www.npmjs.org/package/express-slow-down/v/1.5.0";
  click B_4 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_5 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_6 "https://github.com/e53e04ac/key-value-storage-azure-data-tables/tree/e2a7c2dcd4a5170c67d21ff341089b18fd2218e4";
  click B_7 "https://github.com/e53e04ac/ipp5-token-issuer/tree/61c04f2e4b8daf1bca01e27dd1224a93b112372b";
  click B_8 "https://www.npmjs.org/package/@types/express-slow-down/v/1.3.2";
  click B_9 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_10 "https://github.com/e53e04ac/key-value-storage/tree/aac96bb14624c4984234bd1f36dba5e21efc04e8";
  click B_11 "https://github.com/e53e04ac/ipp5-types/tree/ef144d850d518b40703ea085cb940b3ec452bde2";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "node:http";
    B_0_0(["Server"]);
  end;
  subgraph "express";
    B_1_0(["default"]);
    B_1_1(["Router"]);
  end;
  subgraph "express-rate-limit";
    B_2_0(["default"]);
  end;
  subgraph "express-slow-down";
    B_3_0(["default"]);
  end;
  subgraph "joi";
    B_4_0(["default"]);
  end;
  subgraph "hold";
    B_5_0(["hold"]);
  end;
  subgraph "ipp5-token-issuer";
    B_6_0(["Ipp5TokenIssuer"]);
  end;
  subgraph "key-value-storage-azure-data-tables";
    B_7_0(["KeyValueStorage"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_4_0 ----> A;
  B_5_0 ----> A;
  B_6_0 ----> A;
  B_7_0 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "node:http";
    B_0_0(["Server"]);
  end;
  subgraph "express";
    B_1_0(["Application"]);
    B_1_1(["ErrorRequestHandler"]);
    B_1_2(["RequestHandler"]);
    B_1_3(["Router"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
  end;
  subgraph "ipp5-types";
    B_3_0(["Ipp5BackendIdpEnvMap"]);
  end;
  subgraph "ipp5-token-issuer";
    B_4_0(["Ipp5TokenIssuer"]);
  end;
  subgraph "key-value-storage";
    B_5_0(["KeyValueStorage"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
  B_1_2 ----> A;
  B_1_3 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_4_0 ----> A;
  B_5_0 ----> A;
~~~~~
