<script lang="ts">
  import './hero.css'
  import Boton from '$lib/components/generales/boton/boton.svelte'

  interface heroProps {
    h1: string
    h2?: string
    h3?: string
    vista: 'clases' | 'home'
    btnTexto: string
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    btnClick: void
  }

  let { h1, h2, h3, vista, btnTexto, btnClick }: heroProps = $props()
  
</script>

<section class="hero imagen--{vista}">
  <h1>{h1}</h1>
  <article>
    <h2>{h2}</h2>
    <h3>{h3}</h3>
  </article>
  <Boton tipo='primario' onclick={() => btnClick}>
    {btnTexto}
  </Boton>
</section>