/**
 * ============================================================
 *  CENTINELA SEGURIDAD PRIVADA — CONFIGURACIÓN DEL SITIO
 *  Único archivo con TODOS los datos editables.
 *  Cambiar los datos reales toma 5 minutos: editar solo este archivo.
 * ============================================================
 *  IMPORTANTE (demo): los datos marcados con «MARCADOR» son de
 *  demostración y deben reemplazarse por los reales del cliente.
 *  Empresa ficticia de demo — reemplazar marca, textos y datos.
 * ============================================================
 */

export const SITE = {
  name: "Centinela Seguridad Privada",
  shortName: "Centinela",
  tagline: "Seguridad privada integral",
  description:
    "Vigilancia física, monitoreo de alarmas 24/7, CCTV, control de acceso y escoltas para empresas, industrias y conjuntos residenciales en Ecuador. Evaluación de seguridad gratuita por WhatsApp.",

  // ⚠️ MARCADOR (demo): reemplazar por el WhatsApp comercial real, formato internacional sin «+»
  whatsapp: "593999888777",
  whatsappDisplay: "+593 99 988 8777",

  // ⚠️ MARCADOR (demo): correo, dirección y ciudad reales del cliente
  email: "contacto@centinelaseguridad.com",
  address: "Av. Amazonas N39-123 y Eloy Alfaro, Quito, Ecuador",
  city: "Quito",
  mapQuery: "Av. Amazonas, Quito, Ecuador", // lo que se busca en Google Maps

  hours: [
    { day: "Atención comercial", hours: "Lun a Vie 08:30 a 17:30" },
    { day: "Central de monitoreo", hours: "24 horas, todos los días" },
  ],

  // ⚠️ MARCADOR: registro/autorización de operación — validar con el cliente antes de mostrar
  permitNumber: "",

  social: {
    facebook: "#", // ⚠️ MARCADOR: URL real de Facebook
    instagram: "#", // ⚠️ MARCADOR: URL real de Instagram
    linkedin: "#", // ⚠️ MARCADOR: URL real de LinkedIn
  },

  designerCredit: {
    name: "Jimbra",
    url: "https://jimbra.net",
    label: "Desarrollado por Jimbra",
  },

  isDemo: true, // mostrar nota «Sitio demostrativo» en el footer
} as const;

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sectores", href: "#sectores" },
  { label: "Galería", href: "#galeria" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
] as const;

/** Cifras de la barra de confianza — ⚠️ datos de demostración */
export const STATS = [
  { value: 15, suffix: "", suffixText: "", label: "Años de experiencia" },
  { value: 120, suffix: "+", suffixText: "", label: "Puestos de vigilancia atendidos" },
  { value: 85, suffix: "", suffixText: "", label: "Clientes activos" },
  { value: 12, suffix: "", suffixText: "min", label: "Respuesta promedio ante incidentes" },
] as const;

/** Servicios (6 tarjetas) — cada «Cotizar» abre WhatsApp con su propio mensaje */
export const SERVICES = [
  {
    id: "guardiania",
    icon: "ShieldCheck",
    title: "Guardianía y vigilancia física",
    description:
      "Personal uniformado, capacitado y supervisado para portones, recepciones y rondas perimetrales.",
    image: "/images-security/services/serv-guardia.jpg",
    imageAlt: "Guardia de seguridad en acceso de instalación industrial al atardecer",
  },
  {
    id: "monitoreo",
    icon: "Radio",
    title: "Monitoreo de alarmas 24/7",
    description:
      "Central propia con operadores en turno permanente y protocolo de verificación y respuesta.",
    image: "/images-security/services/serv-monitoreo.jpg",
    imageAlt: "Operador de central de monitoreo de alarmas frente a pantallas",
  },
  {
    id: "cctv",
    icon: "Cctv",
    title: "CCTV y videovigilancia",
    description:
      "Diseño, instalación y administración de cámaras con grabación y consulta remota.",
    image: "/images-security/services/serv-cctv.jpg",
    imageAlt: "Cámaras de videovigilancia profesionales en fachada moderna",
  },
  {
    id: "acceso",
    icon: "Fingerprint",
    title: "Control de acceso y biometría",
    description:
      "Biometría, tarjetas y torniquetas para registrar y limitar el ingreso a tus instalaciones.",
    image: "/images-security/services/serv-acceso.jpg",
    imageAlt: "Panel de control de acceso biométrico en entrada de oficina",
  },
  {
    id: "escoltas",
    icon: "UserCheck",
    title: "Escoltas y eventos",
    description:
      "Acompañamiento de personas, traslados y cobertura de seguridad para eventos corporativos.",
    image: "/images-security/services/serv-escolta.jpg",
    imageAlt: "Equipo de escoltas profesionales en entrada de evento corporativo",
  },
  {
    id: "riesgos",
    icon: "ClipboardCheck",
    title: "Análisis de riesgos",
    description:
      "Auditoría de seguridad, matriz de riesgos y plan de mitigación a medida de tu operación.",
    image: "/images-security/services/serv-riesgos.jpg",
    imageAlt: "Consultor analizando planos y mapas de riesgo en oficina",
  },
] as const;

/** Proceso (4 pasos) */
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Evaluación de riesgos",
    description:
      "Visitamos tu instalación, identificamos vulnerabilidades y priorizamos lo crítico.",
  },
  {
    number: "02",
    title: "Plan de seguridad a medida",
    description:
      "Proponemos personal, tecnología y protocolos según tu operación y presupuesto.",
  },
  {
    number: "03",
    title: "Despliegue de personal y tecnología",
    description:
      "Instalamos equipos y asignamos guardias entrenados en tus puntos críticos.",
  },
  {
    number: "04",
    title: "Supervisión y reportes",
    description:
      "Supervisión en campo, novedades en tiempo real y reportes periódicos claros.",
  },
] as const;

/** Sectores que protegemos (6) */
export const SECTORS = [
  { icon: "Factory", title: "Industria y bodegas" },
  { icon: "Store", title: "Comercio y retail" },
  { icon: "Home", title: "Conjuntos residenciales" },
  { icon: "Building2", title: "Oficinas y corporativos" },
  { icon: "Truck", title: "Logística y transporte" },
  { icon: "GraduationCap", title: "Educación" },
] as const;

/** Por qué elegirnos (5) */
export const WHY_US = [
  {
    title: "Central de monitoreo propia",
    description: "Operadores en turno permanente, sin depender de terceros.",
  },
  {
    title: "Personal seleccionado y capacitado",
    description: "Reclutamiento con filtros, formación continua y evaluaciones.",
  },
  {
    title: "Supervisión en campo",
    description: "Supervisores en ruta que verifican cada puesto, cada turno.",
  },
  {
    title: "Reportes claros para el cliente",
    description: "Novedades, incidentes y estadísticas en reportes que se entienden.",
  },
  {
    title: "Cumplimiento de normativa",
    description: "Operación alineada a la regulación vigente del sector privado. ⚠️ MARCADOR: validar con el cliente.",
  },
] as const;

export type GalleryCategory = "Operaciones" | "Tecnología" | "Capacitación" | "Eventos";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Operaciones",
  "Tecnología",
  "Capacitación",
  "Eventos",
];

/** Galería — ⚠️ fotografías IA de demostración, reemplazables por fotos reales del cliente */
export const GALLERY = [
  {
    id: "gal-operacion",
    src: "/images-security/gallery/gal-operacion.jpg",
    title: "Ronda nocturna en bodega",
    description: "Vigilancia perimetral con registro de novedades por turno.",
    category: "Operaciones" as const,
  },
  {
    id: "gal-central",
    src: "/images-security/gallery/gal-central.jpg",
    title: "Central de monitoreo",
    description: " Videovigilancia y alarmas atendidas 24/7.",
    category: "Tecnología" as const,
  },
  {
    id: "gal-capacitacion",
    src: "/images-security/gallery/gal-capacitacion.jpg",
    title: "Capacitación de personal",
    description: "Formación en protocolos, primeros auxilios y manejo de incidentes.",
    category: "Capacitación" as const,
  },
  {
    id: "gal-evento",
    src: "/images-security/gallery/gal-evento.jpg",
    title: "Control de acceso en eventos",
    description: "Filtrado de asistentes y respuesta rápida en venue.",
    category: "Eventos" as const,
  },
  {
    id: "gal-patrulla",
    src: "/images-security/gallery/gal-patrulla.jpg",
    title: "Patrullaje motorizado",
    description: "Rondas de refuerzo y verificación de alarmas en la vía.",
    category: "Operaciones" as const,
  },
  {
    id: "gal-instalacion",
    src: "/images-security/gallery/gal-instalacion.jpg",
    title: "Instalación de cámaras",
    description: "Cobertura CCTV diseñada según matriz de riesgos.",
    category: "Tecnología" as const,
  },
  {
    id: "gal-bodega",
    src: "/images-security/gallery/gal-bodega.jpg",
    title: "Perímetro industrial",
    description: "Bodegas y plantas con iluminación y cerco perimetral supervisado.",
    category: "Operaciones" as const,
  },
  {
    id: "gal-oficina",
    src: "/images-security/gallery/gal-oficina.jpg",
    title: "Torniquetes corporativos",
    description: "Acceso con biometría para torres de oficinas.",
    category: "Tecnología" as const,
  },
] as const;

/** Tipo de cada ítem de la galería (inferido de GALLERY) */
export type GalleryItem = (typeof GALLERY)[number];

/** Clientes — ⚠️ MARCADORES de demo: reemplazar por logos autorizados */
export const CLIENTS = [
  "INDUSTRIA ANDINA",
  "GRUPO VERTICE",
  "CONJUNTO LOS ROBLES",
  "TRANSLOGISTICS",
  "COLEGIO NUEVA ERA",
  "RETAIL DEL SUR",
] as const;

/** Testimonios — ⚠️ ilustrativos de demo */
export const TESTIMONIALS = [
  {
    quote:
      "Desde que Centinela tomó el monitoreo, dormimos tranquilos. Las alarmas se verifican en minutos y el reporte mensual llega puntual.",
    name: "Verónica Andrade",
    role: "Administradora de conjunto residencial",
  },
  {
    quote:
      "El cambio fue notorio: guardias presentables, supervisión de verdad y las cámaras quedaron donde tocaba, no donde era fácil.",
    name: "Marcelo Cueva",
    role: "Gerente de planta industrial",
  },
  {
    quote:
      "Para nuestro evento corporativo montaron el control de acceso en un día. Cero colas, cero incidentes.",
    name: "Diana Salazar",
    role: "Directora de eventos corporativos",
  },
] as const;

/** Preguntas frecuentes */
export const FAQS = [
  {
    q: "¿Cuánto tarda en llegar el personal tras contratar?",
    a: "Tras la evaluación y firma, el despliegue típico toma entre 5 y 10 días hábiles, según el número de puestos y los equipos a instalar. Para urgencias manejamos planes express — consúltalo por WhatsApp.",
  },
  {
    q: "¿Qué pasa si se activa una alarma?",
    a: "La central recibe la señal, verifica según protocolo (llamada y video si hay CCTV) y despacha la patrulla más cercana. El tiempo promedio de respuesta es de 12 minutos en zonas urbanas. ⚠️ MARCADOR: validar cifras reales con el cliente.",
  },
  {
    q: "¿El personal está capacitado y supervisado?",
    a: "Sí. Cada guardia pasa inducción, formación continua y evaluaciones periódicas. Además, supervisores en campo visitan los puestos sin aviso para verificar uniforme, bitácora y protocolos.",
  },
  {
    q: "¿Pueden cubrir varias sedes?",
    a: "Sí, operamos cuentas multi-sede con un solo punto de contacto, reportes consolidados y cobertura en las principales ciudades del país. ⚠️ MARCADOR: definir ciudades reales.",
  },
  {
    q: "¿Cómo se reportan las novedades?",
    a: "Bitácora digital por turno, notificación inmediata de incidentes relevantes por WhatsApp y un reporte ejecutivo mensual con estadísticas y recomendaciones.",
  },
] as const;

/** Opciones del cotizador rápido */
export const QUOTE_OPTIONS = {
  services: [
    "Guardianía y vigilancia física",
    "Monitoreo de alarmas 24/7",
    "CCTV y videovigilancia",
    "Control de acceso y biometría",
    "Escoltas y eventos",
    "Análisis de riesgos",
  ],
  places: [
    "Empresa u oficina",
    "Conjunto residencial",
    "Industria o bodega",
    "Evento",
  ],
  cities: ["Quito", "Guayaquil", "Cuenca", "Otra ciudad"],
  sizes: ["1 a 4 puestos o cámaras", "5 a 10", "11 a 25", "26 o más"],
} as const;

/** Mensajes de WhatsApp por contexto (CRO: saber de dónde viene el prospecto) */
export const WA_MESSAGES = {
  general: "Hola Centinela 👋 Quiero información sobre sus servicios de seguridad.",
  hero: "Hola Centinela 👋 Quiero una evaluación de seguridad gratuita para mi empresa.",
  quote: "Hola Centinela 👋 Quiero cotizar un servicio de seguridad.",
  alarm: "Hola Centinela 👋 Se activó una alarma en mi domicilio/empresa.", // ejemplo de flujo de alarma
} as const;

/** Construye el enlace de WhatsApp con mensaje codificado */
export function waUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
