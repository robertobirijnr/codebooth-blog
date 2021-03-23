<template>
    <div>
        <p>single user</p>
    </div>
</template>

<script>
    export default {
        validate(data){
            return data.params.id === 1
        }
    }
</script>

<style lang="scss" scoped>

</style>