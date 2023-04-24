<template>
	<div class="table-wrapper">
		<p>Здравствуйте, {name}. <br />Выберите свою рабочую нагрузку.</p>
		<TeacherTable @update-hours="update" />
		<p class="total">Итого: {{ hours }} рабочих час{{ ending }}</p>
		<v-btn color="#575fce" x-large dark @click="send">Сохранить</v-btn>
	</div>
</template>

<script>
import TeacherTable from "@/components/teacher/Table.vue";
export default {
	name: "Teacher",
	components: {
		TeacherTable,
	},
	data: () => ({
		hours: 0,
		lessons: {},
		ending: "ов",
	}),
	methods: {
		update(n) {
			this.hours = n[0] * 2;
			if (
				(this.hours < 10 || this.hours > 20) &&
				(this.hours % 10 == 2 || this.hours % 10 == 4)
			)
				this.ending = "а";
			else this.ending = "ов";
			this.lessons = n[1];
		},
		send() {
			this.$toast.success("Сохранено!", {
				position: "top-right",
				timeout: 5000,
				closeOnClick: false,
				pauseOnFocusLoss: true,
				pauseOnHover: true,
				draggable: true,
				draggablePercent: 0.6,
				showCloseButtonOnHover: false,
				hideProgressBar: false,
				closeButton: "button",
				icon: true,
				rtl: false,
			});
		},
	},
};
</script>

<style scoped>
.table-wrapper {
	margin: auto;
	height: 100%;
}

.table-wrapper p {
	display: block;
	font-size: 1.5em;
}

.total {
	padding-top: 10px;
}
</style>
