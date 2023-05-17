<template>
	<h1>Books</h1>
	<ul>
		<BookList :books="books"/>
	</ul>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import BookList from './BooksList.vue'

let books = ref()

axios.get('https://fakestoreapi.com/products')
	.then(response => {
		// console.log(response)
	 	books.value =  response.data
	})

</script>
