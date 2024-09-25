import styles from "./styles/Amenities.module.css";

export default function Amenities() {
    return (
        <section className={styles.container}>
            <div className={styles.element}>
                <h3 className={styles.header}>Top-tier Amenities</h3>
                <div className={styles.amenitiesContainer}>
                    <ul className={styles.list}>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/club.svg"
                                alt="Premium Club House"
                            />
                            Club House
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/children.svg"
                                alt="Swing"
                            />
                            Kids Play Area
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/pool.svg"
                                alt="Pool Area"
                            />
                            Swimming Pool
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/gym.svg"
                                alt="Workout"
                            />
                            Gym
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/park.svg"
                                alt="Park"
                            />
                            Open Space
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/power.svg"
                                alt="24X7 Backup"
                            />
                            Power Backup
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/parking.svg"
                                alt="Basement Parking"
                            />
                            Car Parking
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/security.svg"
                                alt="Top Level Security"
                            />
                            3 Tier Security
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/nature.svg"
                                alt="Vastu Compliant homes"
                            />
                            Vastu Compliant
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/hall.svg"
                                alt="Community Halls"
                            />
                            Multipurpose Hall
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/cctv.svg"
                                alt="CCTV coverage"
                            />
                            Video Security
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/gas.svg"
                                alt="Domestic Gas"
                            />
                            Piped Gas
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/lift.svg"
                                alt="Power Lift"
                            />
                            Lift
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/security.svg"
                                alt="Security at it's best"
                            />
                            24X7 Security
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/running.svg"
                                alt="Jogging and Cycle Track"
                            />
                            Jogging Track
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/staff.svg"
                                alt="Staff Quarters"
                            />
                            Maintenance Staff
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
