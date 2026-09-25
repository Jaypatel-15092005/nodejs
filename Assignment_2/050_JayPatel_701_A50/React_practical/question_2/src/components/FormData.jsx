function FormData(props) {

    return (
        <div className="card mt-4 p-3">

            <h3>Entered Data</h3>

            <p>
                <strong>Name:</strong> {props.name}
            </p>

            <p>
                <strong>Email:</strong> {props.email}
            </p>

            <p>
                <strong>Password:</strong> {props.password}
            </p>

        </div>
    );
}

export default FormData;