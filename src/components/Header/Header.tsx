import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from './Header.module.scss'
import Button from "../Button/Button";

const Header = () => {
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header>
            <div className={styles.headerContainer}>
            <img className={styles.logo} loading="eager" src="sw_logo.png" />

            {isAuthenticated && <Button label="Logout" onClick={handleLogout} />}
            </div>
        </header>
    )
}

export default Header