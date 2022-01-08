<template>
    <div>
        <button @click="addOne">Add 1</button>
    </div>
</template>

<script>
export default {
    methods:{
        addOne() {
            // this.$store.commit('increment');     commit mutation
            this.$store.dispatch('increment');      // dispatch action
        }
    }
}
</script>