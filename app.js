const container = document.getElementById("semestres-container");

function renderMalla() {
  container.innerHTML = "";
  let totalMaterias = 0;
  let materiasAprobadas = 0;
  const aprobadas = JSON.parse(localStorage.getItem("aprobadas") || "[]");

  malla.forEach(({ semestre, materias }) => {
    const sem = document.createElement("div");
    sem.className = "semestre";
    sem.innerHTML = <h2>Semestre ${semestre}</h2>;

    materias.forEach((mat) => {
      const div = document.createElement("div");
      div.className = "materia";
      div.textContent = ${mat.nombre} (${mat.creditos}cr);
      totalMaterias++;

      const aprobada = aprobadas.includes(mat.codigo);
      const desbloqueada = !mat.prerequisitos || mat.prerequisitos.every(p => aprobadas.includes(p));

      if (!desbloqueada && !aprobada) {
        div.classList.add("bloqueada");
      } else if (aprobada) {
        div.classList.add("aprobada");
        materiasAprobadas++;
      }

      div.onclick = () => {
        if (!desbloqueada) return;
        if (aprobada) {
          const index = aprobadas.indexOf(mat.codigo);
          aprobadas.splice(index, 1);
        } else {
          aprobadas.push(mat.codigo);
        }
        localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
        renderMalla();
      };

      sem.appendChild(div);
    });

    container.appendChild(sem);
  });

  const progreso = (materiasAprobadas / totalMaterias) * 100;
  document.getElementById("progress").style.width = ${progreso}%;
}

renderMalla();
