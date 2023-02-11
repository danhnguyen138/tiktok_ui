import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

/**{
 * [className]:className
 * } */
const cx = classNames.bind(styles)
function Button({ to, href, children, text=false,disable=false, primary = false, outline = false, size = "medium", disabled, className, leftIcon, rightIcon, onClick,...passProps }) {
    let Comp = 'button';
    // const small=1
    const buttonStyleList={
        primary,outline,text,disable, [className]:className
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
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    
   

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;