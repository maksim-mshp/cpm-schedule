<template>
	<v-app id="inspire">
		<v-main class="grey lighten-3">
			<v-sheet rounded="xl" class="wrap">
				<div id="app">
					<v-alert
						color="blue"
						outlined
						text
						type="info"
						v-if="alert_type == 'alert'"
						>Для продолжения необходимо войти</v-alert
					>
					<v-alert
						color="red"
						outlined
						text
						type="error"
						v-if="alert_type == 'wrong' || wrong"
						>Неправильный логин или пароль</v-alert
					>
					<div>
						<h1>Вход</h1>
						<div class="login_form">
							<v-text-field
								label="Логин"
								placeholder="Логин"
								color="purple"
								v-model="login"
							></v-text-field>
							<v-text-field
								:append-icon="
									show_pass ? 'mdi-eye' : 'mdi-eye-off'
								"
								:type="show_pass ? 'text' : 'password'"
								name="input-10-2"
								class="input-group--focused"
								@click:append="show_pass = !show_pass"
								label="Пароль"
								placeholder="Пароль"
								color="purple"
								v-model="password"
							></v-text-field>
							<div class="btn_wrap" align="center">
								<v-btn
									color="purple"
									class="white--text"
									style="width: 125px; margin-top: 25px"
									@click="auth"
									>Войти</v-btn
								>
							</div>
						</div>
					</div>
				</div>
			</v-sheet>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "Auth",
	data: () => ({
		needAlert: false,
		wrong: false,
		login: "",
		password: "",
		users: [],
		id: -1,
		show_pass: false,
	}),
	methods: {
		auth() {
			if (this.login == "admin")
				localStorage.setItem("auth", "admin");
			else if (this.login == "teacher")
				localStorage.setItem("auth", "teacher");
			else {
				this.wrong = true;
				return;
			}
			this.$router.replace("/");
		},
	},
	computed: {
		alert_type() {
			return localStorage.getItem("alert");
		},
	},
	mounted() {
		localStorage.removeItem("alert");
	},
};
</script>

<style scoped>
h1 {
	text-align: center;
}
.login_form {
	width: 50%;
	margin: auto;
	margin-top: 50px;
}
.btn_wrap {
	margin: auto;
}
.reg_link {
	display: block;
	margin: auto;
	text-align: center;
}

.wrap {
	max-width: 40vw;
	min-width: 700px;
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	padding: 50px;
}
#inspire {
	position: relative;
}
</style>
