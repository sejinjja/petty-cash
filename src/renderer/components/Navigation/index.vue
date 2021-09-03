<template>
  <div class="navigation">
    <router-link v-for="route in routes"
                 :to="route.to"
                 :key="route.key"
                 tag="div" class="link" exact-active-class="on">{{route.name}}
    </router-link>
  </div>
</template>

<script>
  import _ from 'lodash'

  import routes from '@/routes'

  export default {
    name: 'Navigation',
    computed: {
      routes() {
        return _(routes)
          .filter(({meta}) => !meta.hidden)
          .map(({name, meta}) => {
            return {to: {name}, name: meta.name, key: name}
          }).value()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navigation {
    display: flex;

    .link {
      flex: 1 1 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      transition: border-color .3s;

      &.on {
        border-bottom-color: #000;
      }
    }
  }
</style>
