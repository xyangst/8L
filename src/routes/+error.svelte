<script>
	import { page } from '$app/stores';
	import Button from '$components/ui/button/button.svelte';
	const err = $page.error?.message;
</script>

<div class="h-screen flex flex-col justify-center items-center gap-2">
	<h1>{err}</h1>
	<Button href="/">go back</Button>
</div>
