/**
 * UTESA - Generador Institucional de Análisis FODA
 * Sistema Corporativo - Formato Oficial para Directores de Carrera
 */

// Estado global de la aplicación
const state = {
  // Datos Generales
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

// Plantillas predeterminadas de ejemplo
const templates = {
  iel: {
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

  adm: {
    carrera: "Administración de Empresas",
    siglas: "ADM",
    facultad: "Ciencias Económicas y Sociales",
    director: "Licda. Patricia Almonte, M.B.A.",
    institucion: "Universidad Tecnológica de Santiago (UTESA), Sede Santiago",
    periodo: "Año académico 2026 (enero – octubre)",
    ano: "2026",
    fecha: "16 de octubre de 2026",
    fuentes: "Evidencias del POA 2026, encuestas a empleadores y egresados, plan de estudios por competencias y estadísticas de inserción laboral",
    fortalezas: [
      "Enfoque curricular orientado al emprendimiento, transformación digital e innovación empresarial.",
      "Cuerpo profesoral con sólida experiencia gerencial en los sectores comercial, bancario e industrial.",
      "Centro de Incubación y Aceleración Empresarial para asesorar iniciativas de negocios estudiantiles.",
      "Alianzas estratégicas con asociaciones comerciales e industriales locales para visitas y conferencias ejecutivas.",
      "Amplia red de egresados en posiciones de liderazgo directivo a nivel regional y nacional."
    ],
    debilidades: [
      "Uso limitado de simuladores de gestión de negocios (Business Games) y software ERP en asignaturas intermedias.",
      "Baja formalización de convenios de pasantías con empresas medianas de sectores no tradicionales.",
      "Evaluación no estandarizada del impacto de los planes de negocios generados por los estudiantes.",
      "Coordinación de actividades extracurriculares dependiente de un número reducido de docentes líderes."
    ],
    oportunidades: [
      "Auge del comercio electrónico, finanzas digitales (fintech) y gestión sostenible (criterios ESG) en la República Dominicana.",
      "Programas gubernamentales de financiamiento y fomento a MIPYMES impulsados por el Ministerio de Industria y Comercio.",
      "Redes universitarias internacionales para intercambios virtuales de estudiantes y docentes.",
      "Demanda de profesionales con competencias en analítica de negocios y toma de decisiones basada en datos."
    ],
    amenazas: [
      "Proliferación de programas de administración semipresenciales y virtuales con costos reducidos en otras instituciones.",
      "Exigencia empresarial acelerada de habilidades híbridas (tecnología + finanzas) no cubiertas en materias tradicionales.",
      "Incertidumbre macroeconómica y fluctuaciones en el sector empresarial que pueden reducir las contrataciones de practicantes.",
      "Rápida desactualización de modelos de negocios tradicionales ante la automatización."
    ]
  }
};

/**
 * Motor de Generación Inteligente
 * Crea automáticamente las secciones 1, 2, 4 (4.1 a 4.4), 5 (FO, DO, FA, DA) y 6 (Conclusión)
 * con redacción formal, ejecutiva e institucional adaptada a los datos de la carrera.
 */
function generateDocumentContent() {
  const c = state.carrera;
  const s = state.siglas ? `(${state.siglas})` : "";
  const y = state.ano || "2026";
  const f = state.facultad || "la Facultad correspondiente";

  // 1. Introducción
  state.introduccion = `El análisis FODA es una herramienta de planificación estratégica que identifica los factores internos de una organización (fortalezas y debilidades) y los factores externos de su entorno (oportunidades y amenazas). Este documento presenta el análisis FODA de la carrera de ${c} ${s} de UTESA para el año académico ${y}, con el propósito de orientar la planificación operativa, la mejora continua del programa y la toma de decisiones de la Dirección de la carrera.`;

  // 2. Metodología
  const fuentesTexto = state.fuentes ? state.fuentes : "las evidencias de cumplimiento del Plan Operativo Anual (POA), la documentación de actividades académicas e interdisciplinarias, y los informes de la Dirección de carrera";
  state.metodologia = `El análisis se elaboró a partir de cuatro fuentes: (1) las evidencias de cumplimiento del Plan Operativo Anual ${y} de la carrera; (2) el Calendario de Actividades Interdisciplinarias por Cuatrimestre ${y}; (3) las comunicaciones formales de la Dirección remitidas a la Vicerrectoría Académica sobre la gestión de talleres, laboratorios y recursos docentes; y (4) el marco normativo, curricular y sectorial del país vinculado al ejercicio profesional de ${c}. Los factores internos se derivan de estas evidencias; los externos, de las políticas y tendencias del sector. Se recomienda validar el análisis con el claustro de profesores, los estudiantes y los empleadores.`;

  // 4.1 Análisis de Fortalezas
  const fList = state.fortalezas;
  const fSummary = fList.slice(0, 3).map(item => item.replace(/\.$/, '')).join(", ");
  state.analisisFortalezas = `La principal fortaleza de la carrera en ${y} es la combinación estratégica de actualización curricular, infraestructura orientada a la formación práctica, vinculación activa con la industria e investigación formativa. Se destacan de forma prioritaria: ${fSummary || 'la actualización constante de los planes de estudio y el compromiso del cuerpo profesoral'}. El respaldo institucional de UTESA, con su trayectoria de medio siglo de excelencia y su sistema de gestión articulado al POA, garantiza la continuidad y el fortalecimiento continuo de estas capacidades institucionales.`;

  // 4.2 Análisis de Debilidades
  const dList = state.debilidades;
  const dSummary = dList.slice(0, 3).map(item => item.replace(/\.$/, '')).join("; ");
  state.analisisDebilidades = `La debilidad más importante radica en la optimización de los espacios especializados y la consolidación de procesos de gestión. Específicamente, se requiere atender: ${dSummary || 'la ampliación de áreas prácticas y la formalización de convenios'}. En el ámbito de la gestión operativa, las evidencias aún requieren un registro más sistemático de participantes y evaluación del impacto de las actividades, evitando la concentración excesiva de tareas en la Dirección y promoviendo la formalización de acuerdos con los sectores externos.`;

  // 4.3 Análisis de Oportunidades
  const oList = state.oportunidades;
  const oSummary = oList.slice(0, 3).map(item => item.replace(/\.$/, '')).join("; ");
  state.analisisOportunidades = `El entorno nacional e internacional es altamente favorable para la carrera de ${c}. La evolución del marco regulatorio, las políticas públicas de modernización sectorial y los fondos de fomento a la investigación abren oportunidades decisivas: ${oSummary || 'la creciente demanda de especialistas y la colaboración con redes académicas'}. Las organizaciones aliadas, empresas del sector productivo y organismos multilaterales ofrecen escenarios idóneos para prácticas de campo, capacitación técnica y divulgación científica.`;

  // 4.4 Análisis de Amenazas
  const aList = state.amenazas;
  const aSummary = aList.slice(0, 3).map(item => item.replace(/\.$/, '')).join("; ");
  state.analisisAmenazas = `Las amenazas provienen de la intensa competencia académica a nivel regional y nacional, el ritmo acelerado del cambio tecnológico y el costo asociado al equipamiento especializado continuo. En particular, destacan: ${aSummary || 'la competencia de otras instituciones y la rápida evolución del conocimiento técnico'}. Sin una inversión sostenida en laboratorios, recursos tecnológicos y en la retención del talento docente calificado, la carrera podría enfrentar riesgos de pertinencia ante las nuevas demandas del mercado laboral.`;

  // 5. Estrategias Cruzadas (FO, DO, FA, DA)
  // FO (Fortalezas para aprovechar Oportunidades)
  state.estrategiasFO = `1. Impulsar líneas de investigación estudiantil y docente vinculadas a las prioridades del sector y postular proyectos conjuntos a los fondos concursables nacionales (MESCyT) y redes internacionales. 2. Posicionar la infraestructura y talleres especializados de la carrera como modelos de referencia institucional y replicar sus buenas prácticas en otros espacios universitarios. 3. Formalizar convenios marco de cooperación, pasantías y capacitación técnica con empresas líderes y parques industriales. 4. Desarrollar ofertas de educación continua, electivas de vanguardia y diplomados especializados acordes a las nuevas regulaciones del país.`;

  // DO (Superar Debilidades aprovechando Oportunidades)
  state.estrategiasDO = `1. Gestionar la habilitación, ampliación y adecuación de nuevos espacios de talleres y laboratorios especializados aprovechando la cooperación y donaciones de la industria. 2. Implementar herramientas digitales de simulación y software especializado de vanguardia para complementar las prácticas técnicas mientras se expande la infraestructura física. 3. Integrar proyectos de estudiantes de asignaturas terminales o integradoras para la puesta en marcha, calibración y aprovechamiento de equipos subutilizados. 4. Buscar acuerdos formales con organismos sectoriales para cofinanciar el equipamiento docente y acelerar la transición del currículo por competencias.`;

  // FA (Fortalezas para enfrentar Amenazas)
  state.estrategiasFA = `1. Destacar en las campañas de promoción institucional y captación de estudiantes la alta calidad de los docentes, la vinculación empresarial y la investigación como factores diferenciales clave frente a la competencia. 2. Fomentar el trabajo interdisciplinario y el uso compartido de laboratorios entre carreras afines de ${f} para optimizar recursos. 3. Mantener programas permanentes de actualización docente en conjunto con empresas e instituciones internacionales para contrarrestar la fuga de talento y la obsolescencia técnica.`;

  // DA (Reducir Debilidades y evitar Amenazas)
  state.estrategiasDA = `1. Implementar un protocolo sistemático de registro digital de asistencia, resultados y encuestas de satisfacción en cada actividad para evidenciar el impacto real en el POA. 2. Dar seguimiento prioritario a las solicitudes de infraestructura, climatización y mantenimiento de talleres para garantizar condiciones idóneas de enseñanza. 3. Distribuir la coordinación de iniciativas y comisiones académicas entre profesores responsables por ejes disciplinares. 4. Diversificar las alianzas y convenios con múltiples entidades públicas y privadas para mitigar la dependencia de un único aliado externo.`;

  // 6. Conclusión
  state.conclusion = `La carrera de ${c} muestra en ${y} una base sólida: un plan de estudios orientado al modelo por competencias, infraestructura formativa en continuo fortalecimiento, vinculación activa con el sector productivo y avances significativos en investigación aplicada y producción académica. Su principal reto consiste en expandir y modernizar sus espacios de práctica especializada, además de sistematizar la documentación del impacto de sus actividades y formalizar jurídicamente sus alianzas externas. El entorno de desarrollo del país ofrece oportunidades claras que la carrera puede capitalizar estratégicamente con las acciones propuestas. Se recomienda validar formalmente este análisis con el claustro docente, los estudiantes y los empleadores, e incorporar estas estrategias como insumo prioritario para el Plan Operativo Anual (POA) ${parseInt(y, 10) + 1 || '2027'} y su correspondiente carga en la plataforma ISOTools.`;
}

// Inicialización de la aplicación
function initApp() {
  generateDocumentContent();
  renderForm();
  renderPreview();
  setupEventListeners();
}

// Renderiza los campos del formulario con los valores del estado
function renderForm() {
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
    state.carrera = "";
    state.siglas = "";
    state.director = "";
    state.periodo = "Año académico 2026 (enero – octubre)";
    state.ano = "2026";
    state.fecha = new Date().toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' });
    state.fuentes = "Evidencias del Plan Operativo Anual (POA), calendario de actividades y reuniones departamentales";
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
        if (key === 'carrera') state.carrera = e.target.value;
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

  const c = state.carrera || "Carrera Académica";
  const s = state.siglas ? `(${state.siglas})` : "";
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
    <div class="doc-title-main">Análisis FODA de la Carrera de ${escapeHtml(c)} ${escapeHtml(s)}</div>
    <div class="doc-subtitle-1">Fortalezas, Oportunidades, Debilidades y Amenazas – ${escapeHtml(y)}</div>
    <div class="doc-subtitle-2">Carrera de ${escapeHtml(c)} ${escapeHtml(s)} – Universidad Tecnológica de Santiago (UTESA)</div>
    <div class="doc-date">Fecha: ${escapeHtml(state.fecha || '')}</div>

    <!-- Tabla de Metadatos -->
    <table class="doc-meta-table">
      <tbody>
        <tr>
          <th>Institución</th>
          <td>${escapeHtml(state.institucion || '')}</td>
        </tr>
        <tr>
          <th>Facultad</th>
          <td>${escapeHtml(state.facultad || '')}</td>
        </tr>
        <tr>
          <th>Carrera</th>
          <td>${escapeHtml(c)} ${escapeHtml(s)}</td>
        </tr>
        <tr>
          <th>Director</th>
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
      <div class="doc-signature-name">${escapeHtml(state.director || 'Nombre del Director')}</div>
      <div class="doc-signature-role">Director(a) de la carrera de ${escapeHtml(c)} ${escapeHtml(s)}</div>
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

    const c = state.carrera || "Carrera";
    const s = state.siglas ? `(${state.siglas})` : "";
    const y = state.ano || "2026";

    // 1. Tabla de Metadatos
    const metaRows = [
      ["Institución", state.institucion || ""],
      ["Facultad", state.facultad || ""],
      ["Carrera", `${c} ${s}`],
      ["Director", state.director || ""],
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
              new TextRun({ text: `Análisis FODA de la Carrera de ${c} ${s}`, bold: true, size: 30, font: "Century Gothic", color: "111827" })
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
              new TextRun({ text: `Carrera de ${c} ${s} – Universidad Tecnológica de Santiago (UTESA)`, size: 24, font: "Century Gothic", color: "4B5563" })
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

          // Bloque de Firma y Sello (Limpio para que el director firme y selle físicamente)
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
              new TextRun({ text: state.director || "Nombre del Director", bold: true, size: 24, font: "Century Gothic", color: "111827" })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 },
            children: [
              new TextRun({ text: `Director(a) de la carrera de ${c} ${s}`, size: 22, font: "Century Gothic", color: "4B5563" })
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

// Inicializa al cargar el DOM
document.addEventListener('DOMContentLoaded', initApp);
