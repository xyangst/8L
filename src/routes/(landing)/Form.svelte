<script lang="ts">
	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { SlideToggle, getToastStore } from '@skeletonlabs/skeleton';
	import { ChevronsDown, Copy } from 'lucide-svelte';
	import { safeParse } from 'valibot';
	import { urlSchema } from './validUrl';
	//if long link shouold be generated
	let longMode = false;
	//error msg
	//generated link
	let serverLink = '';
	//text on copy btn
	let shortenedText: string;
	//set to true after generated once
	let hasGenerated = false;

	$: shortenedText =
		'8L.vercel.app/' + (serverLink.length > 15 ? serverLink.slice(0, 9) + '..' : serverLink);

	const toastStore = getToastStore();
</script>
<div class="absolute bg-grid h-screen " />
<div class="relative flex flex-col gap-4 items-center md:pt-16 h-screen">
	<h1 class="text-primary-500 text-8xl font-semibold">8L</h1>
	<p class=" text-5xl font-light">{longMode ? 'lengthen' : 'shorten'} your links</p>
	<div class="gap-2 max-w-sm flex flex-col items-center">
		<form
			id="form"
			action="/"
			method="POST"
			on:submit|preventDefault={async (event) => {
				const data = new FormData(event.currentTarget);
				const serialized = Object.fromEntries(data.entries());
				const parseForm = safeParse(urlSchema, serialized);
				if (!parseForm.success) {
					//isnt valid->we set msg and exit
					toastStore.trigger({
						message: parseForm.issues[0].message,
						background: 'variant-filled-error',
					});
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
					hasGenerated = true;
					await invalidateAll();
				}

				applyAction(result);
			}}
			class="flex flex-col gap-2 min-w-max"
		>
			<span class="inline-flex items-center gap-3 text-3xl"
				>switch mode:
				<SlideToggle active="bg-primary-500" name="long" bind:checked={longMode} /></span
			>
			<input
				class="input variant-form-material p-2 text-2xl"
				required
				name="link"
				id="link"
				autocomplete="url"
				placeholder={longMode ? 'a very short link' : 'a very long link'}
			/>
			<button class="btn variant-filled-primary w-full text-2xl" type="submit">Convert</button>
		</form>
		<ChevronsDown class="w-14 h-14" />
		<button
			on:click={(event) => {
				if (!hasGenerated) return;
				navigator.clipboard.writeText(
					`${window.location.protocol}//${window.location.host}/${serverLink}`,
				);
				toastStore.trigger({ message: 'copied to clipboard' });
			}}
			class="btn btn-xl variant-outline-primary text-2xl w-full max-w-sm flex justify-between overflow-hidden {hasGenerated
				? ''
				: 'cursor-not-allowed'}"
		>
			{shortenedText}
			<Copy class="" />
		</button>
	</div>
</div>
<style>
	.bg-grid {
		mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
		background-image: url(/svgs/grid.svg);
		@apply bg-repeat opacity-20 h-screen w-full;
	}
</style>
