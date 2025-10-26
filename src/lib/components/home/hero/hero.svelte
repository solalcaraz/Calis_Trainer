<script lang="ts">
  import './hero.css'
  import Boton from '$lib/components/generales/boton/boton.svelte'

  interface heroProps {
    h1: string
    h2?: string
    h3?: string
    vista: 'clases' | 'home'
  }

  let { h1, h2, h3, vista }: heroProps = $props()
  const accesoWpp = () => {
    const mensaje = encodeURIComponent("¡Hola! Me gustaría sumarme al equipo de calistenia")
    const numero = "5491137568867"
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank", "noopener,noreferrer")
  }
</script>

<section class="hero imagen--{vista}">
  <h1>{h1}</h1>
  <article>
    <h2>{h2}</h2>
    <h3>{h3}</h3>
  </article>
  <Boton tipo='primario' onclick={() => accesoWpp()}>
    Sumate al equipo
  </Boton>
</section>