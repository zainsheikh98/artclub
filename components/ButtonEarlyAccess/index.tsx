import cn from "classnames";
import { insta_page } from "../../constants/urls";
import Icon from "../Icon";

type ButtonEarlyAccessProps = {
    className: string;
};

const ButtonEarlyAccess = ({ className }: ButtonEarlyAccessProps) => (
    <button
        className={cn("button", className)}
        onClick={() => window.open(insta_page, "_blank")}
    >
        <Icon name={"instagram"} />
        Instagram
    </button>
);

export default ButtonEarlyAccess;
