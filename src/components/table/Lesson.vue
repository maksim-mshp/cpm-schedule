<template>
	<td>
		<span class="lesson-title">Математика</span><br />
		<span class="lesson-teacher">Краснов М.А.</span><br />
		<v-chip class="ma-0" color="primary" small>310</v-chip>
	</td>
</template>

<script>
export default {
	name: "Lesson",
};
</script>

<style scoped>
td {
	border: 1px solid #999;
	text-align: center;
}
.lesson-title {
	font-weight: bold;
}
</style>
