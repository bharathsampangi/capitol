import Link from "next/link";
import styles from "./styles/Location.module.css";

export default function Location() {
    return (
        <section className={styles.location} id="location">
            <div className={styles.locationBox}>
                <div className={styles.locationInnerBox}>
                    <div className={styles.locationHeader}>location</div>
                    <div className={styles.locationHeader2}>
                        At the heart of the Whitefield!
                    </div>
                    <p>Located just 1 min away from Kadugodi metro station</p>
                    <Link
                        className={styles.link}
                        href="https://maps.app.goo.gl/6MP1RQnAZWZLFiLcA"
                    >
                        View on Google Maps
                    </Link>
                </div>
            </div>
            <div className={styles.locationMap}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9464153323296!2d77.74772376959534!3d12.985556606016774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f50b51176ad%3A0x1459a6e91bab6f91!2sSumadhura%20Capitol%20Towers!5e0!3m2!1sen!2sin!4v1727282858034!5m2!1sen!2sin"
                    width="350"
                    height="300"
                    title="Sumadhura Captiol Residency, Whitefield"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className={styles.locationMobile}
                ></iframe>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9464153323296!2d77.74772376959534!3d12.985556606016774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f50b51176ad%3A0x1459a6e91bab6f91!2sSumadhura%20Capitol%20Towers!5e0!3m2!1sen!2sin!4v1727282858034!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    title="Sumadhura Captiol Residency, Whitefield"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className={styles.locationDesktop}
                ></iframe>
            </div>
        </section>
    );
}
