<script>
	import { Toast, initializeStores } from '@skeletonlabs/skeleton';
	import '../app.css';
	initializeStores();
</script>

<slot />
<Toast max={99} />
<footer class="text-center rounded-t-xl p-1">
	made with :3 by <a
		href="https://github.com/xyangst"
		target="_blank"
		class="underline text-primary-500">angst</a
	>
</footer>
