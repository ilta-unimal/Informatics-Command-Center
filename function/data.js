// Function to fetch data from data.json

async function fetchData() {
  try {
    const response = await fetch("function/data/mahasiswa.json");
    const result = await response.json();

    const dataJalurMasuk = result.jalurMasuk;
    const dataJenisKelamin = result.jenisKelamin;

    // Call functions to display data
    displayJalurMasuk(dataJalurMasuk);
    displayJenisKelamin(dataJenisKelamin);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to display Jalur Masuk data
function displayJalurMasuk(dataJalurMasuk) {
  const jalurMasukLabels = dataJalurMasuk.map((item) => item.nama);
  const jalurMasukData = dataJalurMasuk.map((item) => parseInt(item.jumlah));

  // Populate table
  const jalurMasukTable = document.getElementById("jalurMasukTable");
  jalurMasukTable.innerHTML = ""; // Clear the table before appending
  dataJalurMasuk.forEach((item) => {
    jalurMasukTable.innerHTML += `<tr><td>${item.nama}</td><td>${item.jumlah}</td></tr>`;
  });

  // Create bar chart for Jalur Masuk
  const ctxJalurMasuk = document
    .getElementById("jalurMasukChart")
    .getContext("2d");
  new Chart(ctxJalurMasuk, {
    type: "bar",
    data: {
      labels: jalurMasukLabels,
      datasets: [
        {
          label: "Jumlah Mahasiswa",
          data: jalurMasukData,
          backgroundColor: "#17C653",
          borderColor: "#17C653",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Function to display Jenis Kelamin data
function displayJenisKelamin(dataJenisKelamin) {


  const jenisKelaminData = dataJenisKelamin[0];
  const jenisKelaminChartLabels = ["Laki-laki", "Perempuan"];
  const jenisKelaminChartData = [
    parseInt(jenisKelaminData.lakilaki),
    parseInt(jenisKelaminData.perempuan),
  ];

  const total = document.getElementById("total");
  total.innerHTML = `${jenisKelaminData.mahasiswa}`;

  // Populate table
  const jenisKelaminTable = document.getElementById("jenisKelaminTable");
  jenisKelaminTable.innerHTML = ""; // Clear the table before appending
  jenisKelaminTable.innerHTML += `
      <tr>
          <td>${jenisKelaminData.nama}</td>
          <td>${jenisKelaminData.lakilaki}</td>
          <td>${jenisKelaminData.perempuan}</td>
          <td>${jenisKelaminData.mahasiswa}</td>
      </tr>
  `;

  // Create pie chart for Jenis Kelamin
  const ctxJenisKelamin = document
    .getElementById("jenisKelaminChart")
    .getContext("2d");
  new Chart(ctxJenisKelamin, {
    type: "pie",
    data: {
      labels: jenisKelaminChartLabels,
      datasets: [
        {
          data: jenisKelaminChartData,
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
          borderWidth: 1,
        },
      ],
    },
  });
}

// Call fetchData when the page loads
fetchData();
