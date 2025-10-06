<script>
  import './clases.css'
  import { clases } from '$lib/mocks/clasesMock'

</script>

<section class="contenedor-general servicios">
  <h2>Elegí la clase que más se adapte a vos</h2>
  <div class="contenedor_servicios">
    {#each clases as clase (clase.id)}
      <div class="servicios--card">
        <img src={clase.icono} alt={`Icono de ${clase.nombre}`} class="servicios--icono">
        <h3>{clase.nombre}</h3>
        <p>{clase.breveDescripcion}</p>
        <a href={`/clases#${clase.id}`} class="boton--primario">Más info</a>
      </div>
    {/each}
  </div>
</section>