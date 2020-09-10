import React, { useContext } from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../contexts/BasketContext';
import { AuthContext } from '../../contexts/AuthContext';
import {auth} from '../../config'

const Header = () => {

    const { basketItems } = useContext(BasketContext)
    const { user } = useContext(AuthContext)

    const handleClick = () => {
        auth.signOut();
    }

    return (

        <div className="header">
            <Link to='/'>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' className="header__logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput"
                    type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                {user ? 
                    <div className="header__option" onClick={handleClick}>
                        <span className="header__optionLineOne"> Hello {user.email}</span>
                        <span className="header__optionLineTwo"> Sign out</span>
                    </div>
                 : <Link to='/signin'>
                        <div className="header__option">
                            <span className="header__optionLineOne"> Hello Guest</span>
                            <span className="header__optionLineTwo"> Sign in</span>
                        </div>
                    </Link>}
                <Link to='/'>
                    <div className="header__option">
                        <span className="header__optionLineOne"> Returns</span>
                        <span className="header__optionLineTwo"> & Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne"> Your</span>
                    <span className="header__optionLineTwo"> Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basketItems.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;