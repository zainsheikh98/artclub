import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "../Logo";
import Buy1EarthToken from "../Buy1EarthToken";

import { HeaderNavigationList } from "../../constants/navigation";

type HeaderProps = {
    className?: string;
    headerVisible?: boolean;
};

const Header = ({ className, headerVisible }: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [visibleMobileMenu, setVisibleMobileMenu] = useState<boolean>(false);

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -2);
    });

    const toggleMenu = () => {
        setVisibleMobileMenu(!visibleMobileMenu);
        if (visibleMobileMenu) {
            enablePageScroll();
        } else {
            disablePageScroll();
        }
    };

    return (
        <div
            className={cn(
                styles.header,
                {
                    [styles.visible]: headerStyle,
                },
                {
                    [styles.filled]: headerVisible,
                },
                className
            )}
        >
            <div className={cn("container", styles.container)}>
                <Logo className={styles.logo} />
                <div
                    className={cn(styles.wrapper, {
                        [styles.visible]: visibleMobileMenu,
                    })}
                >
                    <nav
                        className={styles.nav}
                        onClick={() => enablePageScroll()}
                    >
                        {HeaderNavigationList.map((link, index) => (
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
                </div>
                <Buy1EarthToken className={cn("button-small", styles.button)} />
                <button
                    className={cn(styles.burger, {
                        [styles.active]: visibleMobileMenu,
                    })}
                    onClick={toggleMenu}
                ></button>
            </div>
        </div>
    );
};

export default Header;
