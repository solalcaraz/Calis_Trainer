<script>
  import './hero.css'
  import Boton from '$lib/components/generales/boton/boton.svelte'

  const accesoWpp = () => {
    const mensaje = encodeURIComponent("¡Hola! Me gustaría sumarme al equipo de calistenia")
    const numero = "5491137568867"
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank", "noopener,noreferrer")
  }
</script>

<section class="hero">
  <h1>Calis Trainer</h1>
  <article>
    <h2>Entrenadora de Calistenia</h2>
    <h3>Transformá tu cuerpo y tu mente a cualquier etapa de tu vida</h3>
  </article>
  <Boton tipo='primario' onclick={() => accesoWpp()}>
    Sumate al equipo
  </Boton>
</section>