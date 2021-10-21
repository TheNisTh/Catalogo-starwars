<template>
	<v-app>
		<v-app-bar
			app
			color="#1F2738"
			dark
		>
			<div class="d-flex align-center">
				<span class="">Star Wars catalog</span>
			</div>

			<v-spacer></v-spacer>

			<v-divider vertical></v-divider>
			<router-link
				tag="button"
				to="/#"
				class-active="active"
			>Home</router-link>
			<v-divider vertical></v-divider>
			<router-link
				tag="button"
				to="/starships"
				class-active="active"
			>Starships</router-link>
			<v-divider vertical></v-divider>
			<router-link
				tag="button"
				to="/pilots"
				class-active="active"
			>Pilots</router-link>

		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",

	data: () => ({
		items: [
			{
				titulo: "Home",
				path: "/#",
			},
			{
				titulo: "Starships",
				path: "/starships",
			},
			{
				titulo: "Pilots",
				path: "/pilots",
			},
		],
	}),
};
</script>

<style>
button {
	color: #eeeeee;
	padding: 15px;
}
button:hover,
button.router-link-active,
button.router-link-exact-active {
	color: #f56f36;
}
</style>
