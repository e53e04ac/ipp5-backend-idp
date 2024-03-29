# ipp5-backend-idp

~~~~~ sh
npm install e53e04ac/ipp5-backend-idp
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["@types/express"]);
    B_1(["express"]);
    B_2(["express-rate-limit"]);
    B_3(["express-slow-down"]);
    B_4(["hold"]);
    B_5(["joi"]);
    B_6(["key-value-storage-azure-data-tables"]);
    B_7(["ipp5-token-issuer"]);
  end;
  subgraph "devDependencies";
    B_8(["@types/express-slow-down"]);
    B_9(["@types/node"]);
    B_10(["key-value-storage"]);
    B_11(["ipp5-types"]);
  end;
  subgraph "github";
    C_4(["e53e04ac/hold\n6ce132702778d99c7f80a785e982419974dca8e5"]);
    C_6(["e53e04ac/key-value-storage-azure-data-tables\nd689e0657ecccfa56c90093be469c8e3ddac03ab"]);
    C_7(["e53e04ac/ipp5-token-issuer\n36f3f81094731995cee2881dd1658109fc6802e7"]);
    C_10(["e53e04ac/key-value-storage\nb3cf97a1e0709c32ccabfdfeec63ddc86a8d2f3a"]);
    C_11(["e53e04ac/ipp5-types\ncd72b950987429097963f0dd40c801794c0d09bf"]);
  end;
  subgraph "npmjs";
    C_0(["@types/express\n4.17.17"]);
    C_1(["express\n4.18.2"]);
    C_2(["express-rate-limit\n6.7.0"]);
    C_3(["express-slow-down\n1.6.0"]);
    C_5(["joi\n17.9.1"]);
    C_8(["@types/express-slow-down\n1.3.2"]);
    C_9(["@types/node\n18.15.11"]);
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
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  B_7 ----> C_7;
  B_8 ----> C_8;
  B_9 ----> C_9;
  B_10 ----> C_10;
  B_11 ----> C_11;
  click C_0 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click C_1 "https://www.npmjs.com/package/express/v/4.18.2";
  click C_2 "https://www.npmjs.com/package/express-rate-limit/v/6.7.0";
  click C_3 "https://www.npmjs.com/package/express-slow-down/v/1.6.0";
  click C_4 "https://github.com/e53e04ac/hold/tree/6ce132702778d99c7f80a785e982419974dca8e5";
  click C_5 "https://www.npmjs.com/package/joi/v/17.9.1";
  click C_6 "https://github.com/e53e04ac/key-value-storage-azure-data-tables/tree/d689e0657ecccfa56c90093be469c8e3ddac03ab";
  click C_7 "https://github.com/e53e04ac/ipp5-token-issuer/tree/36f3f81094731995cee2881dd1658109fc6802e7";
  click C_8 "https://www.npmjs.com/package/@types/express-slow-down/v/1.3.2";
  click C_9 "https://www.npmjs.com/package/@types/node/v/18.15.11";
  click C_10 "https://github.com/e53e04ac/key-value-storage/tree/b3cf97a1e0709c32ccabfdfeec63ddc86a8d2f3a";
  click C_11 "https://github.com/e53e04ac/ipp5-types/tree/cd72b950987429097963f0dd40c801794c0d09bf";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-idp";
    E_0(["type Application"]);
  end;
  M["index.d.ts"]
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

~~~~~ mermaid
graph RL;
  M["index.mjs"]
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
