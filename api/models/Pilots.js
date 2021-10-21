const { Schema, model } = require("mongoose");

class Pilots extends Schema {
	constructor() {
		super({
			nome: {
				type: String,
				required: true,
			},
			peso: {
				type: Number,
				required: false,
			},
			altura: {
				type: Number,
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
		//Momento em que é registrado o schema do mongoose para Pilots
		model("Pilots", this);
	}
}

module.exports = Pilots;
