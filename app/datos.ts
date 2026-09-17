type Bilingue = { es: string; en: string };

export type Experiencia = {
  periodo: Bilingue;
  rol: Bilingue;
  empresa: string;
  descripcion: Bilingue;
  proyectoId?: string;
  emoji?: string;
  detalle?: Bilingue;
  fotos?: string[];
};

export const experiencias: Experiencia[] = [
  {
    periodo: { es: "abr. 2021 – dic. 2022", en: "Apr 2021 – Dec 2022" },
    rol: { es: "Dibujante mecánico", en: "Mechanical Draftsman" },
    empresa: "IAF Ingeniería",
    emoji: "📐",
    descripcion: {
      es: "Planos de fabricación y montaje en Solid Edge, SolidWorks y AutoCAD; modelado 3D y renders para presentación de proyectos, en una empresa de diseño y fabricación de equipos para la industria de alimentos.",
      en: "Manufacturing and assembly drawings in Solid Edge, SolidWorks, and AutoCAD; 3D modeling and renders for project presentations, at a design and manufacturing company for the food industry.",
    },
  },
  {
    periodo: { es: "mar. – jun. 2023", en: "Mar – Jun 2023" },
    rol: { es: "Cofundador", en: "Co-founder" },
    empresa: "Always Ahead",
    emoji: "🤝",
    descripcion: {
      es: "Iniciativa junto a otros emprendedores para crear una comunidad de startups en Santander: organización de eventos y construcción de la red de contactos entre emprendedores y aliados institucionales.",
      en: "Initiative with other entrepreneurs to build a startup community in Santander: organized events and built the network of contacts among entrepreneurs and institutional partners.",
    },
  },
  {
    periodo: { es: "may. 2023 – feb. 2024", en: "May 2023 – Feb 2024" },
    rol: { es: "Ingeniero de proyectos", en: "Project Engineer" },
    empresa: "DSM Latinoamérica",
    emoji: "🏭",
    descripcion: {
      es: "Diseño, planos de fabricación y acompañamiento de construcción de un sistema CIP de 15.000 L/h para Indulácteos. En paralelo, construí en Excel/VBA una herramienta de trazabilidad de consumibles que reveló que una sola máquina consumía varios millones de pesos que la empresa no estaba cuantificando.",
      en: "Design, manufacturing drawings, and construction oversight of a 15,000 L/h CIP system for Indulácteos. In parallel, I built an Excel/VBA consumables-traceability tool that revealed a single machine was consuming several million pesos the company wasn't tracking.",
    },
    proyectoId: "cip-indulacteos",
  },
  {
    periodo: { es: "may. 2025 – feb. 2026", en: "May 2025 – Feb 2026" },
    rol: { es: "Colaborador en marketing y estrategia", en: "Marketing & Strategy Collaborator" },
    empresa: "Cuché Cuté",
    emoji: "🎯",
    descripcion: {
      es: "Colaboración con una marca de café de especialidad en su prelanzamiento: estrategia de marca, contenido para redes, estudio de mercado y tienda en línea en Shopify.",
      en: "Collaboration with a specialty coffee brand during its pre-launch stage: brand strategy, social media content, market research, and an online store on Shopify.",
    },
  },
  {
    periodo: { es: "nov. 2025 – ene. 2026", en: "Nov 2025 – Jan 2026" },
    rol: { es: "Diseñador mecánico independiente", en: "Independent Mechanical Designer" },
    empresa: "Innovameq",
    emoji: "⚙️",
    descripcion: {
      es: "Diseño para Indunilo de una dosificadora de tornillo sin fin con tolva de 2 m³ en acero inoxidable: modelado, planos de fabricación y supervisión de construcción y ensamble.",
      en: "Design for Indunilo of a screw-feeder doser with a 2 m³ hopper in stainless steel: modeling, manufacturing drawings, and construction/assembly oversight.",
    },
    proyectoId: "dosificadora-indunilo",
  },
  {
    periodo: { es: "jul. 2026 – hoy", en: "Jul 2026 – present" },
    rol: { es: "Product manager", en: "Product Manager" },
    empresa: "Proinnprot SAS",
    emoji: "🧠",
    descripcion: {
      es: "Definición y liderazgo del desarrollo de una plataforma interna que digitalizó la gestión de propiedad horizontal de la empresa, hoy en uso activo por administradores, gerentes y consejos.",
      en: "Definition and development leadership of an internal platform that digitized the company's property management operations, now in active use by administrators, managers, and boards.",
    },
    proyectoId: "gestion-ph",
  },
];

export type Proyecto = {
  id: string;
  categoria: "ingenieria" | "web" | "academico";
  titulo: Bilingue;
  contexto: Bilingue;
  descripcion: Bilingue;
  stack: Bilingue[];
  estado?: Bilingue;
  emoji?: string;
};

export const proyectos: Proyecto[] = [
  {
    id: "cip-indulacteos",
    categoria: "ingenieria",
    titulo: { es: "Sistema CIP de 15.000 L/h", en: "15,000 L/h CIP System" },
    contexto: { es: "DSM Latinoamérica · para Indulácteos", en: "DSM Latinoamérica · for Indulácteos" },
    descripcion: {
      es: "Sistema de lavado automático de líneas de proceso (Clean-In-Place) sin necesidad de desarmarlas, para un cliente del sector lácteo. Participé junto al equipo de ingeniería en el diseño a partir del requerimiento del cliente, elaboré los planos de fabricación, acompañé la construcción y el ensamble desde el día 1 hasta la entrega, y desarrollé el análisis de precios unitarios y el manual de operación.",
      en: "Automatic Clean-In-Place system for washing process lines without disassembling them, for a dairy-sector client. I took part in the design alongside the engineering team based on the client's requirements, produced the manufacturing drawings, oversaw construction and assembly from day 1 through delivery, and developed the unit-price analysis and operation manual.",
    },
    stack: [
      { es: "Solid Edge", en: "Solid Edge" },
      { es: "Planos de fabricación", en: "Manufacturing drawings" },
      { es: "APU", en: "Unit price analysis" },
      { es: "Gestión de proyectos", en: "Project management" },
    ],
  },
  {
    id: "dosificadora-indunilo",
    categoria: "ingenieria",
    titulo: { es: "Dosificadora de tornillo sin fin — 2 m³", en: "Screw-Feeder Doser — 2 m³" },
    contexto: { es: "Innovameq · para Indunilo", en: "Innovameq · for Indunilo" },
    descripcion: {
      es: "Equipo en acero inoxidable para pulverización de grasa vegetal, con tolva de 2 m³ y tornillo sin fin accionado por motorreductor (sinfín-corona, 0,5 HP, 42 RPM). Como profesional independiente, diseñé el equipo, elaboré los planos de fabricación y supervisé la construcción y el ensamble hasta la entrega.",
      en: "Stainless steel equipment for pulverizing vegetable fat, with a 2 m³ hopper and a screw feeder driven by a gearmotor (worm gear, 0.5 HP, 42 RPM). As an independent professional, I designed the equipment, produced the manufacturing drawings, and oversaw construction and assembly through delivery.",
    },
    stack: [
      { es: "Solid Edge", en: "Solid Edge" },
      { es: "Diseño mecánico", en: "Mechanical design" },
      { es: "Planos de fabricación", en: "Manufacturing drawings" },
    ],
  },
  {
    id: "gestion-ph",
    categoria: "web",
    titulo: { es: "Gestión PH — plataforma de administración", en: "Gestión PH — Management Platform" },
    contexto: { es: "Product manager · Proinnprot SAS", en: "Product Manager · Proinnprot SAS" },
    descripcion: {
      es: "Herramienta a la medida que reemplazó cuadernos y carpetas físicas de una administradora de propiedad horizontal por gestión digital en tiempo real: compromisos y tareas, contratos con renovación automática, contratistas con pólizas y vencimientos, mantenimientos con evidencia obligatoria, y llamados de atención con su flujo de autorización. En uso activo en varios conjuntos residenciales reales, con roles y permisos diferenciados por tipo de usuario.",
      en: "Custom-built tool that replaced notebooks and paper folders at a property management company with real-time digital management: commitments and daily tasks, contracts with automatic renewal, contractors with policy/certificate expirations, maintenance with mandatory evidence, and a formal warning workflow with its own authorization flow. In active use across several real residential complexes, with roles and permissions by user type.",
    },
    stack: [
      { es: "Next.js", en: "Next.js" },
      { es: "Supabase", en: "Supabase" },
      { es: "PostgreSQL", en: "PostgreSQL" },
      { es: "Row Level Security", en: "Row Level Security" },
      { es: "n8n", en: "n8n" },
    ],
    estado: { es: "En producción · capturas próximamente", en: "In production · screenshots coming soon" },
  },
  {
    id: "fl-shoes",
    categoria: "academico",
    titulo: { es: "Sistema ERP + CRM a la medida — FL SHOES", en: "Custom ERP + CRM System — FL SHOES" },
    contexto: { es: "Consultorio Empresarial UPB · para una fábrica de calzado", en: "UPB Business Consultancy · for a footwear factory" },
    emoji: "👟",
    descripcion: {
      es: "Participé en el desarrollo de una plataforma a la medida para una fábrica de calzado real, integrando inventarios, cuentas por cobrar y por pagar, pedidos mayoristas con seguimiento de producción, y control de acceso por roles con seguridad a nivel de base de datos (Row Level Security) — permitiéndole a la empresa digitalizar y trazar su cadena de suministro de punta a punta.",
      en: "I took part in building a custom platform for a real footwear factory, integrating inventory, accounts receivable and payable, wholesale orders with production tracking, and role-based access control with database-level security (Row Level Security) — letting the company digitize and trace its supply chain end to end.",
    },
    stack: [
      { es: "React", en: "React" },
      { es: "Vite", en: "Vite" },
      { es: "TypeScript", en: "TypeScript" },
      { es: "Tailwind", en: "Tailwind" },
      { es: "Supabase", en: "Supabase" },
      { es: "pgTAP", en: "pgTAP" },
    ],
  },
  {
    id: "mermelatte",
    categoria: "academico",
    titulo: { es: "Mermelatte — mermelada de café con mora", en: "Mermelatte — Coffee & Blackberry Jam" },
    contexto: { es: "Ingeniería Industrial I, UPB · plan de negocio", en: "Industrial Engineering I, UPB · business plan" },
    emoji: "☕",
    descripcion: {
      es: "Plan de negocio completo (Business Model Canvas) para una mermelada de café con mora endulzada con panela: diseño del proceso productivo, costeo unitario y evaluación financiera (VPN $142.415.480 · TIR 54,05%), sustentados en una investigación de mercado propia en el área metropolitana de Bucaramanga.",
      en: "A complete business plan (Business Model Canvas) for a panela-sweetened coffee-and-blackberry jam: production process design, unit costing, and financial evaluation (NPV $142,415,480 COP · IRR 54.05%), backed by original market research in the Bucaramanga metro area.",
    },
    stack: [
      { es: "Business Model Canvas", en: "Business Model Canvas" },
      { es: "Estudio de mercado", en: "Market research" },
      { es: "Evaluación financiera", en: "Financial evaluation" },
    ],
    estado: { es: "🏆 1er puesto · Jornada de Investigación Formativa UPB", en: "🏆 1st place · UPB Formative Research Day" },
  },
  {
    id: "tablero-tic",
    categoria: "academico",
    titulo: { es: "Tablero Power BI — demanda de formación en TIC", en: "Power BI Dashboard — ICT Training Demand" },
    contexto: { es: "UPB · analítica de datos", en: "UPB · data analytics" },
    emoji: "📊",
    descripcion: {
      es: "Modelo de datos y tablero en Power BI para responder una pregunta de investigación sobre las necesidades de educación continua en tecnologías de la información a nivel nacional e internacional.",
      en: "Data model and Power BI dashboard built to answer a research question about continuing-education needs in information technology, both nationally and internationally.",
    },
    stack: [
      { es: "Power BI", en: "Power BI" },
      { es: "Modelado de datos", en: "Data modeling" },
    ],
  },
  {
    id: "prospectiva-hotel-punta-diamante",
    categoria: "academico",
    titulo: { es: "Plan prospectivo 2045 — Hotel Punta Diamante", en: "2045 Foresight Plan — Hotel Punta Diamante" },
    contexto: { es: "UPB · prospectiva estratégica", en: "UPB · strategic foresight" },
    emoji: "🏨",
    descripcion: {
      es: "Apliqué la metodología Godet (análisis estructural MICMAC + juego de actores MACTOR) para reducir 30 factores a 6 variables estratégicas y mapear 15 actores del sector hotelero, construyendo 6 escenarios cuantificados —tendencial, apuesta, catastrófico, entre otros— para sustentar decisiones de largo plazo.",
      en: "I applied the Godet methodology (MICMAC structural analysis + MACTOR stakeholder analysis) to narrow 30 factors down to 6 strategic variables and map 15 stakeholders in the hospitality sector, building 6 quantified scenarios —trend-based, bet, catastrophic, among others— to support long-term decisions.",
    },
    stack: [
      { es: "MICMAC", en: "MICMAC" },
      { es: "MACTOR", en: "MACTOR" },
      { es: "Prospectiva estratégica", en: "Strategic foresight" },
    ],
  },
];
