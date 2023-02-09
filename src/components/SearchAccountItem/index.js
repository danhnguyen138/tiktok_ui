import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/dfc9206b6196682ecb0f7869fad3e4ee~c5_100x100.jpeg?x-expires=1676127600&x-signature=3wUpZ2iE17ipRHpYx%2F%2B7mnV361U%3D" alt="Hoa" />
            <div className={cx('info')}>

                <h4 className={cx('name')}>Nguyen Van A
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>


                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;