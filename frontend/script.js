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
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim() || ("name");
  const resultP = document.getElementById("aaa");

  try {
    const response = await fetch(`/api/greet?name=${encodeURIComponent(name)}`);
    
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    
    const data = await response.json();
    resultP.textContent = data.message;
    resultP.style.color = "green";
  } catch (error) {
    console.error(error);
    resultP.textContent = "Error al obtener el saludo. ¿Está el backend funcionando?";
    resultP.style.color = "red";
  }
});

document.getElementById("addStudentBtn").addEventListener("click", async () => {
  const input = document.getElementById("newStudentName");
  const resultP = document.getElementById("addResult");
  const name = input.value.trim();

  if (!name) {
    resultP.textContent = "Por favor ingresa un nombre";
    resultP.style.color = "red";
    return;
  }

  try {
    const response = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error al agregar estudiante");
    }

    const newStudent = await response.json();

    resultP.textContent = `Estudiante agregado: ${newStudent.name} (ID: ${newStudent.id})`;
    resultP.style.color = "green";
    input.value = "";

    // Actualizar automáticamente la tabla
    document.getElementById("loadButton").click();

  } catch (error) {
    console.error(error);
    resultP.textContent = "Error: " + error.message;
    resultP.style.color = "red";
  }
});