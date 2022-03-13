import cn from "classnames";
import styles from "./Heading.module.sass";

type HeadingProps = {
    className?: string;
    classLabel?: string;
    classTitle?: string;
    classInfo?: string;
    label?: string;
    title: string;
    info?: string;
};

const Heading = ({
    className,
    classLabel,
    classTitle,
    classInfo,
    label,
    title,
    info,
}: HeadingProps) => (
    <div className={cn(styles.head, className)}>
        {label && (
            <div className={cn("label", styles.label, classLabel)}>{label}</div>
        )}
        <h2 className={cn("h2", styles.title, classTitle)}>{title}</h2>
        {info && <div className={cn(styles.info, classInfo)}>{info}</div>}
    </div>
);

export default Heading;
