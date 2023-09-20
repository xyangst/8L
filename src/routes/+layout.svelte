<script>
	import Toaster from '$components/melt/Toaster.svelte';
	import '../app.postcss';
</script>

<slot />
<Toaster />
<footer
	class="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-center bg-background rounded-t-xl p-1"
>
	made with :3 by angst
</footer>
