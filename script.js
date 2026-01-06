const data = [
  { service: "Auth Service", uptime: "99.98%" },
  { service: "Billing Service", uptime: "99.80%" },
  { service: "API Gateway", uptime: "99.99%" }
];

const tbody = document.getElementById("services");

data.forEach(s => {
  const slaOk = parseFloat(s.uptime) >= 99.9;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${s.service}</td>
    <td>${s.uptime}</td>
    <td class="${slaOk ? "ok" : "risk"}">
      ${slaOk ? "Within SLA" : "SLA Risk"}
    </td>
  `;
  tbody.appendChild(row);
});
