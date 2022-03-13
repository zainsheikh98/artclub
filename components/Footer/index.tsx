import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Logo from "../Logo";
import Buy1EarthToken from "../Buy1EarthToken";

import { FooterNavigationList } from "../../constants/navigation";

type FooterProps = {
    className?: string;
};

const Footer = ({ className }: FooterProps) => {
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        setLanguage(window.Localize?.getLanguage());
    }, []);

    useEffect(() => {
        window.Localize?.setLanguage(language);
    }, [language]);

    const languages = [
        {
            title: "🇺🇸 🇬🇧",
            short: "en",
        },
        {
            title: "🇨🇳",
            short: "zh",
        },
    ];

    return (
        <footer className={cn(styles.footer, className)}>
            <div className={cn("container-lg", styles.container)}>
                <div className={styles.inner}>
                    <Logo />
                    <nav className={styles.nav}>
                        {FooterNavigationList.map((link, index) => (
                            <button
                                className={styles.link}
                                onClick={() => {
                                    const element = document.getElementById(
                                        link.section
                                    );
                                    element?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                                key={index}
                            >
                                {link.title}
                            </button>
                        ))}
                    </nav>
                    <Buy1EarthToken className={cn("button", styles.button)} />
                    <h2 className={styles.title}>
                        There&apos;s A Bit Of Art In All Of Us
                    </h2>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        Copyright © {new Date().getFullYear()} ArtClub{" "}
                        <span className={styles.rights}>
                            All Rights Reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
