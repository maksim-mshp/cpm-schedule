<template>
	<div class="table-wrapper">
		<TeacherTable />
	</div>
</template>

<script>
import TeacherTable from "@/components/teacher/Table.vue";
export default {
	name: "Teacher",
	components: {
		TeacherTable,
	},
};
</script>

<style scoped>
.table-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
