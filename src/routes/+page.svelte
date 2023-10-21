<script>
	import SevenSegNum from '$lib/seven-seg/seven-seg-num.svelte';

	const currentSeason = {
		num: 3,
		players: [
			{ name: 'tippi', count: 20 },
			{ name: 'sam', count: 15 }
		]
	};
</script>

<div class="container">
	<div class="scoreboard">
		{#each currentSeason.players as player}
			<div class="scoreboard-entry">
				<span>{player.name}</span>
				<div class="score">
					<SevenSegNum input={player.count} digitCount={8} />
				</div>
			</div>
		{/each}
	</div>
</div>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #c9c1ad;
	}
	.scoreboard {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	.scoreboard-entry {
		display: flex;
		align-items: center;
	}
	.score {
		background-color: black;
	}
</style>
