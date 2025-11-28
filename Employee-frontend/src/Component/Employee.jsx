
import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from "../Service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const Employee = () => {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const { id } = useParams();
    {/* validation*/ }
    const [errors, setErrors] = useState({
        firstname: "",
        lastname: "",
        email: ""
    })
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstname);
                setLastName(response.data.lastname);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id])

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    function handleLastName(e) {
        setLastName(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function saveEmployee(e) {
        e.preventDefault();
        if (validationForm()) {
            const employee = { firstname, lastname, email }
            console.log(employee);
            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            } else {

                createEmployee(employee).then((Response) => {
                    console.log(Response.data);
                    navigator("/employees")
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }
    {/* validation Function*/ }
    function validationForm() {
        let valid = true;

        const errorCopy = { ...errors }
        {/* First name Validation */ }
        if (firstname.trim()) {
            errorCopy.firstname = "";
        } else {
            errorCopy.firstname = "First name is required";
            valid = false;
        }
        {/* last name validtion   */ }
        if (lastname.trim()) {
            errorCopy.lastname = "";

        } else {
            errorCopy.lastname = "last name is required";
            valid = false;
        }
        if (email.trim()) {
            errorCopy.email = "";

        } else {
            errorCopy.email = "Email is required ";
            valid = false;
        }

        setErrors(errorCopy);
        return valid;

    }
    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div className="container">
            <br /> <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form >
                            {/* First name Field   */}
                            <div className='form-group mb-2'>
                                <label className='form-label'> First Name</label>
                                <input
                                    type="text"
                                    placeholder="enter your name"
                                    name="firstname"
                                    value={firstname}
                                    className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                                    onChange={handleFirstName}
                                >
                                </input>
                                {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}

                                {/* last name field    */}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Last Name</label>
                                <input
                                    type="text"
                                    placeholder="enter your Last name"
                                    name="lastname"
                                    value={lastname}
                                    className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}

                                    onChange={handleLastName}
                                >
                                </input>
                                {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'> Email</label>
                                <input
                                    type="text"
                                    placeholder="enter your Email"
                                    name="email"
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={handleEmail}
                                >
                                </input>
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                            </div>

                            <button className="btn btn-success" onClick={saveEmployee}>Click</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee