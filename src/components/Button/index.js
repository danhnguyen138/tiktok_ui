import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

/**{
 * [className]:className
 * } */
const cx = classNames.bind(styles)
function Button({ to, href, children, text=false,disable=false, primary = false, outline = false, size = "medium", onClick, ...passProps }) {
    let Comp = 'button';
    // const small=1
    const buttonStyleList={
        primary,outline,text,disable
    }
    let classes = cx('wrapper', {
        ...buttonStyleList,
        [size]:size
    })
    

    const props = {
        onClick,
        ...passProps
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;