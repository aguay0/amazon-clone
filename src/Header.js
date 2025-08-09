import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
        <img className="header_logo" src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png"/>

        <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon"/>            
            
        </div>

        <div className="Header_nav">
            <div className ="header_option"> 
                <span className="header_optionLineOne">Hell Guest</span>
                <span className="header_optionLineTwo">Hell Sign In</span>
            </div>

            <div className ="header_option"> 
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>

            <div className ="header_option"> 
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>
        </div>
    </div>
  )
}

export default Header