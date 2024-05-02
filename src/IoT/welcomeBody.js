import React, { useState, useEffect } from "react";
import iotLogo from "../designFIles/IoT_logo_transparent_bigger.png";
import "./welcomeBody.css";
import { Chart } from "react-charts";

export const WelcomeBody = () => {
  const [showVisualMenuSelected, setShowVisualMenuSelected] = useState("table");
  const [tableData, setTableData] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedDay, setSelectedDay] = useState(null);
  const [hoverData, setHoverData] = useState(null);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      sessionStorage.clear();
      fetch("/logout", {
        method: "POST",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then(() => {
          const baseURL = window.location.origin;
          window.location.href = `${baseURL}/login`;
        })
        .catch((error) => {
          console.error("Error logging out:", error);
        });
    }
  };

  useEffect(() => {
    const fileURL =
      "https://firebasestorage.googleapis.com/v0/b/iot-light-68724.appspot.com/o/bulbOnTime.txt?alt=media&token=74cb4268-f94e-46da-8e54-83489ab34a80";
    fetch(fileURL)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n").map((row) => {
          const [dateTime, timeOnSeconds] = row.split(" - Time On: ");
          const [date, timeOfDay] = dateTime.split(" ");
          const formattedTimeOfDay = formatTimeOfDay(timeOfDay);
          const formattedTimeOn = timeOnSeconds
            ? (parseFloat(timeOnSeconds.split(" ")[0]) / 100).toFixed(2)
            : timeOnSeconds;
          return [date, formattedTimeOfDay, formattedTimeOn];
        });
        const sortedData = rows.sort((a, b) =>
          sortDirection === "asc"
            ? new Date(a[0]) - new Date(b[0])
            : new Date(b[0]) - new Date(a[0])
        );
        setTableData(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, [sortDirection]);

  const formatTimeOfDay = (timeOfDay) => {
    return timeOfDay;
  };

  const handleSort = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
  };

  const uniqueDays = Array.from(new Set(tableData.map((row) => row[0])));

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const generateGraphData = () => {
    if (!selectedDay) return [];

    const graphData = [];

    for (let i = 0; i <= 24; i++) {
      if (i >= 0 && i <= 24) {
        const rowsForHour = tableData.filter(
          (row) =>
            row[0] === selectedDay && parseInt(row[1].split(":")[0]) === i
        );

        let totalOnTime = 0;

        rowsForHour.forEach((row) => {
          totalOnTime += parseFloat(row[2]);
        });

        graphData.push([i, totalOnTime]);
      } else {
        graphData.push([i, 0]);
      }
    }
    return graphData;
  };

  return (
    <div style={{ backgroundColor: "#414141", textAlign: "center" }}>
      <div className="header-style">
        <div className="nav">
          <div className="left-nav-text">Eco Light</div>
          <img
            className="header-logo"
            src={iotLogo}
            alt="IoT Logo"
            style={{ width: "5rem", height: "auto", paddingLeft: "0.5rem" }}
          />
          <div className="right-nav-text" onClick={handleLogout}>
            Log Out
          </div>
        </div>
      </div>
      <div className="options-layout">
        <div className="parent">
          <a
            className={
              showVisualMenuSelected === "table" ? "clicked-option" : "child"
            }
            onClick={() => setShowVisualMenuSelected("table")}
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              margin: "0.5rem",
              cursor: "pointer",
              color: showVisualMenuSelected === "table" ? "#414141" : "#fff",
              fontWeight: "bold",
              fontSize: "2.5rem",
              border: "0.2rem solid #ffffff",
              borderRadius: "0.45rem",
              backgroundColor:
                showVisualMenuSelected === "table" ? "#ffffff" : "transparent",
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            Table
          </a>
          <a
            className={
              showVisualMenuSelected === "graph" ? "clicked-option" : "child"
            }
            onClick={() => setShowVisualMenuSelected("graph")}
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              margin: "0.5rem",
              cursor: "pointer",
              color: showVisualMenuSelected === "graph" ? "#414141" : "#fff",
              fontWeight: "bold",
              fontSize: "2.5rem",
              border: "0.2rem solid #ffffff",
              borderRadius: "0.45rem",
              backgroundColor:
                showVisualMenuSelected === "graph" ? "#ffffff" : "transparent",
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            Graph
          </a>
        </div>
      </div>
      {showVisualMenuSelected === "table" ? (
        <div
          style={{
            margin: "0 auto",
            maxWidth: "800px",
            backgroundColor: "white",
          }}
        >
          <div>
            <select
              value={selectedDay}
              onChange={(e) => handleDaySelect(e.target.value)}
              style={{
                margin: "1rem 0",
                padding: "0.5rem",
                fontWeight: "bold",
                border: "0.2rem solid #000",
                borderRadius: "0.5rem",
                fontSize: "1.2rem",
                paddingTop: "0.5rem",
              }}
            >
              <option value="">All days</option>
              {uniqueDays.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  onClick={handleSort}
                >
                  Date {sortDirection === "asc" ? "▲" : "▼"}
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Time of Day
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Time On
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData
                .filter((row) => !selectedDay || row[0] === selectedDay)
                .map((row, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row[0]}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row[1]}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row[2]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <div
            style={{
              paddingTop: "0.1rem",
              width: "80%",
              backgroundColor: "#fff",
              margin: "0 auto",
              marginTop: "1rem",
            }}
          >
            <select
              value={selectedDay}
              onChange={(e) => handleDaySelect(e.target.value)}
              style={{
                margin: "0.5rem auto",
                padding: "0.5rem",
                fontWeight: "bold",
                border: "0.2rem solid #000",
                borderRadius: "0.5rem",
                fontSize: "1.2rem",
                display: "block",
                paddingTop: "0.5rem",
              }}
            >
              <option value="">Select a day</option>
              {uniqueDays.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <div className="chart" style={{ display: "flex" }}>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)",
                }}
              >
                Minutes used
              </div>
              <div
                style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}
              >
                <div style={{ width: "100%", height: "400px" }}>
                  <Chart
                    style={{ width: "100%", height: "100%" }}
                    data={[
                      {
                        label: "Minutes used ",
                        data: generateGraphData(),
                      },
                    ]}
                    axes={[
                      {
                        primary: true,
                        type: "linear",
                        position: "bottom",
                        min: 0,
                        max: 24,
                        hardMin: true,
                        hardMax: true,
                      },
                      {
                        type: "linear",
                        position: "left",
                        min: 0,
                        max: 600,
                        hardMin: true,
                        hardMax: true,
                        ticks: [
                          { primary: true, position: 0 },
                          { primary: true, position: 50 },
                          { primary: true, position: 100 },
                          { primary: true, position: 150 },
                          { primary: true, position: 200 },
                          { primary: true, position: 250 },
                          { primary: true, position: 300 },
                          { primary: true, position: 350 },
                          { primary: true, position: 400 },
                          { primary: true, position: 450 },
                          { primary: true, position: 500 },
                          { primary: true, position: 550 },
                          { primary: true, position: 600 },
                        ],
                        tickFormat: (value) => (value % 1 === 0 ? value : ""),
                      },
                    ]}
                    tooltip
                    getSeriesStyle={(series) => ({
                      color: series.index === 0 ? "red" : "green",
                    })}
                    getDatumStyle={(datum) => ({
                      color: datum.index === hoverData?.index ? "black" : null,
                    })}
                    onHover={(datum) => setHoverData(datum)}
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "5px" }}>
                  At what hour
                </div>
                <div style={{ marginTop: "10px" }}>
                  {hoverData && (
                    <p style={{ fontWeight: "bold" }}>
                      {hoverData?.datum?.secondary}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeBody;
