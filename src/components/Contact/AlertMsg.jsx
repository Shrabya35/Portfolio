// AlertMsg.js

import React from "react";
import "./AlertMsg.css";

const AlertMsg = ({ showAlert, handleClose }) => {
  return showAlert ? (
    <div className="alert">
     <div className="modal-text">
     <strong>Thank you for reaching out !!</strong> 
     </div>
      <span className="closeb-modal" onClick={handleClose}>&times;</span> 
    </div>
  ) : null;
};

export default AlertMsg;
