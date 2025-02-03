import LoginForm from '../components/LoginForm/LoginForm'
import styles from './SignIn.module.scss'

const SignIn = () => {
  return (
    <div>
      <h2 className={styles.customHeading}>Login</h2>
        <LoginForm />
    </div>
  )
}

export default SignIn