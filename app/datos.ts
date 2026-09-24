type Bilingue = { es: string; en: string };

export type Enlace = { etiqueta: Bilingue; href: string };

export type Experiencia = {
  periodo: Bilingue;
  rol: Bilingue;
  empresa: string;
  descripcion: Bilingue;
  proyectoId?: string;
  emoji?: string;
  logo?: string;
  enlaces?: Enlace[];
  detalle?: Bilingue;
  fotos?: string[];
};

export const experiencias: Experiencia[] = [
  {
    periodo: { es: "abr. 2021 – dic. 2022", en: "Apr 2021 – Dec 2022" },
    rol: { es: "Dibujante mecánico", en: "Mechanical Draftsman" },
    empresa: "IAF Ingeniería",
    logo: "/logos/iaf.png",
    fotos: ["/fotos/iaf-1.jpg"],
    descripcion: {
      es: "Mi primera experiencia laboral. Dibujante mecánico de medio tiempo: planos de fabricación, montaje y modelos 3D de plantas de evaporación y secado.",
      en: "My first job. Part-time mechanical draftsman: fabrication and assembly drawings and 3D models for evaporation and drying plants.",
    },
    detalle: {
      es: "IAF fue mi primera experiencia laboral. Trabajé medio tiempo como dibujante mecánico mientras estudiaba Ingeniería Mecánica en la UIS.\n\nIAF es una empresa especialista en el diseño y la fabricación de plantas de evaporación y secado. Mi trabajo era elaborar los planos de fabricación, los planos de montaje y los modelos 3D de los equipos y las plantas.\n\nUsé Solid Edge, SolidWorks y AutoCAD. También apoyé los pedidos de materiales y la gestión con proveedores.",
      en: "IAF was my first job. I worked part-time as a mechanical draftsman while studying Mechanical Engineering at UIS.\n\nIAF specializes in the design and manufacturing of evaporation and drying plants. My job was to produce the fabrication drawings, the assembly drawings and the 3D models of the equipment and the plants.\n\nI used Solid Edge, SolidWorks and AutoCAD. I also supported material orders and supplier management.",
    },
  },
  {
    periodo: { es: "mar. – jun. 2023", en: "Mar – Jun 2023" },
    rol: { es: "Cofundador", en: "Co-founder" },
    empresa: "Always Ahead",
    logo: "/logos/always-ahead.png",
    fotos: ["/fotos/always-ahead-1.jpg"],
    descripcion: {
      es: "Iniciativa con empresarios de tecnología de la región para crear un ecosistema de empresas tech santandereanas, con eventos propios y networking.",
      en: "An initiative with regional tech entrepreneurs to build an ecosystem of Santander tech companies, with our own events and networking.",
    },
    detalle: {
      es: "Always Ahead fue una iniciativa junto con empresarios de tecnología de la región. Buscábamos crear un ecosistema de empresas de tecnología santandereanas, que conectara a esas empresas con oportunidades de crecimiento y formara una comunidad.\n\nNos inspiramos en lo que ya existe en otras regiones, como Ruta N en Medellín o lo que se ha construido en Bogotá.\n\nCon el proyecto logramos realizar eventos propios de networking, varios de los miembros asistimos a otros espacios del ecosistema y nos reunimos con instituciones como S-innova.",
      en: "Always Ahead was an initiative with tech entrepreneurs from the region. We wanted to build an ecosystem of Santander tech companies that would connect them with growth opportunities and form a community.\n\nWe took inspiration from what already exists in other regions, like Ruta N in Medellín or what has been built in Bogotá.\n\nThrough the project we ran our own networking events, several of us attended other events in the ecosystem, and we met with institutions such as S-innova.",
    },
  },
  {
    periodo: { es: "may. 2023 – feb. 2024", en: "May 2023 – Feb 2024" },
    rol: { es: "Ingeniero de proyectos", en: "Project Engineer" },
    empresa: "DSM Latinoamérica",
    logo: "/logos/dsm.png",
    fotos: ["/fotos/dsm-1.jpg"],
    descripcion: {
      es: "Ingeniero de proyectos. Lideré el diseño y la fabricación de un sistema CIP de 15.000 L/h para Indulácteos y una herramienta en Excel para trazar consumibles.",
      en: "Project engineer. I led the design and fabrication of a 15,000 L/h CIP system for Indulácteos and built an Excel tool to track consumables.",
    },
    detalle: {
      es: "DSM es una empresa especializada en el diseño y montaje de maquinaria industrial, sobre todo para la industria láctea. Allí trabajé como ingeniero de proyectos y lideré el diseño y la fabricación de un sistema CIP de 15.000 litros por hora para Indulácteos. El proyecto duró aproximadamente 4 meses.\n\nAprendí mucho sobre planos de fabricación, diseño de maquinaria industrial y gestión de proveedores. Usé Solid Edge, AutoCAD, SolidWorks, Excel y KeyShot.\n\nTambién desarrollé una herramienta en Excel programada en Visual Basic con la que la empresa pudo empezar a trazar el uso de sus consumibles. Con ella obtuvimos estadísticas en tiempo real de lo que costaban los consumibles asociados a un proyecto, a una máquina o a un proceso.\n\nAdemás levanté el inventario de la planta: herramientas, maquinaria, equipos de soldadura y elementos de protección personal. Todo se hizo de forma digital en Excel.",
      en: "DSM specializes in the design and assembly of industrial machinery, mostly for the dairy industry. I worked there as a project engineer and led the design and fabrication of a 15,000 liters per hour CIP system for Indulácteos. The project took about 4 months.\n\nI learned a lot about fabrication drawings, industrial machinery design and supplier management. I used Solid Edge, AutoCAD, SolidWorks, Excel and KeyShot.\n\nI also built an Excel tool programmed in Visual Basic that let the company start tracking how it used its consumables. With it we got real-time numbers on what consumables cost per project, per machine or per process.\n\nI also took the plant inventory: tools, machinery, welding equipment and personal protective equipment. All of it was done digitally in Excel.",
    },
    proyectoId: "cip-indulacteos",
  },
  {
    periodo: { es: "may. 2025 – feb. 2026", en: "May 2025 – Feb 2026" },
    rol: { es: "Colaborador en marketing y estrategia", en: "Marketing & Strategy Collaborator" },
    empresa: "Cuché Cuté",
    emoji: "🎯",
    enlaces: [
      { etiqueta: { es: "Instagram", en: "Instagram" }, href: "https://www.instagram.com/cuchecute/" },
      { etiqueta: { es: "TikTok", en: "TikTok" }, href: "https://www.tiktok.com/@cuchecute" },
    ],
    fotos: ["/fotos/cuche-cute-1.jpg"],
    descripcion: {
      es: "Café de especialidad. Aprendí marketing, identidad de marca y e-commerce, y armamos la estrategia de contenidos inicial para TikTok e Instagram.",
      en: "Specialty coffee company. I learned marketing, brand identity and e-commerce, and we built the initial content strategy for TikTok and Instagram.",
    },
    detalle: {
      es: "En Cuché Cuté, una empresa de café de especialidad, aprendí muchísimo de marketing: estrategia, identidad de marca, storytelling y creación de contenido.\n\nTambién aprendí a crear y administrar páginas web y e-commerce con herramientas como Shopify y WordPress.\n\nAllí armamos la estrategia de contenidos para los primeros meses, tanto en TikTok como en Instagram.",
      en: "At Cuché Cuté, a specialty coffee company, I learned a great deal about marketing: strategy, brand identity, storytelling and content creation.\n\nI also learned to build and manage websites and e-commerce stores with tools like Shopify and WordPress.\n\nThere we put together the content strategy for the first months, on both TikTok and Instagram.",
    },
  },
  {
    periodo: { es: "nov. 2025 – ene. 2026", en: "Nov 2025 – Jan 2026" },
    rol: { es: "Diseñador mecánico independiente", en: "Independent Mechanical Designer" },
    empresa: "Innovameq",
    emoji: "⚙️",
    fotos: ["/fotos/innovameq-1.jpg"],
    descripcion: {
      es: "Independiente, finales de 2025. Lideré el diseño de una dosificadora de polvo de tornillo con tolva de 2 m³ y supervisé su construcción y entrega.",
      en: "Freelance, late 2025. I led the design of a screw powder feeder with a 2 m³ hopper and supervised its construction and delivery.",
    },
    detalle: {
      es: "A finales de 2025 lideré un proyecto de diseño de una dosificadora de polvo de tipo tornillo, con tolva de 2 metros cúbicos de capacidad, para una planta de pulverización de grasa vegetal. Contaba con un motorreductor de tornillo sin fin y corona de medio caballo.\n\nMe encargué del diseño, los planos de fabricación, la gestión de proveedores, la compra de materiales y el desarrollo del APU.\n\nTambién supervisé la construcción y el ensamble, y la entrega al cliente final.",
      en: "In late 2025 I led the design of a screw-type powder feeder with a 2 cubic meter hopper, for a vegetable fat pulverizing plant. It ran on a half-horsepower worm-gear motor reducer.\n\nI handled the design, the fabrication drawings, supplier management, material purchasing and the development of the unit price analysis (APU).\n\nI also supervised the construction and assembly, and the delivery to the end client.",
    },
    proyectoId: "dosificadora-indunilo",
  },
  {
    periodo: { es: "jul. 2026 – hoy", en: "Jul 2026 – present" },
    rol: { es: "Product manager", en: "Product Manager" },
    empresa: "Proinnprot SAS",
    logo: "/logos/proinnprot.png",
    enlaces: [
      { etiqueta: { es: "Abrir la herramienta", en: "Open the tool" }, href: "https://gestion-ph-v22z.vercel.app/" },
    ],
    fotos: ["/fotos/proinnprot-1.jpg"],
    descripcion: {
      es: "Product manager. Llevo la innovación y la integración de nuevas tecnologías, y construí una plataforma web que reemplaza cuadernos y carpetas físicas.",
      en: "Product Manager. I lead innovation and new technology integration, and built a web platform that replaces physical notebooks and folders.",
    },
    detalle: {
      es: "Actualmente soy Product manager en Proinnprot. Estoy a cargo de la innovación y de la integración de nuevas tecnologías de la empresa. Proinnprot administra propiedad horizontal y tiene una fuerte presencia en Santander.\n\nUno de mis proyectos es una herramienta web de uso interno que busca reemplazar los cuadernos y carpetas físicas que hoy usan los administradores. Ha ayudado a digitalizar muchos procesos y a ahorrar tiempo: informes que antes tardaban días en armarse ahora se envían de forma automática.\n\nLa herramienta está en constante crecimiento y maneja distintos roles: administradores, gerentes, presidentes de consejo y personal operativo de los conjuntos, entre otros.",
      en: "I'm currently a Product Manager at Proinnprot. I'm in charge of innovation and the integration of new technologies for the company. Proinnprot manages residential complexes (horizontal property) and has a strong presence in Santander.\n\nOne of my projects is an internal web tool meant to replace the physical notebooks and folders administrators use today. It has helped digitalize many processes and save time: reports that used to take days to put together are now sent automatically.\n\nThe tool keeps growing and supports several roles: administrators, managers, council presidents and on-site operating staff, among others.",
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
