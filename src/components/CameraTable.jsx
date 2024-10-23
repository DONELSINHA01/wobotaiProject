// src/components/CameraTable.js
import React from "react";
import { useCameraTable } from "../hooks/useCameraTable";
import { usePagination } from "../hooks/usePagination";
import CameraTableBody from "./CameraTableBody";
import Pagination from "./Pagination";
import Filters from "./Filters";
import Header from "./Header";
const CameraTable = () => {
    const {
        cameras,
        searchQuery,
        setSearchQuery,
        filterStatus,
        setFilterStatus,
        handleDelete,
        handleStatusToggle,
        filterLocation,
        handleFilterLocation,
        locations
    } = useCameraTable();

    const camerasPerPage = 10;
    const filteredCameras = cameras.filter(
        (camera) =>
            camera.name.toLowerCase().includes(searchQuery) &&
            (!filterStatus || camera.status === filterStatus)
    );

    const { currentCameras, paginate } = usePagination(filteredCameras, camerasPerPage);

    return (
        <div>
            
            <Header 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            />
            <Filters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                filterLocation={filterLocation}
                handleFilterLocation={handleFilterLocation}
                locations={locations}

            />
            <CameraTableBody
                cameras={currentCameras}
                handleStatusToggle={handleStatusToggle}
                handleDelete={handleDelete}
            />
            <Pagination
                camerasPerPage={camerasPerPage}
                totalCameras={filteredCameras.length}
                paginate={paginate}
            />
        </div>
    );
};

export default CameraTable;
