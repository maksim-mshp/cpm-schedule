<template>
    <div class="main-wrapper">
        <div v-if="schedule != null" class="sidebar">
            <v-select :items="items" v-model="view" outlined dense></v-select>
            <div class="trash" id="trash">
                <Lesson v-for="(item, index) in schedule_new.trash" :key="index" :lesson="'t' + index" :data="item" />
            </div>
        </div>
        <table v-if="schedule != null">
            <tr class="table-header">
                <th class="buttons">
                    <v-btn icon color="green">
                        <v-icon>mdi-plus-circle</v-icon>
                    </v-btn>
                    <v-btn icon color="blue" @click="send">
                        <v-icon>mdi-content-save</v-icon>
                    </v-btn>
                </th>
                <th>Понедельник</th>
                <th>Вторник</th>
                <th>Среда</th>
                <th>Четверг</th>
                <th>Пятница</th>
                <th>Суббота</th>
            </tr>
            <tr>
                <th>1 пара<br />(9:00 - 10:30)</th>
                <td id="l1-1" :class="schedule['monday']['1'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l1-1" :data="schedule['monday']['1']" />
                </td>
                <td id="l2-1" :class="schedule['tuesday']['1'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l2-1" :data="schedule['tuesday']['1']" />
                </td>
                <td id="l3-1" :class="schedule['wednesday']['1'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l3-1" :data="schedule['wednesday']['1']" />
                </td>
                <td id="l4-1" :class="schedule['thursday']['1'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l4-1" :data="schedule['thursday']['1']" />
                </td>
                <td id="l5-1" :class="schedule['friday']['1'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l5-1" :data="schedule['friday']['1']" />
                </td>
                <td id="l6-1" :class="schedule['saturday']['1'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l6-1" :data="schedule['saturday']['1']" />
                </td>
            </tr>
            <tr>
                <th>2 пара<br />(10:40 - 12:10)</th>
                <td id="l1-2" :class="schedule['monday']['2'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l1-2" :data="schedule['monday']['2']" />
                </td>
                <td id="l2-2" :class="schedule['tuesday']['2'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l2-2" :data="schedule['tuesday']['2']" />
                </td>
                <td id="l3-2" :class="schedule['wednesday']['2'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l3-2" :data="schedule['wednesday']['2']" />
                </td>
                <td id="l4-2" :class="schedule['thursday']['2'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l4-2" :data="schedule['thursday']['2']" />
                </td>
                <td id="l5-2" :class="schedule['friday']['2'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l5-2" :data="schedule['friday']['2']" />
                </td>
                <td id="l6-2" :class="schedule['saturday']['2'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l6-2" :data="schedule['saturday']['2']" />
                </td>
            </tr>
            <tr>
                <th>3 пара<br />(12:50 - 14:20)</th>
                <td id="l1-3" :class="schedule['monday']['3'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l1-3" :data="schedule['monday']['3']" />
                </td>
                <td id="l2-3" :class="schedule['tuesday']['3'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l2-3" :data="schedule['tuesday']['3']" />
                </td>
                <td id="l3-3" :class="schedule['wednesday']['3'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l3-3" :data="schedule['wednesday']['3']" />
                </td>
                <td id="l4-3" :class="schedule['thursday']['3'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l4-3" :data="schedule['thursday']['3']" />
                </td>
                <td id="l5-3" :class="schedule['friday']['3'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l5-3" :data="schedule['friday']['3']" />
                </td>
                <td id="l6-3" :class="schedule['saturday']['3'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l6-3" :data="schedule['saturday']['3']" />
                </td>
            </tr>
            <tr>
                <th>4 пара<br />(14:30 - 16:00)</th>
                <td id="l1-4" :class="schedule['monday']['4'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l1-4" :data="schedule['monday']['4']" />
                </td>
                <td id="l2-4" :class="schedule['tuesday']['4'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l2-4" :data="schedule['tuesday']['4']" />
                </td>
                <td id="l3-4" :class="schedule['wednesday']['4'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l3-4" :data="schedule['wednesday']['4']" />
                </td>
                <td id="l4-4" :class="schedule['thursday']['4'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l4-4" :data="schedule['thursday']['4']" />
                </td>
                <td id="l5-4" :class="schedule['friday']['4'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l5-4" :data="schedule['friday']['4']" />
                </td>
                <td id="l6-4" :class="schedule['saturday']['4'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l6-4" :data="schedule['saturday']['4']" />
                </td>
            </tr>
            <tr>
                <th>5 пара<br />(16:15 - 17:45)</th>
                <td id="l1-5" :class="schedule['monday']['5'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l1-5" :data="schedule['monday']['5']" />
                </td>
                <td id="l2-5" :class="schedule['tuesday']['5'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l2-5" :data="schedule['tuesday']['5']" />
                </td>
                <td id="l3-5" :class="schedule['wednesday']['5'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l3-5" :data="schedule['wednesday']['5']" />
                </td>
                <td id="l4-5" :class="schedule['thursday']['5'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l4-5" :data="schedule['thursday']['5']" />
                </td>
                <td id="l5-5" :class="schedule['friday']['5'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l5-5" :data="schedule['friday']['5']" />
                </td>
                <td id="l6-5" :class="schedule['saturday']['5'] != null ? 'not-empty-lesson' : ''">
                    <Lesson lesson="l6-5" :data="schedule['saturday']['5']" />
                </td>
            </tr>
        </table>
        <div class="loader" v-else>
            <v-progress-circular :size="60" :width="6" color="#575fce" indeterminate></v-progress-circular>
        </div>
    </div>
</template>

<script>
import Lesson from "@/components/admin/Lesson.vue";
export default {
    name: "MainTable",
    components: {
        Lesson,
    },
    data: () => ({
        card: null,
        cells: null,
        schedule: null,
        schedule_new: null,
        trash: null,
        fab: false,
        items: ["Класс", "Преподаватель", "Аудитория"],
        view: "Класс",
    }),
    methods: {
        send() {
            this.axios
                .put("https://api.jsonbin.io/v3/b/63c6bdf3dfc68e59d584def4", this.schedule_new)
                .then((response) => {
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
                });
        },
        convert(n) {
            let a = parseInt(n[1]),
                b = parseInt(n[3]);
            let days_by_number = [null, "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            return [days_by_number[a], b];
        },
        swap(last_id, new_id) {
            if (last_id[0] == "t" && new_id[0] == "t") {
                return;
            }

            if (last_id[0] == "t") {
                new_id = this.convert(new_id);
                last_id = last_id.substr(1);

                this.schedule_new[new_id[0]][new_id[1]] = this.schedule_new.trash[last_id];
                // this.schedule_new.trash.splice(last_id, 1);

                delete this.schedule_new.trash[last_id];

                return;
            }

            if (new_id[0] == "t") {
                let last_td_tmp = last_id;

                last_id = this.convert(last_id);
                new_id = this.schedule_new[last_id[0]][last_id[1]].id;

                document.querySelector('div[data-lesson="' + last_td_tmp + '"]').dataset.lesson = "t" + new_id;

                this.schedule_new.trash[new_id] = this.schedule_new[last_id[0]][last_id[1]];
                // this.schedule_new.trash.splice(last_id, 1);

                this.schedule_new[last_id[0]][last_id[1]] = null;

                return;
            }

            document.querySelector("td#" + last_id).classList.remove("not-empty-lesson");
            document.querySelector("td#" + new_id).classList.add("not-empty-lesson");

            last_id = this.convert(last_id);
            new_id = this.convert(new_id);

            this.schedule_new[new_id[0]][new_id[1]] = this.schedule_new[last_id[0]][last_id[1]];
            this.schedule_new[last_id[0]][last_id[1]] = null;
        },
        set_draggable() {
            let self = this;
            self.card = document.querySelector("td > div, .trash > div");
            self.cells = document.querySelectorAll("td");
            self.trash = document.querySelector(".trash");

            let dragStart = function () {
                setTimeout(() => {
                    this.classList.add("hide");
                    self.card = this;
                    document.querySelectorAll(".trash > * ").forEach((i) => {
                        i.classList.remove("hovered");
                    });

                    document.querySelectorAll("td.not-empty-lesson").forEach((i) => {
                        if (i.id != this.dataset.lesson) i.classList.add("not-available");
                    });
                }, 0);
            };
            let dragEnd = function () {
                this.classList.remove("hide");
                document.querySelectorAll(".trash > * ").forEach((i) => {
                    i.classList.remove("hovered");
                });
                document.querySelectorAll("td.not-available").forEach((i) => {
                    i.classList.remove("not-available");
                });
            };

            let dragEnter = function (event) {
                event.preventDefault();
                this.classList.add("hovered");

                if (this.id == "trash")
                    document.querySelectorAll(".trash > * ").forEach((i) => {
                        i.classList.add("hovered");
                    });
            };
            let dragLeave = function () {
                this.classList.remove("hovered");
                document.querySelectorAll(".trash > * ").forEach((i) => {
                    i.classList.remove("hovered");
                });
            };

            let dragOver = function (event) {
                event.preventDefault();
            };

            let dragDrop = function () {
                this.append(self.card);
                this.classList.remove("hovered");

                let last_id = self.card.dataset.lesson;
                let new_id = this.id;

                self.swap(last_id, new_id);
                let cell;

                if (last_id[0] != "t") {
                    cell = document.querySelector("#" + last_id);

                    cell.addEventListener("dragover", dragOver);
                    cell.addEventListener("dragenter", dragEnter);
                    cell.addEventListener("dragleave", dragLeave);
                    cell.addEventListener("drop", dragDrop);
                }

                if (new_id != "trash") {
                    self.card.dataset.lesson = new_id;
                    cell = document.querySelector("#" + new_id);

                    cell.removeEventListener("dragover", dragOver);
                    cell.removeEventListener("dragenter", dragEnter);
                    cell.removeEventListener("dragleave", dragLeave);
                    cell.removeEventListener("drop", dragDrop);
                }
            };

            self.cells.forEach((cell) => {
                if (cell.childElementCount == 0) {
                    cell.addEventListener("dragover", dragOver);
                    cell.addEventListener("dragenter", dragEnter);
                    cell.addEventListener("dragleave", dragLeave);
                    cell.addEventListener("drop", dragDrop);
                }
            });

            self.trash.addEventListener("dragover", dragOver);
            self.trash.addEventListener("dragenter", dragEnter);
            self.trash.addEventListener("dragleave", dragLeave);
            self.trash.addEventListener("drop", dragDrop);

            document.querySelectorAll("td > div, .trash > div").forEach((i) => {
                i.addEventListener("dragstart", dragStart);
                i.addEventListener("dragend", dragEnd);
            });
        },
        set_height() {
            let h = document.querySelector("table").getBoundingClientRect().height;
            h = (h - 41) / 5;
            document.querySelectorAll("td").forEach((i) => {
                i.style["height"] = h + "px";
                i.style["max-height"] = h + "px";
                i.style["min-height"] = h + "px";
            });
        },
    },
    mounted() {
        this.axios.get("https://api.jsonbin.io/v3/b/63c6bdf3dfc68e59d584def4?meta=false").then((response) => {
            this.schedule = response.data;
            this.schedule_new = structuredClone(this.schedule);
            setTimeout(() => {
                this.set_height();
                this.set_draggable();
            }, 0);
        });
    },
};
</script>

<style scoped>
td,
th {
    border: 1px solid #999;
    text-align: center;
    width: 2%;
}

.main-wrapper {
    height: 100%;
    display: flex;
}

.sidebar {
    height: 100%;
    width: calc(100% / 8 + 60px);
    padding-right: 5px;
}

.trash {
    height: calc(100% - 44px);
    overflow-y: scroll;
}

.trash > * {
    max-height: calc((100vh - 192px) / 5);
    border: 1px solid #999;
}

.trash > *:not(:first-child) {
    margin-top: -1px;
}

.table-header {
    height: 40px !important;
}

table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.buttons {
    border: none;
    text-align: left;
}
/* table tr:hover {
	background-color: #eee;
} */

.loader {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>

<style>
.hide {
    display: none !important;
}
.hovered {
    background-color: #d1d8e2;
}
.not-available {
    background-color: #e45e5e;
}
.sidebar .v-text-field__details {
    display: none;
}
</style>
