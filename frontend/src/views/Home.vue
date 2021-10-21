<template>
	<div class="bg d-flex align-center justify-center">
		<v-btn
			class="mr-7 px-10"
			to="/starships"
		>Starships</v-btn>
		<v-btn
			class="ml-7 px-10"
			to="/pilots"
		>Pilots</v-btn>
	</div>
</template>

<script>
export default {};
</script>
<style scoped>
.bg {
	background: url("../assets/starship-background.png");
	background-size: cover;
	height: 100vh;
}
button {
	background-color: #eeeeee;
	color: #000;
	font-weight: bold;
	border-radius: 6px;
	width: 200px;
	padding: 5px;
}
</style>