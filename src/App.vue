<template>
  <VueHeader />
  <router-view />
  <VueFooter />
</template>

<script>
import VueHeader from '@/layouts/VueHeader.vue'
import VueFooter from '@/layouts/VueFooter.vue'
export default {
  name: 'App',
  components: {
    VueHeader,
    VueFooter
  }
}
</script>
