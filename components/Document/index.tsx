import { useMediaQuery } from "react-responsive";
import { Link, Element } from "react-scroll";
import cn from "classnames";
import styles from "./Document.module.sass";
import Logo from "../Logo";
import Select from "./Select";

type DocumentProps = {
    title: string;
    date: string;
    description: any;
    content: any;
};

const Document = ({ title, date, description, content }: DocumentProps) => {
    const isDesktop = useMediaQuery({
        query: "(max-width: 1259px)",
    });

    const isTablet = useMediaQuery({
        query: "(max-width: 1023px)",
    });

    return (
        <div className={styles.document}>
            <div className={styles.head}>
                <div className={"container"}>
                    <div className={cn("hero", styles.title)}>{title}</div>
                    <div className={cn("label", styles.date)}>{date}</div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            {isTablet ? (
                                <Select content={content} />
                            ) : (
                                <ul className={styles.menu}>
                                    {content.map((x: any, index: number) => (
                                        <li key={index}>
                                            <Link
                                                activeClass={styles.active}
                                                to={x.title}
                                                offset={
                                                    (isDesktop && -54) || -40
                                                }
                                                spy
                                                smooth
                                            >
                                                {x.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className={styles.col}>
                            <div className={styles.content}>
                                <div className={styles.section}>
                                    {description}
                                </div>
                                {content.map((x: any, index: number) => (
                                    <Element
                                        className={styles.section}
                                        name={x.title}
                                        key={index}
                                    >
                                        {x.content}
                                    </Element>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Document;
