import styles from "./styles/PriceBox.module.css"

export default function PriceBox(props) {

    const { unitName, unit, area, price, openModal } = props

    return (
        <div className={styles.box}>
            <div>
                <h3 className={styles.header}>{unitName}</h3>
                <hr/>
            </div>
            <div>
                <div className={styles.priceText}>
                    <span className={styles.textBold}>Sumadhura Capitol Residency</span> {unit} <br/>Luxurious Apartment
                </div>
                <br/>
                <span className={styles.area}>
                    {area}
                </span>
                <hr/>
            </div>
            <h3 className={styles.price}>{price}</h3>
            <button className={styles.button} onClick={openModal} >
                Get Quote
            </button>
        </div>
    )
}