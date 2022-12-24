<template>
	<v-app>
		<v-main>
			<v-app-bar app color="purple" dark>
				<v-img
					class="mx-2"
					src="./assets/logo.png"
					max-height="35"
					max-width="35"
					contain
				></v-img>
				<v-toolbar-title>Расписания Школы ЦПМ</v-toolbar-title>
				<template v-slot:extension>
					<v-tabs align-with-title>
						<v-tab to="/">Main</v-tab>
					</v-tabs>
				</template>
			</v-app-bar>

			<div class="main-view">
				<router-view />
			</div>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",

	data: () => ({
		//
	}),
};
</script>

<style scoped>
.main-view {
    padding: 20px;
	height: 100%;
}
</style>