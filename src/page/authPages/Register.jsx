import { useState } from 'react';

const Register = () => {
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (pass.length < 6) {
            setError('Password cannot be smaller than 6 characters');
        } else if (!email.includes('@')) {
            setError('Please enter a valid email');
        } else if (pass !== confirmPass) {
            setError('Passwords do not match');
        } else {
            setError('');
            // perform registration logic here
        }
    }

    function handlePassOnChange(e) {
        const newPass = e.target.value;
        setPass(newPass);

        if (newPass.length < 6) {
            setError('Password cannot be smaller than 6 characters');
        } else {
            setError('');
        }
    }

    function handleEmailOnChange(e) {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!newEmail.includes('@')) {
            setError('Please enter a valid email');
        } else {
            setError('');
        }
    }

    function handleConfirmPassOnChange(e) {
        const newConfirmPass = e.target.value;
        setConfirmPass(newConfirmPass);

        if (newConfirmPass !== pass) {
            setError('Passwords do not match');
        } else {
            setError('');
        }
    }

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        name="email"
                        onChange={handleEmailOnChange}
                        type="email"
                        placeholder="Enter your email"
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        name="password"
                        onChange={handlePassOnChange}
                        type="password"
                        placeholder="Enter your password"
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        name="confirmPassword"
                        onChange={handleConfirmPassOnChange}
                        type="password"
                        placeholder="Confirm your password"
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
                    />
                </div>
                <input type="submit" value={'submit'} style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }} />
            </form>
            {error && <p style={{ color: '#d32f2f', marginTop: '15px', textAlign: 'center', fontSize: '14px' }}>{error}</p>}
        </div>
    );
};

export default Register;