import {useState, useEffect} from "react"
import styles from "./styles/Preview.module.css"

export default function Preview() {
    const [active, setActive] = useState(1)

    const handleClick = (id) => {
        setActive(id)
    }

    let slideIndex = 1;
    useEffect(() => {
        if (typeof window !== "undefined") 
            showSlides(slideIndex);
    })

    function plusSlides(n) {
        if (typeof window !== "undefined")
            showSlides(slideIndex += n)
    }

    function showSlides(n) {
        let i;
        let previews = []
        for(i=1; i<4; i++) {
            previews.push(window.document.getElementById(`preview-${i}`))
        }
        if (n > previews.length) {slideIndex = 1}
        if (n < 1) {slideIndex = previews.length}
        for (i = 0; i < previews.length; i++) {
            previews[i].style.display = "none";
        }
        previews[slideIndex-1].style.display = "block";
    }

    return (
        <section className={styles.preview} id="preview">
            <div className={styles.header}>
                HOMES, PERSONALISED TO <br/>PERFECTION.
            </div>
            <div className={styles.previewContainer}>
                <div className={styles.tabButtons}>
                    <button onClick={() => handleClick(1)} className={active == 1 && styles.active}>Smart 3 BHK</button>
                    <button onClick={() => handleClick(2)} className={active == 2 && styles.active}>Classic 3 BHK</button>
                    <button onClick={() => handleClick(3)} className={active == 3 && styles.active}>4 BHK</button>
                </div>
                {active == 1 &&
                    <div className={styles.tabContainer}>
                        <img src="/images/3BHK+2T.webp" alt="Smart 2 BHK"/>
                    </div>
                }
                {active == 2 &&
                    <div className={styles.tabContainer}>
                        <img src="/images/3BHK+3T.webp" alt="Classic 3 BHK"/>
                    </div>
                }
                {active == 3 &&
                    <div className={styles.tabContainer}>
                        <img src="/images/3.5BHK.webp" alt="Classic 4 BHK"/>
                    </div>
                }
            </div>
            <div className={styles.slideshowContainer}>

                <div className={`${styles.mySlides} ${styles.fade}`} id="preview-1">
                    <div className={styles.titleText}>Smart 3 BHK</div>
                    <div className={styles.numbertext}>1 / 3</div>
                    <img className={styles.image} src="/images/3BHK+2T.webp" style={{ width: "100%" }} alt="Smart 3 BHK" />
                    <div className={styles.captionText}>
                        Perfect for working couples with or without kids
                    </div>
                </div>

                <div className={`${styles.mySlides} ${styles.fade}`} id="preview-2">
                    <div className={styles.titleText}>Classic 3 BHK</div>
                    <div className={styles.numbertext}>2 / 3</div>
                    <img className={styles.image} src="/images/3BHK+3T.webp" style={{ width: "100%" }} alt="Classic 3 BHK"/>
                    <div className={styles.captionText}>
                        Works for families with older children
                    </div>
                </div>

                <div className={`${styles.mySlides} ${styles.fade}`} id="preview-3">
                    <div className={styles.titleText}>Classic 4 BHK</div>
                    <div className={styles.numbertext}>3 / 3</div>
                    <img className={styles.image} src="/images/3.5BHK.webp" style={{ width: "100%" }} alt="Classic 4 BHK"/>
                    <div className={styles.captionText}>
                        Works great for larger families especially those with seniors living along
                    </div>
                </div>

                <a className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className={styles.next} onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
        </section>
    )
}