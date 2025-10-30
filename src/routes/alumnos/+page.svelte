<script lang="ts">
  import './vistaAlumnos.css'
  import Hero from '$lib/components/home/hero/hero.svelte'
  import Carrusel from '$lib/components/clases/carrusel/carrusel.svelte'
  import { testimonios, trucos, grupales } from '$lib/mocks/archivosClasesMock'
</script>

<Hero
  h1="Nuestras Clases"
  vista="clases"
  h3="Conocé los avances, experiencias y logros de quienes entrenan en el equipo."
/>

<article class="contenedor-general">
  <h2>Testimonios de alumnas que pasaron por mis clases</h2>
  <Carrusel tipo="imagen" items={testimonios}/>
</article>

<article class="contenedor-general">
  <h2>Ellas lograron trucos DESDE CERO</h2>
  <Carrusel tipo="video" items={trucos}/>
</article>

<article class="contenedor-general">
  <h2>Juntas somos mas fuertes</h2>
  <Carrusel tipo="imagen" items={grupales}/>
</article>