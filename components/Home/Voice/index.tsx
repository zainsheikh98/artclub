import cn from "classnames";
import styles from "./Voice.module.sass";
import Image from "../../Image";
import Heading from "../../Heading";
import Animation from "../../Animation";
type VoiceProps = {};

const Voice = ({}: VoiceProps) => {
    return (
        <div id="voice" className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <Heading
                    className={styles.head}
                    title="All our knowledge has its origin in our perceptions."
                />
                <div className={styles.background}>
                    <Image
                        src="/images/home/video-cover.jpg"
                        width={900}
                        height={540}
                        alt="artclub"
                    />
                </div>
                <div className={styles.circles}>
                    {Array.from(Array(6).keys()).map((x) => (
                        <Animation
                            className={styles.circle}
                            animateIn="fadeIn"
                            speed={-3}
                            key={x}
                        >
                            <span></span>
                        </Animation>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Voice;
