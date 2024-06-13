import React, { useState } from "react";
import './Login.css'
import user_icon from '../assets/person.png'
import mail_icon from '../assets/mail.png'
import password_icon from '../assets/password.png'

const LoginSignUp = () => {
   

    const [action, setaction] = useState("Sign Up")

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="header">
                    <div className="text"> {action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? <div></div> :
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder="Name"  />
                        </div>}


                    <div className="input">
                        <img src={mail_icon} alt="" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="Password" onChange={(e) => setValues({ ...values, password: e.target.value })} />
                    </div>

                    {action === "Login" ? "" :
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder="Confirm Password" onChange={(e) => setValues({ ...values, password: e.target.value })} />
                        </div>
                    }

                    {action === "Login" ? "" :
                        <div className="input">
                            <select name="Choose Department" id="">
                                <option value="option">Select Department</option>
                                <option value="software">Computer Engineering(software)</option>
                                <option value="networking">Computer Engineering(Networking)</option>
                                <option value="civil">Civil Engineering</option>
                                <option value="business">Business Managment</option>
                                <option value="mechanical">Mechanical Engineering</option>
                                <option value="human">Human resource Management</option>
                                <option value="health">Health Science</option>

                            </select>
                        </div>
                    }

                    {action === "Login" ? "" :
                        <div className="input">
                            <select name="Choose Level" id="">
                                <option value="level">What Level are you?</option>
                                <option value="year1">Level One(HND)</option>
                                <option value="year2">Level Two(HND)</option>
                                <option value="year3btech">Level Three(BTech)</option>
                                <option value="year3bsc">Level Three(BSC)</option>

                            </select>
                        </div>
                    }

                </div>

                {action === "Sign Up" ? <div></div> :
                    <div className="account">Forgot your Password?<a className="signuplink" href="#">Click Here</a></div>
                }

                <div className="submitcontainer">
                    <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setaction("Sign Up") }}>Sign Up</button>
                    <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setaction("Login") }}>Login</button>
                </div>
            </div>
        </form>

    )

}

export default LoginSignUp