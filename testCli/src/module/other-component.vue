<template>
    <div>
        <span>
            <button>{{ message }}</button>
        </span>
    </div>
</template>

<script>

export default {
    data() {
        return{
            message: 'click this button'
        }
    }
}
</script>

<style>
span{
    font-size: 1.2em
}
</style>