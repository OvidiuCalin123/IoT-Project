import React from "react";
import "./orar.css";

export const Orar = () => {
  return (
    <div>
      <div className="schedule-container">
        <ul className="days-list">
          <li>
            <span className="day">Luni:</span>
          </li>
          <li>
            <span className="day">Marți:</span>
          </li>
          <li>
            <span className="day">Miercuri:</span>
          </li>
          <li>
            <span className="day">Joi:</span>
          </li>
          <li>
            <span className="day">Vineri:</span>
          </li>
          <li>
            <span className="day">Sâmbătă:</span>
          </li>
          <li>
            <span className="day">Duminică:</span>
          </li>
        </ul>
        <ul className="hours-list">
          <li>
            <span className="time">12:00 - 18:00</span>
          </li>
          <li>
            <span className="time">12:00 - 18:00</span>
          </li>
          <li>
            <span className="time">12:00 - 18:00</span>
          </li>
          <li>
            <span className="time">12:00 - 18:00</span>
          </li>
          <li>
            <span className="time">12:00 - 18:00</span>
          </li>
          <li>
            <span className="time closed">Închis</span>
          </li>
          <li>
            <span className="time closed">Închis</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
