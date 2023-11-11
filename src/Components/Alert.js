import React, { useState, useEffect } from "react";

function Alert({ name, closeAlert }) {
    return (
        <div className="alert">
            <span> {name} added to the basket</span>
            <button
                onClick={() => closeAlert()}
                style={{
                    cursor: "pointer",
                    padding: "0",
                    border: "none",
                }}
            >
                <i className="material-icons">close</i>
            </button>
        </div>
    );
}

export default Alert;
