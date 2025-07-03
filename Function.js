function fire1(){
    alert("FIRE!");
}// Ensure the DOM is fully loaded before initializing the chart
document.addEventListener("DOMContentLoaded", function () {
    // Sample data (replace with actual flight computer data)
    var xyValues = [
        { x: 50, y: 7 },
        { x: 60, y: 8 },
        { x: 70, y: 8 },
        { x: 80, y: 9 },
        { x: 90, y: 9 },
        { x: 100, y: 9 },
        { x: 110, y: 10 },
        { x: 120, y: 11 },
        { x: 130, y: 14 },
        { x: 140, y: 14 },
        { x: 150, y: 15 }
    ];

    // Create the chart
    var ctx = document.getElementById("myChart").getContext("2d");
    var velocityChart = new Chart(ctx, {
        type: "line", // Changed to line for continuous velocity data
        data: {
            datasets: [{
                label: "Velocity (m/s)",
                data: xyValues,
                pointRadius: 4,
                pointBackgroundColor: "rgb(0, 0, 255)",
                borderColor: "rgb(0, 0, 255)",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                fill: true,
                tension: 0.4 // Smooth line
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: true,
                position: "top"
            },
            title: {
                display: true,
                text: "Rocket Velocity vs. Time"
            },
            scales: {
                xAxes: [{
                    type: "linear",
                    position: "bottom",
                    ticks: {
                        min: 40,
                        max: 160,
                        callback: function (value) {
                            return value + " s"; // Label as seconds
                        }
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Time (s)"
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 6,
                        max: 16,
                        callback: function (value) {
                            return value + " m/s"; // Label as velocity
                        }
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Velocity (m/s)"
                    }
                }]
            }
        }
    });

    // Function to update chart with new velocity data (example)
    function updateChart(newTime, newVelocity) {
        xyValues.push({ x: newTime, y: newVelocity });
        velocityChart.data.datasets[0].data = xyValues;
        velocityChart.update();
    }

    // Example: Simulate updating with velocity from <p id="Velocity">
    // Replace with actual data source (e.g., WebSocket, API)
    setInterval(() => {
        const velocityElement = document.getElementById("Velocity");
        const newVelocity = parseFloat(velocityElement.textContent) || 0;
        const newTime = xyValues.length > 0 ? xyValues[xyValues.length - 1].x + 10 : 40;
        updateChart(newTime, newVelocity);
    }, 1000); // Update every 1s for demo; adjust as needed
});

// Existing fire1 function
function fire1() {
    alert("FIRE!");
}