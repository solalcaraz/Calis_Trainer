<script lang="ts">
  import './carrusel.css'
  import type { ArchivosItem } from '$lib/DTO/fileItemsMock'

  interface CarruselProps {
    tipo: 'imagen' | 'video'
    items: ArchivosItem[]
  }

  const { tipo, items }: CarruselProps = $props()
  let indiceActual: number = $state(0)

  // Funciones para los botones
  const siguiente = () => { indiceActual = (indiceActual + 1) % items.length }
  const anterior = () => { indiceActual = (indiceActual - 1 + items.length) % items.length }
</script>

<section class="carrusel">
  <button class="control prev" onclick={anterior}>-</button>

  {#each items as item (item.id)}
    <article class="slide {item.id === indiceActual ? 'active' : ''}">
      {#if tipo === 'video'}
        <video src={item.src} controls></video>
      {:else}
        <img src={item.src} alt={item.titulo ?? 'archivo'} />
      {/if}

      {#if item.titulo || item.descripcion}
        <div class="caption">
          <h5>{item.titulo}</h5>
          <p>{item.descripcion}</p>
        </div>
      {/if}
    </article>
  {/each}

  <button class="control next" onclick={siguiente}>+</button>
</section>
<!-- <div id={id} class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    {#each items as item (item.id)}  
      <button
      type="button"
      data-bs-target={`#${id}`}
      data-bs-slide-to={item.id}
      class={item.id === 0 ? 'active' : ''}
      aria-current={item.id === 0 ? 'true' : 'false'}
      aria-label={`Slide ${item.id + 1}`}>
      </button>
    {/each}
  </div>

  <div class="carousel-inner">
    {#each items as item (item.id)}      
      <div class={`carousel-item ${item.id === 0 ? 'active' : ''}`}>
        {#if tipo === 'imagen'}
          <img src={item.src} class="d-block w-100" alt={item.titulo || ''}>
        {:else if tipo === 'video'}
          <video class="d-block w-100" controls>
            <source src={item.src} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        {/if}

        {#if item.titulo || item.descripcion}
          <div class="carousel-caption d-none d-md-block">
            {#if item.titulo}<h5>{item.titulo}</h5>{/if}
            {#if item.descripcion}<p>{item.descripcion}</p>{/if}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> -->