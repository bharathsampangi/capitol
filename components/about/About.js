import styles from "./styles/About.module.css";

export default function About() {
    return (
        <section className={styles.location} id="about">
            <div className={styles.aboutContainer}>
                <img
                    src="/images/capitol-home-mobile.jpg"
                    id="eptiome-home"
                    alt="Sumadhura Epitome"
                />
            </div>
            <div className={styles.locationBox}>
                <div className={styles.locationInnerBox}>
                    <div className={styles.locationHeader2}>
                        Whitefield's Capitol
                    </div>
                    <p>
                        Right off ITPL Main Road and just a few blocks from
                        Kadugodi Tree Park Metro, Capitol is the prime spot for
                        IT pros, entrepreneurs, and newsmakers looking for
                        unbeatable convenience and connectivity. Strategically
                        located in bustling Whitefield, this community offers
                        abundant opportunities for networking and collaboration
                        among like-minded professionals, with vibrant social
                        spaces and engaging communal areas.
                    </p>
                </div>
            </div>
        </section>
    );
}
