<script lang="ts">
  import './header.css'

  const urls = [
    {href: '/', label: 'Home'},
    {href: '/clases', label: 'Clases'},
    {href: '/alumnos', label: 'Alumnos'}
  ]
</script>

<header class="header--general">
  <nav>
    <ul class="header_ul--links">
      {#each urls as { href, label } (href) }
        <li>
          <a class="header_nav--links" href={href} aria-label={label}>
            <span>{label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>