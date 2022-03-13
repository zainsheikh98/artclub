import styles from "./Rewards.module.sass";
import cn from "classnames";
import Heading from "../../Heading";
import Image from "../../Image";

type RewardsProps = {};

const Rewards = ({}: RewardsProps) => (
    <div id="rewards" className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <Heading
                className={styles.head}
                classTitle={styles.title}
                classInfo={styles.info}
                title="Art, The Original."
                info="Art evokes the mystery without which the world would not exist"
            />
            <div className={styles.pattern}>
                <Image
                    src="/images/flybirds.jpg"
                    width={1400}
                    height={1400}
                    alt="Pattern"
                />
            </div>
        </div>
    </div>
);

export default Rewards;
