import { sendGTMEvent } from "@next/third-parties/google"
import styles from "./styles/FloatingHeader.module.css"

export default function FloatingHeader() {
    return (
        <>
            <div className={styles.floating}>
                <button className={styles.button} onClick={() => sendGTMEvent({event: 'form-submit', 'send_to': 'AW-16606057285/KtdSCO7j-LoZEMWmse49'})}>
                    <a href="tel:7625039382" className={styles.link}><img className={styles.icon} src="/images/phone.svg" alt="Let's talk" /> Call Us</a>
                </button>
                <button className={styles.buttonWhatsapp} onClick={() => sendGTMEvent({event: 'form-submit', 'send_to': 'AW-16606057285/KtdSCO7j-LoZEMWmse49'})}>
                    <a href="https://wa.link/0m3f8q" className={styles.link}><img className={styles.icon} src="/images/whatsapp.svg" alt="Let's Chat" /> Chat With Us</a>
                </button>
            </div>
            <div className={styles.floatingDesktop}>
                <button className={styles.button} onClick={() => sendGTMEvent({event: 'form-submit', 'send_to': 'AW-16606057285/KtdSCO7j-LoZEMWmse49'})}>
                    <a href="tel:7625039382" className={styles.link}><img className={styles.icon} src="/images/phone.svg" alt="Let's talk" /> Call Us</a>
                </button>
                <button className={styles.buttonWhatsapp} onClick={() => sendGTMEvent({event: 'form-submit', 'send_to': 'AW-16606057285/KtdSCO7j-LoZEMWmse49'})}>
                    <a href="https://wa.link/0m3f8q" className={styles.link}><img className={styles.icon} src="/images/whatsapp.svg" alt="Let's Chat" /> Chat With Us</a>
                </button>
            </div>
        </>
    )
}