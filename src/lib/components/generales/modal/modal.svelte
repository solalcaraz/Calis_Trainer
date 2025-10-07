<script lang="ts">
  import './modal.css'
  import type { Snippet } from 'svelte'

  interface PropsModal {
    modalVisible: boolean
    onClose: () => void
    titulo: string
    contenido: Snippet
  }

  let { modalVisible, onClose, titulo, contenido }: PropsModal = $props()

</script>

{#if modalVisible}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore event_directive_deprecated -->
  <div class="modal-overlay" on:click={() => onClose()}>
    <div class="modal-content" on:click|stopPropagation>
      <button class="modal-close" on:click={() => onClose()}>Cerrar</button>
      <h3>{titulo}</h3>
      <article class="contenedor_modal--contenido">
        {@render contenido()}
      </article>
    </div>
  </div>
{/if}