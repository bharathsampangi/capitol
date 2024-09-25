import React from "react";
import Image from "next/image";
import Logo from "../../public/images/Sumadhura-Logo.png"
import styles from "./styles/Navbar.module.css"
import Link from "next/link";

export default function Navbar({ active='' }) {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <div>
                        <Image src={Logo} alt="Logo" className={styles.logoImage}/><br/>
                        <p className={styles.textSmall}>Official Channel Partner</p>
                    </div>
                </Link>
            </div>
            <ul className={styles.list}>
                <li>
                    <Link href="/#about" scroll={false}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/#overview" scroll={false}  >
                        Overview
                    </Link>
                </li>
                <li>
                    <Link href="/#pricing" scroll={false}>
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link href="/#location" scroll={false}  >
                        Location
                    </Link>
                </li>
            </ul>
        </nav>
    )
}