import React from "react";
import WifiLogo from "../Assets/WifiImage.png";
import LocationIcon from "../Assets/Frame.png";

const Header = ({ searchQuery, setSearchQuery, filterStatus, setFilterStatus,filterLocation,handleFilterLocation,locations }) => {
    return (
        <div className="filters">
            
            <div className="location-dropdown filter">
            <div className="logo">
                    <img src={LocationIcon} alt="logo" />
                </div>
                <select value={filterLocation} onChange={handleFilterLocation} className="location-filter">
                    <option value="" disabled selected>
                        Location
                    </option>
                    <option value="">All Locations</option>
                    {locations.map((location, index) => (
                        <option key={index} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>

            <div className="status-dropdown">
                <div className="logo">
                    <img src={WifiLogo} alt="logo" />
                </div>
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="filter status-filter"
                >
                    <option value="" disabled selected>
                        Select an option
                    </option>
                    <option value="">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
