<script lang="ts">
	import Stats from "./(stats)/Stats.svelte";
	import Form from "./Form.svelte";
	export let data


</script>
<Form/>
<Stats config={{linkcount:data.linkcount,views:0,users:0,paying:0}}/>
