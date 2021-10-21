<template>
	<v-container>
		<v-row justify="center">
			<h1>Pilots</h1>
		</v-row>
		<v-row justify="center">
			<template v-for="(pilot, i) in pilots">
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
								contain
								:src="pilot.imagem"
							>
							</v-img>
							<v-expand-transition>
								<div
									v-if="hover"
									class="d-flex transition-fast-in-fast-out card-descricao"
									style="height: 100%"
								>
									<div>
										{{pilot.descricao}}
									</div>
								</div>
							</v-expand-transition>
						</div>

						<v-card-title>
							{{pilot.nome}}
						</v-card-title>
						<v-divider></v-divider>
						<v-card-text style="color: #EEEEEE">
							Mass: {{pilot.peso}}</br>
							Height: {{pilot.altura}}
						</v-card-text>
					</v-card>
				</v-hover>
			</template>
		</v-row>
	</v-container>

</template>

<script>
import PilotsClient from "../APIClient/PilotsClient.js";

export default {
	name: "Pilots",

	data() {
		return {
			show: false,
			pilots: [],
		};
	},
	methods: {
		async buscarPilots() {
			let resposta = await PilotsClient.buscarTodos();
			this.pilots = resposta.data;
		},
	},
	mounted() {
		this.buscarPilots();
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