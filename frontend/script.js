document.getElementById("loadButton").addEventListener("click", async () => {
  const response = await fetch("/api/students");
  const students = await response.json();
  const tbody = document.querySelector("#studentsTable tbody");
  tbody.innerHTML = "";
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.id}</td><td>${student.name}</td>`;
    tbody.appendChild(row);
  });
});

document.getElementById("saludar").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const response = await fetch(`/api/greet?name=${name}`);
  const saludo = await response.json();
  document.getElementById("aaa").textContent = saludo.message;
});