import SolutionPage from '../SolutionPage';

export default function DesarrolloSistemasPage() {
  return (
    <SolutionPage
      kicker="Sistemas a medida"
      title="Software diseñado alrededor de tus procesos reales."
      description="Creamos sistemas web para centralizar información, automatizar tareas y reducir errores operativos en inventarios, ventas, gestión interna o atención al cliente."
      secondary="Analizamos tu operación, diseñamos módulos útiles y entregamos una solución que tu equipo pueda adoptar sin fricción."
      image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Código y desarrollo de software a medida"
      features={['Aplicaciones web', 'Automatización de procesos', 'Bases de datos a medida', 'Reportes y dashboards', 'Roles de usuario', 'Capacitación al equipo']}
    />
  );
}
