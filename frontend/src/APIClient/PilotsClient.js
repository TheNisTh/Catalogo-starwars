const axios = require("axios");
const hostPilots = "http://localhost:3000/pilots";

export default {
	buscarTodos() {
		return axios.get(hostPilots).then((res) => res);
	},
};
