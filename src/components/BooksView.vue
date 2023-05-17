<template>
	<h1>Books</h1>
	<ul>
		<BookList :books="books"/>
	</ul>
</template>

<script setup>
import { ref } from 'vue'
import BookList from './BooksList.vue'
const books = ref([
	{ id: 1, title: 'The Wheel of Time' },
	{ id: 2, title: 'The Way of Kings' },
	{ id: 3, title: 'Dune' },
]);
</script>
