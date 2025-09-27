<script lang="ts">
	import './styles.css'
	import favicon from '$lib/assets/favicon.svg'
	import Header from '$lib/components/layout/header/header.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children?.()}
