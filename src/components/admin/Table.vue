<template>
	<table>
		<tr>
			<td></td>
			<th>Понедельник</th>
			<th>Вторник</th>
			<th>Среда</th>
			<th>Четверг</th>
			<th>Пятница</th>
			<th>Суббота</th>
		</tr>
		<tr>
			<th>1 пара<br>(9:00 - 10:30)</th>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
		</tr>
		<tr>
			<th>2 пара<br>(10:40 - 12:10)</th>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
		</tr>
		<tr>
			<th>3 пара<br>(12:50 - 14:20)</th>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
		</tr>
		<tr>
			<th>4 пара<br>(14:30 - 16:00)</th>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
		</tr>
		<tr>
			<th>5 пара<br>(16:15 - 17:45)</th>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
			<Lesson/>
		</tr>
	</table>
</template>

<script>
import Lesson from '@/components/admin/Lesson.vue'
export default {
	name: "MainTable",
	components: {
		Lesson
	}
};
</script>

<style scoped>
th {
	border: 1px solid #999;
}
td {
	border: 1px solid #999;
	text-align: center;
}

table {
	width: 100%;
	height: 100%;
	border-collapse: collapse;
}
table tr:hover {
	background-color: #eee;
}
</style>
