const fs = require("fs").promises;
const path = require("path");

(async () => {
  const pgNativePathFile = path.join(__dirname, "node_modules", "pg", "lib", "native", "client.js")

  try {
    const file = await fs.readFile(pgNativePathFile, "utf-8");

    const replace = file.replace("var Native = require('pg-native')", "var Native = null");
    

    await fs.writeFile(pgNativePathFile, replace, "utf-8");

    console.log("pg native removed")
  }

  catch(e) {
    console.log(e);
    console.log("fix.js error");
  }
})()