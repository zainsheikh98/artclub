import cn from "classnames";
import { Parallax } from "react-scroll-parallax";
import styles from "./Hero.module.sass";
import Image from "../../Image";
import ButtonEarlyAccess from "../../ButtonEarlyAccess";

type HeroProps = {};

const Hero = ({}: HeroProps) => (
    <div className={styles.hero}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <h1 className={cn("hero", styles.title)}>
                    Let this world be your canvas
                </h1>
                <ButtonEarlyAccess className={styles.button} />
            </div>
        </div>
        <div className={styles.background}>
            <Image
                src="/images/home/hero/background.jpg"
                width={2880}
                height={1317}
                alt="artclub"
            />
        </div>
    </div>
);

export default Hero;
