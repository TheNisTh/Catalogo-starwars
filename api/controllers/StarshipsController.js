const mongoose = require("mongoose");
const StarshipsModel = mongoose.model("Starships");

class StarshipsController {
	static async buscarTodos(req, res) {
		let resposta = await StarshipsModel.find({});
		res.json(resposta);
	}
}

module.exports = StarshipsController;
