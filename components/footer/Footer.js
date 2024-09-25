import Link from "next/link";
import styles from "./styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerOptions}>
                    <div className={styles.footerOption1}>
                        <div className={styles.head}>
                            <a href="tel:7625039382">📞+91 76250 39382</a>
                        </div>
                        <div className={styles.text}>
                            Disclaimer: The content is for information purposes only and does not constitute an offer to avail of any service. 
                            Prices mentioned are subject to change without notice and properties mentioned are subject to availability. 
                            Images for representation purposes only. 
                            This is the official website of authorized marketing partner. 
                            We may share data with RERA registered brokers/companies for further processing. 
                            We may also send updates to the mobile number/email id registered with us. All Rights Reserved. 
                            Click to Read <a href="https://sumadhuraepitome.in.net/privacy-policy" className={styles.link}>Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.footerEnd}>
                    <div></div>
                    <div>Terms & Conditions</div>
                </div>
            </div>
        </footer>
    );
}
