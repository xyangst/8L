<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$components/ui/button/button.svelte';
	import Input from '$components/ui/input/input.svelte';
	import Switch from '$components/ui/switch/switch.svelte';
	let longMode = false;
</script>

<div class="h-screen flex flex-col justify-center items-center gap-2">
	<h1 class="text-4xl font-semibold">8L</h1>
	<p class=" text-xl font-light">{longMode ? 'lengthen' : 'shorten'} your links</p>

	<form
		method="POST"
		use:enhance={({ formElement, formData, action, cancel, submitter }) => {
			return async ({ result, update }) => {};
		}}
		class="flex flex-col gap-2"
	>
		<Input
			required
			name="link"
			id="link"
			class="max-w-sm"
			autocomplete="url"
			placeholder={longMode ? 'a very long link' : 'a very short link'}
		/>
		<Button class="w-full" type="submit">convert (doesnt work :/ )</Button>
		<input hidden name="long" value={longMode} />
	</form>
	<Switch id="long-mode" bind:checked={longMode} />
</div>
