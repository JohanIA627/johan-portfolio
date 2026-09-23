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
    fotos: ["/fotos/iaf.jpg"],
    descripcion: {
      es: "Hice planos de fabricación y montaje, modelado 3D y renders, y apoyé compras y diseño de maquinaria.",
      en: "I made manufacturing and assembly drawings, 3D models and renders, and helped with purchasing and machinery design.",
    },
    detalle: {
      es: "En IAF Ingeniería trabajé medio tiempo como dibujante mecánico, de abril de 2021 a diciembre de 2022. IAF hace equipos para la industria de alimentos. Yo hacía los planos de fabricación y montaje en Solid Edge, SolidWorks y AutoCAD, y modelaba en 3D y armaba renders para presentar los proyectos. También apoyaba los pedidos de materiales y el contacto con proveedores, y ayudaba en el desarrollo y diseño de la maquinaria.",
      en: "At IAF Ingeniería I worked part-time as a mechanical draftsman, from April 2021 to December 2022. IAF makes equipment for the food industry. I made manufacturing and assembly drawings in Solid Edge, SolidWorks and AutoCAD, and did 3D models and renders to present projects. I also helped with material orders and supplier contact, and supported the development and design of the machinery.",
    },
  },
  {
    periodo: { es: "mar. – jun. 2023", en: "Mar – Jun 2023" },
    rol: { es: "Cofundador", en: "Co-founder" },
    empresa: "Always Ahead",
    emoji: "🤝",
    fotos: ["/fotos/always-ahead.jpg"],
    descripcion: {
      es: "Cofundé una comunidad de startups de Santander con otros emprendedores. Organicé eventos y armé la red de aliados.",
      en: "I co-founded a startup community in Santander with other entrepreneurs. I organized events and built the network of allies.",
    },
    detalle: {
      es: "Entre marzo y junio de 2023 fui cofundador de Always Ahead, una comunidad de startups de Santander que armamos con otros emprendedores. Yo me encargué de organizar eventos y de armar la red de contactos con aliados, entre ellos S-innova, la incubadora de la UIS. Duró poco.",
      en: "Between March and June 2023 I was a co-founder of Always Ahead, a startup community in Santander that we built with other entrepreneurs. I organized events and built the network of contacts with allies, among them S-innova, the UIS incubator. It didn't last long.",
    },
  },
  {
    periodo: { es: "may. 2023 – feb. 2024", en: "May 2023 – Feb 2024" },
    rol: { es: "Ingeniero de proyectos", en: "Project Engineer" },
    empresa: "DSM Latinoamérica",
    emoji: "🏭",
    fotos: ["/fotos/dsm.jpg"],
    descripcion: {
      es: "Participé en el diseño y la construcción de un sistema CIP de 15.000 L/h y armé una herramienta de consumibles en Excel/VBA.",
      en: "I took part in designing and building a 15,000 L/h CIP system and made a consumables tool in Excel/VBA.",
    },
    detalle: {
      es: "En DSM fui ingeniero de proyectos de mayo de 2023 a febrero de 2024. Participé con el equipo de ingeniería en el diseño de un sistema CIP de 15.000 L/h para Indulácteos, que lava las líneas sin desarmarlas. Hice los planos de fabricación, seguí la construcción y el ensamble desde el primer día, y armé el APU y el manual de operación. Se entregó en enero de 2024. Aparte hice en Excel/VBA una herramienta para rastrear consumibles por operario, proyecto y equipo: mostró que los de una sola máquina sumaban varios millones de pesos que nadie había cuantificado. También levanté el inventario de maquinaria y equipos de la planta.",
      en: "At DSM I was a project engineer from May 2023 to February 2024. Together with the engineering team I helped design a 15,000 L/h CIP system for Indulácteos, which cleans the lines without taking them apart. I made the manufacturing drawings, followed construction and assembly from day one, and put together the unit-price analysis (APU) and the operation manual. It was delivered in January 2024. Separately, I built an Excel/VBA tool to track consumables by operator, project and machine: it showed that the consumables of a single machine added up to several million pesos nobody had quantified. I also took the plant's inventory of machinery and equipment.",
    },
    proyectoId: "cip-indulacteos",
  },
  {
    periodo: { es: "may. 2025 – feb. 2026", en: "May 2025 – Feb 2026" },
    rol: { es: "Colaborador en marketing y estrategia", en: "Marketing & Strategy Collaborator" },
    empresa: "Cuché Cuté",
    emoji: "🎯",
    fotos: ["/fotos/cuche-cute.jpg"],
    descripcion: {
      es: "Colaboré con una marca de café de especialidad en prelanzamiento: estrategia, contenido de redes y tienda en Shopify.",
      en: "I worked with a specialty coffee brand before its launch: strategy, social content and a Shopify store.",
    },
    detalle: {
      es: "De mayo de 2025 a febrero de 2026 colaboré con Cuché Cuté, una marca de café de especialidad en prelanzamiento. Trabajé la estrategia de marca y el storytelling, y preparé el contenido de redes del primer mes: guiones y un calendario de 9 piezas. También hice el estudio de mercado y la estrategia de posicionamiento regional, y monté la tienda en línea en Shopify.",
      en: "From May 2025 to February 2026 I worked with Cuché Cuté, a specialty coffee brand in pre-launch. I worked on the brand strategy and storytelling, and prepared the first month of social content: scripts and a calendar of 9 pieces. I also did the market study and the regional positioning strategy, and set up the online store on Shopify.",
    },
  },
  {
    periodo: { es: "nov. 2025 – ene. 2026", en: "Nov 2025 – Jan 2026" },
    rol: { es: "Diseñador mecánico independiente", en: "Independent Mechanical Designer" },
    empresa: "Innovameq",
    emoji: "⚙️",
    fotos: ["/fotos/innovameq.jpg"],
    descripcion: {
      es: "Diseñé una dosificadora de tornillo sin fin en acero inoxidable para Indunilo y seguí su fabricación hasta la entrega.",
      en: "I designed a stainless-steel screw-feeder dosing machine for Indunilo and followed its manufacturing through to delivery.",
    },
    detalle: {
      es: "Entre noviembre de 2025 y enero de 2026 trabajé como diseñador mecánico independiente en Innovameq. Diseñé para Indunilo una dosificadora de tornillo sin fin con tolva de 2 m³, en acero inoxidable, para pulverizar grasa vegetal, con un motorreductor sinfín-corona de 0,5 HP a 42 RPM. Hice los planos de fabricación, compré los materiales y armé el APU. Después supervisé la construcción y el ensamble hasta la entrega.",
      en: "Between November 2025 and January 2026 I worked as an independent mechanical designer at Innovameq. For Indunilo I designed a screw-feeder dosing machine with a 2 m³ hopper, in stainless steel, to pulverize vegetable fat, driven by a 0.5 HP, 42 RPM worm-gear motor. I made the manufacturing drawings, bought the materials and put together the unit-price analysis (APU). Then I supervised construction and assembly through to delivery.",
    },
    proyectoId: "dosificadora-indunilo",
  },
  {
    periodo: { es: "jul. 2026 – hoy", en: "Jul 2026 – present" },
    rol: { es: "Product manager", en: "Product Manager" },
    empresa: "Proinnprot SAS",
    emoji: "🧠",
    fotos: ["/fotos/proinnprot.png"],
    descripcion: {
      es: "Definí y lidero una plataforma a la medida que cambió los cuadernos y carpetas de una administradora de propiedad horizontal por gestión digital.",
      en: "I defined and lead a custom platform that replaced the notebooks and paper folders of a property management company with digital management.",
    },
    detalle: {
      es: "Desde julio de 2026 soy product manager en Proinnprot. Definí y lidero el desarrollo de una plataforma interna a la medida para una empresa que administra propiedad horizontal. Reemplazó los cuadernos y carpetas físicas, y hoy maneja contratos, contratistas, mantenimientos con evidencia obligatoria y llamados de atención. Los informes que antes tomaban días de armar a mano salen al instante. La usan administradores, gerentes y presidentes de consejo en varios conjuntos residenciales.",
      en: "Since July 2026 I've been product manager at Proinnprot. I defined and lead the development of a custom internal platform for a company that manages residential property (horizontal ownership). It replaced the notebooks and paper folders, and today it handles contracts, contractors, maintenance with mandatory evidence and warning notices. Reports that used to take days to put together by hand now come out instantly. Administrators, managers and board presidents use it across several residential complexes.",
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
  modelo3d?: string;
};

export const proyectos: Proyecto[] = [
  {
    id: "cip-indulacteos",
    categoria: "ingenieria",
    modelo3d: "/models/cip.glb",
    titulo: { es: "Sistema CIP de 15.000 L/h", en: "15,000 L/h CIP System" },
    contexto: { es: "DSM Latinoamérica, para Indulácteos", en: "DSM Latinoamérica, for Indulácteos" },
    descripcion: {
      es: "Sistema de lavado automático de líneas (Clean-In-Place) para un cliente lácteo, que lava sin desarmar nada. Participé en el diseño con el equipo de ingeniería, hice los planos de fabricación y seguí la construcción y el ensamble desde el día 1 hasta la entrega, en enero de 2024. También armé el APU y el manual de operación.",
      en: "Automatic Clean-In-Place system for a dairy client, which cleans the lines without taking anything apart. I took part in the design with the engineering team, made the manufacturing drawings, and followed construction and assembly from day 1 to delivery, in January 2024. I also put together the unit price analysis and the operation manual.",
    },
    stack: [
      { es: "Solid Edge", en: "Solid Edge" },
      { es: "Planos de fabricación", en: "Manufacturing drawings" },
      { es: "APU", en: "Unit price analysis" },
    ],
  },
  {
    id: "dosificadora-indunilo",
    categoria: "ingenieria",
    modelo3d: "/models/dosificadora.glb",
    titulo: { es: "Dosificadora de tornillo sin fin de 2 m³", en: "2 m³ Screw-Feeder Doser" },
    contexto: { es: "Innovameq, para Indunilo", en: "Innovameq, for Indunilo" },
    descripcion: {
      es: "Equipo en acero inoxidable para pulverizar grasa vegetal, con tolva de 2 m³ y tornillo sin fin movido por un motorreductor sinfín-corona de 0,5 HP a 42 RPM. Como independiente diseñé el equipo, hice los planos de fabricación y supervisé la construcción y el ensamble hasta la entrega.",
      en: "Stainless steel equipment for pulverizing vegetable fat, with a 2 m³ hopper and a screw feeder driven by a 0.5 HP worm-gear motor at 42 RPM. Working as an independent, I designed the equipment, made the manufacturing drawings, and supervised construction and assembly through delivery.",
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
    titulo: { es: "Gestión PH: plataforma de administración", en: "Gestión PH: Management Platform" },
    contexto: { es: "Product manager, Proinnprot SAS", en: "Product Manager, Proinnprot SAS" },
    descripcion: {
      es: "Plataforma web a la medida que reemplazó los cuadernos y carpetas físicas de una administradora de propiedad horizontal. Maneja compromisos y tareas, contratos con renovación automática, contratistas con sus pólizas y vencimientos, mantenimientos con evidencia obligatoria y llamados de atención con autorización. Hoy la usan varios conjuntos residenciales reales, cada usuario con sus permisos.",
      en: "Custom web platform that replaced the notebooks and paper folders of a property management company. It handles commitments and tasks, contracts with automatic renewal, contractors with their policies and expiry dates, maintenance with mandatory evidence, and warning notices that need authorization. Several real residential complexes use it today, each user with their own permissions.",
    },
    stack: [
      { es: "Next.js", en: "Next.js" },
      { es: "Supabase", en: "Supabase" },
      { es: "PostgreSQL", en: "PostgreSQL" },
      { es: "Row Level Security", en: "Row Level Security" },
      { es: "n8n, avisos por correo (en pausa)", en: "n8n, email alerts (paused)" },
    ],
    estado: { es: "En producción", en: "In production" },
  },
  {
    id: "fl-shoes",
    categoria: "academico",
    titulo: {
      es: "FL SHOES: sistema a la medida para una fábrica de calzado",
      en: "FL SHOES: Custom System for a Footwear Factory",
    },
    contexto: {
      es: "Consultorio Empresarial UPB, proyecto académico",
      en: "UPB Business Consultancy, academic project",
    },
    emoji: "👟",
    descripcion: {
      es: "Sistema a la medida para una fábrica de calzado real, con inventarios, cuentas por cobrar, cuentas por pagar y pedidos mayoristas. Lo hacemos entre dos estudiantes: acceso por roles, pruebas automatizadas y auditorías de seguridad que ya corrigieron una falla real.",
      en: "Custom system for a real footwear factory, with inventory, accounts receivable, accounts payable and wholesale orders. We are two students building it: role-based access, automated tests and security audits that have already fixed a real flaw.",
    },
    stack: [
      { es: "React", en: "React" },
      { es: "Vite", en: "Vite" },
      { es: "TypeScript", en: "TypeScript" },
      { es: "Tailwind", en: "Tailwind" },
      { es: "Supabase", en: "Supabase" },
      { es: "pgTAP", en: "pgTAP" },
    ],
    estado: { es: "En desarrollo, cierra en octubre de 2026", en: "In progress, ends in October 2026" },
  },
  {
    id: "mermelatte",
    categoria: "academico",
    titulo: { es: "Mermelatte: mermelada de café con mora", en: "Mermelatte: Coffee and Blackberry Jam" },
    contexto: {
      es: "Ingeniería Industrial I, UPB, plan de negocio, 2025",
      en: "Industrial Engineering I, UPB, business plan, 2025",
    },
    emoji: "☕",
    descripcion: {
      es: "Una mermelada artesanal de café con trozos de mora, panela y leche, sin azúcar refinada. La sacamos entre cuatro, con el trabajo repartido: producto, proceso, costos y estudio de mercado. Llegó a prototipo y degustaciones, no se vendió.",
      en: "An artisanal coffee jam with blackberry pieces, panela and milk, no refined sugar. We built it as a team of four, with the work shared: product, process, costs and market research. It got as far as a prototype and tastings, and was never sold.",
    },
    stack: [
      { es: "Business Model Canvas", en: "Business Model Canvas" },
      { es: "Estudio de mercado", en: "Market research" },
      { es: "Evaluación financiera", en: "Financial evaluation" },
    ],
    estado: {
      es: "🏆 1er puesto, Jornada de Investigación Formativa de Ing. Industrial UPB (28 oct. 2025)",
      en: "🏆 1st place, UPB Industrial Engineering Formative Research Day (Oct 28, 2025)",
    },
  },
  {
    id: "tablero-tic",
    categoria: "academico",
    titulo: { es: "Tablero Power BI: demanda de formación en TIC", en: "Power BI Dashboard: ICT Training Demand" },
    contexto: {
      es: "UPB, analítica de datos, 2025-1, trabajo individual",
      en: "UPB, data analytics, 2025-1, individual project",
    },
    emoji: "📊",
    descripcion: {
      es: "Armé el modelo de datos y un tablero en Power BI para responder una pregunta de investigación: qué educación continua en tecnologías de la información se necesita, a nivel nacional e internacional.",
      en: "I built the data model and a Power BI dashboard to answer a research question: what continuing education in information technology is needed, nationally and internationally.",
    },
    stack: [
      { es: "Power BI", en: "Power BI" },
      { es: "Modelado de datos", en: "Data modeling" },
    ],
  },
  {
    id: "prospectiva-hotel-punta-diamante",
    categoria: "academico",
    titulo: { es: "Plan prospectivo 2045: Hotel Punta Diamante", en: "2045 Foresight Plan: Hotel Punta Diamante" },
    contexto: {
      es: "UPB, Pensamiento Estratégico y Prospectiva, 2026-1, trabajo individual",
      en: "UPB, Strategic Thinking and Foresight, 2026-1, individual project",
    },
    emoji: "🏨",
    descripcion: {
      es: "Plan para un hotel premium de 107 habitaciones en Ruitoque, Bucaramanga, con la metodología de Godet. Con MICMAC bajé 30 factores a 6 variables estratégicas, con MACTOR analicé 15 actores y armé 6 escenarios a 2045, cada uno con metas medibles.",
      en: "Plan for a 107-room premium hotel in Ruitoque, Bucaramanga, using Godet's methodology. With MICMAC I narrowed 30 factors down to 6 strategic variables, with MACTOR I analyzed 15 actors, and I built 6 scenarios to 2045, each with measurable goals.",
    },
    stack: [
      { es: "MICMAC", en: "MICMAC" },
      { es: "MACTOR", en: "MACTOR" },
      { es: "Prospectiva estratégica", en: "Strategic foresight" },
    ],
  },
];
