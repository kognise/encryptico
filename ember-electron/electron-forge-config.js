const path = require("path");

module.exports = {
  "make_targets": {
    "win32": ["squirrel", "zip"]
  },
  "electronPackagerConfig": {
    "appCopyright": "Copyright (c) 2018 Felix Mattick",
    "icon": "public/favicon",
    "name": "Encryptico",
    "overwrite": true,
    "versionString": {
      "CompanyName": "Felix Mattick",
      "FileDescription": "Encryptico Desktop",
      "ProductName": "Encryptico",
      "InternalName": "Encryptico"
    }
  },
  "electronWinstallerConfig": {
    "authors": "Felix Mattick",
    "exe": "Encryptico.exe",
    "icon": "public/favicon",
    "name": "Encryptico",
    "noMSI": false,
    "setupIcon": path.join(__dirname, "../public/favicon.ico"),
    "setupExe": "Encryptico.exe",
    "title": "Encryptico"
  },
  "github_repository": {
    "owner": "arch-lord",
    "name": "encryptico"
  }
};