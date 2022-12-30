<template>
	<v-form ref="form" lazy-validation class="excel-form">
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

		<v-btn
			color="purple"
			class="mr-4"
			@click="submit"
			:dark="isFormValid"
			:disabled="!isFormValid"
		>
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

	computed: {
		check_type() {
			return [this.type != null || "Обязательное поле"];
		},
		check_file() {
			return [this.file != null || "Обязательное поле"];
		},
		isFormValid() {
			return this.type != null && this.file != null;
		},
	},
};
</script>
