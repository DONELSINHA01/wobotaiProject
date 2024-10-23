import React from 'react';
import SearchIcon from "../Assets/icon.png"
import BrandLogo from "../Assets/BrandLogo.png"

function Header({searchQuery, setSearchQuery}) {
    return (
        <>
        <div className="brandLogo">
                <img src={BrandLogo} alt="Logo" />
            </div>
        
        <div className='header'>
            <div className="title">
            <h2 className='header-title'>Cameras</h2>
            <p className='header-description'>Manage your cameras here</p>
            </div>
            <div className="search">

            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                className="search-input"
            />
            <img src={SearchIcon} alt="hello" />
            </div>
        </div>
        </>
    );
}

export default Header;