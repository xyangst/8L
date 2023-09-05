<script lang="ts">
	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Button from '$components/ui/button/button.svelte';
	import Input from '$components/ui/input/input.svelte';
	import Switch from '$components/ui/switch/switch.svelte';
	import { parseUrl } from '$validation/validUrl';
	import { ChevronsDown, Copy } from 'lucide-svelte';
	let longMode = false;
	let error = '';
	let serverLink = '';
	let shortenedText: string;

	$: shortenedText =
		'ab.cd/' + (serverLink.length > 15 ? serverLink.slice(0, 9) + '..' : serverLink);
</script>

<div class="h-screen flex justify-center items-center">
	<div class="flex flex-col justify-center items-center gap-2 max-w-sm">
		<h1 class="text-4xl font-semibold">8L</h1>
		<p class=" text-xl font-light">{longMode ? 'lengthen' : 'shorten'} your links</p>
		<Switch id="long-mode" bind:checked={longMode} />
		<form
			id="form"
			action="/"
			method="POST"
			on:submit|preventDefault={async (event) => {
				error = '';
				const data = new FormData(event.currentTarget);

				const isValid = parseUrl(data.get('link'));
				if (typeof isValid != 'string') {
					//isnt valid->we set msg and exit
					error = isValid.message;
					return;
				}
				const response = await fetch(event.currentTarget.action, {
					method: 'POST',
					body: data,
				});

				const result = deserialize(await response.text());

				if (result.type === 'success') {
					//we ignore because data exists and svelte dont allow ! here..
					//@ts-ignore
					serverLink = `${result.data.data.url}`;
					console.log(serverLink.length);
					await invalidateAll();
				}

				applyAction(result);
			}}
			class="flex flex-col gap-2 min-w-max"
		>
			<Input
				required
				name="link"
				id="link"
				autocomplete="url"
				placeholder={longMode ? 'a very long link' : 'a very short link'}
			/>
			<Button class="w-full" type="submit">convert (works!)</Button>
			<input hidden name="long" value={longMode} />
			<p class="text-destructive text-xs">{error}</p>
		</form>
		<ChevronsDown />
		<Button
			on:click={(event) => {
				navigator.clipboard.writeText(
					`${window.location.protocol}//${window.location.host}/${serverLink}`,
				);
			}}
			class="w-full max-w-sm flex justify-between overflow-hidden"
			variant="outline"
		>
			{shortenedText}
			<Copy />
		</Button>
	</div>
</div>
