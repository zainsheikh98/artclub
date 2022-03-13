import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import styles from "./Logo.module.sass";
import ArtClub from "../../public/icons/artclub";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)}>
           <ArtClub/>
        </a>
    </Link>
);

export default Logo;
