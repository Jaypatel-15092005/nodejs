const fs = require("fs");

// Create a file
fs.writeFile("demo.txt", "Hello NodeJS", (err) => {
    if (err) throw err;
    console.log("File created.");

    // Append data
    fs.appendFile("demo.txt", "\nWelcome to FS Module", (err) => {
        if (err) throw err;
        console.log("Data appended.");

        // Read file
        fs.readFile("demo.txt", "utf8", (err, data) => {
            if (err) throw err;
            console.log("\nFile Content:");
            console.log(data);

            // Rename file
            fs.rename("demo.txt", "newdemo.txt", (err) => {
                if (err) throw err;
                console.log("\nFile renamed.");

                // Delete file
                fs.unlink("newdemo.txt", (err) => {
                    if (err) throw err;
                    console.log("File deleted.");
                });
            });
        });
    });
});