import cn from "classnames";
import styles from "./Feature.module.sass";
import Image from "../../Image";

type FeatureProps = {
    item: any;
};

const Feature = ({ item }: FeatureProps) => (
    <div className={styles.feature}>
        <div className={styles.avatar}>
            <Image
                src={item.author.avatar}
                width={360}
                height={360}
                alt={item.name}
            />
        </div>
        <div className={styles.inner}>
            <blockquote className={cn("h5", styles.quote)}>
                “{item.content}”
            </blockquote>
            <h6 className={cn("h6", styles.name)}>{item.author.name}</h6>
            <p className={styles.position}>{item.author.position}</p>
        </div>
    </div>
);

export default Feature;
