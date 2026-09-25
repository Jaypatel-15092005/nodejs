function getReply(question) {

    question = question.toLowerCase();

    if (question === "hi") {
        return "Hello!";
    }

    if (question === "course") {
        return "Our course is B.Sc IT.";
    }

    if (question === "fees") {
        return "Fees are Rs. 25,000 per semester.";
    }

    if (question === "bye") {
        return "Good Bye!";
    }

    return "Sorry, I don't understand.";
}

module.exports = getReply;