<!-- 
 Nombre de la clase y descripción completa

Horarios y calendario (opcional, calendario visual es muy útil)

Ubicación o modalidad (presencial/online)

Precio o plan de clases (si aplica)

Botón: Contactar por WhatsApp
-->
<!-- <script>
  import { clases } from '$lib/home/clasesCard/clases.ts'
</script>

<main class="contenedor-general">
  <h1>Clases</h1>
  <p class="clases--intro"> Descubrí la propuesta que mejor se adapta a vos.  
    Todas las clases están pensadas para acompañarte en tu progreso, sea en grupo, online o de manera personalizada.
  </p>

  {#each clases as clase (clase.id)}
    <section id={clase.id} class="clases_card">
      <h2>{clase.nombre}</h2>
      <p>{clase.detalle}</p>
      {#if clase.duracion}
        <p class="clases_card--duracion">{clase.duracion}</p>
      {/if}

      {#if clase.horarios}
        <div class="horarios">
          <h3>Horarios</h3>
          <ul>
            {#each clase.horarios as horario ()}
              <li>{horario}</li>
            {/each}
          </ul>
        </div>
      {/if}

      <p class="ubicacion">📍 {clase.ubicacion}</p>

      {#if clase.detalles}
        <div class="detalles">
          <h3>Incluye:</h3>
          <ul>
            {#each clase.detalles as detalle}
              <li>{detalle}</li>
            {/each}
          </ul>
        </div>
      {/if}

      <p class="descripcion">{clase.descripcion}</p>

      <a 
        href="https://wa.me/5491123456789?text=Hola!%20Quiero%20más%20info%20sobre%20{clase.nombre}" 
        target="_blank" 
        class="btn-secundario">
        Consultar por WhatsApp
      </a>
    </section>
  {/each} -->

  <!-- <div class="cta-final">
    <h2>¿Listo para empezar?</h2>
    <p>Escribinos y sumate a la comunidad de Calis Trainer. ¡Tu mejor versión empieza hoy! 💪</p>
    <a 
      href="https://wa.me/5491123456789?text=Hola!%20Quiero%20sumarme%20a%20las%20clases" 
      target="_blank" 
      class="btn-principal">
      Contactar por WhatsApp
    </a>
  </div> 
</main>
-->