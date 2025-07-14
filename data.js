// Materias por semestre con código, nombre, créditos y prerrequisitos
const malla = [
  {
    semestre: 1,
    materias: [
      { codigo: "GES101", nombre: "Fundamentos de Administración", creditos: 3 },
      { codigo: "GES102", nombre: "Contabilidad General", creditos: 3 },
      { codigo: "GES103", nombre: "Matemáticas I", creditos: 4 },
      { codigo: "GES104", nombre: "Economía General", creditos: 3 },
      { codigo: "GES105", nombre: "Cátedra Minuto de Dios", creditos: 1 },
    ],
  },
  {
    semestre: 2,
    materias: [
      { codigo: "GES201", nombre: "Gestión del Talento Humano", creditos: 3, prerequisitos: ["GES101"] },
      { codigo: "GES202", nombre: "Contabilidad de Costos", creditos: 3, prerequisitos: ["GES102"] },
      { codigo: "GES203", nombre: "Matemáticas II", creditos: 4, prerequisitos: ["GES103"] },
      { codigo: "GES204", nombre: "Estadística I", creditos: 3 },
      { codigo: "GES205", nombre: "Emprendimiento", creditos: 2 },
    ],
  },
  {
    semestre: 3,
    materias: [
      { codigo: "GES301", nombre: "Administración Financiera", creditos: 3, prerequisitos: ["GES202"] },
      { codigo: "GES302", nombre: "Estadística II", creditos: 3, prerequisitos: ["GES204"] },
      { codigo: "GES303", nombre: "Legislación Comercial", creditos: 2 },
      { codigo: "GES304", nombre: "Mercadeo", creditos: 2 },
      { codigo: "GES305", nombre: "Electiva I", creditos: 2 },
    ],
  },
  {
    semestre: 4,
    materias: [
      { codigo: "GES401", nombre: "Costos y Presupuestos", creditos: 3, prerequisitos: ["GES202"] },
      { codigo: "GES402", nombre: "Investigación de Mercados", creditos: 3, prerequisitos: ["GES304"] },
      { codigo: "GES403", nombre: "Formulación de Proyectos", creditos: 3 },
      { codigo: "GES404", nombre: "Gestión Documental", creditos: 2 },
      { codigo: "GES405", nombre: "Electiva II", creditos: 2 },
    ],
  },
  {
    semestre: 5,
    materias: [
      { codigo: "GES501", nombre: "Simulación Empresarial", creditos: 3 },
      { codigo: "GES502", nombre: "Salud Ocupacional", creditos: 2 },
      { codigo: "GES503", nombre: "Auditoría", creditos: 3, prerequisitos: ["GES301"] },
      { codigo: "GES504", nombre: "Planeación Estratégica", creditos: 2 },
      { codigo: "GES505", nombre: "Electiva III", creditos: 2 },
    ],
  },
  {
    semestre: 6,
    materias: [
      { codigo: "GES601", nombre: "Práctica Empresarial", creditos: 8 },
      { codigo: "GES602", nombre: "Ética Profesional", creditos: 2 },
      { codigo: "GES603", nombre: "Constitución y Democracia", creditos: 1 },
    ],
  },
  {
    semestre: 7,
    materias: [
      { codigo: "ADM701", nombre: "Gestión de la Calidad", creditos: 3 },
      { codigo: "ADM702", nombre: "Comercio Internacional", creditos: 3 },
      { codigo: "ADM703", nombre: "Gerencia del Servicio", creditos: 3 },
    ],
  },
  {
    semestre: 8,
    materias: [
      { codigo: "ADM801", nombre: "Gestión de la Innovación", creditos: 3 },
      { codigo: "ADM802", nombre: "Responsabilidad Social Empresarial", creditos: 3 },
      { codigo: "ADM803", nombre: "Electiva IV", creditos: 2 },
    ],
  },
  {
    semestre: 9,
    materias: [
      { codigo: "ADM901", nombre: "Formulación de Planes de Negocio", creditos: 4 },
      { codigo: "ADM902", nombre: "Seminario de Investigación", creditos: 2 },
    ],
  },
  {
    semestre: 10,
    materias: [
      { codigo: "ADM1001", nombre: "Trabajo de Grado", creditos: 8 },
    ],
  },
];
