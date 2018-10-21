import axios from 'axios'

var HOST = 'http://localhost:3000/api'

export function getProducts() {
	const url = HOST + `/products`

	return axios.get(url)
}
