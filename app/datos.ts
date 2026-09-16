type Bilingue = { es: string; en: string };

export type Experiencia = {
  periodo: Bilingue;
  rol: Bilingue;
  empresa: string;
  descripcion: Bilingue;
  proyectoId?: string;
  emoji?: string;
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
    rol: { es: "Product Owner", en: "Product Owner" },
    empresa: "Proinnprot SAS",
    emoji: "🧠",
    descripcion: {
      es: "Definición y liderazgo del desarrollo de una plataforma interna que digitalizó la gestión de propiedad horizontal de la empresa, hoy en uso activo por administradores, gerentes y consejos.",
      en: "Definition and development leadership of an internal platform that digitized the company's property management operations, now in active use by administrators, managers, and boards.",
    },
    proyectoId: "gestion-ph",
  },
  {
    periodo: { es: "ago. 2026", en: "Aug 2026" },
    rol: { es: "Desarrollador de software", en: "Software Developer" },
    empresa: "Consultorio Empresarial UPB — FL SHOES",
    emoji: "💻",
    descripcion: {
      es: "Construcción del módulo de cuentas por pagar de una fábrica de calzado real, reemplazando un Excel compartido sin trazabilidad por una aplicación con control de acceso y auditoría de movimientos.",
      en: "Built the accounts-payable module for a real footwear factory, replacing a shared Excel sheet with no traceability with an application featuring access control and movement auditing.",
    },
    proyectoId: "fl-shoes",
  },
];

export type Proyecto = {
  id: string;
  categoria: "ingenieria" | "web";
  titulo: Bilingue;
  contexto: Bilingue;
  descripcion: Bilingue;
  stack: Bilingue[];
  estado?: Bilingue;
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
    contexto: { es: "Product Owner · Proinnprot SAS", en: "Product Owner · Proinnprot SAS" },
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
    categoria: "web",
    titulo: { es: "FL SHOES — cuentas por pagar", en: "FL SHOES — Accounts Payable" },
    contexto: { es: "Consultorio Empresarial UPB", en: "Consultorio Empresarial UPB" },
    descripcion: {
      es: "Aplicación web para una fábrica de calzado real que reemplaza un Excel compartido sin trazabilidad: modela proveedores, plazos de pago, saldos y estados de cuenta. Control de acceso por rol y movimientos inmutables (una corrección es un movimiento inverso, con autor y fecha), migraciones versionadas desde el día 1 y 50 pruebas automatizadas. Construida con Claude Code como copiloto, incluyendo auditorías de seguridad por agentes de IA que corrigieron una vulnerabilidad real de permisos.",
      en: "Web application for a real footwear factory that replaces a shared Excel file with no traceability: models suppliers, payment terms, balances, and account statuses. Role-based access control and immutable movements (a correction is a reverse movement, with author and date), versioned migrations from day 1, and 50 automated tests. Built with Claude Code as an engineering copilot, including AI-agent security audits that fixed a real permissions vulnerability.",
    },
    stack: [
      { es: "React", en: "React" },
      { es: "Vite", en: "Vite" },
      { es: "TypeScript", en: "TypeScript" },
      { es: "Tailwind", en: "Tailwind" },
      { es: "Supabase", en: "Supabase" },
      { es: "pgTAP", en: "pgTAP" },
    ],
    estado: { es: "Finalizado", en: "Completed" },
  },
];
