<script>
	import '../app.css';
</script>

<svelte:head>
	<style>
		@font-face {
			font-family: 'Geist';
			font-style: normal;
			font-weight: 500;
			src: url('/fonts/Geist/Geist-Regular.woff2'); /* IE9 Compat Modes */
		}
		@font-face {
			font-family: 'Geist';
			font-style: normal;
			font-weight: 600;
			src: url('/fonts/Geist/Geist-SemiBold.woff2'); /* IE9 Compat Modes */
		}
		@font-face {
			font-family: 'Geist';
			font-style: normal;
			font-weight: 700;
			src: url('/fonts/Geist/Geist-Bold.woff2'); /* IE9 Compat Modes */
		}
		@font-face {
			font-family: 'Geist';
			font-style: normal;
			font-weight: 800;
			src: url('/fonts/Geist/Geist-Black.woff2'); /* IE9 Compat Modes */
		}
		@font-face {
			font-family: 'Geist';
			font-style: normal;
			font-weight: 900;
			src: url('/fonts/Geist/Geist-UltraBlack.woff2'); /* IE9 Compat Modes */
		}
	</style>

	<title>Jcarlo</title>
</svelte:head>

<slot />
