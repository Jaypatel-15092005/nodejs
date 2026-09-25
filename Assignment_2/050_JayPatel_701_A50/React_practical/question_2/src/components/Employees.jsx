import { useEffect, useState } from "react";

function Employees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        fetch("/employees.json")
            .then((response) => response.json())
            .then((data) => {

                setEmployees(data);

            });

    }, []);


    return (
        <div className="mt-4">

            <h2>Employee List</h2>

            <table className="table table-bordered table-striped mt-3">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Salary</th>

                    </tr>

                </thead>


                <tbody>

                    {employees.map((employee) => (

                        <tr key={employee.id}>

                            <td>{employee.id}</td>

                            <td>{employee.name}</td>

                            <td>{employee.email}</td>

                            <td>{employee.department}</td>

                            <td>{employee.salary}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Employees;