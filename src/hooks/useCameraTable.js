import { useState, useEffect } from "react";
import axios from "axios";

export const useCameraTable = () => {
    const [cameras, setCameras] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [filterLocation, setFilterLocation] = useState("");

    
    useEffect(() => {
        const fetchCameras = async () => {
            try {
                const response = await axios.get(
                    "https://api-app-staging.wobot.ai/app/v1/fetch/cameras",
                    { headers: { Authorization: "Bearer 4ApVMIn5sTxeW7GQ5VWeWiy" } }
                );
                console.log(response.data, "this is data");
                setCameras(response.data.data);
            } catch (error) {
                console.error("Error fetching camera data", error);
            }
        };
        fetchCameras();
    }, []);

    
    const locations = [...new Set(cameras.map((camera) => camera.location))];

    
    const handleDelete = (id) => {
        const filteredCameras = cameras.filter((camera) => camera.id !== id);
        setCameras(filteredCameras);
    };

    
    const handleStatusToggle = async (id, currentStatus) => {
        const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
        try {
            const response = await axios.put(
                "https://api-app-staging.wobot.ai/app/v1/update/camera/status",
                { id, status: newStatus },
                { headers: { Authorization: "Bearer 4ApVMIn5sTxeW7GQ5VWeWiy" } }
            );

            if (response.status === 200) {
                setCameras((prev) =>
                    prev.map((camera) =>
                        camera.id === id ? { ...camera, status: newStatus } : camera
                    )
                );
            } else {
                console.error("Failed to update status");
            }
        } catch (error) {
            console.error("Error updating status", error);
        }
    };

    
    const filteredCameras = cameras.filter(
        (camera) =>
            (!filterLocation || camera.location === filterLocation) && 
            (!filterStatus || camera.status === filterStatus) 
    );

    const handleFilterLocation = (e) => {
        setFilterLocation(e.target.value); 
    };

    return {
        cameras: filteredCameras, 
        searchQuery,
        setSearchQuery,
        filterStatus,
        setFilterStatus,
        handleDelete,
        handleStatusToggle,
        filterLocation,
        handleFilterLocation,
        locations,
    };
};
