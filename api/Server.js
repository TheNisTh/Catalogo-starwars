"use strict";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Starships = require("./models/Starships");
const Pilots = require("./models/Pilots");

class Server {
	constructor() {
		this.express;
		this.porta = 3000;
	}

	init() {
		//Instanciando o Express para tratar as rotas HTTP
		this.express = new express();

		//Pedindo para o Express utilizar o conversor de JSON para tratar a comunicação
		this.express.use(express.json());
		this.express.use(cors());

		//Conectando ao banco de dados
		console.log("CONECTANDO AO BANCO DE DADOS...");
		mongoose
			.connect(
				"mongodb+srv://thenisth:AA23nJzjxnfdYry@cluster0.1dlau.mongodb.net/certi-premia?retryWrites=true&w=majority"
			)
			.then(() => {
				console.log("Conexão com o banco de dados estabelecida!");
			})
			.catch((error) => {
				console.log(`Erro ao conectar ao banco de dados: ${error}`);
			});

		//Definindo a rota raiz
		this.express.get("/", (req, res) => {
			res.send("Seja bem-vindo(a) a API Star Wars");
		});

		new Starships();
		new Pilots();

		const StarshipsRoute = require("./routes/StarshipsRoute");
		const PilotsRoute = require("./routes/PilotsRoute");

		new PilotsRoute(this.express);
		new StarshipsRoute(this.express);

		this.express.listen(this.porta, () => {
			console.log(`API rodando em http://localhost:${this.porta}`);
		});
	}
}
new Server().init();
