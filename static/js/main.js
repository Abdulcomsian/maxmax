window.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  const sidebarToggle = document.querySelector(".div-right");
  const testButton = document.querySelector("#test-button");

  sidebar.classList.remove("sidebar-open"); // Remove the sidebar-open class by default

  testButton.addEventListener("click", function () {
    sidebar.classList.add("sidebar-open");
    overlay.classList.add("overlay-visible");
  });

  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.remove("sidebar-open");
    overlay.classList.remove("overlay-visible");
  });
});

// Sample data
var data = {
  labels: ["T0", "T5", "T10", "T20", "T25", "T30"],
  datasets: [
    {
      label: "Example Dataset",
      data: [0, 3.5, 2.5, 5.3, 3.9, 6.7],
      fill: false,
      borderColor: "rgba(212, 88, 255, 1)",
      tension: 0.4, // Increased tension for a more curved line
    },
    {
      label: "Example Dataset",
      data: [0, 1.8, 0.7, 2.9, 5.1, 3.4],
      fill: false,
      borderColor: "rgba(94, 23, 235, 1)",
      tension: 0.4, // Increased tension for a more curved line
    },
  ],
};

// Configuration options
var options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Create the chart
var ctx = document.getElementById("curveChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});

// var submenu = document.getElementById("submenu2");
// submenu.style.display = "block";
// var test = document.getElementById("report-caret");
// test.src = "../static/images/Arrow-2-(1).png";

function toggleSubMenu(id, caretId) {
  console.log("here 111");
  var submenu = document.getElementById(id);
  console.log(submenu.style.display);
  if (submenu.style.display === "none" || submenu.style.display === "") {
    var test = document.getElementById(caretId);
    test.src = "../static/images/Arrow-2-(1).png";
    submenu.style.display = "block";
  } else {
    var test = document.getElementById(caretId);
    test.src = "../static/images/Arrow-2.png";
    submenu.style.display = "none";
  }
}
