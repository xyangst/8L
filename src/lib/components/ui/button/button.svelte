<script lang="ts">
	import { cn } from '$utils';
	import { Button } from 'bits-ui';
	import { buttonVariants, type Size, type Variant } from '.';

	type $$Props = Button.Props & {
		variant?: Variant;
		size?: Size;
	};
	type $$Events = Button.Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let builders: $$Props['builders'] = [];
	export { className as class };
</script>

<Button.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</Button.Root>
