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

const getOrCreateLegendList = (chart, id) => {
  console.log(id);
  const legendContainer = document.getElementById(id);

  console.log(legendContainer);
  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");
    listContainer.style.display = "flex";
    listContainer.style.flexDirection = "row";
    listContainer.style.margin = 0;
    listContainer.style.padding = 0;

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach((item) => {
      const li = document.createElement("li");
      li.style.alignItems = "center";
      li.style.cursor = "pointer";
      li.style.display = "flex";
      li.style.flexDirection = "row";
      li.style.marginLeft = "10px";

      li.onclick = () => {
        const { type } = chart.config;
        if (type === "pie" || type === "doughnut") {
          // Pie and doughnut charts only have a single dataset and visibility is per item
          chart.toggleDataVisibility(item.index);
        } else {
          chart.setDatasetVisibility(
            item.datasetIndex,
            !chart.isDatasetVisible(item.datasetIndex)
          );
        }
        chart.update();
      };

      // Color box
      const boxSpan = document.createElement("span");
      boxSpan.style.background = item.fillStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderWidth = item.lineWidth + "px";
      boxSpan.style.display = "inline-block";
      boxSpan.style.height = "20px";
      boxSpan.style.marginRight = "10px";
      boxSpan.style.width = "20px";
      boxSpan.style.borderRadius = "50px";

      
      // Text
      const textContainer = document.createElement("p");
      textContainer.style.color = item.fontColor;
      textContainer.style.margin = 0;
      textContainer.style.padding = 0;
      textContainer.style.textDecoration = item.hidden ? "line-through" : "";
      textContainer.style.fontFamily = "Poppins, sans-serif";

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  },
};

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
      backgroundColor: "rgba(212, 88, 255, 1)",
      borderWidth: 3,
      pointStyle: "circle",
      pointRadius: 5,
      pointBorderColor: "rgba(212, 88, 255, 1)",
    },
    {
      label: "Example Dataset",
      data: [0, 1.8, 0.7, 2.9, 5.1, 3.4],
      fill: false,
      borderColor: "rgba(94, 23, 235, 1)",
      tension: 0.4, // Increased tension for a more curved line
      backgroundColor: "rgba(94, 23, 235, 1)",
      borderWidth: 3,
      pointStyle: "circle",
      pointRadius: 5,
      pointBorderColor: "rgba(94, 23, 235, 1)",
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
  interaction: {
    intersect: false,
    mode: "index",
  },
  plugins: {
    htmlLegend: {
      // ID of the container to put the legend in
      containerID: "legend-container",
    },
    tooltip: {
      enabled: true, // Enable tooltips
      mode: "nearest", // Display the tooltip of the nearest data point
    },
    legend: {
      display: false,
      align: "start",
      labels: {
        usePointStyle: true,
      },
    },
  },
};

// Create the chart
var ctx = document.getElementById("curveChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
  plugins: [htmlLegendPlugin],
});

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
