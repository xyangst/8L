<script>
	import { Toast, initializeStores } from '@skeletonlabs/skeleton';
	import '../app.css';
	initializeStores();
</script>

<slot />
<Toast />
<footer class="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-center rounded-t-xl p-1">
	made with :3 by angst
</footer>
