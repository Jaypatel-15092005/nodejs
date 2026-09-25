import { useState, useEffect } from "react";

function Todo() {

    // Multiple State
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);


    // useEffect + setInterval
    useEffect(() => {

        const timer = setInterval(() => {

            setSeconds((seconds) => seconds + 1);

        }, 1000);


        // Clear interval
        return () => clearInterval(timer);

    }, []);


    return (

        <div className="container mt-5">

            <div className="card p-4">

                <h1 className="text-center">
                    To-Do App
                </h1>


                {/* Timer */}

                <h5 className="text-center mt-3">
                    App Running Time: {seconds} seconds
                </h5>


                {/* Textbox + Button */}

                <div className="input-group mt-4">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your task"

                        value={task}

                        onChange={(e) =>
                            setTask(e.target.value)
                        }
                    />


                    <button
                        className="btn btn-primary"

                        onClick={() => {

                            if (task !== "") {

                                setTasks([...tasks, task]);

                                setTask("");

                                setCount(count + 1);

                            }

                        }}
                    >
                        Add Task
                    </button>

                </div>


                {/* Task Count */}

                <h5 className="mt-4">
                    Total Tasks: {count}
                </h5>


                {/* Task List */}

                <ul className="list-group mt-3">

                    {tasks.map((item, index) => (

                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >

                            {item}


                            <button
                                className="btn btn-danger btn-sm"

                                onClick={() => {

                                    setTasks(
                                        tasks.filter(
                                            (_, i) => i !== index
                                        )
                                    );

                                    setCount(count - 1);

                                }}
                            >
                                Delete
                            </button>

                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );
}

export default Todo;