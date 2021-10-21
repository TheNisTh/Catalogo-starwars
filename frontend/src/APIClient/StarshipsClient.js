const axios = require("axios");
const hostStarships = "http://localhost:3000/starships";

export default {
	buscarTodos() {
		return axios.get(hostStarships).then((res) => res);
	},
};
