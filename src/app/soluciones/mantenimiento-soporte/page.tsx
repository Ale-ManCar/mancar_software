import type { Metadata } from 'next';
import SolutionPage from '../SolutionPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Mantenimiento y soporte para sitios y sistemas',
  browserTitle: 'Mantenimiento y soporte',
  description:
    'Mantenimiento técnico para sitios web, tiendas y sistemas: actualizaciones, seguridad, errores, rendimiento y mejoras continuas.',
  path: '/soluciones/mantenimiento-soporte',
});

export default function MantenimientoSoportePage() {
  return (
    <SolutionPage
      kicker="Soporte técnico"
      title="Mantenimiento para que tu operación digital no se detenga."
      description="Mantenemos sitios, tiendas y sistemas actualizados, protegidos y funcionando correctamente para reducir incidencias y evitar tiempos muertos."
      secondary="Atendemos errores, mejoras y revisiones preventivas con comunicación clara y respuesta directa."
      image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Equipo revisando soporte y mantenimiento técnico"
      problems={[
        'Tu sitio o sistema presenta errores, enlaces rotos, formularios fallando o problemas visibles que afectan la confianza.',
        'No sabes si el proyecto está actualizado, protegido o preparado para cambios pequeños sin romper otras partes.',
        'Cada ajuste depende de improvisar con proveedores distintos y no existe una ruta clara para mantener la operación estable.',
      ]}
      deliverables={[
        'Revisión técnica inicial con prioridades claras: errores críticos, seguridad, rendimiento y mejoras recomendadas.',
        'Corrección de incidencias y ajustes puntuales acordados según impacto y urgencia.',
        'Plan de mantenimiento para actualizaciones, respaldos, monitoreo básico y soporte post-lanzamiento.',
      ]}
      features={[
        {
          title: 'Actualizaciones de seguridad',
          description: 'Revisamos dependencias, configuración y ajustes necesarios para reducir riesgos técnicos conocidos.',
        },
        {
          title: 'Corrección de errores',
          description: 'Atendemos fallos visibles, formularios que no envían, problemas de visualización o comportamientos inesperados.',
        },
        {
          title: 'Monitoreo preventivo',
          description: 'Observamos señales básicas de disponibilidad, rendimiento y estabilidad para actuar antes de que el problema crezca.',
        },
        {
          title: 'Copias de seguridad',
          description: 'Definimos respaldos según el tipo de proyecto para proteger contenido, configuración e información operativa.',
        },
        {
          title: 'Soporte por WhatsApp',
          description: 'Mantenemos un canal directo para reportes, coordinación de prioridades y seguimiento de incidencias.',
        },
        {
          title: 'Mejoras continuas',
          description: 'Implementamos ajustes pequeños y medibles para mejorar experiencia, contenido, velocidad o mantenimiento.',
        },
      ]}
      faqs={[
        {
          question: '¿Pueden revisar un sitio que no fue hecho por ustedes?',
          answer: 'Sí. Primero hacemos un diagnóstico para entender tecnología, accesos, riesgos y alcance antes de prometer cambios.',
        },
        {
          question: '¿Atienden urgencias?',
          answer: 'Priorizamos incidentes que afectan disponibilidad, formularios, ventas o información crítica del negocio.',
        },
        {
          question: '¿El mantenimiento incluye rediseños completos?',
          answer: 'No necesariamente. El mantenimiento cubre estabilidad y mejoras puntuales; un rediseño completo se cotiza como proyecto separado.',
        },
      ]}
    />
  );
}
