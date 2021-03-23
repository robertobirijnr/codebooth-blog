<template>
    <div>
        <h2>Users page</h2>
        <input type="text" v-model="userId">
        <button @click="loadSingleUser">load single User</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userId: ""
            }
        },
        methods:{
            loadSingleUser(){
                this.$router.push(`/users/${this.userId}`)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>