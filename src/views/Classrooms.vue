<template>
	<div>
		<v-row>
			<v-col>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Найти"
					single-line
					hide-details
				></v-text-field></v-col
			><v-col>
				<v-text-field
					v-model="capacity"
					type="number"
					label="Вместимость >="
				></v-text-field
			></v-col>
		</v-row>
		<v-card>
			<v-data-table :headers="headers" :items="items" :search="search">
				<template v-slot:item.properties="{ item }">
					<v-chip
						:dark="getChips(i).dark"
						class="mr-2"
						v-for="i in item.properties"
						:color="getChips(i).color"
						:key="i.name"
						:data="i"
					>
						{{ getChips(i).text }}
					</v-chip>
				</template>
			</v-data-table></v-card
		>
	</div>
</template>

<script>
export default {
	name: "Classrooms",
	data: () => ({
		search: "",
		items: [
			{
				name: "310",
				capacity: 30,
				properties: ["projector"],
			},
		],
		colors: {
			projector: {
				color: "cyan",
				dark: true,
				text: "проектор",
			},
		},
		capacity: "",
	}),
	methods: {
		getChips(item) {
			return {
				color: this.colors[item].color,
				dark: this.colors[item].dark,
				text: this.colors[item].text,
			};
		},
	},
	computed: {
		headers() {
			return [
				{
					text: "Кабинет",
					align: "start",
					value: "name",
				},
				{
					text: "Вместимость",
					value: "capacity",
					filter: (value) => {
						if (!this.capacity) return true;

						return value >= parseInt(this.capacity);
					},
				},
				{ text: "Свойства", value: "properties" },
			];
		},
	},
};
</script>

<style></style>
