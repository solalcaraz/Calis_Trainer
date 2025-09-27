<script>
  import './clases.css'
  // import { Users, Laptop, Calendar } from 'lucide-svelte'
  import Boton from '$lib/components/generales/boton/boton.svelte'

  const info = [
    {tipo: 'Clases Grupales', icono: 'Users', descripcion: 'Entrená en equipo, energía compartida al aire libre.'},
    {tipo: 'Clases Online', icono: 'Laptop', descripcion: 'Accedé a entrenamientos guiados desde tu casa, con seguimiento en vivo.'},
    {tipo: 'Planificación Online', icono: 'Calendar', descripcion: 'Recibí un plan de entrenamiento personalizado para progresar a tu ritmo.'},
  ]
</script>

<section class="servicios contenedor-general">
  <h2>Nuestras Clases</h2>
  <div class="contenedor_servicios">
    {#each info as {tipo, icono, descripcion} (icono)}
      <div class="servicios--card">
        <!-- <{icono} size="40" class="service-icon"/> -->
        <h3>{tipo}</h3>
        <p>{descripcion}</p>
        <Boton tipo="secundario">Ver más</Boton>
      </div>
    {/each}
  </div>
</section>