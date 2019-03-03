const path = require("path");

module.exports = {
  "make_targets": {
    "win32": ["squirrel", "zip"]
  },
  "electronPackagerConfig": {
    "appCopyright": "Copyright (c) 2018 Kognise",
    "icon": "public/favicon",
    "name": "Encryptico",
    "overwrite": true,
    "versionString": {
      "CompanyName": "Kognise",
      "FileDescription": "Encryptico Desktop",
      "ProductName": "Encryptico",
      "InternalName": "Encryptico"
    }
  },
  "electronWinstallerConfig": {
    "authors": "Kognise",
    "exe": "Encryptico.exe",
    "icon": "public/favicon",
    "name": "Encryptico",
    "noMSI": false,
    "setupIcon": path.join(__dirname, "../public/favicon.ico"),
    "setupExe": "Encryptico.exe",
    "title": "Encryptico"
  },
  "github_repository": {
    "owner": "kognise",
    "name": "encryptico"
  }
};
