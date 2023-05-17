<template>
	<li v-for="(book, id) in books" :key="books.id">
		{{ id }}: {{ book.title }}
	</li>
</template>

<script setup lang="ts">
defineProps({
	books: {
		type: Object,
	}
})
</script>
