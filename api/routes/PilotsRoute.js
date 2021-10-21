const PilotsController = require("../controllers/PilotsController");

class PilotsRoute {
	constructor(express) {
		express.route("/pilots").get(PilotsController.buscarTodos);
	}
}
module.exports = PilotsRoute;
