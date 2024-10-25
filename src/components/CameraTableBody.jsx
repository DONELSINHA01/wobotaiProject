import React from "react";
import HealthImage from "../Assets/Health.png";
import WarningLogo from "../Assets/Vector.png";

const CameraTableBody = ({ cameras, handleStatusToggle, handleDelete }) => {
    console.log(cameras);
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Health</th>
                    <th>Location</th>
                    <th>Recorder</th>
                    <th>Tasks</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cameras.map((camera) => (
                    <tr key={camera.id}>
                        <td data-label='Camera Name' >
                            <div  className="camera-name main-name">
                            <div className={camera.current_status==="Online"?"circle-green":"circle-red"}>
                                
                            </div>
                            <div>
                                <div className="camera-name">

                            {camera.name}
                            {camera.hasWarning===true?<img src={WarningLogo} alt="" />:null}
                                </div>
                                <small>
                                sherwinwilliams@wobot.ai
                                </small>
                            </div>
                            </div>
                        </td>
                        <td data-label="Health">
                            <div className="health-image">
                                <img src={HealthImage} alt="No preview" />
                            </div>
                        </td>
                        <td data-label="Location">{camera.location}</td>
                        <td data-label="Recorder">{camera.recorder || "N/A"}</td>
                        <td data-label="Tasks">{camera.tasks}</td>
                        <td data-label="Status">
                            <div
                                className={
                                    camera.status === "Active"
                                        ? "active-status"
                                        : "inactive-status"
                                }
                            >
                                {camera.status}
                            </div>
                        </td>
                        <td data-label="Actions">
                            <button
                                onClick={() => handleStatusToggle(camera.id, camera.status)}
                                className={camera.status ==="Active"?"action-btn status-btn-deactivation":"action-btn status-btn-activation"}
                            >
                                {camera.status === "Active" ? "Deactivate" : "Activate"}
                            </button>
                            <button onClick={() => handleDelete(camera.id)} className="action-btn delete-btn">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CameraTableBody;
