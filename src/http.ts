import axios from 'axios'

const bookdata = await axios.get('https://fakestoreapi.com/products')
	.then(response => {
		return response.data
	});

export default bookdata;
