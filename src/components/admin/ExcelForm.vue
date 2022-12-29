<template>
	<v-form ref="form" v-model="valid" lazy-validation class="excel-form">
		<v-radio-group v-model="type" :rules="check_type">
			<v-radio
				label="Нагрузка преподавателей"
				value="workload"
				color="purple"
			></v-radio
			><v-radio
				label="Расписание преподавателей (когда препод может)"
				value="schedule"
				color="purple"
			></v-radio
			><v-radio
				label="Кабинеты"
				value="classrooms"
				color="purple"
			></v-radio>
		</v-radio-group>

		<v-file-input
			color="purple"
			label="Выберите файл"
			accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
			outlined
			dense
			v-model="file"
			:rules="check_file"
			prepend-icon="mdi-file-excel-box"
		/>

		<v-btn color="purple" class="mr-4" @click="submit" dark>
			Отправить
		</v-btn>
	</v-form>
</template>

<script>
export default {
	name: "ExcelForm",
	mounted() {
		if (localStorage.getItem("auth") != "admin") this.$router.replace("/");
	},
	data: () => ({
		file: null,
		type: null,
	}),

	methods: {
		submit() {
			this.$refs.form.validate();
		},
	},

	computed: {
		check_type() {
			return [this.type != null || "Обязательное поле"];
		},
		check_file() {
			return [this.file != null || "Обязательное поле"];
		},
	},
};
</script>