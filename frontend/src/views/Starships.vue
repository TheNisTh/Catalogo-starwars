<template>
	<v-container>
		<v-row justify="center">
			<h1>Starships</h1>
		</v-row>
		<v-row justify="center">
			<template v-for="(starship, i) in starships">
				<v-hover v-slot="{hover}">
					<v-card
						class="ma-4 estilo-card"
						width="300"
						key="i"
						style="background-color: #1f2738;
						color: #f56f36; border: solid 2px #1f2738"
						dark
					>
						<div>
							<v-img
								:src="starship.imagem"
								contain
							>
							</v-img>
							<v-expand-transition>
								<div
									v-if="hover"
									class="d-flex transition-fast-in-fast-out card-descricao"
									style="height: 100%"
								>
									<div>
										{{starship.descricao}}
									</div>
								</div>
							</v-expand-transition>
						</div>

						<v-card-title>
							{{starship.nome}}
						</v-card-title>
						<v-divider></v-divider>
						<v-card-text style="color: #EEEEEE">
							Model: {{starship.modelo}}

						</v-card-text>
					</v-card>
				</v-hover>
			</template>
		</v-row>
	</v-container>

</template>

<script>
import StarshipsClient from "../APIClient/StarshipsClient.js";

export default {
	name: "Starship",

	data() {
		return {
			show: false,
			starships: [],
		};
	},
	methods: {
		async buscarStarships() {
			let resposta = await StarshipsClient.buscarTodos();
			this.starships = resposta.data;
		},
	},
	mounted() {
		this.buscarStarships();
	},
};
</script>

<style>
.card-descricao {
	align-items: center;
	bottom: 0;
	justify-content: center;
	position: absolute;
	width: 100%;
	background-color: #eeeeee;
	color: #1f2738;
	font-size: 12px;
	padding: 10px;
}
h1 {
	margin-top: 15px;
}
</style>