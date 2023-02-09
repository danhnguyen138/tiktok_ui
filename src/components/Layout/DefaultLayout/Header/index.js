import {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from "~/components/Layout/Popper";
import AccountItem from '~/components/SearchAccountItem';
// import 'tippy.js/dist/tippy.css';
const cx=classNames.bind(styles)
function Header() {
    const [searchResult,setSearchResult]=useState([])
    useEffect(() => {
        setTimeout(()=>setSearchResult([]),0)
        return () => {
            return clearTimeout(()=>setSearchResult([]),0)
        };
    }, []);
    return (
        <header className={cx('wrapper')}>
           <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"/>
                </div>
                <Tippy
                    interactive 
                    visible={searchResult.length>0}
                    render={
                            attrs=>(
                                <div className={cx('search-result')} tabindex="-1" {...attrs}>
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
                    
                            <input placeholder="Search accounts and videos" spellCheck={false}/>
                            <button className={cx('clear')}>
                                {/* Clear */}
                                <FontAwesomeIcon icon={faCircleXmark} />

                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        
                        {/* Loading */}
                    
                            <button className={cx('search-button')}>
                                <FontAwesomeIcon  icon={faMagnifyingGlass} />
                            </button>
                    
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <input placeholder='HEllo world'/>
                </div>
           </div>
        </header>
    );
}

export default Header;