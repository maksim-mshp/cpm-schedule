<template>
	<div style="height: 100%">
		<MainTable v-if="get_role == 'admin'" />
		<Teacher  v-if="get_role == 'teacher'" />
	</div>
</template>

<script>
import MainTable from "@/components/admin/Table.vue";
import Teacher from "@/components/teacher/Teacher.vue";
export default {
	name: "Main",
	components: {
		MainTable,
		Teacher,
	},
	computed: {
		get_role() {
			return localStorage.getItem("auth");
		},
	},
};
</script>

<style></style>