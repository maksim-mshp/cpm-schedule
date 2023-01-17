<template>
    <div class="cell" draggable="true" :data-lesson="lesson" v-if="data != null">
        <div>
            <span class="lesson-title">{{data.subject}}</span><br />
            <span class="lesson-teacher">{{data.teacher}}</span><br />
            <v-chip class="ma-0" color="primary" small>{{data.classroom}}</v-chip>
        </div>
    </div>
</template>

<script>
export default {
    name: "Lesson",
	props: ['lesson', 'data']
};
</script>

<style scoped>
.lesson-title {
    font-weight: bold;
}

div, .v-chip {
	cursor: inherit;
}

.cell {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid #999; */
    cursor: move;
}
</style>
