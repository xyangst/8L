<script lang="ts">
	import { Globe2 } from 'lucide-svelte';
	import StatItem from './StatItem.svelte';

	export let config: { linkcount: number; users: number; paying: number; views: number };
</script>

<div class="bg-surface-800 h-screen pt-24 flex gap-12 justify-center items-center">
	<Globe2 class="w-52 h-52" />
	<div class="flex flex-col gap-4 divide-y-4 divide-surface-600">
		<StatItem number={config.linkcount} text="Total Links" />
		<StatItem number={config.users} text="Users Worldwide" />
		<StatItem number={config.views} text="Views every day" />
		<StatItem number={config.paying} text="Paying customers" />
	</div>
</div>

<style>
</style>
