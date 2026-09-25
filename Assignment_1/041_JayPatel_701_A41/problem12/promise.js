function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 Completed");
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 Completed");
            resolve();
        }, 1000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 Completed");
            resolve();
        }, 1000);
    });
}

task1()
.then(task2)
.then(task3)
.then(() => {
    console.log("All Tasks Completed");
});