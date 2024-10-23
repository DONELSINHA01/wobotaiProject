
import React from "react";

const Pagination = ({ camerasPerPage, totalCameras, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCameras / camerasPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
