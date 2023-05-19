<template>
	<ul>
		<BookList :books="books"/>
	</ul>
</template>

<script setup>
import { ref } from 'vue'
import bookData from '@/http.ts'
import BookList from '@/components/BooksList.vue'

let books = ref()

books.value = bookData
</script>
