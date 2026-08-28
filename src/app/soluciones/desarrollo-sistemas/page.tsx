import type { Metadata } from 'next';
import SolutionPage from '../SolutionPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Desarrollo de sistemas a medida para negocios',
  browserTitle: 'Sistemas a medida',
  description:
    'Creamos sistemas web personalizados para centralizar información, automatizar procesos y reducir errores operativos en empresas que necesitan más control.',
  path: '/soluciones/desarrollo-sistemas',
});

export default function DesarrolloSistemasPage() {
  return (
    <SolutionPage
      kicker="Sistemas a medida"
      title="Software diseñado alrededor de tus procesos reales."
      description="Creamos sistemas web para centralizar información, automatizar tareas y reducir errores operativos en inventarios, ventas, gestión interna o atención al cliente."
      secondary="Analizamos tu operación, diseñamos módulos útiles y entregamos una solución que tu equipo pueda adoptar sin fricción."
      image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Código y desarrollo de software a medida"
      problems={[
        'Tu equipo depende de hojas de cálculo, chats o registros duplicados para controlar ventas, inventario, clientes o tareas.',
        'La información importante está dispersa y es difícil saber qué ocurrió, quién lo hizo o qué está pendiente.',
        'Los errores manuales, reportes tardíos o procesos repetitivos están consumiendo tiempo que podría usarse en atención o ventas.',
      ]}
      deliverables={[
        'Sistema web diseñado alrededor del flujo real de tu negocio, con módulos priorizados por impacto.',
        'Base de datos, roles, validaciones y paneles administrativos según el alcance aprobado.',
        'Capacitación básica y documentación práctica para que el equipo pueda usar la solución con claridad.',
      ]}
      features={[
        {
          title: 'Aplicaciones web',
          description: 'Construimos módulos accesibles desde navegador para que tu equipo pueda operar sin instalaciones complejas.',
        },
        {
          title: 'Automatización de procesos',
          description: 'Reducimos tareas repetitivas como registros manuales, cálculos, estados, avisos o consolidación de información.',
        },
        {
          title: 'Bases de datos a medida',
          description: 'Diseñamos estructuras de datos alineadas a clientes, productos, pedidos, inventario, usuarios o el flujo propio de tu negocio.',
        },
        {
          title: 'Reportes y dashboards',
          description: 'Convertimos la operación diaria en indicadores claros para revisar ventas, stock, productividad o puntos de mejora.',
        },
        {
          title: 'Roles de usuario',
          description: 'Definimos accesos por responsabilidad para proteger información y mantener orden en las acciones del sistema.',
        },
        {
          title: 'Capacitación al equipo',
          description: 'Acompañamos la adopción con explicación práctica para que el personal entienda cómo usar la herramienta.',
        },
      ]}
      faqs={[
        {
          question: '¿Conviene crear un sistema desde cero?',
          answer: 'Solo cuando una herramienta genérica no cubre bien tu proceso o te obliga a trabajar con demasiadas adaptaciones manuales.',
        },
        {
          question: '¿Se puede desarrollar por módulos?',
          answer: 'Sí. Recomendamos empezar por los módulos que reducen más errores o ahorran más tiempo, y luego crecer por fases.',
        },
        {
          question: '¿Qué pasa con la información del negocio?',
          answer: 'Definimos estructura, accesos y medidas de seguridad desde el inicio para proteger datos y mantener orden operativo.',
        },
      ]}
    />
  );
}
