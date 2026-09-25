console.log("Directory Name:");
console.log(__dirname);

console.log("\nFile Name:");
console.log(__filename);

console.log("\nCommand Line Arguments:");

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

setTimeout(() => {
    console.log("\nThis message is displayed after 2 seconds.");
}, 2000);