const { Schema, model } = require("mongoose");

class Starships extends Schema {
	constructor() {
		super({
			nome: {
				type: String,
				required: true,
			},
			modelo: {
				type: String,
				required: false,
			},
			descricao: {
				type: String,
				required: false,
			},
			imagem: {
				type: String,
				required: true,
			},
		});
		//Momento em que é registrado o schema do mongoose para Starships
		model("Starships", this);
	}
}

module.exports = Starships;
