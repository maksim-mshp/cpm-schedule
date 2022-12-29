<template>
	<div class="excel-wrapper">
		<ExcelForm />
		<ConfigExamples />
	</div>
</template>

<script>
import ExcelForm from "@/components/admin/ExcelForm.vue";
import ConfigExamples from "@/components/admin/ConfigExamples.vue";
export default {
	name: "Configs",
	components: {
		ExcelForm,
		ConfigExamples,
	},
};
</script>

<style scoped>
.excel-wrapper div,
.excel-form {
	width: 100%;
}

.excel-form {
	margin-right: 50px;
    margin-bottom: 20px;
}

.excel-wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	padding: 10px;
}
@media (min-width: 1000px) {
	.excel-wrapper div,
	.excel-form {
		width: 40%;
	}
}
</style>
