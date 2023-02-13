import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from "./Menu.module.scss";
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles)
function Menu({ children, items=[] }) {
    const [history,setHistory]= useState([{data:items}]); //Bien lich su
    const current=history[history.length-1]//Lay vi tri Hien tai
    const renderItems = () => {
        return current.data.map((item,index) => {
            const isParent= !!item.children //Kiem tra vi tri hien tai co cha ko
            return (
                <MenuItem key={index} data={item} onClick={()=>{
                    if (isParent){
                        setHistory(prev=>[...prev,item.children])// Them phan tu con vao bien hien tai
                    }
                }}></MenuItem>
            )
        
        });
    };
    console.log(history)
    return (
        <Tippy
            interactive
            delay={[0,700]}
            visible
            placement='bottom-end'
            render={
                attrs => (
                    <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-wrapper')}>
                            {history.length>1&&<Header title="Language" onBack={()=>{
                                setHistory(prev=>prev.splice(prev.length-1,1)) //Xoa mang cuoi cung
                            }}/>}
                            {renderItems()}

                        </PopperWrapper>
                    </div>

                )}
                
            onHide={()=>setHistory(prev=>prev.slice(0,1))} >
            {children}
        </Tippy>
    );
}

export default Menu;