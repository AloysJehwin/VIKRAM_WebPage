import React, { useState, useEffect } from "react";
import axios from "axios";

// Status function for each parameter
const getStatus = (value: number, type: string) => {
  let status = "Good";
  let statusClass = "text-green-500";

  if (type === "moisture") {
    if (value < 30) {
      status = "Immediate Action";
      statusClass = "text-red-500";
    } else if (value <= 60) {
      status = "Warning";
      statusClass = "text-yellow-500";
    }
  } else if (type === "vibration") {
    if (value < 0.2) {
      status = "Good";
      statusClass = "text-green-500";
    } else if (value <= 0.5) {
      status = "Warning";
      statusClass = "text-yellow-500";
    } else {
      status = "Immediate Action";
      statusClass = "text-red-500";
    }
  } else if (type === "current") {
    if (value < 2) {
      status = "Good";
      statusClass = "text-green-500";
    } else if (value <= 5) {
      status = "Warning";
      statusClass = "text-yellow-500";
    } else {
      status = "Immediate Action";
      statusClass = "text-red-500";
    }
  }

  return { status, statusClass };
};

const MonitoringPage = () => {
  const [sensorData, setSensorData] = useState<any>(null);

  // Fetch sensor data every 3 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/sensor-data`,
          {
            headers: {
              'ngrok-skip-browser-warning': 'true'
            }
          }
        );
        
        setSensorData(response.data);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Monitoring Page</h1>
        <p className="text-lg text-gray-600">Here are the live sensor readings for the parameters:</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {sensorData && (
          <>
            <div className="bg-white p-6 rounded-lg shadow-md w-80 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-700">Moisture</h3>
              <p className="text-xl text-gray-900 mt-2">Current: {sensorData.moisture}%</p>
              <p className={`mt-4 font-bold ${getStatus(sensorData.moisture, "moisture").statusClass}`}>
                Status: {getStatus(sensorData.moisture, "moisture").status}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-80 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-700">Vibration</h3>
              <p className="text-xl text-gray-900 mt-2">Current: {sensorData.vibration}mm/s</p>
              <p className={`mt-4 font-bold ${getStatus(sensorData.vibration, "vibration").statusClass}`}>
                Status: {getStatus(sensorData.vibration, "vibration").status}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-80 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-700">Current</h3>
              <p className="text-xl text-gray-900 mt-2">Current: {sensorData.current}A</p>
              <p className={`mt-4 font-bold ${getStatus(sensorData.current, "current").statusClass}`}>
                Status: {getStatus(sensorData.current, "current").status}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MonitoringPage;
