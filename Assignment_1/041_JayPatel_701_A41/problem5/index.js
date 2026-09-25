const zip = require("zip-lib");

zip.extract("myfolder.zip", "ExtractedFolder")
    .then(() => {
        console.log("ZIP file extracted successfully.");
    })
    .catch((err) => {
        console.log(err);
    });