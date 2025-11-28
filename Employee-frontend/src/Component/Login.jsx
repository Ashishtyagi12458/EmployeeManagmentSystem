import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/api/login",
                { email, password }
            );

            // Always read API data from response.data
            const data = response.data;

            // SUCCESS → token + userDetails
            if (data.token && data.userDetails) {
                alert("Login Successful!");

                // store details if needed
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.userDetails));

                navigate("/home");
            }
            // WRONG PASSWORD
            else if (data === "WRONG_PASSWORD") {
                alert("Wrong Password!");
            }
            // EMAIL NOT FOUND
            else if (data === "EMAIL_NOT_FOUND") {
                alert("Email Not Found!");
            }
            // UNKNOWN RESPONSE
            else {
                alert("Unknown Error!");
            }

        } catch (error) {
            console.error(error);
            alert("Server not responding!");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#e2e2e2" }}
        >
            <div className="card p-4 shadow" style={{ width: "350px" }}>
                <h3 className="text-center mb-3">Login</h3>

                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-dark w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
