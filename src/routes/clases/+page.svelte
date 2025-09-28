<script>
  import { clases } from '$lib/components/home/clasesCard/clases'
</script>

<section class="contenedor-general clases_contenedor">
  <h1>Nuestras Clases</h1>
  <p class="clases_contenedor--intro">
    Descubrí la propuesta que mejor se adapta a vos.  
    Todas las clases están pensadas para acompañarte en tu progreso, sea en grupo, online o de manera personalizada.
  </p>

  {#each clases as clase (clase.id)}
    <section id={clase.id} class="clases_card">
      <h2>{clase.nombre}</h2>

      {#if clase.duracion}
        <p class="duracion">{clase.duracion}</p>
      {/if}

      {#if clase.horarios && clase.horarios.length > 0}
        <div class="horarios">
          <h3>Horarios</h3>
          <ul>
            {#each clase.horarios as horario (horario.item)}
              <li>{horario}</li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if clase.ubicacion}
        <p class="ubicacion">📍 {clase.ubicacion}</p>
      {/if}

      {#if clase.beneficios && clase.beneficios.length > 0}
        <div class="beneficios">
          <h3>Incluye:</h3>
          <ul>
            {#each clase.beneficios as beneficio (beneficio.item)}
              <li>{beneficio}</li>
            {/each}
          </ul>
        </div>
      {/if}

      <p class="descripcion">{clase.descripcion}</p>

      <!-- <a 
        href="https://wa.me/5491123456789?text=Hola!%20Quiero%20más%20info%20sobre%20{clase.nombre}" 
        target="_blank" 
        class="btn-secundario">
        Consultar por WhatsApp
      </a> -->
    </section>
  {/each}

  <!-- 
  <div class="cta-final">
    <h2>¿Listo para empezar?</h2>
    <p>Escribinos y sumate a la comunidad de Calis Trainer. ¡Tu mejor versión empieza hoy! 💪</p>
    <a 
      href="https://wa.me/5491123456789?text=Hola!%20Quiero%20sumarme%20a%20las%20clases" 
      target="_blank" 
      class="btn-principal">
      Contactar por WhatsApp
    </a>
  </div> -->
</section>