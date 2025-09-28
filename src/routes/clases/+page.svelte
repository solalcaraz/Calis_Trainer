<!-- 
 Nombre de la clase y descripción completa

Horarios y calendario (opcional, calendario visual es muy útil)

Ubicación o modalidad (presencial/online)

Precio o plan de clases (si aplica)

Botón: Contactar por WhatsApp
-->
<script>
  import { clases } from '$lib/home/clasesCard/clases.ts'
</script>
<main>
  <h1>Clases</h1>
  <p> Descubrí la propuesta que mejor se adapta a vos.  
    Todas las clases están pensadas para acompañarte en tu progreso, sea en grupo, online o de manera personalizada.
  </p>

  {#each clases as clase}
    <section id={clase.id}>
      <h2>{clase.nombre}</h2>
      <p>{clase.detalle}</p>
  
    <!-- horarios y descripción -->
    <!-- 
      1hs
      Horarios:
      lunes 18.30 a 21hs
      miercoles 19 a 21hs
      viernes 18.30 a 21hs
      Entrenamientos al aire libre en Plaza irlanda - caballito
      Clases grupales en contacto con la naturaleza, energía motivadora y progresiones adaptadas a todos los niveles.
    -->
  </section>

  <section id="online">
    <h2>Clases Online</h2>
    <!-- info online -->
    <!-- 
      Clases online de calistenia con seguimiento personalizado durante 4 semanas
      Incluye:
      plan de entrenamiento adaptado para vos
      llamadas de acompañamiento
      videos explicativos
      Entrena desde tu cada con progresiones claras, apoyo constante y resultados reales.
    -->
  </section>

  <section id="personalizadas">
    <h2>Clases Personalizadas</h2>
    <!-- info personalizada -->
    <!-- 
      Entrenamiento individual en CABA, adaptado a tus objetivos (calistenia o fitness integral)
      Sesiones 1 a 1 para mejorar fuerza, tecnica y resultados, con acompañamiento cercano
      Consultar horarios disponibles.
    -->
  </section>
</main>