<template>
  <header>
    <div class="header_wrapper">
      <router-link to="/" class="header_logo">
        <img src="@/icons/logo.svg" alt="" />
      </router-link>
      <div class="header_title">AIR Tech</div>
      <div class="header_box">
        <div class="header_burger" @click="toggleMenu">
          <svg
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="3" rx="1.5" fill="white" />
            <rect x="3" y="7" width="21" height="3" rx="1.5" fill="white" />
            <rect x="8" y="14" width="16" height="3" rx="1.5" fill="white" />
          </svg>
        </div>
        <ul class="header_menu" :class="{ active: active }">
          <li class="header_menu_item">
            <a href="#" class="header_menu_link">Home</a>
          </li>
          <li class="header_menu_item">
            <a href="#" class="header_menu_link">About</a>
          </li>
          <li class="header_menu_item">
            <a href="#" class="header_menu_link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleMenu() {
      this.active = !this.active
    }
  }
}
</script>
