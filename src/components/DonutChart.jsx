// import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Register the required elements with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animations
      once: true, // Whether animation should happen only once or every time you scroll up and down
    });
  }, []);
  const data = {
    labels: [], // No labels
    datasets: [
      {
        label: "# of Votes",
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "#fe6026", // Custom color 1
          "#39cef3", // Custom color 2
          "#39cef3", // Custom color 2 (repeated)
          "#39cef3", // Custom color 2 (repeated)
          "#99d960", // Custom color 3
        ],
        borderColor: "transparent", // Remove borders
        borderWidth: 0, // Set border width to 0 to ensure no borders
        borderRadius: 10, // Round the corners of each segment
        spacing: 10, // Add space between the segments
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%", // Adjust this value to control the size of the donut hole
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    hover: {
      mode: null, // Disable all hover interactions
    },
  };

  return (
    <div
      className="   rounded-[50%] flex  bg-[#0c062d] h-[320px] w-[320px] lg:h-[500px] lg:w-[500px] items-center justify-center"
      data-aos="fade-right"
    >
      <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
