<script>
  import Hero from '$lib/components/home/hero/hero.svelte'
  import About from '$lib/components/home/about/about.svelte'
  import Clases from '$lib/components/home/clasesCard/clases.svelte'

  const accesoWpp = () => {
    const mensaje = encodeURIComponent("¡Hola! Me gustaría sumarme al equipo de calistenia")
    const numero = "5491137568867"
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank", "noopener,noreferrer")
  }
</script>

<Hero 
  h1="Calis Trainer"
  vista="home"
  h2="Entrenadora de Calistenia"
  h3="Transformá tu cuerpo y tu mente a cualquier etapa de tu vida"
  btnTexto="Sumate al equipo"
  btnClick={accesoWpp()}
/>
<About />
<Clases />