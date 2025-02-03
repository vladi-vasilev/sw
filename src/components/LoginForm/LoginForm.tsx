import { ChangeEvent, FormEvent, useState } from 'react';
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './LoginForm.module.scss'

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setFormErrors({ ...formErrors, [e.target.name]: validator(e.target.value) ? `${e.target.name} must be between 4 and 30 characters` : "" })

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        login();
        navigate("/dashboard");
    };

    const validator = (value: string) => {
        return (value === "" || value.length < 4 || value.length > 30)
    }

    const isValid = validator(formData.username) || validator(formData.password)

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>

            <div className={styles.formInputGroup}>
                <label htmlFor="username">User name:</label>
                <input onChange={handleChange} className={styles.textInput} style={{marginBottom: formErrors.username ? "0" : "21px", border: formErrors.username ? "2px solid #ff6363" : "none"}} type="text" required id="username" name="username" value={formData.username} />
                {formErrors.username && <p style={{fontSize: "14px", color: "#ff6363", textTransform: "capitalize"}}>{formErrors.username}</p>}
            </div>

            <div className={styles.formInputGroup}>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} className={styles.textInput} style={{marginBottom: formErrors.password ? "0" : "21px", border: formErrors.password ? "2px solid #ff6363" : "none"}}  type="password" required id="password" name="password" value={formData.password} />
                {formErrors.password && <p style={{fontSize: "14px", color: "#ff6363", textTransform: "capitalize"}}>{formErrors.password}</p>}
            </div>
            <Button isDisabled={isValid} label="Sign in" />
        </form>
    )
}

export default LoginForm