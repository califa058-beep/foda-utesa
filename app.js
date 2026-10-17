/**
 * UTESA - Generador Institucional de Análisis FODA
 * Sistema Corporativo - Formato Oficial para Directores de Carrera
 */

// Estado global de la aplicación
const state = {
  // Datos Generales
  tipoUnidad: "Carrera", // Carrera, Coordinación, Departamento, Área Académica, Dirección, Unidad
  cargo: "Director(a)",
  institucion: "Universidad Tecnológica de Santiago (UTESA), Sede",
  facultad: "Arquitectura e Ingenierías",
  carrera: "Ingeniería Eléctrica",
  siglas: "IEL",
  director: "Dr. Arcadio Rodríguez",
  periodo: "Año académico 2026 (enero – octubre)",
  ano: "2026",
  fecha: "13 de octubre de 2026",
  fuentes: "Evidencias del POA 2026, Calendario de Actividades Interdisciplinarias 2026, comunicación a la Vicerrectoría Académica sobre los talleres C-107 y C-208 (21 de julio de 2026), información de la Dirección y marco normativo y sectorial del país",
  
  // Factores FODA (Listas)
  fortalezas: [
    "Programas de asignaturas en actualización por competencias, con certificación del Departamento de Currículo (electivas IEL-973 e IEL-974, 2026).",
    "Taller C-107 de Instalaciones Eléctricas y Domótica, con módulo de domótica operativo y técnicamente terminado, orientado a la eficiencia energética (ODS 7, 11 y 13).",
    "Incorporación del análisis con MATLAB en la formación de los estudiantes de IEL.",
    "Vinculación activa con empresas del sector: taller técnico con ABB y visita técnica al Caribbean Industrial Park.",
    "Investigación estudiantil desde la asignatura Proyecto Integrador, presentada en el XXI Congreso Internacional de Investigación Científica (XXI CIC-2026).",
    "Dirección con artículos científicos publicados en LACCEI 2026 sobre energía nuclear y los tratados, acuerdos y regulaciones nucleares de la República Dominicana.",
    "Proyecto de talleres modelo de eficiencia energética (C-107 y C-208), en estudio con estudiantes de Proyecto Integrador.",
    "Planificación de actividades interdisciplinarias por cuatrimestre y trabajo conjunto con Ingeniería Mecánica y Bienestar Estudiantil.",
    "Respaldo institucional de UTESA: 50 años de trayectoria y un sistema de gestión con seguimiento del POA en ISOTools."
  ],
  debilidades: [
    "No existe un taller de Circuitos Eléctricos II (corriente alterna) ni un taller propio de Máquinas Eléctricas, lo que limita las prácticas que complementan la teoría.",
    "Máquinas Eléctricas y Controles Eléctricos comparten el Taller C-208, que solo permite impartir una asignatura a la vez.",
    "El Taller C-107 no tiene climatización y está junto a un área de paso ruidosa, lo que obliga a trabajar con la puerta abierta.",
    "Dos paneles solares fotovoltaicos de prácticas están sin uso en el Taller C-107.",
    "Las evidencias no registran de forma sistemática la cantidad de participantes ni la evaluación de las actividades.",
    "La organización de las actividades se concentra en la Dirección de la carrera, y la vinculación con empresas no está respaldada por convenios formales."
  ],
  oportunidades: [
    "Expansión de las energías renovables, impulsada por la Ley 57-07 de incentivo a las energías renovables.",
    "Pacto Nacional para la Reforma del Sector Eléctrico 2021–2030, que exige modernizar redes, reducir pérdidas y formar profesionales.",
    "Crecimiento de la movilidad eléctrica, incentivada por la Ley 103-13.",
    "Interés nacional en las aplicaciones nucleares pacíficas: Viceministerio de Energía Nuclear (Ley 100-13), misión ORPAS del OIEA (2025) e intención de una ley nuclear.",
    "Empresas internacionales dispuestas a capacitar y parques industriales cercanos que ofrecen escenarios de práctica.",
    "Congresos, redes académicas (LACCEI) y fondos de investigación nacionales (MESCyT) para divulgar y financiar proyectos."
  ],
  amenazas: [
    "Competencia de otras universidades que ofrecen ingenierías afines en Santiago y en el país.",
    "Cambio tecnológico acelerado (renovables, electrónica de potencia, digitalización) que exige actualizar programas y equipos con rapidez.",
    "Alto costo del equipamiento de laboratorio especializado.",
    "Atracción de egresados y docentes por el mercado laboral externo y la emigración de talento.",
    "Dificultades financieras del sector eléctrico, que pueden limitar la inversión y la oferta de prácticas.",
    "Dependencia de la cooperación de empresas y organismos externos para las actividades prácticas."
  ],

  // Secciones generadas / editables
  introduccion: "",
  metodologia: "",
  analisisFortalezas: "",
  analisisDebilidades: "",
  analisisOportunidades: "",
  analisisAmenazas: "",
  estrategiasFO: "",
  estrategiasDO: "",
  estrategiasFA: "",
  estrategiasDA: "",
  conclusion: ""
};

/**
 * Normaliza y devuelve los textos y etiquetas gramaticales según el tipo de unidad
 * (Carrera, Coordinación, Departamento, Área Académica, Dirección, Unidad)
 */
function getUnitInfo() {
  const tipo = state.tipoUnidad || "Carrera";
  const rawName = (state.carrera || "").trim();
  const cargoRaw = (state.cargo || "").trim();

  // Limpiar posibles duplicaciones si el usuario escribió "Departamento de Matemáticas" y seleccionó "Departamento"
  const cleanName = rawName
    .replace(/^(carrera de |carrera |coordinación de |coordinacion de |coordinación |coordinacion |departamento de |departamento |área académica de |area academica de |área de |area de |dirección de |direccion de |dirección |direccion |unidad de |unidad )/i, "")
    .trim();

  const displayName = cleanName || rawName || "Unidad Académica";

  let displayTitle = "";
  let nounPhrase = "";
  let defaultCargo = "";
  let metaLabel = "Carrera / Unidad";

  switch (tipo) {
    case "Coordinación":
      displayTitle = `Coordinación de ${displayName}`;
      nounPhrase = `la Coordinación de ${displayName}`;
      defaultCargo = "Coordinador(a)";
      metaLabel = "Coordinación";
      break;
    case "Departamento":
      displayTitle = `Departamento de ${displayName}`;
      nounPhrase = `el Departamento de ${displayName}`;
      defaultCargo = "Director(a) de Departamento";
      metaLabel = "Departamento";
      break;
    case "Área Académica":
      displayTitle = `Área Académica de ${displayName}`;
      nounPhrase = `el Área Académica de ${displayName}`;
      defaultCargo = "Coordinador(a) de Área";
      metaLabel = "Área Académica";
      break;
    case "Dirección":
      displayTitle = `Dirección de ${displayName}`;
      nounPhrase = `la Dirección de ${displayName}`;
      defaultCargo = "Director(a)";
      metaLabel = "Dirección";
      break;
    case "Unidad":
      displayTitle = `Unidad de ${displayName}`;
      nounPhrase = `la Unidad de ${displayName}`;
      defaultCargo = "Encargado(a) de Unidad";
      metaLabel = "Unidad";
      break;
    case "Carrera":
    default:
      displayTitle = `Carrera de ${displayName}`;
      nounPhrase = `la carrera de ${displayName}`;
      defaultCargo = "Director(a)";
      metaLabel = "Carrera";
      break;
  }

  const effectiveCargo = cargoRaw || defaultCargo;

  return {
    tipo,
    name: displayName,
    displayTitle,
    nounPhrase,
    cargo: effectiveCargo,
    metaLabel,
    siglas: state.siglas ? `(${state.siglas})` : ""
  };
}

// Alias de seguridad
function getActiveUnit() {
  return getUnitInfo();
}

// Plantillas predeterminadas de ejemplo
const templates = {
  iel: {
    tipoUnidad: "Carrera",
    cargo: "Director(a)",
    carrera: "Ingeniería Eléctrica",
    siglas: "IEL",
    facultad: "Arquitectura e Ingenierías",
    director: "Dr. Arcadio Rodríguez",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "13 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, Calendario de Actividades Interdisciplinarias 2026, comunicación a la Vicerrectoría Académica sobre los talleres C-107 y C-208 (21 de julio de 2026), información de la Dirección y marco normativo y sectorial del país",
    fortalezas: [
      "Programas de asignaturas en actualización por competencias, con certificación del Departamento de Currículo (electivas IEL-973 e IEL-974, 2026).",
      "Taller C-107 de Instalaciones Eléctricas y Domótica, con módulo de domótica operativo y técnicamente terminado, orientado a la eficiencia energética (ODS 7, 11 y 13).",
      "Incorporación del análisis con MATLAB en la formación de los estudiantes de IEL.",
      "Vinculación activa con empresas del sector: taller técnico con ABB y visita técnica al Caribbean Industrial Park.",
      "Investigación estudiantil desde la asignatura Proyecto Integrador, presentada en el XXI Congreso Internacional de Investigación Científica (XXI CIC-2026).",
      "Dirección con artículos científicos publicados en LACCEI 2026 sobre energía nuclear y los tratados, acuerdos y regulaciones nucleares de la República Dominicana.",
      "Proyecto de talleres modelo de eficiencia energética (C-107 y C-208), en estudio con estudiantes de Proyecto Integrador.",
      "Planificación de actividades interdisciplinarias por cuatrimestre y trabajo conjunto con Ingeniería Mecánica y Bienestar Estudiantil.",
      "Respaldo institucional de UTESA: 50 años de trayectoria y un sistema de gestión con seguimiento del POA en ISOTools."
    ],
    debilidades: [
      "No existe un taller de Circuitos Eléctricos II (corriente alterna) ni un taller propio de Máquinas Eléctricas, lo que limita las prácticas que complementan la teoría.",
      "Máquinas Eléctricas y Controles Eléctricos comparten el Taller C-208, que solo permite impartir una asignatura a la vez.",
      "El Taller C-107 no tiene climatización y está junto a un área de paso ruidosa, lo que obliga a trabajar con la puerta abierta.",
      "Dos paneles solares fotovoltaicos de prácticas están sin uso en el Taller C-107.",
      "Las evidencias no registran de forma sistemática la cantidad de participantes ni la evaluación de las actividades.",
      "La organización de las actividades se concentra en la Dirección de la carrera, y la vinculación con empresas no está respaldada por convenios formales."
    ],
    oportunidades: [
      "Expansión de las energías renovables, impulsada por la Ley 57-07 de incentivo a las energías renovables.",
      "Pacto Nacional para la Reforma del Sector Eléctrico 2021–2030, que exige modernizar redes, reducir pérdidas y formar profesionales.",
      "Crecimiento de la movilidad eléctrica, incentivada por la Ley 103-13.",
      "Interés nacional en las aplicaciones nucleares pacíficas: Viceministerio de Energía Nuclear (Ley 100-13), misión ORPAS del OIEA (2025) e intención de una ley nuclear.",
      "Empresas internacionales dispuestas a capacitar y parques industriales cercanos que ofrecen escenarios de práctica.",
      "Congresos, redes académicas (LACCEI) y fondos de investigación nacionales (MESCyT) para divulgar y financiar proyectos."
    ],
    amenazas: [
      "Competencia de otras universidades que ofrecen ingenierías afines en Santiago y en el país.",
      "Cambio tecnológico acelerado (renovables, electrónica de potencia, digitalización) que exige actualizar programas y equipos con rapidez.",
      "Alto costo del equipamiento de laboratorio especializado.",
      "Atracción de egresados y docentes por el mercado laboral externo y la emigración de talento.",
      "Dificultades financieras del sector eléctrico, que pueden limitar la inversión y la oferta de prácticas.",
      "Dependencia de la cooperación de empresas y organismos externos para las actividades prácticas."
    ]
  },

  coi: {
    tipoUnidad: "Coordinación",
    cargo: "Coordinador(a) de Ingeniería",
    carrera: "Ingeniería",
    siglas: "COI",
    facultad: "Arquitectura e Ingenierías",
    director: "Ing. Roberto Almonte, M.Sc.",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede Santiago",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "16 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, reuniones mensuales de directores de escuelas de ingeniería, informes de uso de talleres comunes y laboratorios compartidos, reportes de retención estudiantil y seguimiento en ISOTools",
    fortalezas: [
      "Estructura de articulación transversal que coordina las escuelas de Civil, Eléctrica, Mecánica, Industrial y Sistemas.",
      "Comité de Proyectos Integradores Interdisciplinarios que fomenta soluciones de ingeniería aplicada a problemas comunitarios e industriales.",
      "Gestión centralizada y eficiente del calendario de visitas técnicas y conferencias magistrales conjuntas.",
      "Optimización en la programación horaria y asignación compartida de los laboratorios y talleres de simulación tecnológica.",
      "Supervisión estandarizada del cumplimiento de los Planes Operativos Anuales (POA) a través de ISOTools."
    ],
    debilidades: [
      "Dificultad periódica en la conciliación de horarios de laboratorios multidisciplinarios en horas de alta demanda.",
      "Procesos burocráticos internos para la adquisición de repuestos y mantenimiento preventivo de equipos pesados.",
      "Falta de un sistema informático integrado para el control de inventario de equipos y herramientas entre escuelas afines.",
      "Sobrecarga administrativa en la coordinación por la gestión simultánea de múltiples programas de ingeniería."
    ],
    oportunidades: [
      "Creciente auge de parques industriales, zonas francas tecnológicas y proyectos de infraestructura en la región del Cibao.",
      "Alianzas multisectoriales y convenios marco con el Colegio Dominicano de Ingenieros, Arquitectos y Agrimensores (CODIA) y gremios industriales.",
      "Convocatorias de fondos concursables del MESCyT (FONDOCyT) para proyectos de investigación e innovación tecnológica interdisciplinaria.",
      "Programas internacionales de movilidad docente y acreditación regional de carreras de ingeniería (GCREAS / ABET)."
    ],
    amenazas: [
      "Oferta competitiva de programas especializados de ingeniería por universidades públicas y privadas de la región.",
      "Velocidad acelerada de actualización del instrumental tecnológico industrial frente a los presupuestos de reposición institucional.",
      "Fluctuaciones macroeconómicas que impactan la disponibilidad de plazas de pasantía en el sector de la construcción y manufactura.",
      "Migración de talentos docentes altamente calificados hacia el ejercicio profesional en el mercado privado internacional."
    ]
  },

  mat: {
    tipoUnidad: "Departamento",
    cargo: "Director(a) de Departamento",
    carrera: "Matemáticas",
    siglas: "MAT",
    facultad: "Facultad de Ciencias y Humanidades / Ciencias Básicas",
    director: "Lic. Miguelina Santos, M.Sc.",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede Santiago",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "16 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, estadísticas de rendimiento y aprobación en asignaturas de ciclo básico (Álgebra, Cálculo, Estadística), informes de asesorías y tutorías académicas y encuestas de satisfacción estudiantil",
    fortalezas: [
      "Cuerpo docente con amplia experiencia pedagógica y posgrados en enseñanza de las matemáticas y estadística aplicada.",
      "Programa institucional de tutorías y asesorías académicas permanentes para estudiantes de nuevo ingreso y asignaturas críticas.",
      "Estandarización de contenidos, programas analíticos y guías de ejercicios para todo el ciclo básico universitario.",
      "Integración de herramientas de software computacional (GeoGebra, MATLAB, Wolfram) en las asignaturas de cálculo y álgebra lineal.",
      "Alto compromiso con la nivelación estudiantil y coordinación estrecha con las facultades de Ingenierías y Negocios."
    ],
    debilidades: [
      "Tasas significativas de reprobación y rezago en asignaturas de cálculo inicial por deficiencias formativas del nivel secundario.",
      "Disponibilidad limitada de aulas y laboratorios equipados con computadoras dedicadas exclusivamente al modelado matemático.",
      "Baja participación del cuerpo profesoral en publicaciones científicas arbitradas e investigaciones puras o aplicadas.",
      "Resistencia de algunos docentes tradicionales a la adopción de metodologías activas y evaluación por competencias."
    ],
    oportunidades: [
      "Alta demanda de competencias cuantitativas, ciencia de datos y pensamiento analítico en todas las profesiones modernas.",
      "Plataformas globales de aprendizaje adaptativo e inteligencia artificial para personalización del estudio de las matemáticas.",
      "Proyectos conjuntos de investigación aplicada y modelado con escuelas de economía, medicina e ingenierías.",
      "Fondos de capacitación continua docente y becas de especialización ofrecidas por el MESCyT e INAFOCAM."
    ],
    amenazas: [
      "Profundas brechas de competencias lógico-matemáticas en los egresados del sistema de educación media nacional.",
      "Desmotivación y ansiedad matemática generalizada entre los estudiantes de primer año que impacta la retención.",
      "Uso indiscriminado y acrítico de herramientas automáticas de IA generativa para resolver tareas sin razonamiento conceptual.",
      "Escasez nacional de profesionales graduados en matemáticas puras con vocación docente para relevo generacional."
    ]
  },

  fis: {
    tipoUnidad: "Departamento",
    cargo: "Director(a) de Departamento",
    carrera: "Física",
    siglas: "FIS",
    facultad: "Facultad de Ciencias y Humanidades / Ciencias Básicas",
    director: "Fís. Juan Pablo Taveras, M.Sc.",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede Santiago",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "16 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, bitácoras de prácticas en los laboratorios de Física Mecánica, Ondas, Termodinámica y Electromagnetismo, y evaluaciones de seguridad en laboratorio",
    fortalezas: [
      "Laboratorios de Física Mecánica, Electromagnetismo y Óptica equipados con módulos experimentales funcionales.",
      "Manuales de prácticas de laboratorio actualizados y diseñados bajo enfoque de indagación científica y aplicación práctica.",
      "Personal docente capacitado en física teórica y experimental con dedicación a la orientación práctica del estudiante.",
      "Cumplimiento riguroso de protocolos de bioseguridad, cuidado del instrumental y normativas de trabajo experimental.",
      "Articulación curricular directa con los requerimientos formativos de las carreras de ingeniería y ciencias de la salud."
    ],
    debilidades: [
      "Capacidad física limitada de las mesas de laboratorio para atender el alto volumen de estudiantes en cuatrimestres pico.",
      "Sensores digitales e interfaces de adquisición de datos por computadora (PASCO / Vernier) en cantidad insuficiente.",
      "Falta de un taller de instrumentación y calibración rápida para reparación inmediata de componentes experimentales.",
      "Tiempo reducido entre sesiones continuas de laboratorio para el desmontaje y calibración de los experimentos."
    ],
    oportunidades: [
      "Integración de laboratorios virtuales y simulaciones interactivas (PhET Interactive Simulations) como complemento previo al experimento físico.",
      "Fomento a la investigación en energías alternativas, física médica y nanotecnología en cooperación con facultades aplicadas.",
      "Acceso a programas de capacitación en didáctica de las ciencias experimentales mediante convenios interinstitucionales.",
      "Participación en olimpiadas de física y ferias científicas universitarias para despertar vocaciones científicas."
    ],
    amenazas: [
      "Costos elevados de importación y reposición de instrumental de precisión y componentes de vidrio y óptica.",
      "Carencia de bases conceptuales de razonamiento inductivo y físico en una parte representativa de los alumnos ingresantes.",
      "Rápido desgaste de equipos electromecánicos por el uso masivo e intensivo diario en múltiples secciones.",
      "Dificultades en la adquisición oportuna de repuestos originales debido a retrasos en cadenas de suministro."
    ]
  },

  isc: {
    carrera: "Ingeniería de Sistemas Computacionales",
    siglas: "ISC",
    facultad: "Arquitectura e Ingenierías",
    director: "Ing. Carlos Mendoza, M.Sc.",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede Santiago",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "16 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, estadísticas de retención y egresados, reuniones del comité curricular, informes de laboratorios de cómputo y marco de demanda de talento TI de ADOEXPO y clúster tecnológico nacional",
    fortalezas: [
      "Plan de estudios renovado incorporando áreas emergentes: Inteligencia Artificial, Ciberseguridad y Computación en la Nube.",
      "Claustro docente activo en la industria tecnológica con certificaciones internacionales (AWS, Cisco, Oracle).",
      "Laboratorios de software equipados con conectividad de alta velocidad y acceso a entornos virtualizados.",
      "Participación destacada de estudiantes en hackathones y competencias de programación a nivel nacional.",
      "Comunidad activa de desarrollo estudiantil que fomenta proyectos de software libre y proyectos integradores multidisciplinarios."
    ],
    debilidades: [
      "Espacios de laboratorios de hardware y robótica con capacidad limitada en horas pico de matrícula.",
      "Baja formalización de acuerdos marco de pasantías con empresas internacionales de desarrollo de software.",
      "Falta de un sistema automatizado centralizado para el registro de horas de laboratorio y proyectos extracurriculares.",
      "Necesidad de aumentar la producción de artículos científicos indexados por parte de los docentes a tiempo completo."
    ],
    oportunidades: [
      "Alta demanda de ingenieros de software e inteligencia artificial en empresas nacionales y bajo modalidad de trabajo remoto internacional.",
      "Estrategia Nacional de Inteligencia Artificial (ENIA) y programas de becas y fomento de MESCyT.",
      "Alianzas con plataformas educativas globales (Google Cloud for Education, Microsoft Learn, AWS Academy) para certificaciones gratuitas o a bajo costo.",
      "Ecosistema creciente de startups y zonas francas tecnológicas en la región del Cibao y Santo Domingo."
    ],
    amenazas: [
      "Competencia agresiva de bootcamps y certificaciones cortas que desincentivan la finalización de carreras de grado tradicionales.",
      "Rotación frecuente de docentes especializados atraídos por salarios competitivos en el mercado corporativo internacional remoto.",
      "Obsolescencia acelerada del equipamiento informático ante los nuevos requerimientos de computación para IA y modelos masivos.",
      "Vulnerabilidades crecientes de ciberseguridad que exigen inversiones constantes en infraestructura segura."
    ]
  },

  med: {
    carrera: "Medicina",
    siglas: "MED",
    facultad: "Ciencias de la Salud",
    director: "Dr. Ramón Gutiérrez, Ph.D.",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede Santiago",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "16 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, reportes de rotaciones clínicas en hospitales docentes, acreditaciones internacionales y normativas del Ministerio de Salud Pública",
    fortalezas: [
      "Reconocimiento nacional e internacional del programa médico con más de cuatro décadas formando facultativos.",
      "Centro de Simulación Médica Avanzada con maniquíes de alta fidelidad para prácticas preclínicas seguras.",
      "Docentes especialistas con ejercicio clínico activo en los principales centros hospitalarios de la región.",
      "Convenios consolidados con hospitales docentes de la red del Servicio Nacional de Salud (SNS) y clínicas privadas.",
      "Alta tasa de aprobación de egresados en el Examen Nacional Único de Residencias Médicas (ENURM) y USMLE."
    ],
    debilidades: [
      "Cupos limitados para rotaciones clínicas especializadas en hospitales de tercer nivel ante la alta matrícula.",
      "Necesidad de mayor equipamiento y módulos en el laboratorio de destrezas quirúrgicas mínimamente invasivas.",
      "Registro manual de bitácoras clínicas de internado rotatorio que dificulta la auditoría ágil de competencias.",
      "Escasez de tiempo protegido para investigación biomédica de los médicos docentes debido a su carga asistencial."
    ],
    oportunidades: [
      "Proceso de acreditación médica internacional con agencias avaladas por WFME (World Federation for Medical Education).",
      "Demanda sostenida de médicos en sistemas de salud nacionales y oportunidades de subespecialización en el extranjero.",
      "Fondos de investigación en salud pública y bioseguridad auspiciados por organismos internacionales (OPS/OMS) y MESCyT.",
      "Apertura de nuevas tecnologías en telemedicina e informática médica en el sistema dominicano de seguridad social."
    ],
    amenazas: [
      "Saturación de plazas de internado y rotación clínica por competencia con otras escuelas de medicina del país.",
      "Cambios regulatorios en los requisitos de habilitación y homologación de títulos en el extranjero.",
      "Costos elevados para la actualización y mantenimiento de simuladores médicos de alta tecnología.",
      "Impacto de emergencias epidemiológicas y saturación del sistema de salud sobre el cronograma de prácticas clínicas."
    ]
  },

  // Ejemplo para ÁREA ACADÉMICA
  area: {
    tipoUnidad: "Área Académica",
    cargo: "Coordinador(a) de Área",
    carrera: "Ciencias Básicas y Experimentales",
    siglas: "CBE",
    facultad: "Facultad de Ciencias y Humanidades / Arquitectura e Ingenierías",
    director: "Fís. Juan Pablo Taveras, M.Sc.",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede Santiago",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "16 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, bitácoras de prácticas en los laboratorios de Física, Química y Biología, y evaluaciones de seguridad en laboratorio",
    fortalezas: [
      "Laboratorios de Física Mecánica, Electromagnetismo y Química Básica equipados con módulos experimentales funcionales.",
      "Manuales de prácticas de laboratorio actualizados y diseñados bajo enfoque de indagación científica y aplicación práctica.",
      "Personal docente altamente capacitado con dedicación a la orientación experimental del estudiante.",
      "Cumplimiento riguroso de protocolos de bioseguridad, cuidado del instrumental y normativas de trabajo experimental.",
      "Articulación curricular directa con los requerimientos formativos de las carreras de ingeniería y ciencias de la salud."
    ],
    debilidades: [
      "Capacidad física limitada de las mesas de laboratorio para atender el alto volumen de estudiantes en cuatrimestres pico.",
      "Sensores digitales e interfaces de adquisición de datos por computadora (PASCO / Vernier) en cantidad insuficiente.",
      "Falta de un taller de instrumentación y calibración rápida para reparación inmediata de componentes experimentales.",
      "Tiempo reducido entre sesiones continuas de laboratorio para el desmontaje y calibración de los experimentos."
    ],
    oportunidades: [
      "Integración de laboratorios virtuales y simulaciones interactivas (PhET Interactive Simulations) como complemento previo al experimento físico.",
      "Fomento a la investigación en energías alternativas, física médica y nanotecnología en cooperación con facultades aplicadas.",
      "Acceso a programas de capacitación en didáctica de las ciencias experimentales mediante convenios interinstitucionales.",
      "Participación en olimpiadas científicas y ferias universitarias para despertar vocaciones tempranas."
    ],
    amenazas: [
      "Costos elevados de importación y reposición de instrumental de precisión y componentes de vidrio y óptica.",
      "Carencia de bases conceptuales de razonamiento inductivo y físico en una parte representativa de los alumnos ingresantes.",
      "Rápido desgaste de equipos electromecánicos por el uso masivo e intensivo diario en múltiples secciones.",
      "Dificultades en la adquisición oportuna de repuestos originales debido a retrasos en cadenas de suministro."
    ]
  },

  // Ejemplo para DIRECCIÓN ACADÉMICA / ADMINISTRATIVA
  direccion: {
    tipoUnidad: "Dirección",
    cargo: "Director(a) de Bienestar y Servicios Estudiantiles",
    carrera: "Bienestar y Servicios Estudiantiles",
    siglas: "DBE",
    facultad: "Vicerrectoría Académica / Rectoría",
    director: "Licda. Carmen Luisa Ortega, M.A.",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede Santiago",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "16 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, estadísticas de atención psicológica, médica y de orientación vocacional, reportes de actividades deportivas y culturales e indicadores de satisfacción",
    fortalezas: [
      "Programas activos de acompañamiento psicopedagógico, orientación vocacional y apoyo emocional integral al estudiante.",
      "Oferta diversificada de actividades extracurriculares: grupos artísticos, selecciones deportivas y voluntariado social.",
      "Canales de comunicación directa y accesible con la comunidad estudiantil a través de plataformas institucionales.",
      "Equipo profesional multidisciplinario comprometido con la inclusión, la convivencia universitaria y los valores institucionales.",
      "Articulación constante con las direcciones de carrera para la detección temprana y prevención del abandono estudiantil."
    ],
    debilidades: [
      "Espacios físicos e instalaciones recreativas y deportivas que requieren ampliación para atender a la creciente población estudiantil.",
      "Plataforma digital de citas y seguimiento psicopedagógico con oportunidades de automatización e integración con el portal del estudiante.",
      "Cobertura limitada de programas de salud preventiva durante las jornadas nocturnas y fines de semana.",
      "Personal especializado insuficiente en proporción a la matrícula total para atención personalizada inmediata."
    ],
    oportunidades: [
      "Alianzas interinstitucionales con el Ministerio de la Juventud, Ministerio de Deportes y organismos de salud comunitaria.",
      "Campañas digitales de salud mental universitaria, bienestar integral y estilos de vida saludables.",
      "Fondos de patrocinio de empresas privadas para becas deportivas, culturales y equipamiento de áreas comunes.",
      "Programas de liderazgo juvenil y voluntariado vinculados a los Objetivos de Desarrollo Sostenible (ODS)."
    ],
    amenazas: [
      "Incremento de problemas de salud mental, estrés y ansiedad postpandemia en la población universitaria juvenil.",
      "Limitaciones presupuestarias para la remodelación y mantenimiento de grandes instalaciones deportivas.",
      "Factores socioeconómicos externos que inciden en la deserción escolar antes de recibir orientación universitaria.",
      "Baja participación en actividades presenciales extracurriculares de estudiantes con jornadas laborales extensas."
    ]
  },

  // Ejemplo para UNIDAD TÉCNICA O DE APOYO
  unidad: {
    tipoUnidad: "Unidad",
    cargo: "Encargado(a) de Unidad",
    carrera: "Tecnología Educativa y Recursos Virtuales",
    siglas: "UTEV",
    facultad: "Vicerrectoría Académica / Dirección de Tecnología",
    director: "Ing. Marcos Peña, M.Ed.",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede Santiago",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "16 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, métricas de disponibilidad y uso del Campus Virtual, reportes de tickets de soporte técnico a docentes y alumnos, e inventario tecnológico",
    fortalezas: [
      "Plataforma de Campus Virtual estable con alta disponibilidad (99.8%) y soporte multi-dispositivo.",
      "Programa permanente de capacitación docente en herramientas tecno-pedagógicas e inteligencia artificial aplicada a la enseñanza.",
      "Mesa de ayuda y soporte técnico ágil para la resolución de incidencias en aulas virtuales y plataformas de evaluación.",
      "Diseño de recursos multimedia estandarizados para asignaturas semipresenciales y virtuales.",
      "Coordinación estrecha con la Dirección de Currículo para la mediación pedagógica digital."
    ],
    debilidades: [
      "Tiempos de respuesta lentos en soporte técnico durante las primeras semanas de inicio de cuatrimestre por alta concurrencia.",
      "Brecha en las competencias digitales avanzadas de un porcentaje de docentes de larga trayectoria.",
      "Falta de estudios de analítica de datos del aprendizaje (Learning Analytics) para predecir rendimiento académico.",
      "Limitación en licencias de software educativo especializado para asignaturas de posgrado."
    ],
    oportunidades: [
      "Estrategia de transformación digital educativa e incorporación institucional de modelos de IA generativa para el aprendizaje.",
      "Convenios con proveedores mundiales de tecnología educativa (Google for Education, Microsoft Edu) para almacenamiento y herramientas en la nube.",
      "Demanda en aumento de programas de educación a distancia, micro-credenciales y diplomados virtuales para el mercado nacional e internacional.",
      "Fondos de cooperación para modernización de aulas híbridas y laboratorios multimedia."
    ],
    amenazas: [
      "Riesgos de ciberseguridad, ataques de denegación de servicio (DDoS) o filtración de datos que amenacen la continuidad del servicio.",
      "Dependencia de proveedores externos de conectividad y servidores en la nube con tarifas sujetas a variaciones cambiarias.",
      "Resistencia cultural al cambio metodológico en docentes renuentes a la virtualidad.",
      "Rápida obsolescencia de plataformas de software educativo frente a las innovaciones del mercado."
    ]
  }
};

// Aliases para que tanto las claves por área como las anteriores funcionen transparentemente
templates.carrera = templates.iel;
templates.coordinacion = templates.coi;
templates.departamento = templates.mat;
templates.fis = templates.area;

/**
 * Motor de Generación Inteligente
 * Crea automáticamente las secciones 1, 2, 4 (4.1 a 4.4), 5 (FO, DO, FA, DA) y 6 (Conclusión)
 * con redacción formal, ejecutiva e institucional adaptada a los datos de la carrera.
 */
function generateDocumentContent() {
  const u = getUnitInfo();
  const c = u.name;
  const s = u.siglas;
  const y = state.ano || "2026";
  const f = state.facultad || "la Facultad correspondiente";

  // 1. Introducción
  state.introduccion = `El análisis FODA es una herramienta de planificación estratégica que identifica los factores internos de una organización (fortalezas y debilidades) y los factores externos de su entorno (oportunidades y amenazas). Este documento presenta el análisis FODA de ${u.nounPhrase} ${s} de UTESA para el año académico ${y}, con el propósito de orientar la planificación operativa, la mejora continua de la gestión institucional y la toma de decisiones estratégicas del área.`;

  // 2. Metodología
  const fuentesTexto = state.fuentes ? state.fuentes : `las evidencias de cumplimiento del Plan Operativo Anual (POA), la documentación de actividades académicas e interdisciplinarias, y los informes de gestión de ${u.nounPhrase}`;
  state.metodologia = `El análisis se elaboró a partir de cuatro fuentes: (1) las evidencias de cumplimiento del Plan Operativo Anual ${y} de ${u.nounPhrase}; (2) el Calendario de Actividades Interdisciplinarias y Operativas ${y}; (3) las comunicaciones formales remitidas a las autoridades académicas sobre la gestión de recursos, talleres, laboratorios y cuerpo docente; y (4) el marco normativo, curricular y sectorial del país vinculado a su ámbito de acción. Los factores internos se derivan de estas evidencias; los externos, de las políticas institucionales y tendencias del sector. Se recomienda validar el análisis con el equipo docente, directivo y las áreas vinculadas.`;

  // 4.1 Análisis de Fortalezas
  const fList = state.fortalezas;
  const fSummary = fList.slice(0, 3).map(item => item.replace(/\.$/, '')).join(", ");
  state.analisisFortalezas = `La principal fortaleza de ${u.nounPhrase} en ${y} es la combinación estratégica de actualización pedagógica y curricular, optimización de recursos formativos, vinculación activa con la comunidad y el sector productivo, y fortalecimiento de capacidades técnicas. Se destacan de forma prioritaria: ${fSummary || 'la actualización constante de los procesos y el compromiso del cuerpo profesional'}. El respaldo institucional de UTESA, con su trayectoria de medio siglo de excelencia y su sistema de gestión articulado al POA, garantiza la continuidad y el fortalecimiento continuo de estas capacidades institucionales.`;

  // 4.2 Análisis de Debilidades
  const dList = state.debilidades;
  const dSummary = dList.slice(0, 3).map(item => item.replace(/\.$/, '')).join("; ");
  state.analisisDebilidades = `La debilidad más importante radica en la optimización de los espacios especializados y la consolidación de procesos de gestión operativa. Específicamente, se requiere atender: ${dSummary || 'la ampliación de áreas prácticas y la formalización de procesos internos'}. En el ámbito de la gestión, las evidencias aún requieren un registro más sistemático de participantes y evaluación del impacto de las actividades, evitando la sobrecarga de tareas operativas y promoviendo la formalización de acuerdos interdepartamentales y con sectores externos.`;

  // 4.3 Análisis de Oportunidades
  const oList = state.oportunidades;
  const oSummary = oList.slice(0, 3).map(item => item.replace(/\.$/, '')).join("; ");
  state.analisisOportunidades = `El entorno nacional e institucional es altamente favorable para ${u.nounPhrase}. La evolución del marco regulatorio, las políticas de innovación sectorial y los fondos de fomento abren oportunidades decisivas: ${oSummary || 'la creciente demanda de conocimientos especializados y la colaboración interinstitucional'}. Las entidades colaboradoras, empresas del sector productivo y redes académicas ofrecen escenarios idóneos para la articulación práctica, proyectos conjuntos y divulgación de resultados.`;

  // 4.4 Análisis de Amenazas
  const aList = state.amenazas;
  const aSummary = aList.slice(0, 3).map(item => item.replace(/\.$/, '')).join("; ");
  state.analisisAmenazas = `Las amenazas provienen de la intensa competencia académica e institucional a nivel regional y nacional, el ritmo acelerado del cambio tecnológico y el costo asociado al equipamiento especializado continuo. En particular, destacan: ${aSummary || 'la rápida evolución de los estándares del sector y las exigencias de modernización'}. Sin una inversión sostenida en recursos didácticos, plataformas tecnológicas y en la retención del talento humano calificado, el área podría enfrentar riesgos de pertinencia ante las nuevas demandas del entorno.`;

  // 5. Estrategias Cruzadas (FO, DO, FA, DA)
  // FO (Fortalezas para aprovechar Oportunidades)
  state.estrategiasFO = `1. Impulsar iniciativas conjuntas, docencia aplicada y líneas de investigación vinculadas a las prioridades del entorno y postular proyectos a fondos nacionales (MESCyT) y redes de cooperación. 2. Posicionar la infraestructura y buenas prácticas de ${u.nounPhrase} como modelos de referencia institucional para replicar su éxito en otros espacios universitarios. 3. Formalizar convenios marco de cooperación, pasantías y capacitación técnica con instituciones líderes y gremios profesionales. 4. Desarrollar programas de formación continua y proyectos interdisciplinarios que respondan a las demandas emergentes del país.`;

  // DO (Superar Debilidades aprovechando Oportunidades)
  state.estrategiasDO = `1. Gestionar la habilitación, ampliación y adecuación de nuevos espacios y recursos especializados aprovechando alianzas estratégicas y fondos de cooperación. 2. Implementar herramientas digitales de simulación y plataformas virtuales para complementar las actividades técnicas y formativas. 3. Integrar proyectos multidisciplinarios de estudiantes y docentes para la puesta en marcha, calibración y aprovechamiento óptimo de equipos y espacios de práctica. 4. Establecer mesas de trabajo interdepartamentales para cofinanciar equipamiento docente y agilizar la adopción de metodologías de vanguardia.`;

  // FA (Fortalezas para enfrentar Amenazas)
  state.estrategiasFA = `1. Destacar en la comunicación institucional y en la comunidad universitaria la alta solvencia pedagógica, la vinculación externa y los proyectos de impacto como sellos diferenciales de calidad. 2. Fomentar el trabajo interdisciplinario y el uso compartido de recursos técnicos en ${f} para optimizar costos y maximizar la eficiencia operativa. 3. Promover planes continuos de actualización y desarrollo para el personal docente y técnico con el propósito de mitigar la fuga de talentos y el desfase metodológico.`;

  // DA (Reducir Debilidades y evitar Amenazas)
  state.estrategiasDA = `1. Implementar un protocolo sistemático de registro digital de asistencia, resultados y encuestas de satisfacción en cada actividad para evidenciar el impacto real en el POA. 2. Dar seguimiento prioritario a las solicitudes de infraestructura, mantenimiento y actualización de instalaciones para garantizar condiciones idóneas de trabajo. 3. Distribuir la coordinación de iniciativas y comisiones de trabajo entre responsables por áreas disciplinares. 4. Diversificar los lazos institucionales con múltiples entidades para reducir la dependencia de un único sector colaborador.`;

  // 6. Conclusión
  state.conclusion = `${u.displayTitle} muestra en ${y} una base institucional sólida: procesos orientados a la calidad, recursos en continuo fortalecimiento, vinculación activa con la comunidad universitaria y el sector productivo, y avances significativos en el cumplimiento de sus objetivos. Su principal reto consiste en expandir y modernizar sus recursos prácticos y tecnológicos, además de sistematizar la documentación de evidencias y formalizar alianzas estratégicas. El contexto actual ofrece oportunidades propicias que el área puede capitalizar de forma planificada. Se recomienda validar formalmente este análisis con el equipo docente, directivo y los sectores afines, e incorporar estas estrategias como insumo prioritario para el Plan Operativo Anual (POA) ${parseInt(y, 10) + 1 || '2027'} y su correspondiente carga en la plataforma ISOTools.`;
}

// Inicialización de la aplicación
function initApp() {
  initSavedRepository();
  generateDocumentContent();
  renderForm();
  renderPreview();
  setupEventListeners();
  updateSavedBadgeCount();
}

// Renderiza los campos del formulario con los valores del estado
function renderForm() {
  const selTipo = document.getElementById('selectTipoUnidad');
  if (selTipo) selTipo.value = state.tipoUnidad || 'Carrera';

  const inpCargo = document.getElementById('inputCargo');
  if (inpCargo) inpCargo.value = state.cargo || 'Director(a)';

  document.getElementById('inputInstitucion').value = state.institucion;
  document.getElementById('inputFacultad').value = state.facultad;
  document.getElementById('inputCarrera').value = state.carrera;
  document.getElementById('inputSiglas').value = state.siglas;
  document.getElementById('inputDirector').value = state.director;
  document.getElementById('inputPeriodo').value = state.periodo;
  document.getElementById('inputAno').value = state.ano;
  document.getElementById('inputFecha').value = state.fecha;
  document.getElementById('inputFuentes').value = state.fuentes;

  renderFactorList('fortalezasList', state.fortalezas, 'fortalezas');
  renderFactorList('debilidadesList', state.debilidades, 'debilidades');
  renderFactorList('oportunidadesList', state.oportunidades, 'oportunidades');
  renderFactorList('amenazasList', state.amenazas, 'amenazas');

  // Textos generados / editables
  document.getElementById('textIntro').value = state.introduccion;
  document.getElementById('textMetodologia').value = state.metodologia;
  document.getElementById('textAnalisisFortalezas').value = state.analisisFortalezas;
  document.getElementById('textAnalisisDebilidades').value = state.analisisDebilidades;
  document.getElementById('textAnalisisOportunidades').value = state.analisisOportunidades;
  document.getElementById('textAnalisisAmenazas').value = state.analisisAmenazas;
  document.getElementById('textEstrategiasFO').value = state.estrategiasFO;
  document.getElementById('textEstrategiasDO').value = state.estrategiasDO;
  document.getElementById('textEstrategiasFA').value = state.estrategiasFA;
  document.getElementById('textEstrategiasDA').value = state.estrategiasDA;
  document.getElementById('textConclusion').value = state.conclusion;
}

// Renderiza una lista interactiva de viñetas para un cuadrante FODA con identificación visual clara
function renderFactorList(containerId, list, factorKey) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const meta = {
    fortalezas: { badge: 'bg-emerald-100 text-emerald-800 border-emerald-300', dot: 'bg-emerald-600', placeholder: 'Describa una fortaleza específica (ej: planes por competencias, talleres...)' },
    debilidades: { badge: 'bg-rose-100 text-rose-800 border-rose-300', dot: 'bg-rose-600', placeholder: 'Describa una debilidad o necesidad de mejora (ej: espacios de práctica...)' },
    oportunidades: { badge: 'bg-teal-100 text-teal-800 border-teal-300', dot: 'bg-teal-600', placeholder: 'Describa una oportunidad del entorno (ej: convenios, fondos MESCyT...)' },
    amenazas: { badge: 'bg-amber-100 text-amber-800 border-amber-300', dot: 'bg-amber-600', placeholder: 'Describa una amenaza externa (ej: competencia de universidades, cambios tecnológicos...)' }
  };

  const conf = meta[factorKey] || { badge: 'bg-slate-100 text-slate-700 border-slate-300', dot: 'bg-slate-500', placeholder: '' };

  list.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'flex items-start gap-2 mb-2 group bg-white/80 p-1.5 rounded-lg border border-slate-200 shadow-2xs hover:border-slate-300 transition';
    itemDiv.innerHTML = `
      <div class="flex items-center gap-1.5 px-2 py-1 rounded border text-[11px] font-bold select-none shrink-0 mt-0.5 ${conf.badge}" title="Viñeta ${index + 1}">
        <span class="w-2 h-2 rounded-full ${conf.dot}"></span>
        <span>• Viñeta ${index + 1}</span>
      </div>
      <textarea class="w-full text-xs p-2 border border-slate-200 rounded focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition outline-none resize-y" rows="2" placeholder="${conf.placeholder}" data-factor="${factorKey}" data-index="${index}">${item}</textarea>
      <button type="button" class="text-slate-400 hover:text-red-600 p-1.5 rounded transition self-start mt-0.5 hover:bg-red-50" title="Eliminar viñeta" onclick="removeFactorItem('${factorKey}', ${index})">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    container.appendChild(itemDiv);
  });
}

// Añade un nuevo ítem a la lista de un factor
window.addFactorItem = function(factorKey) {
  state[factorKey].push("");
  renderFactorList(factorKey + 'List', state[factorKey], factorKey);
  // Foco en el nuevo textarea
  const container = document.getElementById(factorKey + 'List');
  const textareas = container.querySelectorAll('textarea');
  if (textareas.length > 0) {
    textareas[textareas.length - 1].focus();
  }
};

// Elimina un ítem de la lista
window.removeFactorItem = function(factorKey, index) {
  state[factorKey].splice(index, 1);
  renderFactorList(factorKey + 'List', state[factorKey], factorKey);
  renderPreview();
};

// Carga una plantilla predefinida
window.loadTemplate = function(tplKey) {
  const tpl = templates[tplKey];
  if (!tpl) return;
  state.tipoUnidad = tpl.tipoUnidad || "Carrera";
  state.cargo = tpl.cargo || "Director(a)";
  state.institucion = tpl.institucion;
  state.facultad = tpl.facultad;
  state.carrera = tpl.carrera;
  state.siglas = tpl.siglas;
  state.director = tpl.director;
  state.periodo = tpl.periodo;
  state.ano = tpl.ano;
  state.fecha = tpl.fecha;
  state.fuentes = tpl.fuentes;
  state.fortalezas = [...tpl.fortalezas];
  state.debilidades = [...tpl.debilidades];
  state.oportunidades = [...tpl.oportunidades];
  state.amenazas = [...tpl.amenazas];

  generateDocumentContent();
  renderForm();
  renderPreview();
  showToast(`Plantilla "${tpl.carrera}" cargada con éxito.`);
};

// Limpia el formulario para empezar de cero
window.clearForm = function() {
  if (confirm("¿Deseas vaciar el formulario para empezar desde cero?")) {
    state.tipoUnidad = "Carrera";
    state.cargo = "Director(a)";
    state.carrera = "";
    state.siglas = "";
    state.director = "";
    state.periodo = "Año académico 2026 (enero – octubre)";
    state.ano = "2026";
    state.fecha = new Date().toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' });
    state.fuentes = "Evidencias del Plan Operativo Anual (POA), calendario de actividades y reuniones operativas";
    state.fortalezas = [""];
    state.debilidades = [""];
    state.oportunidades = [""];
    state.amenazas = [""];
    generateDocumentContent();
    renderForm();
    renderPreview();
    showToast("Formulario en blanco listo.");
  }
};

// Regenera los textos del análisis con la lógica inteligente
window.regenerateAnalysis = function() {
  generateDocumentContent();
  renderForm();
  renderPreview();
  showToast("¡Análisis, estrategias cruzadas y conclusión actualizados!");
};

// Configuración de listeners para actualización reactiva en tiempo real
function setupEventListeners() {
  // Listener para tipo de unidad
  const selTipo = document.getElementById('selectTipoUnidad');
  if (selTipo) {
    selTipo.addEventListener('change', (e) => {
      state.tipoUnidad = e.target.value;
      const u = getUnitInfo();
      // Si el cargo era el predeterminado del tipo anterior o está vacío, actualizarlo
      const inpCargo = document.getElementById('inputCargo');
      if (inpCargo) {
        state.cargo = u.cargo;
        inpCargo.value = u.cargo;
      }
      generateDocumentContent();
      renderForm();
      renderPreview();
    });
  }

  // Listener para cargo
  const inpCargo = document.getElementById('inputCargo');
  if (inpCargo) {
    inpCargo.addEventListener('input', (e) => {
      state.cargo = e.target.value;
      renderPreview();
    });
  }

  const inputs = [
    'inputInstitucion', 'inputFacultad', 'inputCarrera', 'inputSiglas',
    'inputDirector', 'inputPeriodo', 'inputAno', 'inputFecha', 'inputFuentes'
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', (e) => {
        const key = id.replace('input', '').toLowerCase();
        if (key === 'institucion') state.institucion = e.target.value;
        if (key === 'facultad') state.facultad = e.target.value;
        if (key === 'carrera') {
          state.carrera = e.target.value;
          // Actualizar dinámicamente si el título cambió
          generateDocumentContent();
          document.getElementById('textIntro').value = state.introduccion;
          document.getElementById('textMetodologia').value = state.metodologia;
          document.getElementById('textConclusion').value = state.conclusion;
        }
        if (key === 'siglas') state.siglas = e.target.value;
        if (key === 'director') state.director = e.target.value;
        if (key === 'periodo') state.periodo = e.target.value;
        if (key === 'ano') state.ano = e.target.value;
        if (key === 'fecha') state.fecha = e.target.value;
        if (key === 'fuentes') state.fuentes = e.target.value;
        renderPreview();
      });
    }
  });

  // Delegación de eventos para textarea de factores
  document.addEventListener('input', (e) => {
    if (e.target && e.target.dataset && e.target.dataset.factor) {
      const factorKey = e.target.dataset.factor;
      const index = parseInt(e.target.dataset.index, 10);
      state[factorKey][index] = e.target.value;
      renderPreview();
    }
  });

  // Listeners para textos de análisis editados manualmente
  const textEdits = [
    { id: 'textIntro', key: 'introduccion' },
    { id: 'textMetodologia', key: 'metodologia' },
    { id: 'textAnalisisFortalezas', key: 'analisisFortalezas' },
    { id: 'textAnalisisDebilidades', key: 'analisisDebilidades' },
    { id: 'textAnalisisOportunidades', key: 'analisisOportunidades' },
    { id: 'textAnalisisAmenazas', key: 'analisisAmenazas' },
    { id: 'textEstrategiasFO', key: 'estrategiasFO' },
    { id: 'textEstrategiasDO', key: 'estrategiasDO' },
    { id: 'textEstrategiasFA', key: 'estrategiasFA' },
    { id: 'textEstrategiasDA', key: 'estrategiasDA' },
    { id: 'textConclusion', key: 'conclusion' }
  ];

  textEdits.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.addEventListener('input', (e) => {
        state[item.key] = e.target.value;
        renderPreview();
      });
    }
  });
}

// Renderiza la vista previa del documento HTML fiel al formato original UTESA
function renderPreview() {
  const container = document.getElementById('previewDocument');
  if (!container) return;

  const u = getUnitInfo();
  const c = u.name;
  const s = u.siglas;
  const y = state.ano || "2026";
  const headerImgSrc = window.UTESA_HEADER_BASE64 ? `data:image/png;base64,${window.UTESA_HEADER_BASE64}` : 'utesa_header.png';

  // Generación de listas HTML con viñetas institucionales y sangría francesa
  const makeUl = (list, type = 'pos') => {
    const valid = list.filter(item => item.trim().length > 0);
    if (valid.length === 0) return '<p class="text-xs text-slate-400 italic">Sin elementos registrados</p>';
    const bulletColor = type === 'pos' ? '#1E5E2A' : '#8B2816';
    return `<ul class="doc-swot-list">${valid.map(x => `
      <li class="doc-swot-item">
        <span class="doc-bullet" style="color: ${bulletColor}; font-weight: bold;">•</span>
        <span class="doc-swot-text">${escapeHtml(x)}</span>
      </li>
    `).join('')}</ul>`;
  };

  // Formateador para separar visualmente cada estrategia numerada (1. 2. 3. 4.)
  const formatStrategiesHtml = (text) => {
    if (!text) return '';
    const items = text.split(/(?=\b\d+\.\s+)/).map(s => s.trim()).filter(s => s.length > 0);
    if (items.length <= 1) return escapeHtml(text);
    return items.map(item => `
      <div class="mb-2.5 last:mb-0 leading-relaxed text-justify flex items-start gap-1.5">
        <span class="font-bold text-emerald-800 shrink-0 select-none">•</span>
        <span>${escapeHtml(item)}</span>
      </div>
    `).join('');
  };

  container.innerHTML = `
    <!-- Timbrado Institucional Oficial UTESA -->
    <div class="text-center mb-6">
      <img src="${headerImgSrc}" alt="Universidad Tecnológica de Santiago - UTESA" class="doc-header-img mx-auto" />
    </div>

    <!-- Título Principal -->
    <div class="doc-title-main">Análisis FODA de ${escapeHtml(u.displayTitle)} ${escapeHtml(s)}</div>
    <div class="doc-subtitle-1">Fortalezas, Oportunidades, Debilidades y Amenazas – ${escapeHtml(y)}</div>
    <div class="doc-subtitle-2">${escapeHtml(u.displayTitle)} ${escapeHtml(s)} – Universidad Tecnológica de Santiago (UTESA)</div>
    <div class="doc-date">Fecha: ${escapeHtml(state.fecha || '')}</div>

    <!-- Tabla de Metadatos -->
    <table class="doc-meta-table">
      <tbody>
        <tr>
          <th>Institución</th>
          <td>${escapeHtml(state.institucion || '')}</td>
        </tr>
        <tr>
          <th>Facultad / División</th>
          <td>${escapeHtml(state.facultad || '')}</td>
        </tr>
        <tr>
          <th>${escapeHtml(u.metaLabel)}</th>
          <td>${escapeHtml(c)} ${escapeHtml(s)}</td>
        </tr>
        <tr>
          <th>${escapeHtml(u.cargo)}</th>
          <td>${escapeHtml(state.director || '')}</td>
        </tr>
        <tr>
          <th>Período analizado</th>
          <td>${escapeHtml(state.periodo || '')}</td>
        </tr>
        <tr>
          <th>Fuentes</th>
          <td>${escapeHtml(state.fuentes || '')}</td>
        </tr>
      </tbody>
    </table>

    <!-- 1. Introducción -->
    <div class="doc-section-title">1. Introducción</div>
    <div class="doc-p">${escapeHtml(state.introduccion || '')}</div>

    <!-- 2. Metodología -->
    <div class="doc-section-title">2. Metodología</div>
    <div class="doc-p">${escapeHtml(state.metodologia || '')}</div>

    <!-- 3. Matriz FODA -->
    <div class="doc-section-title">3. Matriz FODA</div>
    <table class="doc-swot-table">
      <thead>
        <tr>
          <th class="doc-swot-th-pos">FACTORES POSITIVOS</th>
          <th class="doc-swot-th-neg">FACTORES NEGATIVOS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="doc-swot-subhdr-pos">FORTALEZAS (internas)</div>
            ${makeUl(state.fortalezas, 'pos')}
          </td>
          <td>
            <div class="doc-swot-subhdr-neg">DEBILIDADES (internas)</div>
            ${makeUl(state.debilidades, 'neg')}
          </td>
        </tr>
        <tr>
          <th class="doc-swot-th-pos">FACTORES POSITIVOS</th>
          <th class="doc-swot-th-neg">FACTORES NEGATIVOS</th>
        </tr>
        <tr>
          <td>
            <div class="doc-swot-subhdr-pos">OPORTUNIDADES (externas)</div>
            ${makeUl(state.oportunidades, 'pos')}
          </td>
          <td>
            <div class="doc-swot-subhdr-neg">AMENAZAS (externas)</div>
            ${makeUl(state.amenazas, 'neg')}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 4. Análisis de los factores -->
    <div class="doc-section-title">4. Análisis de los factores</div>
    
    <div class="doc-subsection-title">4.1 Fortalezas</div>
    <div class="doc-p">${escapeHtml(state.analisisFortalezas || '')}</div>

    <div class="doc-subsection-title">4.2 Debilidades</div>
    <div class="doc-p">${escapeHtml(state.analisisDebilidades || '')}</div>

    <div class="doc-subsection-title">4.3 Oportunidades</div>
    <div class="doc-p">${escapeHtml(state.analisisOportunidades || '')}</div>

    <div class="doc-subsection-title">4.4 Amenazas</div>
    <div class="doc-p">${escapeHtml(state.analisisAmenazas || '')}</div>

    <!-- 5. Estrategias derivadas (matriz FODA cruzada) -->
    <div class="doc-section-title">5. Estrategias derivadas (matriz FODA cruzada)</div>
    <table class="doc-cross-table">
      <thead>
        <tr>
          <th class="doc-cross-th" style="width: 28%;">Tipo de estrategia</th>
          <th class="doc-cross-th">Estrategias propuestas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="doc-cross-type">FO (fortalezas para aprovechar oportunidades)</td>
          <td class="doc-cross-desc">${formatStrategiesHtml(state.estrategiasFO || '')}</td>
        </tr>
        <tr>
          <td class="doc-cross-type">DO (superar debilidades aprovechando oportunidades)</td>
          <td class="doc-cross-desc">${formatStrategiesHtml(state.estrategiasDO || '')}</td>
        </tr>
        <tr>
          <td class="doc-cross-type">FA (fortalezas para enfrentar amenazas)</td>
          <td class="doc-cross-desc">${formatStrategiesHtml(state.estrategiasFA || '')}</td>
        </tr>
        <tr>
          <td class="doc-cross-type">DA (reducir debilidades y evitar amenazas)</td>
          <td class="doc-cross-desc">${formatStrategiesHtml(state.estrategiasDA || '')}</td>
        </tr>
      </tbody>
    </table>

    <!-- 6. Conclusión -->
    <div class="doc-section-title">6. Conclusión</div>
    <div class="doc-p">${escapeHtml(state.conclusion || '')}</div>

    <!-- Espacio Oficial para Firma y Sello (Limpio para impresión) -->
    <div class="doc-signature-block">
      <div class="doc-signature-line"></div>
      <div class="doc-signature-name">${escapeHtml(state.director || 'Nombre del Responsable')}</div>
      <div class="doc-signature-role">${escapeHtml(u.cargo)} – ${escapeHtml(u.displayTitle)} ${escapeHtml(s)}</div>
    </div>

    <!-- Pie de Página Institucional -->
    <div class="doc-footer-container">
      <div>Av. Salvador Estrella Sadhalá, esq. Circunvalación, Santiago de los Caballeros, República Dominicana.</div>
      <div>Apartado Postal 685 | Teléfono: 809-582-7156 | E-mail: info.santiago@utesa.edu | RNC: 401-05261-1 | www.utesa.edu</div>
    </div>
  `;
}

// Utilidad para escapar HTML de forma segura
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Muestra notificación toast al usuario
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');
  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 3200);
}

/**
 * GENERACIÓN Y DESCARGA DEL DOCUMENTO WORD (.DOCX)
 * Implementa el estándar exacto de OpenXML con docx.js:
 * - Timbrado institucional con la imagen del encabezado
 * - Formato de tablas con colores corporativos (#1E5E2A y #8B2816)
 * - Títulos, metadatos, listas de viñetas y espaciados
 * - Pie de página institucional en cada página
 * - Bloque de firma limpio para firma física y sello
 */
window.downloadWordDocument = async function() {
  if (typeof window.docx === 'undefined') {
    alert("La librería de exportación a Word se está cargando. Por favor, reintenta en unos instantes.");
    return;
  }

  const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle, ShadingType, Header, Footer, ImageRun, UnderlineType } = window.docx;

  const btn = document.getElementById('btnDownloadWord');
  const originalText = btn ? btn.innerHTML : '';
  if (btn) btn.innerHTML = '⏳ Generando Word...';

  try {
    // Convertir la imagen base64 del encabezado en Uint8Array
    let headerImageRun = null;
    if (window.UTESA_HEADER_BASE64) {
      const binaryStr = atob(window.UTESA_HEADER_BASE64);
      const len = binaryStr.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
      }
      headerImageRun = new ImageRun({
        data: bytes,
        transformation: {
          width: 530,
          height: 83
        }
      });
    }

    // Estilos de bordes comunes
    const subtleBorder = {
      top: { style: BorderStyle.SINGLE, size: 4, color: "D1D5DB" },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: "D1D5DB" },
      left: { style: BorderStyle.SINGLE, size: 4, color: "D1D5DB" },
      right: { style: BorderStyle.SINGLE, size: 4, color: "D1D5DB" }
    };

    const noBorder = {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE }
    };

    const u = getUnitInfo();
    const c = u.name;
    const s = u.siglas;
    const y = state.ano || "2026";

    // 1. Tabla de Metadatos
    const metaRows = [
      ["Institución", state.institucion || ""],
      ["Facultad / División", state.facultad || ""],
      [u.metaLabel, `${c} ${s}`],
      [u.cargo, state.director || ""],
      ["Período analizado", state.periodo || ""],
      ["Fuentes", state.fuentes || ""]
    ].map(([label, val]) => new TableRow({
      children: [
        new TableCell({
          width: { size: 28, type: WidthType.PERCENTAGE },
          shading: { fill: "F9FAFB", type: ShadingType.CLEAR },
          borders: subtleBorder,
          margins: { top: 120, bottom: 120, left: 140, right: 140 },
          children: [new Paragraph({
            spacing: { line: 360, lineRule: "auto" },
            children: [new TextRun({ text: label, bold: true, size: 22, font: "Century Gothic", color: "111827" })]
          })]
        }),
        new TableCell({
          width: { size: 72, type: WidthType.PERCENTAGE },
          borders: subtleBorder,
          margins: { top: 120, bottom: 120, left: 140, right: 140 },
          children: [new Paragraph({
            spacing: { line: 360, lineRule: "auto" },
            alignment: AlignmentType.JUSTIFIED,
            children: [new TextRun({ text: val, size: 22, font: "Century Gothic", color: "27272A" })]
          })]
        })
      ]
    }));

    const metaTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: metaRows
    });

    // Función auxiliar para crear párrafos con viñetas institucionales nítidas en celdas Word
    const makeBulletsInCell = (items, isPositive = true) => {
      const valid = items.filter(t => t.trim().length > 0);
      if (valid.length === 0) {
        return [new Paragraph({
          spacing: { line: 360, lineRule: "auto" },
          children: [new TextRun({ text: "Sin elementos registrados", italics: true, size: 20, color: "9CA3AF", font: "Century Gothic" })]
        })];
      }
      return valid.map(item => new Paragraph({
        indent: { left: 300, hanging: 200 },
        alignment: AlignmentType.JUSTIFIED,
        spacing: { line: 360, lineRule: "auto", before: 60, after: 100 },
        children: [
          new TextRun({ text: "•  ", bold: true, color: isPositive ? "1E5E2A" : "8B2816", font: "Century Gothic", size: 22 }),
          new TextRun({ text: item, size: 22, font: "Century Gothic", color: "1F2937" })
        ]
      }));
    };

    // 2. Tabla Matriz FODA (2x2)
    const swotTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        // Cabecera Fila 1: Positivos / Negativos
        new TableRow({
          children: [
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              shading: { fill: "1E5E2A", type: ShadingType.CLEAR },
              borders: subtleBorder,
              margins: { top: 120, bottom: 120, left: 120, right: 120 },
              children: [new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "FACTORES POSITIVOS", bold: true, color: "FFFFFF", size: 22, font: "Century Gothic" })]
              })]
            }),
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              shading: { fill: "8B2816", type: ShadingType.CLEAR },
              borders: subtleBorder,
              margins: { top: 120, bottom: 120, left: 120, right: 120 },
              children: [new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "FACTORES NEGATIVOS", bold: true, color: "FFFFFF", size: 22, font: "Century Gothic" })]
              })]
            })
          ]
        }),
        // Contenido Fila 1: Fortalezas / Debilidades
        new TableRow({
          children: [
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              borders: subtleBorder,
              margins: { top: 140, bottom: 140, left: 140, right: 140 },
              children: [
                new Paragraph({
                  spacing: { after: 120 },
                  children: [new TextRun({ text: "FORTALEZAS (internas)", bold: true, color: "1E5E2A", size: 22, font: "Century Gothic" })]
                }),
                ...makeBulletsInCell(state.fortalezas, true)
              ]
            }),
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              borders: subtleBorder,
              margins: { top: 140, bottom: 140, left: 140, right: 140 },
              children: [
                new Paragraph({
                  spacing: { after: 120 },
                  children: [new TextRun({ text: "DEBILIDADES (internas)", bold: true, color: "8B2816", size: 22, font: "Century Gothic" })]
                }),
                ...makeBulletsInCell(state.debilidades, false)
              ]
            })
          ]
        }),
        // Cabecera Fila 2: Positivos / Negativos
        new TableRow({
          children: [
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              shading: { fill: "1E5E2A", type: ShadingType.CLEAR },
              borders: subtleBorder,
              margins: { top: 120, bottom: 120, left: 120, right: 120 },
              children: [new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "FACTORES POSITIVOS", bold: true, color: "FFFFFF", size: 22, font: "Century Gothic" })]
              })]
            }),
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              shading: { fill: "8B2816", type: ShadingType.CLEAR },
              borders: subtleBorder,
              margins: { top: 120, bottom: 120, left: 120, right: 120 },
              children: [new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "FACTORES NEGATIVOS", bold: true, color: "FFFFFF", size: 22, font: "Century Gothic" })]
              })]
            })
          ]
        }),
        // Contenido Fila 2: Oportunidades / Amenazas
        new TableRow({
          children: [
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              borders: subtleBorder,
              margins: { top: 140, bottom: 140, left: 140, right: 140 },
              children: [
                new Paragraph({
                  spacing: { after: 120 },
                  children: [new TextRun({ text: "OPORTUNIDADES (externas)", bold: true, color: "1E5E2A", size: 22, font: "Century Gothic" })]
                }),
                ...makeBulletsInCell(state.oportunidades, true)
              ]
            }),
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              borders: subtleBorder,
              margins: { top: 140, bottom: 140, left: 140, right: 140 },
              children: [
                new Paragraph({
                  spacing: { after: 120 },
                  children: [new TextRun({ text: "AMENAZAS (externas)", bold: true, color: "8B2816", size: 22, font: "Century Gothic" })]
                }),
                ...makeBulletsInCell(state.amenazas, false)
              ]
            })
          ]
        })
      ]
    });

    // 3. Tabla de Estrategias Cruzadas con párrafos diferenciados
    const formatStrategiesWord = (stratContent) => {
      const items = stratContent.split(/(?=\b\d+\.\s+)/).map(s => s.trim()).filter(s => s.length > 0);
      if (items.length <= 1) {
        return [new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { line: 360, lineRule: "auto" },
          children: [new TextRun({ text: stratContent, size: 22, font: "Century Gothic", color: "27272A" })]
        })];
      }
      return items.map((item, idx) => new Paragraph({
        indent: { left: 280, hanging: 180 },
        alignment: AlignmentType.JUSTIFIED,
        spacing: { line: 360, lineRule: "auto", before: idx === 0 ? 0 : 50, after: 70 },
        children: [
          new TextRun({ text: "•  ", bold: true, color: "1E5E2A", font: "Century Gothic", size: 22 }),
          new TextRun({ text: item, size: 22, font: "Century Gothic", color: "27272A" })
        ]
      }));
    };

    const crossRows = [
      ["FO (fortalezas para aprovechar oportunidades)", state.estrategiasFO || ""],
      ["DO (superar debilidades aprovechando oportunidades)", state.estrategiasDO || ""],
      ["FA (fortalezas para enfrentar amenazas)", state.estrategiasFA || ""],
      ["DA (reducir debilidades y evitar amenazas)", state.estrategiasDA || ""]
    ].map(([stratType, stratContent]) => new TableRow({
      children: [
        new TableCell({
          width: { size: 28, type: WidthType.PERCENTAGE },
          borders: subtleBorder,
          shading: { fill: "F9FAFB", type: ShadingType.CLEAR },
          margins: { top: 120, bottom: 120, left: 140, right: 140 },
          children: [new Paragraph({
            spacing: { line: 360, lineRule: "auto" },
            children: [new TextRun({ text: stratType, bold: true, size: 22, font: "Century Gothic", color: "111827" })]
          })]
        }),
        new TableCell({
          width: { size: 72, type: WidthType.PERCENTAGE },
          borders: subtleBorder,
          margins: { top: 120, bottom: 120, left: 140, right: 140 },
          children: formatStrategiesWord(stratContent)
        })
      ]
    }));

    const crossTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 28, type: WidthType.PERCENTAGE },
              shading: { fill: "1E5E2A", type: ShadingType.CLEAR },
              borders: subtleBorder,
              margins: { top: 120, bottom: 120, left: 140, right: 140 },
              children: [new Paragraph({ children: [new TextRun({ text: "Tipo de estrategia", bold: true, color: "FFFFFF", size: 22, font: "Century Gothic" })] })]
            }),
            new TableCell({
              width: { size: 72, type: WidthType.PERCENTAGE },
              shading: { fill: "1E5E2A", type: ShadingType.CLEAR },
              borders: subtleBorder,
              margins: { top: 120, bottom: 120, left: 140, right: 140 },
              children: [new Paragraph({ children: [new TextRun({ text: "Estrategias propuestas", bold: true, color: "FFFFFF", size: 22, font: "Century Gothic" })] })]
            })
          ]
        }),
        ...crossRows
      ]
    });

    // Helpers con Century Gothic, negrita y alineación justificada
    const makeSecTitle = (text) => new Paragraph({
      spacing: { before: 320, after: 140 },
      children: [new TextRun({ text, bold: true, size: 26, font: "Century Gothic", color: "111827" })]
    });

    const makeSubSecTitle = (text) => new Paragraph({
      spacing: { before: 220, after: 100 },
      children: [new TextRun({ text, bold: true, size: 24, font: "Century Gothic", color: "1F2937" })]
    });

    // Párrafo estándar: Century Gothic, tamaño 12 (24 half-pts), interlineado 1.5 (line: 360), justificado
    const makeP = (text) => new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 360, lineRule: "auto", after: 160 },
      children: [new TextRun({ text, size: 24, font: "Century Gothic", color: "27272A" })]
    });

    // Ensamblaje del Documento Oficial Word (.docx) con Century Gothic 12pt
    const doc = new Document({
      styles: {
        default: {
          document: {
            run: {
              font: "Century Gothic",
              size: 24,
              color: "27272A"
            },
            paragraph: {
              spacing: {
                line: 360,
                lineRule: "auto",
                after: 160
              },
              alignment: AlignmentType.JUSTIFIED
            }
          }
        }
      },
      sections: [{
        properties: {
          page: {
            margin: { top: 720, bottom: 720, left: 950, right: 950 }
          }
        },
        headers: {
          default: new Header({
            children: [
              ...(headerImageRun ? [new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 },
                children: [headerImageRun]
              })] : [])
            ]
          })
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240, after: 40 },
                children: [
                  new TextRun({
                    text: "Av. Salvador Estrella Sadhalá, esq. Circunvalación, Santiago de los Caballeros, República Dominicana.",
                    size: 18,
                    color: "006837",
                    font: "Century Gothic"
                  })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240 },
                children: [
                  new TextRun({
                    text: "Apartado Postal 685 | Teléfono: 809-582-7156 | E-mail: info.santiago@utesa.edu | RNC: 401-05261-1 | www.utesa.edu",
                    size: 17,
                    color: "006837",
                    font: "Century Gothic"
                  })
                ]
              })
            ]
          })
        },
        children: [
          // Títulos iniciales en Century Gothic y Negrita
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120, after: 90 },
            children: [
              new TextRun({ text: `Análisis FODA de ${u.displayTitle} ${s}`, bold: true, size: 30, font: "Century Gothic", color: "111827" })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 90 },
            children: [
              new TextRun({ text: `Fortalezas, Oportunidades, Debilidades y Amenazas – ${y}`, bold: true, size: 26, font: "Century Gothic", color: "374151" })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 90 },
            children: [
              new TextRun({ text: `${u.displayTitle} ${s} – Universidad Tecnológica de Santiago (UTESA)`, size: 24, font: "Century Gothic", color: "4B5563" })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 280 },
            children: [
              new TextRun({ text: `Fecha: ${state.fecha || ''}`, italics: true, size: 22, font: "Century Gothic", color: "6B7280" })
            ]
          }),

          // Metadatos
          metaTable,

          // 1. Introducción
          makeSecTitle("1. Introducción"),
          makeP(state.introduccion),

          // 2. Metodología
          makeSecTitle("2. Metodología"),
          makeP(state.metodologia),

          // 3. Matriz FODA
          makeSecTitle("3. Matriz FODA"),
          swotTable,

          // 4. Análisis de los factores
          makeSecTitle("4. Análisis de los factores"),
          makeSubSecTitle("4.1 Fortalezas"),
          makeP(state.analisisFortalezas),
          makeSubSecTitle("4.2 Debilidades"),
          makeP(state.analisisDebilidades),
          makeSubSecTitle("4.3 Oportunidades"),
          makeP(state.analisisOportunidades),
          makeSubSecTitle("4.4 Amenazas"),
          makeP(state.analisisAmenazas),

          // 5. Estrategias derivadas (matriz FODA cruzada)
          makeSecTitle("5. Estrategias derivadas (matriz FODA cruzada)"),
          crossTable,

          // 6. Conclusión
          makeSecTitle("6. Conclusión"),
          makeP(state.conclusion),

          // Bloque de Firma y Sello (Limpio para que el responsable firme y selle físicamente)
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 800, after: 100 },
            children: [
              new TextRun({ text: "________________________________________________________", color: "4B5563", font: "Century Gothic" })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
            children: [
              new TextRun({ text: state.director || "Nombre del Responsable", bold: true, size: 24, font: "Century Gothic", color: "111827" })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 },
            children: [
              new TextRun({ text: `${u.cargo} – ${u.displayTitle} ${s}`, size: 22, font: "Century Gothic", color: "4B5563" })
            ]
          })
        ]
      }]
    });

    // Generar archivo y descargar
    const blob = await Packer.toBlob(doc);
    const fileName = `Analisis_FODA_${state.siglas || 'UTESA'}_${y}.docx`;

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);

    showToast(`¡Documento Word descargado: ${fileName}!`);
  } catch (error) {
    console.error("Error al generar Word:", error);
    alert("Ocurrió un detalle al compilar el documento Word. Revisa la consola o intenta nuevamente.");
  } finally {
    if (btn) btn.innerHTML = originalText;
  }
};

// Imprime directamente o guarda como PDF nativo
window.printDocument = function() {
  window.print();
};

/**
 * =====================================================================
 * GESTOR DE PERSISTENCIA Y ACTUALIZACIÓN DE ANÁLISIS FODA POR CARRERA
 * =====================================================================
 * Permite guardar cada FODA en localStorage para que los directores y
 * coordinadores puedan volver a entrar, consultar su historial, actualizarlo,
 * duplicarlo para un nuevo cuatrimestre/año, o exportar un respaldo.
 */

const STORAGE_KEY = 'UTESA_FODA_REGISTRY_V1';

// Inicializa el repositorio si está vacío precargando los modelos oficiales
function initSavedRepository() {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
      // Sembrar con ejemplos de referencia precargados
      const initialRegistry = [
        {
          id: 'iel-2026',
          title: 'Carrera de Ingeniería Eléctrica',
          carrera: 'Ingeniería Eléctrica',
          siglas: 'IEL',
          tipoUnidad: 'Carrera',
          cargo: 'Director(a)',
          director: 'Dr. Arcadio Rodríguez',
          facultad: 'Arquitectura e Ingenierías',
          institucion: 'Universidad Tecnológica de Santiago (UTESA), Sede',
          periodo: 'Año académico 2026 (enero – octubre)',
          ano: '2026',
          fecha: '13 de octubre de 2026',
          fuentes: 'Evidencias del POA 2026, Calendario de Actividades Interdisciplinarias 2026, comunicación a la Vicerrectoría Académica sobre los talleres C-107 y C-208 (21 de julio de 2026), información de la Dirección y marco normativo y sectorial del país',
          fortalezas: [...templates.iel.fortalezas],
          debilidades: [...templates.iel.debilidades],
          oportunidades: [...templates.iel.oportunidades],
          amenazas: [...templates.iel.amenazas],
          updatedAt: new Date().toISOString()
        },
        {
          id: 'coi-2026',
          title: 'Coordinación de Ingeniería',
          carrera: 'Ingeniería',
          siglas: 'COI',
          tipoUnidad: 'Coordinación',
          cargo: 'Coordinador(a) de Ingeniería',
          director: 'Ing. Roberto Almonte, M.Sc.',
          facultad: 'Arquitectura e Ingenierías',
          institucion: 'Universidad Tecnológica de Santiago (UTESA), Sede Santiago',
          periodo: 'Año académico 2026 (enero – octubre)',
          ano: '2026',
          fecha: '16 de octubre de 2026',
          fuentes: 'Evidencias del POA 2026, reuniones mensuales de directores de escuelas de ingeniería, informes de uso de talleres comunes y laboratorios compartidos, reportes de retención estudiantil y seguimiento en ISOTools',
          fortalezas: [...templates.coi.fortalezas],
          debilidades: [...templates.coi.debilidades],
          oportunidades: [...templates.coi.oportunidades],
          amenazas: [...templates.coi.amenazas],
          updatedAt: new Date().toISOString()
        },
        {
          id: 'mat-2026',
          title: 'Departamento de Matemáticas',
          carrera: 'Matemáticas',
          siglas: 'MAT',
          tipoUnidad: 'Departamento',
          cargo: 'Director(a) de Departamento',
          director: 'Lic. Miguelina Santos, M.Sc.',
          facultad: 'Facultad de Ciencias y Humanidades / Ciencias Básicas',
          institucion: 'Universidad Tecnológica de Santiago (UTESA), Sede Santiago',
          periodo: 'Año académico 2026 (enero – octubre)',
          ano: '2026',
          fecha: '16 de octubre de 2026',
          fuentes: 'Evidencias del POA 2026, estadísticas de rendimiento y aprobación en asignaturas de ciclo básico (Álgebra, Cálculo, Estadística), informes de asesorías y tutorías académicas y encuestas de satisfacción estudiantil',
          fortalezas: [...templates.mat.fortalezas],
          debilidades: [...templates.mat.debilidades],
          oportunidades: [...templates.mat.oportunidades],
          amenazas: [...templates.mat.amenazas],
          updatedAt: new Date().toISOString()
        }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialRegistry));
    }
  } catch (err) {
    console.warn("No se pudo acceder a localStorage:", err);
  }
}

// Obtiene todos los FODA guardados
function getAllSavedFodas() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Error al leer FODAs guardados:", err);
    return [];
  }
}

// Guarda la lista completa
function saveAllFodas(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    updateSavedBadgeCount();
  } catch (err) {
    console.error("Error al persistir FODAs:", err);
    alert("No se pudo guardar en el navegador. Es posible que el almacenamiento esté lleno o en modo incógnito estricto.");
  }
}

// Actualiza el contador numérico de la pestaña
function updateSavedBadgeCount() {
  const badge = document.getElementById('badgeSavedCount');
  if (!badge) return;
  const list = getAllSavedFodas();
  if (list.length > 0) {
    badge.textContent = list.length;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

/**
 * Guarda o actualiza el FODA que está en pantalla actualmente
 */
window.saveCurrentFoda = function() {
  const u = getUnitInfo();
  const rawName = (state.carrera || "").trim();

  if (!rawName) {
    alert("Por favor indica el Nombre de la Carrera, Coordinación o Departamento antes de guardar.");
    switchTab('form');
    document.getElementById('inputCarrera').focus();
    return;
  }

  const list = getAllSavedFodas();
  
  // Clave canónica por unidad y año (ej: "iel-2026" o "ingenieria-electrica-2026")
  const slug = (state.siglas || rawName)
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-");
  
  const yearSlug = (state.ano || '2026').trim();
  const computedId = `${slug}-${yearSlug}`;

  // Buscar si ya existe este registro para sobrescribirlo o actualizarlo
  const existingIndex = list.findIndex(item => item.id === computedId || (item.siglas && state.siglas && item.siglas.toLowerCase() === state.siglas.toLowerCase() && item.ano === state.ano));

  const fodaRecord = {
    id: existingIndex >= 0 ? list[existingIndex].id : computedId,
    title: `${u.displayTitle} ${u.siglas}`,
    carrera: state.carrera,
    siglas: state.siglas,
    tipoUnidad: state.tipoUnidad,
    cargo: state.cargo,
    director: state.director,
    facultad: state.facultad,
    institucion: state.institucion,
    periodo: state.periodo,
    ano: state.ano,
    fecha: state.fecha,
    fuentes: state.fuentes,
    fortalezas: [...state.fortalezas],
    debilidades: [...state.debilidades],
    oportunidades: [...state.oportunidades],
    amenazas: [...state.amenazas],
    introduccion: state.introduccion,
    metodologia: state.metodologia,
    analisisFortalezas: state.analisisFortalezas,
    analisisDebilidades: state.analisisDebilidades,
    analisisOportunidades: state.analisisOportunidades,
    analisisAmenazas: state.analisisAmenazas,
    estrategiasFO: state.estrategiasFO,
    estrategiasDO: state.estrategiasDO,
    estrategiasFA: state.estrategiasFA,
    estrategiasDA: state.estrategiasDA,
    conclusion: state.conclusion,
    updatedAt: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    list[existingIndex] = fodaRecord;
    saveAllFodas(list);
    showToast(`¡Actualizado con éxito: ${fodaRecord.title}!`);
  } else {
    list.unshift(fodaRecord);
    saveAllFodas(list);
    showToast(`¡FODA guardado con éxito: ${fodaRecord.title}!`);
  }

  renderSavedFodaList();
};

/**
 * Carga un FODA previamente guardado en el formulario y la vista previa
 */
window.loadSavedFoda = function(id) {
  const list = getAllSavedFodas();
  const record = list.find(item => item.id === id);
  if (!record) {
    alert("No se encontró el registro seleccionado.");
    return;
  }

  state.tipoUnidad = record.tipoUnidad || "Carrera";
  state.cargo = record.cargo || "Director(a)";
  state.institucion = record.institucion || "";
  state.facultad = record.facultad || "";
  state.carrera = record.carrera || "";
  state.siglas = record.siglas || "";
  state.director = record.director || "";
  state.periodo = record.periodo || "";
  state.ano = record.ano || "2026";
  state.fecha = record.fecha || "";
  state.fuentes = record.fuentes || "";

  state.fortalezas = Array.isArray(record.fortalezas) ? [...record.fortalezas] : [""];
  state.debilidades = Array.isArray(record.debilidades) ? [...record.debilidades] : [""];
  state.oportunidades = Array.isArray(record.oportunidades) ? [...record.oportunidades] : [""];
  state.amenazas = Array.isArray(record.amenazas) ? [...record.amenazas] : [""];

  // Si tenía textos redactados guardados, preservarlos; de lo contrario generarlos
  if (record.introduccion) state.introduccion = record.introduccion;
  if (record.metodologia) state.metodologia = record.metodologia;
  if (record.analisisFortalezas) state.analisisFortalezas = record.analisisFortalezas;
  if (record.analisisDebilidades) state.analisisDebilidades = record.analisisDebilidades;
  if (record.analisisOportunidades) state.analisisOportunidades = record.analisisOportunidades;
  if (record.analisisAmenazas) state.analisisAmenazas = record.analisisAmenazas;
  if (record.estrategiasFO) state.estrategiasFO = record.estrategiasFO;
  if (record.estrategiasDO) state.estrategiasDO = record.estrategiasDO;
  if (record.estrategiasFA) state.estrategiasFA = record.estrategiasFA;
  if (record.estrategiasDA) state.estrategiasDA = record.estrategiasDA;
  if (record.conclusion) state.conclusion = record.conclusion;

  if (!record.introduccion || !record.conclusion) {
    generateDocumentContent();
  }

  renderForm();
  renderPreview();
  switchTab('form');
  showToast(`Cargado: "${record.title || record.carrera}". Puedes editarlo y volver a guardar.`);
};

/**
 * Elimina un registro guardado
 */
window.deleteSavedFoda = function(id, name) {
  if (confirm(`¿Estás seguro de eliminar el registro de "${name}"? Esta acción no se puede deshacer.`)) {
    let list = getAllSavedFodas();
    list = list.filter(item => item.id !== id);
    saveAllFodas(list);
    renderSavedFodaList();
    showToast(`Registro eliminado.`);
  }
};

/**
 * Duplica un registro existente (útil para iniciar el FODA de un nuevo año o periodo)
 */
window.duplicateSavedFoda = function(id) {
  const list = getAllSavedFodas();
  const record = list.find(item => item.id === id);
  if (!record) return;

  const currentYear = parseInt(record.ano, 10) || 2026;
  const newYear = (currentYear + 1).toString();
  const newId = `${record.id}-copia-${Date.now().toString().slice(-4)}`;

  const copy = {
    ...record,
    id: newId,
    title: `${record.title} (Copia ${newYear})`,
    ano: newYear,
    periodo: `Año académico ${newYear} (enero – octubre)`,
    fecha: new Date().toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' }),
    updatedAt: new Date().toISOString()
  };

  list.unshift(copy);
  saveAllFodas(list);
  renderSavedFodaList();
  showToast(`Copia creada para el año ${newYear}.`);
};

/**
 * Renderiza la lista de registros guardados en la pestaña "Mis FODA Guardados"
 */
window.renderSavedFodaList = function() {
  const container = document.getElementById('savedFodaListContainer');
  if (!container) return;

  const filterInput = document.getElementById('inputSearchSaved');
  const query = filterInput ? filterInput.value.toLowerCase().trim() : '';

  const list = getAllSavedFodas();
  const filtered = list.filter(item => {
    if (!query) return true;
    const titleMatch = (item.title || item.carrera || '').toLowerCase().includes(query);
    const directorMatch = (item.director || '').toLowerCase().includes(query);
    const siglasMatch = (item.siglas || '').toLowerCase().includes(query);
    const facultyMatch = (item.facultad || '').toLowerCase().includes(query);
    return titleMatch || directorMatch || siglasMatch || facultyMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 px-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl">
        <svg class="w-10 h-10 text-slate-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        <p class="text-xs font-semibold text-slate-600 mb-1">No hay análisis guardados ${query ? 'que coincidan con la búsqueda' : 'aún'}</p>
        <p class="text-[11px] text-slate-400 mb-3">Llena los datos en el formulario y presiona el botón "Guardar FODA".</p>
        <button type="button" onclick="saveCurrentFoda()" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-2xs">
          💾 Guardar el FODA actual ahora
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const dateFormatted = item.updatedAt ? new Date(item.updatedAt).toLocaleString('es-DO', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }) : (item.fecha || '');

    const badgeTipo = item.tipoUnidad === 'Coordinación' ? 'bg-purple-100 text-purple-800 border-purple-200' :
                      item.tipoUnidad === 'Departamento' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                      'bg-emerald-100 text-emerald-800 border-emerald-200';

    const safeTitle = escapeHtml(item.title || item.carrera || 'Sin Título');
    const safeDirector = escapeHtml(item.director || 'Responsable no asignado');
    const safeFacultad = escapeHtml(item.facultad || 'UTESA');
    const safePeriodo = escapeHtml(item.periodo || `Año ${item.ano || '2026'}`);

    return `
      <div class="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-utesa-green/50 hover:shadow-sm transition">
        <div class="flex items-start justify-between gap-2 mb-1.5">
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${badgeTipo}">${escapeHtml(item.tipoUnidad || 'Carrera')}</span>
              ${item.siglas ? `<span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">${escapeHtml(item.siglas)}</span>` : ''}
              <span class="text-[11px] text-slate-400 font-medium">${safePeriodo}</span>
            </div>
            <h3 class="text-xs font-bold text-slate-900 mt-1 leading-snug">${safeTitle}</h3>
          </div>
        </div>

        <div class="text-[11px] text-slate-500 mb-2.5 space-y-0.5">
          <div class="flex items-center gap-1">
            <span class="font-medium text-slate-700">Responsable:</span>
            <span>${safeDirector} (${escapeHtml(item.cargo || 'Director(a)')})</span>
          </div>
          <div class="text-slate-400 text-[10px]">
            Última actualización: ${dateFormatted}
          </div>
        </div>

        <!-- Acciones del Registro -->
        <div class="flex items-center justify-between pt-2 border-t border-slate-100 flex-wrap gap-1.5">
          <div class="flex items-center gap-1">
            <button type="button" onclick="loadSavedFoda('${item.id}')" class="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-300 transition flex items-center gap-1" title="Cargar este FODA para revisarlo, editarlo o actualizarlo">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              Cargar y Editar
            </button>
            <button type="button" onclick="duplicateSavedFoda('${item.id}')" class="px-2 py-1 text-xs font-medium rounded-lg bg-slate-50 text-slate-700 hover:bg-slate-200 border border-slate-200 transition" title="Duplicar para un nuevo año/cuatrimestre">
              Duplicar
            </button>
          </div>
          <button type="button" onclick="deleteSavedFoda('${item.id}', '${safeTitle.replace(/'/g, "\\'")}')" class="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition" title="Eliminar este registro">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
};

/**
 * Exporta todos los registros guardados a un archivo JSON de respaldo
 */
window.exportFodaBackup = function() {
  const list = getAllSavedFodas();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `UTESA_FODA_Respaldo_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
  showToast("Copia de seguridad exportada con éxito.");
};

/**
 * Restaura registros desde un archivo JSON
 */
window.importFodaBackup = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        const current = getAllSavedFodas();
        // Unir evitando duplicados de ID
        const merged = [...imported];
        current.forEach(item => {
          if (!merged.some(m => m.id === item.id)) {
            merged.push(item);
          }
        });
        saveAllFodas(merged);
        renderSavedFodaList();
        showToast(`¡Se restauraron ${imported.length} registros exitosamente!`);
      } else {
        alert("El archivo no tiene el formato de respaldo válido.");
      }
    } catch (err) {
      console.error(err);
      alert("Error al leer el archivo JSON.");
    }
  };
  reader.readAsText(file);
};

/**
 * =====================================================================
 * ASISTENTE DE INTELIGENCIA ARTIFICIAL CON EVIDENCIAS (GOOGLE GEMINI)
 * =====================================================================
 * Permite cargar documentos (PDF, Word, TXT) o carpetas completas de evidencias,
 * dialogar interactivamente para resolver situaciones dudosas / pendientes,
 * y estructurar automáticamente las Fortalezas, Debilidades, Oportunidades y Amenazas.
 */

const GEMINI_KEY_STORAGE = 'UTESA_GEMINI_API_KEY';

// Estado del asistente IA
const aiState = {
  apiKey: '',
  files: [], // Array de { name, type, size, text }
  chatHistory: [], // Historial de conversación con la IA
  extractedFoda: null, // Propuesta FODA generada { fortalezas, debilidades, oportunidades, amenazas, fuentes }
  isProcessing: false
};

// Carga la clave API almacenada
function loadGeminiApiKey() {
  aiState.apiKey = localStorage.getItem(GEMINI_KEY_STORAGE) || '';
}

// Verifica el estado de la clave API y muestra u oculta la alerta
window.checkGeminiApiKeyStatus = function() {
  loadGeminiApiKey();
  const alertEl = document.getElementById('aiKeyAlert');
  const inputEl = document.getElementById('inputGeminiApiKey');
  if (inputEl) inputEl.value = aiState.apiKey;
  if (alertEl) {
    if (!aiState.apiKey) {
      alertEl.classList.remove('hidden');
    } else {
      alertEl.classList.add('hidden');
    }
  }
};

// Abre o cierra el modal de configuración de la clave API
window.toggleApiKeyModal = function() {
  const modal = document.getElementById('apiKeyModal');
  if (!modal) return;
  loadGeminiApiKey();
  const inputEl = document.getElementById('inputGeminiApiKey');
  if (inputEl) inputEl.value = aiState.apiKey;
  modal.classList.toggle('hidden');
};

// Guarda la clave API en localStorage
window.saveGeminiApiKey = function() {
  const inputEl = document.getElementById('inputGeminiApiKey');
  const key = inputEl ? inputEl.value.trim() : '';
  if (!key) {
    alert("Por favor introduce una clave de API válida.");
    return;
  }
  localStorage.setItem(GEMINI_KEY_STORAGE, key);
  aiState.apiKey = key;
  toggleApiKeyModal();
  checkGeminiApiKeyStatus();
  showToast("Clave API de Gemini guardada correctamente.");
};

// Elimina la clave API guardada
window.removeGeminiApiKey = function() {
  if (confirm("¿Deseas eliminar la clave API guardada en este navegador?")) {
    localStorage.removeItem(GEMINI_KEY_STORAGE);
    aiState.apiKey = '';
    const inputEl = document.getElementById('inputGeminiApiKey');
    if (inputEl) inputEl.value = '';
    toggleApiKeyModal();
    checkGeminiApiKeyStatus();
    showToast("Clave API eliminada.");
  }
};

/**
 * Lee y extrae el texto de archivos seleccionados (PDF, Word, TXT)
 */
window.handleEvidenceFiles = async function(event) {
  const fileList = event.target.files;
  if (!fileList || fileList.length === 0) return;

  const btn = document.getElementById('btnStartAiAnalysis');
  const badge = document.getElementById('evidenceCountBadge');
  if (badge) badge.textContent = "Leyendo archivos...";

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    const name = file.name;
    const ext = name.split('.').pop().toLowerCase();

    // Evitar duplicados por nombre
    if (aiState.files.some(f => f.name === name && f.size === file.size)) continue;

    try {
      let extractedText = '';

      if (ext === 'txt' || ext === 'csv') {
        extractedText = await file.text();
      } else if (ext === 'pdf') {
        extractedText = await extractTextFromPdf(file);
      } else if (ext === 'docx') {
        extractedText = await extractTextFromDocx(file);
      } else {
        // Formato no directamente procesable como texto puro
        continue;
      }

      if (extractedText && extractedText.trim().length > 0) {
        aiState.files.push({
          name: file.webkitRelativePath || name,
          size: file.size,
          type: ext,
          text: extractedText.trim()
        });
      }
    } catch (err) {
      console.warn(`No se pudo leer el archivo ${name}:`, err);
    }
  }

  renderLoadedEvidenceList();
  showToast(`Se cargaron ${aiState.files.length} documento(s) de evidencia.`);
  event.target.value = '';
};

// Extractor de PDF usando PDF.js
async function extractTextFromPdf(file) {
  if (!window.pdfjsLib) {
    throw new Error("Librería PDF.js no disponible");
  }
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let fullText = '';
  const maxPages = Math.min(pdf.numPages, 40); // Límite razonable por documento
  for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullText += strings.join(' ') + '\n';
  }
  return fullText;
}

// Extractor de DOCX usando Mammoth.js
async function extractTextFromDocx(file) {
  if (!window.mammoth) {
    throw new Error("Librería Mammoth.js no disponible");
  }
  const arrayBuffer = await file.arrayBuffer();
  const result = await window.mammoth.extractRawText({ arrayBuffer: arrayBuffer });
  return result.value || '';
}

// Renderiza la lista de archivos de evidencia cargados en la interfaz
function renderLoadedEvidenceList() {
  const container = document.getElementById('aiLoadedFilesList');
  const badge = document.getElementById('evidenceCountBadge');
  if (badge) badge.textContent = `${aiState.files.length} archivo(s)`;

  if (!container) return;

  if (aiState.files.length === 0) {
    container.innerHTML = `
      <div class="text-[11px] text-slate-400 italic text-center py-2">
        Aún no has cargado documentos. Sube informes del POA, calendarios, minutas o comunicaciones oficiales.
      </div>
    `;
    return;
  }

  container.innerHTML = aiState.files.map((f, index) => `
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-slate-200 text-[11px] text-slate-700">
      <div class="flex items-center gap-1.5 truncate max-w-[80%]">
        <span class="font-bold text-[10px] px-1 py-0.2 rounded uppercase ${
          f.type === 'pdf' ? 'bg-red-100 text-red-700' :
          f.type === 'docx' ? 'bg-blue-100 text-blue-700' :
          'bg-slate-100 text-slate-700'
        }">${f.type}</span>
        <span class="truncate" title="${escapeHtml(f.name)}">${escapeHtml(f.name)}</span>
      </div>
      <button type="button" onclick="removeEvidenceFile(${index})" class="text-slate-400 hover:text-rose-600 transition p-0.5" title="Quitar archivo">
        ✕
      </button>
    </div>
  `).join('');
}

// Elimina un archivo individual
window.removeEvidenceFile = function(index) {
  aiState.files.splice(index, 1);
  renderLoadedEvidenceList();
};

// Vacía la lista completa de evidencias
window.clearEvidenceFiles = function() {
  if (aiState.files.length === 0) return;
  if (confirm("¿Deseas vaciar la lista de evidencias cargadas?")) {
    aiState.files = [];
    renderLoadedEvidenceList();
    showToast("Evidencias eliminadas.");
  }
};

// Reinicia el chat de IA
window.clearAiChat = function() {
  aiState.chatHistory = [];
  aiState.extractedFoda = null;
  const btnApply = document.getElementById('btnApplyAiToFoda');
  if (btnApply) btnApply.disabled = true;

  const msgContainer = document.getElementById('aiChatMessages');
  if (msgContainer) {
    msgContainer.innerHTML = `
      <div class="p-3 rounded-lg bg-white border border-slate-200 text-slate-700 space-y-1">
        <div class="font-bold text-emerald-800 flex items-center gap-1">
          <span>🤖 Asistente Institucional:</span>
        </div>
        <p>Chat reiniciado. Carga tus documentos y presiona <strong>"Analizar Evidencias con IA"</strong> para iniciar un nuevo diagnóstico interactivo.</p>
      </div>
    `;
  }
};

/**
 * Agrega un mensaje a la ventana visual del chat
 */
function appendChatMessage(role, text) {
  const container = document.getElementById('aiChatMessages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  if (role === 'user') {
    msgDiv.className = 'p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 ml-6';
    msgDiv.innerHTML = `
      <div class="font-bold text-emerald-800 mb-1 flex items-center gap-1 text-[11px]">
        <span>👤 Tú (Director / Responsable):</span>
      </div>
      <div class="whitespace-pre-line">${escapeHtml(text)}</div>
    `;
  } else {
    msgDiv.className = 'p-3 rounded-lg bg-white border border-slate-200 text-slate-800 mr-6 shadow-2xs';
    msgDiv.innerHTML = `
      <div class="font-bold text-emerald-800 mb-1 flex items-center gap-1 text-[11px]">
        <span>🤖 Asistente Institucional:</span>
      </div>
      <div class="whitespace-pre-line leading-relaxed">${formatAiResponseHtml(text)}</div>
    `;
  }

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

// Formatea el texto de la IA para resaltar viñetas y títulos en el chat
function formatAiResponseHtml(text) {
  if (!text) return '';
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\s*•\s*(.*)$/gm, '<li class="ml-3 list-disc">$1</li>')
    .replace(/^\s*\d+\.\s*(.*)$/gm, '<li class="ml-3 list-decimal">$1</li>');
}

/**
 * Llamada inteligente a la API de Google Gemini:
 * 1. Consulta dinámicamente qué modelos tiene habilitados la clave con models?key=...
 * 2. Selecciona el mejor modelo compatible y realiza la consulta
 * 3. Muestra el error exacto (clave inválida, cuota, restricciones) si falla
 */
async function callGeminiApi(messagesPayload) {
  loadGeminiApiKey();
  if (!aiState.apiKey) {
    toggleApiKeyModal();
    throw new Error("Por favor configura tu clave de API de Google Gemini gratuita para continuar.");
  }

  // Preparar payload compatible
  const contents = messagesPayload.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  const systemInstruction = {
    parts: [{
      text: "Eres el Asistente Institucional de Planificación Estratégica y Elaboración de FODA de la Universidad Tecnológica de Santiago (UTESA). Tu objetivo es interactuar de manera ejecutiva, cordial y profesional con directores de carrera, coordinadores y directores de departamento. Ayúdalos a auditar su POA, recopilar evidencias, validar metas pendientes y redactar los 4 cuadrantes del FODA (Fortalezas, Debilidades, Oportunidades y Amenazas). Responde SIEMPRE de forma directa, enérgica y en español formal. NUNCA muestres notas de análisis interno, traducciones explicativas ni listas de opciones de cómo saludar o responder. Responde directamente con el mensaje institucional."
    }]
  };

  const requestBodyWithSystem = JSON.stringify({
    systemInstruction: systemInstruction,
    contents: contents,
    generationConfig: {
      temperature: 0.3,
      topP: 0.95,
      maxOutputTokens: 2048
    }
  });

  const requestBodyFallback = JSON.stringify({
    contents: contents,
    generationConfig: {
      temperature: 0.3,
      topP: 0.95,
      maxOutputTokens: 2048
    }
  });

  // Paso 1: Intentar consultar los modelos disponibles en la cuenta
  let availableModels = [];
  let authErrorMessage = null;

  try {
    const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${aiState.apiKey}`);
    if (listRes.ok) {
      const listData = await listRes.json();
      if (Array.isArray(listData.models)) {
        availableModels = listData.models
          .filter(m => {
            const hasGenerate = m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent');
            const name = (m.name || '').toLowerCase();
            const isTtsOrAudio = name.includes('tts') || name.includes('audio') || name.includes('whisper') || name.includes('embedding');
            return hasGenerate && !isTtsOrAudio;
          })
          .map(m => m.name.replace(/^models\//, ''));
      }
    } else {
      const errJson = await listRes.json().catch(() => ({}));
      authErrorMessage = errJson.error?.message || `Error ${listRes.status}: ${listRes.statusText}`;
    }
  } catch (e) {
    console.warn("No se pudo listar modelos dinámicamente:", e);
  }

  // Si la clave no es válida o está deshabilitada, informar de inmediato
  if (authErrorMessage && !availableModels.length) {
    if (authErrorMessage.toLowerCase().includes('api key') || authErrorMessage.toLowerCase().includes('permission') || authErrorMessage.toLowerCase().includes('invalid')) {
      throw new Error(`La clave API no es válida o no está activa en Google AI Studio: ${authErrorMessage}`);
    }
  }

  // Lista de modelos de texto comprobados ordenados por prioridad
  const priorityList = [
    'gemini-2.0-flash',
    'gemini-2.0-flash-001',
    'gemini-1.5-flash',
    'gemini-1.5-flash-002',
    'gemini-1.5-flash-latest',
    'gemini-1.5-flash-8b',
    'gemini-1.5-pro',
    'gemini-1.5-pro-002',
    'gemini-2.5-flash'
  ];

  // Intersectar con los modelos realmente disponibles que soporten texto
  let targetModels = [];
  if (availableModels.length > 0) {
    targetModels = [
      ...priorityList.filter(p => availableModels.includes(p)),
      ...availableModels.filter(m => !priorityList.includes(m) && !m.includes('tts') && !m.includes('audio'))
    ];
  } else {
    targetModels = priorityList;
  }

  let lastError = authErrorMessage || null;

  for (const model of targetModels) {
    // Si accidentalmente tiene tts o audio, omitir
    if (model.includes('tts') || model.includes('audio')) continue;

    const endpoints = [
      { url: `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${aiState.apiKey}`, body: requestBodyWithSystem },
      { url: `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${aiState.apiKey}`, body: requestBodyFallback }
    ];

    for (const ep of endpoints) {
      try {
        const response = await fetch(ep.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: ep.body
        });

        if (response.ok) {
          const data = await response.json();
          const candidate = data.candidates?.[0];
          const textOutput = candidate?.content?.parts?.map(p => p.text).filter(Boolean).join('\n');
          if (textOutput) {
            return textOutput;
          }
        } else {
          const errData = await response.json().catch(() => ({}));
          lastError = errData.error?.message || `Error ${response.status}: ${response.statusText}`;
          // Si el modelo es 404 o rechaza la modalidad (como TTS), continuar con el siguiente modelo de la lista
          if (response.status === 404 || lastError.toLowerCase().includes('modalities') || lastError.toLowerCase().includes('not supported')) {
            continue;
          }
          // Si es clave inválida (403), lanzar error
          if (response.status === 403 && lastError.toLowerCase().includes('api key')) {
            throw new Error(`Google API: ${lastError}`);
          }
        }
      } catch (reqErr) {
        if (reqErr.message.startsWith('Google API:')) throw reqErr;
        lastError = reqErr.message;
      }
    }
  }

  throw new Error(`Detalle de Google Gemini: ${lastError || 'Verifica que la clave API esté activa y tenga permisos.'}`);
}

/**
 * Paso 1: Analizar Evidencias y Plantear Preguntas de Validación
 */
window.startEvidenceAnalysis = async function() {
  if (aiState.files.length === 0) {
    alert("Por favor carga al menos un archivo de evidencias (PDF, Word o TXT) antes de analizar.");
    return;
  }

  loadGeminiApiKey();
  if (!aiState.apiKey) {
    toggleApiKeyModal();
    return;
  }

  const btn = document.getElementById('btnStartAiAnalysis');
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `
    <svg class="w-4 h-4 text-white animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
    <span>Analizando documentos...</span>
  `;

  try {
    const u = getUnitInfo();
    const carreraActual = state.carrera || "la unidad correspondiente";
    const tipoActual = state.tipoUnidad || "Carrera";

    // Resumir evidencias concatenadas
    let combinedEvidence = "";
    aiState.files.forEach((f, idx) => {
      // Limitar a los primeros 6000 caracteres de cada documento para balancear tokens
      const snippet = f.text.slice(0, 6000);
      combinedEvidence += `\n--- DOCUMENTO ${idx + 1}: ${f.name} ---\n${snippet}\n`;
    });

    const systemPrompt = `
Actúas como Asistente de Planificación Estratégica Institucional de la Universidad Tecnológica de Santiago (UTESA).
Tu rol es ayudar al Director(a) o Coordinador(a) de ${u.displayTitle} (${tipoActual}) a construir su Análisis FODA oficial para el POA 2026.

Has recibido los siguientes documentos y evidencias del departamento:
${combinedEvidence}

INSTRUCCIONES CLAVE DE INTERACCIÓN:
1. Sintetiza brevemente lo que has identificado en los documentos (logros, actividades curriculares, convenios, talleres, etc.).
2. Formula exactamente entre 3 y 5 PREGUNTAS PUNTUALES Y CRÍTICAS sobre situaciones que detectes incompletas, en proceso, solicitudes a Vicerrectoría o convenios, para que el director aclare su estado real (por ejemplo: "¿Se completó la compra/climatización?", "¿El convenio con la empresa X está formalmente firmado o fue una visita puntual?", "¿Se logró la meta de participantes en tal taller?").
3. Presenta un BORRADOR PRELIMINAR de los 4 cuadrantes (Fortalezas, Debilidades, Oportunidades, Amenazas) derivado de las evidencias.
4. Finaliza invitando al director a responder tus preguntas o aclarar cualquier punto para afinar el FODA definitivo.

Mantén un tono académico, formal, constructivo e institucional propio de UTESA.
`;

    aiState.chatHistory = [
      { role: 'user', content: systemPrompt }
    ];

    const aiResponse = await callGeminiApi(aiState.chatHistory);
    aiState.chatHistory.push({ role: 'assistant', content: aiResponse });

    appendChatMessage('assistant', aiResponse);

    // Habilitar botón de aplicar
    const btnApply = document.getElementById('btnApplyAiToFoda');
    if (btnApply) btnApply.disabled = false;

    showToast("¡Evidencias analizadas! Responde las preguntas de la IA abajo.");
  } catch (err) {
    console.error("Error al analizar evidencias:", err);
    alert(`Ocurrió un error con el Asistente IA: ${err.message}`);
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
};

/**
 * Paso 2: El usuario responde a las preguntas y continúa el diálogo
 */
window.sendAiUserMessage = async function() {
  const inputEl = document.getElementById('inputAiUserResponse');
  const userText = inputEl ? inputEl.value.trim() : '';
  if (!userText) return;

  inputEl.value = '';
  appendChatMessage('user', userText);

  // Placeholder temporal con indicador animado
  const container = document.getElementById('aiChatMessages');
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'aiChatLoadingPlaceholder';
  loadingDiv.className = 'text-xs text-slate-500 italic p-2 flex items-center gap-2 bg-slate-100/80 rounded-lg border border-slate-200';
  loadingDiv.innerHTML = `
    <svg class="w-3.5 h-3.5 text-emerald-700 animate-spin shrink-0" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
    <span>El Asistente Institucional de UTESA está redactando su respuesta...</span>
  `;
  if (container) {
    container.appendChild(loadingDiv);
    container.scrollTop = container.scrollHeight;
  }

  try {
    // Si es el primer mensaje de la conversación, contextualizamos la unidad de UTESA activa
    if (aiState.chatHistory.length === 0) {
      const u = getUnitInfo();
      const tipoActual = u.tipo || state.tipoUnidad || 'Carrera';
      const hasFiles = aiState.files.length > 0;
      const initialContext = `Contexto Institucional UTESA:
El usuario es el Director(a) o Responsable de ${u.displayTitle} (${tipoActual}).
${hasFiles ? `Tiene cargados ${aiState.files.length} documento(s) de evidencia en el panel.` : 'Aún no ha cargado documentos de evidencia en el panel.'}

Mensaje del usuario:
"${userText}"

Instrucción: Respóndele directamente de manera cordial, ejecutiva e institucional como Asistente de Planificación de UTESA. Dale la bienvenida a su área (${u.displayTitle}) y oriéntalo sobre cómo puedes ayudarle con sus evidencias o responde a su consulta. NUNCA muestres notas de razonamiento interno ni opciones de redacción.`;
      aiState.chatHistory.push({ role: 'user', content: initialContext });
    } else {
      aiState.chatHistory.push({ role: 'user', content: userText });
    }

    const aiResponse = await callGeminiApi(aiState.chatHistory);
    aiState.chatHistory.push({ role: 'assistant', content: aiResponse });

    const loader = document.getElementById('aiChatLoadingPlaceholder');
    if (loader) loader.remove();

    appendChatMessage('assistant', aiResponse);

    const btnApply = document.getElementById('btnApplyAiToFoda');
    if (btnApply) btnApply.disabled = false;
  } catch (err) {
    console.error("Error en diálogo con IA:", err);
    const loader = document.getElementById('aiChatLoadingPlaceholder');
    if (loader) loader.remove();
    alert(`Error en el diálogo con la IA: ${err.message}`);
  }
};

/**
 * Paso 3: Aplicar la propuesta definitiva consolidada al formulario FODA oficial
 */
window.applyAiProposalToFoda = async function() {
  if (aiState.chatHistory.length === 0) {
    alert("Primero debes analizar las evidencias antes de aplicar.");
    return;
  }

  const btn = document.getElementById('btnApplyAiToFoda');
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span>Consolidando FODA...</span>`;

  try {
    const extractionPrompt = `
Con base en todos los documentos analizados y las respuestas y aclaraciones dadas por el Director en el diálogo anterior, genera la ESTRUCTURA DEFINITIVA Y FINAL del FODA oficial en formato JSON estricto.

Devuelve ÚNICAMENTE un bloque de código JSON con este esquema exacto, sin explicaciones adicionales:
{
  "fortalezas": [
    "Viñeta formal y detallada citando evidencias...",
    "Viñeta 2...",
    ...
  ],
  "debilidades": [
    "Viñeta formal aclarando lo que está pendiente o sin cerrar...",
    ...
  ],
  "oportunidades": [
    "Viñeta de factores externos, leyes, sector productivo...",
    ...
  ],
  "amenazas": [
    "Viñeta de factores externos de riesgo, competencia, tecnología...",
    ...
  ],
  "fuentesSugeridas": "Texto consolidado de las fuentes de evidencia utilizadas (documentos cargados, POA, actas y comunicaciones de la Dirección)"
}

Asegúrate de:
- Escribir viñetas completas, profesionales y con redacción ejecutiva.
- Incluir entre 4 y 8 viñetas para cada cuadrante.
- Reflejar con precisión lo que el director aclaró que está cerrado versus lo que continúa pendiente.
`;

    const requestPayload = [
      ...aiState.chatHistory,
      { role: 'user', content: extractionPrompt }
    ];

    const jsonResponseRaw = await callGeminiApi(requestPayload);
    
    // Extraer bloque JSON
    const match = jsonResponseRaw.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error("No se pudo interpretar el formato JSON generado por la IA.");
    }

    const structuredFoda = JSON.parse(match[0]);

    if (Array.isArray(structuredFoda.fortalezas) && structuredFoda.fortalezas.length > 0) {
      state.fortalezas = structuredFoda.fortalezas;
    }
    if (Array.isArray(structuredFoda.debilidades) && structuredFoda.debilidades.length > 0) {
      state.debilidades = structuredFoda.debilidades;
    }
    if (Array.isArray(structuredFoda.oportunidades) && structuredFoda.oportunidades.length > 0) {
      state.oportunidades = structuredFoda.oportunidades;
    }
    if (Array.isArray(structuredFoda.amenazas) && structuredFoda.amenazas.length > 0) {
      state.amenazas = structuredFoda.amenazas;
    }

    if (structuredFoda.fuentesSugeridas) {
      state.fuentes = structuredFoda.fuentesSugeridas;
    }

    // Regenerar toda la redacción y actualizar la vista
    generateDocumentContent();
    renderForm();
    renderPreview();
    switchTab('form');
    showToast("¡FODA oficial actualizado exitosamente con la interpretación de las evidencias!");
  } catch (err) {
    console.error("Error al consolidar FODA:", err);
    alert(`Ocurrió un detalle al inyectar el FODA: ${err.message}`);
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
};

// Inicializa al cargar el DOM
document.addEventListener('DOMContentLoaded', initApp);

