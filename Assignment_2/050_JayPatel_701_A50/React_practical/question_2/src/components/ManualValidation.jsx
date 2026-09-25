import { useState } from "react";
import FormData from "./FormData";

function ManualValidation(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [showData, setShowData] = useState(false);

    return (
        <div className="card p-4 mt-4">

            <h2>{props.title}</h2>

            {/* Name */}

            <div className="mb-3">

                <label className="form-label">
                    Name
                </label>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"

                    value={name}

                    onChange={(e) => {

                        setName(e.target.value);

                        if (e.target.value == "") {
                            setNameError("Name is required");
                        }
                        else {
                            setNameError("");
                        }

                    }}
                />

                <small className="text-danger">
                    {nameError}
                </small>

            </div>


            {/* Email */}

            <div className="mb-3">

                <label className="form-label">
                    Email
                </label>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"

                    value={email}

                    onChange={(e) => {

                        setEmail(e.target.value);

                        if (e.target.value == "") {
                            setEmailError("Email is required");
                        }
                        else if (
                            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
                        ) {
                            setEmailError("Enter valid email");
                        }
                        else {
                            setEmailError("");
                        }

                    }}
                />

                <small className="text-danger">
                    {emailError}
                </small>

            </div>


            {/* Password */}

            <div className="mb-3">

                <label className="form-label">
                    Password
                </label>

                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"

                    value={password}

                    onChange={(e) => {

                        setPassword(e.target.value);

                        if (e.target.value == "") {
                            setPasswordError("Password is required");
                        }
                        else if (e.target.value.length < 6) {
                            setPasswordError(
                                "Password must be at least 6 characters"
                            );
                        }
                        else {
                            setPasswordError("");
                        }

                    }}
                />

                <small className="text-danger">
                    {passwordError}
                </small>

            </div>


            {/* Submit */}

            <button
                className="btn btn-primary"

                onClick={() => {

                    if (name == "") {

                        setNameError("Name is required");
                        setShowData(false);

                    }
                    else if (email == "") {

                        setEmailError("Email is required");
                        setShowData(false);

                    }
                    else if (
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                    ) {

                        setEmailError("Enter valid email");
                        setShowData(false);

                    }
                    else if (password == "") {

                        setPasswordError("Password is required");
                        setShowData(false);

                    }
                    else if (password.length < 6) {

                        setPasswordError(
                            "Password must be at least 6 characters"
                        );

                        setShowData(false);

                    }
                    else {

                        setShowData(true);

                    }

                }}
            >
                Submit
            </button>


            {/* Props */}

            {showData && (

                <FormData name={name} email={email}  password={password} />

            )}

        </div>
    );
}

export default ManualValidation;