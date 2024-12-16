<script>
export default {
    props: {
        msg: {
            type: String, 
            required: false
        }
    }
};
</script>
<template>
    <div v-if="msg" class="round-msg">{{ msg }}</div>
    <div v-else class="round-msg">What will you do?</div>
</template>

<style>
.round-msg {
    grid-column: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 1.5em;
    background-color: none;

}
</style>