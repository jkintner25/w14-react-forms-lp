import { useEffect, useState } from 'react';
import './Registration.css'

export function RegistrationForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneType, setPhoneType] = useState('')
    const [role, setRole] = useState('')
    const [bio, setBio] = useState('')
    const [signUp, setSignUp] = useState(false)

    useEffect(() => {
        console.log(phoneType)
    }, [phoneType])

    return (
        <div>
            <header>
                <form className='registration-form'>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <label>Phone Number</label>
                    <input
                        type={"text"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    <label>Phone Type</label>
                    <select id="phone-type">
                        <option value="">Pick One</option>
                        <option
                            value="home"
                            onChange={(e) => setPhoneType(e.target.value)}
                        >Home</option>
                        <option
                            value="work"
                            onChange={(e) => setPhoneType(e.target.value)}
                        >Work</option>
                        <option
                            value="mobile"
                            onChange={(e) => setPhoneType(e.target.value)}
                        >Mobile</option>
                    </select>
                    <label>Staff</label>
                    <div>
                        <input
                            type="radio"
                            value="instructor"
                            checked={role === "instructor"}
                            onChange={() => setRole("instructor")}
                        ></input>
                        <label>Instructor</label>
                        <input
                            type="radio"
                            value="student"
                            checked={role === "student"}
                            onChange={() => setRole("student")}
                        ></input>
                        <label>Student</label>
                    </div>
                    <label>Bio</label>
                    <input
                        type="textarea"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    ></input>
                    <label>Email Notifications</label>
                    <input
                        type={"checkbox"}
                        onChange={() => setSignUp(!signUp)}
                    ></input>
                </form>
            </header>
        </div>
    );
}
