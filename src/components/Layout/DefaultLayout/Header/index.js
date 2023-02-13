import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia,
    faCircleQuestion, faKeyboard, faCloudArrowUp, faMessage, faUser, faCoins, faSignOut,faGear
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import TippyIcon from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';


import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from '~/components/SearchAccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
// import 'tippy.js/dist/tippy.css';
const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tieng Viet',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'Vietnamese'
                },
                {
                    code: 'en',
                    title: 'English'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',

    },

]
function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => setSearchResult([]), 0)
        return () => {
            return clearTimeout(() => setSearchResult([]), 0)
        };
    }, []);
    const currentUser = true;
    const menu_user=[
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/profile'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/getcoins'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        }
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={
                        attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>

                        )} >
                    <div className={cx('search')}>

                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            {/* Clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />

                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        {/* Loading */}

                        <button className={cx('search-button')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                    </div>
                </Tippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>

                            <TippyIcon delay={[0,200]} content="Upload Video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </TippyIcon>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>

                        </>
                    ) :
                        <>
                            <Button text >+  Upload</Button>
                            <Button primary >Login</Button>

                        </>

                    }
                    <Menu items={currentUser?menu_user:MENU_ITEMS}>
                        {currentUser ? (
                            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/dfc9206b6196682ecb0f7869fad3e4ee~c5_100x100.jpeg?x-expires=1676127600&x-signature=3wUpZ2iE17ipRHpYx%2F%2B7mnV361U%3D" className={cx('img-avatar')} alt="Nguyen van A" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>)}

                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;