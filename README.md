# ipp5-backend-idp

~~~~~ sh
npm install e53e04ac/ipp5-backend-idp
~~~~~

~~~~~ mjs
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-backend-idp"]);
  B0(["@types/express"]);
  B1(["express"]);
  B2(["express-rate-limit"]);
  B3(["express-slow-down"]);
  B4(["e53e04ac/hold"]);
  B5(["joi"]);
  B6(["e53e04ac/key-value-storage"]);
  B7(["e53e04ac/key-value-storage-azure-data-tables"]);
  B8(["e53e04ac/ipp5-token-issuer"]);
  C0(["@types/express-slow-down"]);
  C1(["@types/node"]);
  C2(["e53e04ac/ipp5-types"]);
  click B4 href "https://github.com/e53e04ac/hold";
  click B6 href "https://github.com/e53e04ac/key-value-storage";
  click B7 href "https://github.com/e53e04ac/key-value-storage-azure-data-tables";
  click B8 href "https://github.com/e53e04ac/ipp5-token-issuer";
  click C2 href "https://github.com/e53e04ac/ipp5-types";
  subgraph "e53e04ac/ipp5-backend-idp";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
    B5 --import--> A;
    B6 --import--> A;
    B7 --import--> A;
    B8 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
    C2 --import--> A;
  end;
~~~~~
