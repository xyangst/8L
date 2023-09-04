<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$components/ui/button/button.svelte';
	import Input from '$components/ui/input/input.svelte';
	import Switch from '$components/ui/switch/switch.svelte';
	let longMode = false;
</script>

<div class="h-screen flex flex-col justify-center items-center gap-4">
	<form method="POST" action="/add" use:enhance>
		<h1 class="font-extrabold text-xl">{longMode ? 'lengthen' : 'shorten'} your links</h1>

		<Input
			required
			name="link"
			class="max-w-xs"
			placeholder={longMode
				? 'very long link which is way too long'
				: 'very short link which is way too short'}
		/>
		<div class="flex items-center space-x-2">
			<Button type="submit">convert</Button>
			<Switch id="long-mode" bind:checked={longMode} />
		</div>
	</form>
</div>
