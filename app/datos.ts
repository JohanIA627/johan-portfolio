export type Experiencia = {
  periodo: string;
  rol: string;
  empresa: string;
  descripcion: string;
  proyectoId?: string;
};

export const experiencias: Experiencia[] = [
  {
    periodo: "abr. 2021 – dic. 2022",
    rol: "Dibujante mecánico",
    empresa: "IAF Ingeniería",
    descripcion:
      "Planos de fabricación y montaje en Solid Edge, SolidWorks y AutoCAD; modelado 3D y renders para presentación de proyectos, en una empresa de diseño y fabricación de equipos para la industria de alimentos.",
  },
  {
    periodo: "mar. – jun. 2023",
    rol: "Cofundador",
    empresa: "Always Ahead",
    descripcion:
      "Iniciativa junto a otros emprendedores para crear una comunidad de startups en Santander: organización de eventos y construcción de la red de contactos entre emprendedores y aliados institucionales.",
  },
  {
    periodo: "may. 2023 – feb. 2024",
    rol: "Ingeniero de proyectos",
    empresa: "DSM Latinoamérica",
    descripcion:
      "Diseño, planos de fabricación y acompañamiento de construcción de un sistema CIP de 15.000 L/h para Indulácteos, más una herramienta de trazabilidad de consumibles en Excel/VBA.",
    proyectoId: "cip-indulacteos",
  },
  {
    periodo: "may. 2025 – feb. 2026",
    rol: "Colaborador en marketing y estrategia",
    empresa: "Cuché Cuté",
    descripcion:
      "Colaboración con una marca de café de especialidad en su prelanzamiento: estrategia de marca, contenido para redes, estudio de mercado y tienda en línea en Shopify.",
  },
  {
    periodo: "nov. 2025 – ene. 2026",
    rol: "Diseñador mecánico independiente",
    empresa: "Innovameq",
    descripcion:
      "Diseño para Indunilo de una dosificadora de tornillo sin fin con tolva de 2 m³ en acero inoxidable: modelado, planos de fabricación y supervisión de construcción y ensamble.",
    proyectoId: "dosificadora-indunilo",
  },
  {
    periodo: "jul. 2026 – hoy",
    rol: "Product Owner",
    empresa: "Proinnprot SAS",
    descripcion:
      "Definición y liderazgo del desarrollo de una plataforma interna que digitalizó la gestión de propiedad horizontal de la empresa, hoy en uso activo por administradores, gerentes y consejos.",
    proyectoId: "gestion-ph",
  },
  {
    periodo: "ago. 2026",
    rol: "Desarrollador de software",
    empresa: "Consultorio Empresarial UPB — FL SHOES",
    descripcion:
      "Construcción del módulo de cuentas por pagar de una fábrica de calzado real, reemplazando un Excel compartido sin trazabilidad por una aplicación con control de acceso y auditoría de movimientos.",
    proyectoId: "fl-shoes",
  },
];

export type Proyecto = {
  id: string;
  titulo: string;
  contexto: string;
  descripcion: string;
  stack: string[];
  estado?: string;
};

export const proyectos: Proyecto[] = [
  {
    id: "cip-indulacteos",
    titulo: "Sistema CIP de 15.000 L/h",
    contexto: "DSM Latinoamérica · para Indulácteos",
    descripcion:
      "Sistema de lavado automático de líneas de proceso (Clean-In-Place) sin necesidad de desarmarlas, para un cliente del sector lácteo. Participé junto al equipo de ingeniería en el diseño a partir del requerimiento del cliente, elaboré los planos de fabricación, acompañé la construcción y el ensamble desde el día 1 hasta la entrega, y desarrollé el análisis de precios unitarios y el manual de operación.",
    stack: ["Solid Edge", "Planos de fabricación", "APU", "Gestión de proyectos"],
  },
  {
    id: "dosificadora-indunilo",
    titulo: "Dosificadora de tornillo sin fin — 2 m³",
    contexto: "Innovameq · para Indunilo",
    descripcion:
      "Equipo en acero inoxidable para pulverización de grasa vegetal, con tolva de 2 m³ y tornillo sin fin accionado por motorreductor (sinfín-corona, 0,5 HP, 42 RPM). Como profesional independiente, diseñé el equipo, elaboré los planos de fabricación y supervisé la construcción y el ensamble hasta la entrega.",
    stack: ["Solid Edge", "Diseño mecánico", "Planos de fabricación"],
  },
  {
    id: "consumibles-vba",
    titulo: "Trazabilidad de inventario y consumibles",
    contexto: "DSM Latinoamérica",
    descripcion:
      "Herramienta en Excel/VBA para reemplazar un control que se llevaba en planillas físicas sin contraste con el inventario real: entradas desde facturas de compra, hoja maestra de precios y cantidades, y registro de salidas por operario, proyecto y equipo. Reveló que los consumibles de una sola máquina sumaban varios millones de pesos que la empresa no estaba cuantificando.",
    stack: ["Excel", "VBA", "Control de inventarios"],
  },
  {
    id: "gestion-ph",
    titulo: "Gestión PH — plataforma de administración",
    contexto: "Product Owner · Proinnprot SAS",
    descripcion:
      "Herramienta a la medida que reemplazó cuadernos y carpetas físicas de una administradora de propiedad horizontal por gestión digital en tiempo real: compromisos y tareas, contratos con renovación automática, contratistas con pólizas y vencimientos, mantenimientos con evidencia obligatoria, y llamados de atención con su flujo de autorización. En uso activo en varios conjuntos residenciales reales, con roles y permisos diferenciados por tipo de usuario.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Row Level Security", "n8n"],
    estado: "En producción · capturas próximamente",
  },
  {
    id: "fl-shoes",
    titulo: "FL SHOES — cuentas por pagar",
    contexto: "Consultorio Empresarial UPB",
    descripcion:
      "Aplicación web para una fábrica de calzado real que reemplaza un Excel compartido sin trazabilidad: modela proveedores, plazos de pago, saldos y estados de cuenta. Control de acceso por rol y movimientos inmutables (una corrección es un movimiento inverso, con autor y fecha), migraciones versionadas desde el día 1 y 50 pruebas automatizadas. Construida con Claude Code como copiloto, incluyendo auditorías de seguridad por agentes de IA que corrigieron una vulnerabilidad real de permisos.",
    stack: ["React", "Vite", "TypeScript", "Tailwind", "Supabase", "pgTAP"],
    estado: "Finalizado",
  },
  {
    id: "inventario-planta",
    titulo: "Inventario general de planta",
    contexto: "DSM Latinoamérica",
    descripcion:
      "Levantamiento completo de la maquinaria y los equipos de toda la planta, más las herramientas de uso personal y los elementos de protección personal de cada operario — un inventario que tampoco existía antes.",
    stack: ["Excel", "Levantamiento de activos"],
  },
];
