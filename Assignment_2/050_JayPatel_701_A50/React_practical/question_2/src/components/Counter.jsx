import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="card p-4 mt-4 text-center">
            <h2>Counter Component</h2>
            <h1 className="my-4"> {count}</h1>
            <button className="btn btn-success me-2" onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <button className="btn btn-danger me-2" onClick={() => setCount(count - 1)}>
                Decrement
            </button>

            <button className="btn btn-secondary" onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}
export default Counter;