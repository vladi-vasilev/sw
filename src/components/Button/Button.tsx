import styles from './Button.module.scss'

type ButtonProps = {
    label: string,
    onClick?: () => void
    isDisabled?: boolean
}

const Button = ({ label, onClick, isDisabled = false }: ButtonProps) => {
    return (
        <button className={styles.customButton} disabled={isDisabled} onClick={onClick}>{label}</button>
    )
}

export default Button