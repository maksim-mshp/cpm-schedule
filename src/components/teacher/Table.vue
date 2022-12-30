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
			<th>1 пара<br />(9:00 - 10:30)</th>
			<td id="l1-1" @click="select(1, 1)" />
			<td id="l2-1" @click="select(2, 1)" />
			<td id="l3-1" @click="select(3, 1)" />
			<td id="l4-1" @click="select(4, 1)" />
			<td id="l5-1" @click="select(5, 1)" />
			<td id="l6-1" @click="select(6, 1)" />
		</tr>
		<tr>
			<th>2 пара<br />(10:40 - 12:10)</th>
			<td id="l1-2" @click="select(1, 2)" />
			<td id="l2-2" @click="select(2, 2)" />
			<td id="l3-2" @click="select(3, 2)" />
			<td id="l4-2" @click="select(4, 2)" />
			<td id="l5-2" @click="select(5, 2)" />
			<td id="l6-2" @click="select(6, 2)" />
		</tr>
		<tr>
			<th>3 пара<br />(12:50 - 14:20)</th>
			<td id="l1-3" @click="select(1, 3)" />
			<td id="l2-3" @click="select(2, 3)" />
			<td id="l3-3" @click="select(3, 3)" />
			<td id="l4-3" @click="select(4, 3)" />
			<td id="l5-3" @click="select(5, 3)" />
			<td id="l6-3" @click="select(6, 3)" />
		</tr>
		<tr>
			<th>4 пара<br />(14:30 - 16:00)</th>
			<td id="l1-4" @click="select(1, 4)" />
			<td id="l2-4" @click="select(2, 4)" />
			<td id="l3-4" @click="select(3, 4)" />
			<td id="l4-4" @click="select(4, 4)" />
			<td id="l5-4" @click="select(5, 4)" />
			<td id="l6-4" @click="select(6, 4)" />
		</tr>
		<tr>
			<th>5 пара<br />(16:15 - 17:45)</th>
			<td id="l1-5" @click="select(1, 5)" />
			<td id="l2-5" @click="select(2, 5)" />
			<td id="l3-5" @click="select(3, 5)" />
			<td id="l4-5" @click="select(4, 5)" />
			<td id="l5-5" @click="select(5, 5)" />
			<td id="l6-5" @click="select(6, 5)" />
		</tr>
	</table>
</template>

<script>
export default {
	name: "TeacherTable",
	data: () => ({
		lessons: {
			monday: [],
			tuesday: [],
			wednesday: [],
			thursday: [],
			friday: [],
			saturday: [],
		},
		hours: 0,
	}),
	methods: {
		select(day, lesson) {
			document
				.querySelector(`#l${day}-${lesson}`)
				.classList.toggle("checked");
			let days_by_number = [
				null,
				"monday",
				"tuesday",
				"wednesday",
				"thursday",
				"friday",
				"saturday",
			];
			day = days_by_number[day];
			if (this.lessons[day].includes(lesson)) {
				this.lessons[day] = this.lessons[day].filter(function (item) {
					return item !== lesson;
				});
				this.hours--;
			} else {
				this.lessons[day].push(lesson);
				this.hours++;
			}
			this.$emit("update-hours", [this.hours, this.lessons]);
		},
	},
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

td,
th {
	width: 1%;
}

table {
	width: 65%;
	/* table-layout: fixed; */
	/* height: 100%; */
	border-collapse: collapse;
}
table tr:hover {
	background-color: #eee;
}

.checked {
	background-color: #9c27b0;
}
</style>
