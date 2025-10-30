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