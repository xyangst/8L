<script>
	import { page } from '$app/stores';
	const err = $page.error?.message;
</script>

<div class="h-screen flex flex-col justify-center items-center gap-2">
	<h1>{err}</h1>
	<a class="btn" href="/">Go Home</a>
</div>
