import React from "react";
import "./style.css";

const TaskFilter = () => {
    return (
        <div className="filterDiv">
            <button className="filterButton">Todas</button>
            <button className="filterButton">Pendência</button>
            <button className="filterButton">Finalizadas</button>
        </div>
    )
}

export default TaskFilter;