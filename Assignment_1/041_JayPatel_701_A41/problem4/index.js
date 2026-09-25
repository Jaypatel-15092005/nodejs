const zip = require("zip-lib");

zip.archiveFolder("myfolder", "myfolder.zip")
    .then(() => {
        console.log("ZIP file created successfully.");
    })
    .catch((err) => {
        console.log(err);
    });