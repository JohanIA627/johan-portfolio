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
      es: "Planos de fabricación y montaje, modelado 3D y apoyo en compras y diseño de maquinaria para la industria de alimentos.",
      en: "Manufacturing and assembly drawings, 3D modeling, and support with procurement and machinery design for the food industry.",
    },
    detalle: {
      es: "En IAF Ingeniería, una empresa de diseño y fabricación de equipos para la industria de alimentos, trabajé como dibujante mecánico entre 2021 y 2022. Hacía los planos de fabricación y montaje en Solid Edge, SolidWorks y AutoCAD, y también modelaba en 3D y armaba los renders con los que el equipo presentaba los proyectos a los clientes. Aparte del dibujo, apoyaba las compras de materiales e insumos y el contacto con proveedores, y colaboraba en el desarrollo de ingeniería y diseño de la maquinaria. Fue mi primer contacto real con cómo se traduce una idea de máquina en un plano que alguien más va a construir.",
      en: "At IAF Ingeniería, a company that designs and builds equipment for the food industry, I worked as a mechanical draftsman from 2021 to 2022. I produced manufacturing and assembly drawings in Solid Edge, SolidWorks, and AutoCAD, and also built 3D models and renders the team used to present projects to clients. Beyond drafting, I supported material and supply purchasing, dealt with suppliers, and helped with engineering development and machinery design. It was my first real exposure to how a machine idea turns into a drawing someone else can actually build from.",
    },
  },
  {
    periodo: { es: "mar. – jun. 2023", en: "Mar – Jun 2023" },
    rol: { es: "Cofundador", en: "Co-founder" },
    empresa: "Always Ahead",
    emoji: "🤝",
    fotos: ["/fotos/always-ahead.jpg"],
    descripcion: {
      es: "Comunidad de startups en Santander, cofundada con otros emprendedores: eventos y red de contactos con el ecosistema S-innova de la UIS.",
      en: "Startup community in Santander, co-founded with other entrepreneurs: events and a contact network with UIS's S-innova ecosystem.",
    },
    detalle: {
      es: "Entre marzo y junio de 2023 fui cofundador de Always Ahead, una iniciativa que armamos junto con otros emprendedores para crear una comunidad de startups en Santander. Nos encargábamos de organizar eventos y de tejer la red de contactos entre emprendedores y aliados institucionales, en particular con S-innova, el ecosistema de emprendimiento de la UIS. Fue una experiencia corta pero que me enseñó lo que cuesta sostener una comunidad desde cero: convocar, coordinar personas con intereses distintos y mantener vivo el interés más allá del primer evento. De ahí me quedó el gusto por conectar gente y por entender el ecosistema emprendedor de la región.",
      en: "Between March and June 2023, I co-founded Always Ahead, an initiative I built together with other entrepreneurs to create a startup community in Santander. We organized events and worked on building the network of contacts between entrepreneurs and institutional allies, in particular S-innova, the UIS entrepreneurship ecosystem. It was a short experience, but it taught me what it takes to keep a community alive from scratch: getting people to show up, coordinating people with different interests, and keeping momentum going beyond the first event. It left me with a real interest in connecting people and understanding the entrepreneurial ecosystem of the region.",
    },
  },
  {
    periodo: { es: "may. 2023 – feb. 2024", en: "May 2023 – Feb 2024" },
    rol: { es: "Ingeniero de proyectos", en: "Project Engineer" },
    empresa: "DSM Latinoamérica",
    emoji: "🏭",
    fotos: ["/fotos/dsm.jpg"],
    descripcion: {
      es: "Diseño y construcción de un sistema CIP de 15.000 L/h para Indulácteos, e inventarios y trazabilidad de consumibles en Excel/VBA.",
      en: "Design and construction of a 15,000 L/h CIP system for Indulácteos, plus consumables tracking and inventory tools in Excel/VBA.",
    },
    detalle: {
      es: "En DSM Latinoamérica participé en el diseño y los planos de fabricación de un sistema CIP de 15.000 L/h para Indulácteos, un cliente del sector lácteo, y acompañé la construcción hasta la entrega, junto con el análisis de precios unitarios y el manual de operación. En paralelo, construí en Excel/VBA una herramienta para llevar la trazabilidad de los consumibles de la planta. Ahí encontré algo que nadie había visto: una sola máquina estaba consumiendo varios millones de pesos que la empresa nunca había cuantificado. También levanté el inventario general de maquinaria y equipos, y el de herramientas y elementos de protección personal por operario — información que hasta entonces no existía centralizada en ningún lado.",
      en: "At DSM Latinoamérica I took part in the design and manufacturing drawings of a 15,000 L/h CIP system for Indulácteos, a dairy-sector client, and stayed involved through construction and delivery, along with the unit-price analysis and operation manual. In parallel, I built an Excel/VBA tool to track the plant's consumables. That's where I found something nobody had noticed: a single machine was consuming several million pesos that the company had never quantified. I also put together the plant's full inventory of machinery and equipment, plus the tools and PPE assigned to each operator — information that, until then, didn't exist in one place.",
    },
    proyectoId: "cip-indulacteos",
  },
  {
    periodo: { es: "may. 2025 – feb. 2026", en: "May 2025 – Feb 2026" },
    rol: { es: "Colaborador en marketing y estrategia", en: "Marketing & Strategy Collaborator" },
    empresa: "Cuché Cuté",
    emoji: "🎯",
    fotos: ["/fotos/cuche-cute.png"],
    descripcion: {
      es: "Colaboración externa con una marca de café de especialidad en prelanzamiento: estrategia de marca, contenido y tienda en Shopify.",
      en: "External collaboration with a specialty coffee brand during its pre-launch: brand strategy, content, and a Shopify store.",
    },
    detalle: {
      es: "Colaboré como externo con Cuché Cuté, una marca de café de especialidad, durante su etapa de prelanzamiento. Ayudé a definir la estrategia de marca y el storytelling con el que se iba a presentar al mercado, y preparé el contenido para redes del primer mes: guiones y un calendario de 9 piezas. También hice un estudio de mercado para pensar cómo posicionar la marca en la región, y monté la tienda en línea en Shopify por donde hoy vende.",
      en: "I collaborated externally with Cuché Cuté, a specialty coffee brand, during its pre-launch stage. I helped shape the brand strategy and the storytelling it would use to introduce itself to the market, and put together the first month's social media content: scripts and a calendar of 9 pieces. I also ran a market study to figure out how to position the brand in the region, and set up the Shopify store it sells through today.",
    },
  },
  {
    periodo: { es: "nov. 2025 – ene. 2026", en: "Nov 2025 – Jan 2026" },
    rol: { es: "Diseñador mecánico independiente", en: "Independent Mechanical Designer" },
    empresa: "Innovameq",
    emoji: "⚙️",
    fotos: ["/fotos/innovameq.jpg"],
    descripcion: {
      es: "Diseño y supervisión de fabricación de una dosificadora industrial en acero inoxidable, como diseñador mecánico independiente para un cliente.",
      en: "Independent mechanical design and manufacturing oversight of an industrial stainless-steel dosing machine for a client.",
    },
    detalle: {
      es: "Como diseñador mecánico independiente, diseñé para Indunilo una dosificadora de tornillo sin fin con tolva de 2 m³ en acero inoxidable, pensada para pulverizar grasa vegetal con un motorreductor sinfín-corona de 0,5 HP a 42 RPM. Elaboré los planos de fabricación y me hice cargo de la compra de materiales y el análisis de precios unitarios, para que el cliente supiera exactamente en qué se iba cada peso. Acompañé la construcción y el ensamble hasta la entrega, resolviendo en planta los ajustes que todo diseño real necesita cuando pasa del papel a la máquina. Trabajar así, de punta a punta y sin equipo detrás, me enseñó a sostener cada decisión técnica y económica del proyecto.",
      en: "As an independent mechanical designer, I designed a stainless-steel screw-feeder dosing machine with a 2 m³ hopper for Indunilo, built to pulverize vegetable fat using a 0.5 HP, 42 RPM worm-gear motor. I produced the manufacturing drawings and handled material procurement and unit-price analysis, so the client knew exactly where every peso went. I followed the build and assembly through to delivery, solving the on-the-floor adjustments that every design needs once it leaves the paper. Working end-to-end, without a team behind me, taught me to own every technical and financial decision on the project.",
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
      es: "Plataforma interna para administración de propiedad horizontal: reemplaza registros en papel por gestión digital de tareas, contratos, mantenimientos y más.",
      en: "Internal platform for property management: replaces paper logs with real-time digital tracking of tasks, contracts, and maintenance.",
    },
    detalle: {
      es: "Como product manager en Proinnprot, definí y lideré de principio a fin el desarrollo de una plataforma que reemplazó el registro manual en cuadernos y carpetas físicas por gestión digital en tiempo real, para una empresa que administra propiedad horizontal. Diseñé módulos para compromisos y tareas diarias, contratos con renovación automática y preaviso, contratistas con control de pólizas y certificados por vencer, mantenimientos con evidencia obligatoria, y llamados de atención con su propio flujo de autorización. Los informes que antes tomaban días de armar a mano ahora se generan al instante, lo que le devuelve tiempo real a quien administra. Hoy la usan administradores, gerentes y presidentes de consejo en varios conjuntos residenciales, y ese uso diario es la prueba de que resolvió un problema real.",
      en: "As product manager at Proinnprot, I defined and led the end-to-end development of a platform that replaced manual record-keeping in notebooks and paper folders with real-time digital management, for a company that manages properties under horizontal ownership (condo-style residential complexes). I designed modules for daily commitments and tasks, contracts with automatic renewal and advance notice, contractors with tracking of insurance policies and certificates nearing expiration, maintenance work with mandatory evidence, and attention notices with their own approval flow. Reports that used to take days to put together by hand are now generated instantly, giving administrators real time back. It's now used daily by administrators, managers, and board presidents across several residential complexes, and that daily use is the real proof it solved a real problem.",
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
    modelo3d: "/models/dosificadora.glb",
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
    estado: { es: "En producción", en: "In production" },
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
