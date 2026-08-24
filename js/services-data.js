/**
 * Base de Datos Centralizada de Servicios - JULMAR S.A.S.
 * Fuente única de verdad para index.html, servicio_detalle.html y servicios_suministros.html
 */
const JULMAR_SERVICES_DATA = [
  {
    id: '1',
    categoria: 'Propulsión & Generación',
    titulo: '1. Sistema de Propulsión y Generación',
    breadcrumb: 'Sistema de Propulsión y Generación',
    imagenPrincipal: 'assets/images/propulsion-portada-izaje.png',
    resumenCorto: 'Soluciones integrales para sistemas de propulsión y generación diésel en los sectores naval e industrial, garantizando la máxima confiabilidad operativa.',
    descripcionLarga: 'Ofrecemos soluciones integrales para sistemas de propulsión y generación, garantizando el óptimo desempeño de motores, transmisiones y equipos de generación de energía en los sectores naval e industrial. Nuestro servicio abarca mantenimiento, reparación, diagnóstico y modernización de componentes críticos, asegurando mayor confiabilidad, eficiencia operativa y continuidad en las operaciones.',
    imagenesCarrusel: [
      { src: 'assets/images/equipo-motores-julmar.png', caption: 'Equipo de Especialistas Julmar S.A.S. en Mantenimiento de Motor Diésel' },
      { src: 'assets/images/propulsion-piston.png', caption: 'Extracción e Inspección de Pistón en Motor Diésel Marítimo' }
    ],
    bloques: [
      {
        titulo: 'Mantenimiento Overhaul de Motores Diésel',
        items: [
          'Mantenimiento Overhaul para motores diésel marinos e industriales, recuperando su desempeño y confiabilidad.',
          'Inspección detallada, reparación y reemplazo de componentes críticos.',
          'Pruebas de funcionamiento, seguimiento técnico y emisión de recomendaciones pos-servicio.'
        ]
      },
      {
        titulo: 'Mantenimiento Preventivo y Correctivo',
        items: [
          'Mantenimiento preventivo y correctivo de motores diésel y equipos marinos e industriales.',
          'Inspecciones, diagnósticos y ajustes previos a la ocurrencia de fallas mediante información técnica directa de fábrica.',
          'Garantía de funcionamiento seguro, eficiente y de alta confiabilidad operativa.'
        ]
      },
      {
        titulo: 'Diagnóstico de Motores Electrónicos',
        items: [
          'Diagnósticos especializados mediante escáner y herramientas de última tecnología.',
          'Identificación de posibles fallas y análisis de parámetros de operación en tiempo real.',
          'Soluciones precisas para la optimización del rendimiento térmico y mecánico.'
        ]
      },
      {
        titulo: 'Mantenimiento de Transmisiones',
        items: [
          'Mantenimiento preventivo, correctivo y reparación de transmisiones marinas e industriales.',
          'Inspección, diagnóstico, evaluación dimensional, ajustes mecánicos y reemplazo de componentes.',
          'Garantía de funcionamiento eficiente, incremento de rendimiento y prolongación de vida útil.'
        ]
      },
      {
        titulo: 'Mantenimiento de Equipos Mecánicos',
        items: [
          'Servicios integrales de mantenimiento, reparación y reacondicionamiento de turbocompresores, culatas y bombas (agua, aceite e inyección).',
          'Intervención de inyectores, intercambiadores de calor y enfriadores de aceite, agua y aire (Box Coolers, aftercoolers, intercoolers).',
          'Componentes asociados a los sistemas de refrigeración y admisión para un óptimo desempeño del motor.'
        ]
      }
    ]
  },
  {
    id: '2',
    categoria: 'Electrónica Naval',
    titulo: '2. Soluciones Electrónicas Integrales Navales e Industriales',
    breadcrumb: 'Soluciones Electrónicas Navales',
    imagenPrincipal: 'assets/images/electronica-portada-hyundai.png',
    resumenCorto: 'Soluciones electrónicas de alta tecnología: automatización, módulos ECM, navegación, comunicaciones, control de máquinas y seguridad industrial.',
    descripcionLarga: 'Soluciones electrónicas de alta tecnología para el sector naval e industrial. Nuestro equipo de ingenieros diseña, instala, programa y diagnostica módulos ECM, tarjetas electrónicas de control, radares, ecogoniómetros, sistemas de automatización de puente, tableros de transferencia y sistemas de alarma centralizados.',
    imagenesCarrusel: [
      { src: 'assets/images/electronica-lab-ecm.png', caption: 'Laboratorio de Diagnóstico y Reparación de Módulos Electrónicos ECM' },
      { src: 'assets/images/electronica-radar-antena.png', caption: 'Instalación y Mantenimiento de Radar y Equipos Satelitales de Navegación' },
      { src: 'assets/images/electronica-puente-mando.png', caption: 'Inspección de Consola de Navegación y Monitoreo HMI en Puente de Mando' }
    ],
    bloques: [
      {
        titulo: 'Sistemas de Control y Automatización',
        items: [
          'Diseño e implementación de sistemas de automatización industrial y naval para optimizar procesos y reducir tiempos de operación.',
          'Suministro, instalación y calibración de sensores industriales de temperatura, presión, nivel, flujo y posición.',
          'Configuración, programación y puesta en marcha de PLC para automatización de plantas y sistemas de propulsión.',
          'Diseño, fabricación y ensamble de tableros eléctricos de control y potencia bajo normatividad y estándares de seguridad.',
          'Integración de sistemas de monitoreo centralizado en tiempo real de motores, bombas y equipos auxiliares.',
          'Automatización de bombas, válvulas motorizadas y motores eléctricos con arranque, parada y control remoto.',
          'Mantenimiento preventivo y correctivo especializado a sistemas de control con diagnóstico de fallas y actualización de programación.'
        ]
      },
      {
        titulo: 'Sistemas de Navegación y Comunicaciones',
        items: [
          'Diseño, suministro, instalación y mantenimiento integral de equipos de navegación y comunicaciones seguras.',
          'Radares de navegación y vigilancia, ecosondas para medición de profundidad, sistemas AIS y GPS / GNSS de alta precisión.',
          'Correderas para velocidad, girocompases, compases satelitales, pilotos automáticos y sistemas de gobierno (timón).',
          'Estaciones meteorológicas embarcadas, radios base y portátiles en VHF, HF y UHF, y sistemas GMDSS certificados.',
          'Intercomunicadores, redes de transmisión de datos, anunciadores y comunicación interna a bordo.'
        ]
      },
      {
        titulo: 'Seguridad Electrónica e Industrial',
        items: [
          'Soluciones integrales de supervisión, detección y control para infraestructura, activos y personal.',
          'Sistemas CCTV con cámaras HD y grabación centralizada para vigilancia continua y control de acceso a zonas críticas.',
          'Alarmas industriales y sistemas de detección de incendio (humo, calor y gas) conectados a páneles centrales.',
          'Monitoreo remoto en tiempo real, integración de sensores de seguridad y sistemas de respaldo eléctrico ante fallas.',
          'Mantenimiento preventivo y correctivo permanente de todos los sistemas de seguridad electrónica instalados.'
        ]
      },
      {
        titulo: 'Integración de Sistemas Tecnológicos para el Sector Defensa',
        items: [
          'Desarrollo e integración de soluciones tecnológicas para plataformas navales y proyectos del sector defensa.',
          'Articulación de equipos electrónicos embarcados de distintos fabricantes en una sola plataforma coherente.',
          'Sistemas de monitoreo y control para plataformas de alta exigencia y redes de comunicaciones tácticas operacionales.',
          'Instalación, configuración y puesta en marcha con protocolos de prueba, certificación técnica y modernización.'
        ]
      }
    ]
  },
  {
    id: '3',
    categoria: 'Hidráulica & Neumática',
    titulo: '3. Sistemas Hidráulicos y Neumáticos',
    breadcrumb: 'Sistemas Hidráulicos y Neumáticos',
    imagenPrincipal: 'assets/images/hidraulicos-portada-grua.png',
    resumenCorto: 'Soluciones integrales para la optimización, mantenimiento y reconstrucción de centrales hidráulicas, mandos neumáticos y cilindros de alta presión.',
    descripcionLarga: 'Soluciones integrales para la optimización, mantenimiento y reconstrucción de centrales hidráulicas, mandos neumáticos, winches, servo mandos de gobierno, bombas de pistones y cilindros de alta presión para buques mercantes, remolcadores e instalaciones industriales.',
    imagenesCarrusel: [
      { src: 'assets/images/hidraulica-flushing-grua.png', caption: 'Flushing Técnico y Limpieza de Circuitos Hidráulicos en Grúas Industriales' },
      { src: 'assets/images/hidraulica-mantenimiento-kalmar.png', caption: 'Intervención y Mantenimiento de Sistemas Hidráulicos Kalmar de Gran Tonelaje' }
    ],
    bloques: [
      {
        titulo: 'Asesoría para Mejoramiento de Sistemas',
        items: [
          'Asesoría técnica especializada para optimizar el desempeño de sistemas hidráulicos y neumáticos.',
          'Identificación de oportunidades de mejora para aumentar la eficiencia, confiabilidad y productividad de sus operaciones.'
        ]
      },
      {
        titulo: 'Diseño y Desarrollo de Sistemas Hidráulicos y Neumáticos',
        items: [
          'Diseño, desarrollo y repotenciación de sistemas hidráulicos y neumáticos adaptados a cada operación.',
          'Implementación de soluciones eficientes, seguras y de alto rendimiento.'
        ]
      },
      {
        titulo: 'Montaje, Diagnóstico, Mantenimiento y Reparación de Unidades de Potencia',
        items: [
          'Montaje, diagnóstico, mantenimiento preventivo y correctivo de unidades de potencia hidráulicas.',
          'Reparación integral para asegurar funcionamiento óptimo y una mayor vida útil del equipo.'
        ]
      },
      {
        titulo: 'Reparación y Pruebas en Banco para Equipos Hidráulicos',
        items: [
          'Reparación y pruebas funcionales en banco para verificar el desempeño, presión y funcionamiento adecuado.',
          'Certificación y control de calidad previo a la instalación final del componente.'
        ]
      },
      {
        titulo: 'Conteo de Partículas y Microfiltración de Aceites',
        items: [
          'Evaluación de limpieza del aceite mediante conteo computarizado de partículas.',
          'Procesos de microfiltración para reducir contaminación, proteger componentes y extender la vida útil del sistema.'
        ]
      },
      {
        titulo: 'Flushing, Pickling y Puesta en Marcha',
        items: [
          'Procesos especializados de flushing (lavado de tuberías) y pickling para limpieza interna de circuitos hidráulicos.',
          'Puesta en marcha garantizada para un funcionamiento seguro y confiable de la instalación.'
        ]
      },
      {
        titulo: 'Recarga de Acumuladores',
        items: [
          'Inspección, mantenimiento técnico y recarga de nitrógeno en acumuladores hidráulicos.',
          'Estabilización de presión para garantizar un rendimiento constante del sistema.'
        ]
      },
      {
        titulo: 'Mantenimiento Predictivo y Monitoreo por Condición',
        items: [
          'Suministro y aplicación de equipos para monitoreo por condición y diagnóstico predictivo.',
          'Detección anticipada de fallas para optimizar la planificación de mantenimientos preventivos.'
        ]
      },
      {
        titulo: 'Suministro de Equipos, Repuestos y Homologación',
        items: [
          'Suministro de equipos, repuestos y componentes para sistemas hidráulicos, neumáticos, filtración y refrigeración.',
          'Homologación y sustitución de componentes con alternativas que mantienen o mejoran el desempeño.',
          'Garantía de calidad, confiabilidad y compatibilidad con las principales marcas del mercado.'
        ]
      },
      {
        titulo: 'Entrenamiento Especializado',
        items: [
          'Capacitación técnica en operación, mantenimiento y diagnóstico de sistemas hidráulicos y neumáticos.',
          'Programas presenciales y virtuales adaptados a los requerimientos del personal de su empresa.'
        ]
      }
    ]
  }
];

/**
 * Función helper para obtener un servicio por ID o alias
 */
function getJulmarServiceById(id) {
  const aliasMap = {
    'mantenimiento': '1',
    'suministros': '2',
    'instalaciones': '3'
  };
  const targetId = aliasMap[id] || id || '1';
  return JULMAR_SERVICES_DATA.find(s => s.id === targetId) || JULMAR_SERVICES_DATA[0];
}
