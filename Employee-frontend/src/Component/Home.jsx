import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* HEADER / NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                        Employee System
                    </a>

                    <div>
                        <button
                            className="btn btn-outline-light me-2"
                            onClick={() => navigate("/employees")}
                        >
                            List Employees
                        </button>

                        <button
                            className="btn btn-light"
                            onClick={() => navigate("/add-employee")}
                        >
                            Add Employee
                        </button>
                    </div>
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <div className="container text-center mt-5">
                <h2>Welcome to Employee Management System</h2>
                <p className="text-muted">
                    Use the navigation buttons to manage employees
                </p>
            </div>


        </>
    );
};

export default Home;
