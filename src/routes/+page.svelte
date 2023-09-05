<script lang="ts">
	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Button from '$components/ui/button/button.svelte';
	import Input from '$components/ui/input/input.svelte';
	import Switch from '$components/ui/switch/switch.svelte';
	import { parseUrl } from '$validation/validUrl';
	let longMode = false;
	let msg: string;
</script>

<div class="h-screen flex flex-col justify-center items-center gap-2">
	<h1 class="text-4xl font-semibold">8L</h1>
	<p class=" text-xl font-light">{longMode ? 'lengthen' : 'shorten'} your links</p>

	<form
		id="form"
		action="/"
		method="POST"
		on:submit|preventDefault={async (event) => {
			//@ts-ignore
			const data = new FormData(event.target);

			const isValid = parseUrl(data.get('link'));
			if (typeof isValid == 'string') {
				//is valid!
			} else {
				//isnt valid->we set msg and exit
				msg = isValid.message;
				return;
			}
			const response = await fetch(event.currentTarget.action, {
				method: 'POST',
				body: data,
			});

			const result = deserialize(await response.text());

			if (result.type === 'success') {
				//@ts-ignore
				msg = `https://${window.location.host}${result.data.data.url}`;

				// rerun all `load` functions, following the successful update (reloads page i think)
				await invalidateAll();
			}

			applyAction(result);
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
		<p>{msg}</p>
	</form>
	<Switch id="long-mode" bind:checked={longMode} />
</div>
