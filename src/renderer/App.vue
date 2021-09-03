<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'

    export default {
      components: {Navigation},
      name: 'App'
    }
</script>

<style lang="scss" scoped>
    #app {
        display: grid;
        grid-template-rows: 40px minmax(0, 1fr);
    }
</style>
