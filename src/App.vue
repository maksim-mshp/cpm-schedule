<template>
	<v-app>
		<v-main>
			<v-app-bar app color="#575fce" dark v-if="!is_login">
				<v-img
					class="mx-2"
					src="@/assets/logo.jpg"
					max-height="35"
					max-width="200"
					contain
				></v-img>
				<v-toolbar-title>Расписание</v-toolbar-title>
				<v-spacer />
				<v-btn text color="white" @click="logout"
					>Выход<v-icon right>mdi-logout-variant</v-icon>
				</v-btn>
				<template v-slot:extension  v-if="role == 'admin'">
					<v-tabs align-with-title>
						<v-tab to="/">Расписание</v-tab>
						<v-tab to="/classrooms">Кабинеты</v-tab>
						<v-tab to="/configs">Конфигурации</v-tab>
					</v-tabs>
				</template>
			</v-app-bar>

			<div class="main-view">
				<div v-if="!is_login" style="padding: 20px; height: 100%"><router-view /></div>
				<router-view v-else />
			</div>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "Main",
	data: () => ({
		is_login: location.pathname == "/login",
		role: ''
	}),
	methods: {
		logout() {
			localStorage.removeItem("auth");
			this.is_login = true;
			this.$router.replace("/login");
		},
		redirect() {
			this.auth = localStorage.getItem("auth") != null;
			this.role = localStorage.getItem("auth");
			if (!this.auth && window.location.pathname != "/login") {
				localStorage.setItem('alert', 'alert');
				this.$router.replace("/login");
			}
		}
	},
	mounted() {
		this.axios.defaults.headers.common['X-Master-Key'] = '$2b$10$tf15G4xzYpMvghS3gZ5q4ug.LaMxTEgt/kSgag4gKYezwhz0Jxr0y';
		this.axios.defaults.headers.common['Content-Type'] = 'application/json';
		this.redirect();
	},
	watch: {
		$route(to, from) {
			this.is_login = location.pathname == "/login";
			this.redirect();
		},
	},
};
</script>

<style scoped>
.main-view {
	height: 100%;
}
</style>
