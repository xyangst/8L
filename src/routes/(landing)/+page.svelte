<script lang="ts">
	import { enhance } from '$app/forms';
	import Stats from './(stats)/Stats.svelte';
	import Form from './Form.svelte';
	export let data;
</script>
<h1>Profile</h1>
<p>User id: {data.userId}</p>
<p>GitHub username: {data.githubUsername}</p>
<form method="post" action="?/logout" use:enhance>
	<input type="submit" value="Sign out" />
</form>
<Form />
<Stats config={{ linkcount: data.linkcount, views: 0, users: 0, paying: 0 }} />
