import { useState } from "react";

export const usePagination = (cameras, camerasPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCamera = currentPage * camerasPerPage;
    const indexOfFirstCamera = indexOfLastCamera - camerasPerPage;
    const currentCameras = cameras.slice(indexOfFirstCamera, indexOfLastCamera);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return {
        currentPage,
        currentCameras,
        paginate,
    };
};
