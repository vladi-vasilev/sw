import { ReactNode, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import styles from "./Layout.module.scss"

type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const handleOffline = () => setShowModal(true);

        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("offline", handleOffline);
        }
    }, [])


    return (
        <>
            <Header />

            <main className={styles.mainContainer}>
                {children}
            </main>

            <Footer />
            <Modal
                isOpen={showModal}
                closeModal={() => setShowModal(false)}
            >
                <div>
                    <h2>There was a disturbance in the force.</h2>
                    <p>You have lost your connection... to the internet.</p>
                </div>

            </Modal>
        </>
    )
}

export default Layout