import { useRef, useState } from "react";

function StateRef() {
    const [name, setName] = useState("");
    const inputRef = useRef(null);
    return (
        <div className="card p-4 mt-4">
            <h2>useState and useRef</h2>
<input type="text" className="form-control mb-3" placeholder="Enter your name" ref={inputRef} value={name}
 onChange={(e) =>setName(e.target.value) } />
 <button className="btn btn-primary me-2"  onClick={() => inputRef.current.focus()}>
      Focus Input
            </button>
            <button className="btn btn-success" onClick={() => setName("")} >
                Clear
            </button>
     <h4 className="mt-4">
     Name: {name}
    </h4>

        </div>
    );
}

export default StateRef;