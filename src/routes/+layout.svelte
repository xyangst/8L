<script>
	import Toaster from '$components/melt/Toaster.svelte';
	import '../app.css';
</script>

<slot />
<Toaster />
<footer class="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-center">
	made with :3 by angst
</footer>
