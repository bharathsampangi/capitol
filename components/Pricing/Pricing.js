import PriceBox from "./PriceBox";
import styles from "./styles/Pricing.module.css"

export default function Pricing({openModal}) {
    return (
        <section className={styles.container} id="pricing">
            <div className={styles.element}>
                <h3 className={styles.header}>Pricing Structure</h3>
                <div className={styles.priceContainer}>
                    <PriceBox unitName='Smart 3 BHK ' unit='3 BHK' area='1635 - 1735 Sq.Ft.' price='2.29 Cr* Onwards' openModal={openModal}/>
                    <PriceBox unitName='Premium 3 BHK' unit='3 BHK' area='1800 - 1860 Sq.Ft.' price='2.5 Cr* Onwards' openModal={openModal}/>
                    <PriceBox unitName='Premium 4 BHK' unit='4 BHK' area='2100 - 2150 Sq.Ft.' price='2.94 Cr* Onwards' openModal={openModal}/>
                </div>
            </div>
        </section>
    )
} 