import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import cn from "classnames";
import styles from "./Select.module.sass";
import Icon from "../../Icon";

type SelectProps = {
    content: any;
};

const Select = ({ content }: SelectProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [sorting, setSorting] = useState<string>(content[0].title);

    const handleChange = (value: string) => {
        setSorting(value);
        setVisible(false);
    };

    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div
                className={cn(styles.select, {
                    [styles.active]: visible,
                })}
            >
                <div
                    className={styles.head}
                    onClick={() => setVisible(!visible)}
                >
                    {sorting}
                    <Icon name="chevron-down" />
                </div>
                <ul className={styles.menu}>
                    {content.map((x: any, index: number) => (
                        <li key={index}>
                            <Link
                                className={cn({
                                    [styles.active]: x.title === sorting,
                                })}
                                activeClass={styles.active}
                                to={x.title}
                                offset={isMobile ? -60 : -80}
                                spy
                                smooth
                                onClick={() => handleChange(x.title)}
                            >
                                {x.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </OutsideClickHandler>
    );
};

export default Select;
