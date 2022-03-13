import { AnimationOnScroll } from "react-animation-on-scroll";
import { Parallax } from "react-scroll-parallax";

type AnimationProps = {
    className?: string;
    animateIn: string;
    speed: number;
    children: any;
};

const Animation = ({
    className,
    animateIn,
    speed,
    children,
}: AnimationProps) => (
    <AnimationOnScroll className={className} animateIn={animateIn} animateOnce>
        <Parallax speed={speed} easing="easeInQuad">
            {children}
        </Parallax>
    </AnimationOnScroll>
);

export default Animation;
