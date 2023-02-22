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
  click B_0 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click B_1 "https://www.npmjs.com/package/express/v/4.18.2";
  click B_2 "https://www.npmjs.com/package/express-rate-limit/v/6.7.0";
  click B_3 "https://www.npmjs.com/package/express-slow-down/v/1.5.0";
  click B_4 "https://github.com/e53e04ac/hold/tree/3191dd4704f3e5f90d6c27f288ede7700f5fdb66";
  click B_5 "https://www.npmjs.com/package/joi/v/17.8.3";
  click B_6 "https://github.com/e53e04ac/key-value-storage-azure-data-tables/tree/e732a12bed03c95f65dd0a698b7512d25d5ecdc7";
  click B_7 "https://github.com/e53e04ac/ipp5-token-issuer/tree/3be82d8f94e07d5fcaaea2d092dd6b61c8cee5b4";
  click B_8 "https://www.npmjs.com/package/@types/express-slow-down/v/1.3.2";
  click B_9 "https://www.npmjs.com/package/@types/node/v/18.14.0";
  click B_10 "https://github.com/e53e04ac/key-value-storage/tree/8d4bb85c8c087b8ba8621099cf6cbded974243fd";
  click B_11 "https://github.com/e53e04ac/ipp5-types/tree/7b54ab5fbd2f85facb7851e6ae651413d4d1e0d2";
~~~~~

~~~~~ mermaid
graph RL;
  M(["index.mjs"])
  subgraph "node:http";
    I_0_0(["Server"]);
  end;
  subgraph "express";
    I_1_0(["default"]);
    I_1_1(["Router"]);
  end;
  subgraph "express-rate-limit";
    I_2_0(["default"]);
  end;
  subgraph "express-slow-down";
    I_3_0(["default"]);
  end;
  subgraph "joi";
    I_4_0(["default"]);
  end;
  subgraph "hold";
    I_5_0(["hold"]);
  end;
  subgraph "ipp5-token-issuer";
    I_6_0(["Ipp5TokenIssuer"]);
  end;
  subgraph "key-value-storage-azure-data-tables";
    I_7_0(["KeyValueStorage"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-idp";
    E_0(["type Application"]);
  end;
  M(["index.d.ts"])
  subgraph "node:http";
    I_0_0(["Server"]);
  end;
  subgraph "express";
    I_1_0(["Application"]);
    I_1_1(["ErrorRequestHandler"]);
    I_1_2(["RequestHandler"]);
    I_1_3(["Router"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
  end;
  subgraph "ipp5-types";
    I_3_0(["Ipp5BackendIdpEnvMap"]);
  end;
  subgraph "ipp5-token-issuer";
    I_4_0(["Ipp5TokenIssuer"]);
  end;
  subgraph "key-value-storage";
    I_5_0(["KeyValueStorage"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_1_2;
  M ----> I_1_3;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  E_0 ----> M;
~~~~~
