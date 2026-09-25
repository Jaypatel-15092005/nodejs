const readline = require("readline");
const getReply = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ask something: ", (question) => {

    console.log(getReply(question));

    rl.close();

});