import React, { useEffect, useState } from 'react'
import { deleteEmployee, ListEmployees } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployee = () => {
    const navigate = useNavigate();

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmplyee();
    }, [])

    function getAllEmplyee() {
        ListEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigate("/add-employee")

    }

    function updateEmployee(id) {
        navigate(`/edit-employee/${id}`)
    }

    function removeEmployee() {
        console.log(id);
    }

    function removeEmployee(id) {
        deleteEmployee(id).then(() => {
            getAllEmplyee();
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div class="cantainer">
            <h2 class="text-center">
                List of Employees </h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <table class="table table-striped table-border">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                        style={{ marginLeft: "10px" }}>Delete</button>
                                </td>

                            </tr>)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListEmployee