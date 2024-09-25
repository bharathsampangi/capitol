import styles from "./styles/Project.module.css";

export default function Project({openModal}) {
    return (
        <section className={styles.container} id="overview">
            <div className={styles.element}>
                <h2 className={styles.header}>Project Overview</h2>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.title}>Project: </span>
                            <span>Luxury Apartments Township</span>
                        </li>
                        <li>
                            <span className={styles.title}>Location: </span>
                            <span>Whitefield</span>
                        </li>
                        <li>
                            <span className={styles.title}>Area: </span>
                            <span>3.5 Acres</span>
                        </li>
                        <li>
                            <span className={styles.title}>
                                No. of Towers:{" "}
                            </span>
                            <span>
                                3 Towers
                            </span>
                        </li>
                        <li>
                            <span className={styles.title}>Floors: </span>
                            <span>
                                G+16
                            </span>
                        </li>
                        <li>
                            <span className={styles.title}>No. of Units: </span>
                            <span>
                                262 Units
                            </span>
                        </li>
                        <li>
                            <span className={styles.title}>
                                Unit Variants:{" "}
                            </span>
                            <span>3 & 4 BHK</span>
                        </li>
                        <li>
                            <span className={styles.title}>Size Range: </span>
                            <span>1635 - 2150 Sq.Ft</span>
                        </li>
                        <li>
                            <span className={styles.title}>Price Range: </span>
                            <span>Starts from ₹2.29Cr* Onwards</span>
                        </li>
                        <li>
                            <span className={styles.title}>Amenities: </span>
                            <span>40+ Amenities with 18,000 Sqft Clubhouse </span>
                        </li>
                        <li>
                            <span className={styles.title}>
                                Possession Date:{" "}
                            </span>
                            <button className={styles.button} onClick={openModal} >
                                Get Details
                            </button>
                        </li>
                        <li>
                            <span className={styles.title}>RERA No.: </span>
                            <span>Awaiting approval</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
