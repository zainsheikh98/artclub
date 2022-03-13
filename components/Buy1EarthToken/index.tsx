import cn from "classnames";
import { facebook_page } from "../../constants/urls";
import Icon from "../Icon";

type ButtonEarlyAccessProps = {
    className: string;
};

const ButtonEarlyAccess = ({ className }: ButtonEarlyAccessProps) => (
    <button
        className={cn("button", className)}
        onClick={() => window.open(facebook_page, "_blank")}
    >
        <Icon name={"facebook"} /> Facebook
    </button>
);

export default ButtonEarlyAccess;
