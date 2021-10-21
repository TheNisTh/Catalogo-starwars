const StarshipsController = require("../controllers/StarshipsController");

class StarshipsRoute {
	constructor(express) {
		express.route("/starships").get(StarshipsController.buscarTodos);
	}
}
module.exports = StarshipsRoute;
