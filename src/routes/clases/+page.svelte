<script lang="ts">
  import './vistaClases.css'
  import { clases } from "$lib/mocks/clasesMock"
  import Modal from '$lib/components/generales/modal/modal.svelte'
  import Boton from '$lib/components/generales/boton/boton.svelte'

  let modalVisible: boolean = false
  const openModal = () => { modalVisible = true }
  const closeModal = () => { modalVisible = false }
</script>

<section class="contenedor-general clases_contenedor">
  <article>
    <h1>Nuestras Clases</h1>
    <p class="clases_contenedor--intro">
      Descubrí la propuesta que mejor se adapta a vos.  
      Todas las clases están pensadas para acompañarte en tu progreso, sea en grupo, online o de manera personalizada.
    </p>
  </article>

  <article class="contenedor_card">
    {#each clases as clase (clase.id)}
      <section id={clase.id} class="clases_card contenedor_general--contenido">
        <h2>{clase.nombre}</h2>
        
        <article class="info">
          <p>
            <span><img src="/clock.svg" alt="Icono duración"></span> 
            <span class="info--texto">Duración:</span> 
            {clase.duracion}
          </p>
          <p>
            <span><img src="/map-pin.svg" alt="Icono pin mapa"></span> 
            <span class="info--texto">Ubicación:</span>
            {clase.ubicacion}
          </p>
          {#if clase.ubicacion === 'Plaza Irlanda - Caballito'}
            <Boton tipo="secundario-informacion" onclick={() => openModal()}>
              Hacé clic para ver la ubicación
            </Boton>
            <Modal modalVisible={modalVisible} onClose={closeModal} titulo={clase.ubicacion}>
              {#snippet contenido()}
                <!-- svelte-ignore a11y_missing_attribute -->
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.584683211313!2d-58.46044252517908!3d-34.6146621729504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca1ea91fd4cf%3A0xbaee7969a08f24df!2sPlaza%20Irlanda!5e0!3m2!1ses-419!2sar!4v1759764966307!5m2!1ses-419!2sar"
                  width="400"
                  height="300"
                  style="border:0;"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              {/snippet}
            </Modal>
          {/if}
        </article>
        
        {#if clase.horarios && clase.horarios.length > 0}
          <article class="horarios">
            <h3>Horarios</h3>
            <ul class="detalles_card--borde">
              {#each clase.horarios as horario (horario.item)}
                <li>
                  <span><img src="/calendar-check.svg" alt="Icono calendario"></span>
                  {horario.texto}
                </li>
              {/each}
            </ul>
          </article>
        {/if}
  
        {#if clase.beneficios && clase.beneficios.length > 0}
          <article class="beneficios">
            <h3>Beneficios</h3>
            <ul class="detalles_card--borde">
              {#each clase.beneficios as beneficio (beneficio.item)}
                <li>
                  <span><img src="/check-square.svg" alt="Icono check"></span>
                  {beneficio.texto}
                </li>
              {/each}
            </ul>
          </article>
        {/if}
  
        <article>
          <p>{clase.descripcion}</p>
        </article>
      </section>
      {/each}
      <div class="contenedor_wpp-flotante">
        <a 
          href="https://wa.me/5491137568867?text=Hola!%20Quiero%20más%20info%20sobre%20las%20clases" 
          target="_blank" 
          rel="noopener noreferrer"
          class="wpp-flotante">
          <span><img src="/MdiWhatsapp.svg" alt="Icono whatsapp"></span>
          ¿Listo para empezar?
        </a>
      </div>
  </article>
</section>