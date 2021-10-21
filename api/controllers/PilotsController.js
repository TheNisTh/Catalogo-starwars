const mongoose = require("mongoose");
const PilotsModel = mongoose.model("Pilots");

class PilotsController {
	static async buscarTodos(req, res) {
		let resposta = await PilotsModel.find({});
		res.json(resposta);
	}
}
module.exports = PilotsController;
