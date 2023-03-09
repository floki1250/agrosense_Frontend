<script lang="ts">
export default {
  name: "AppFooter",
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    },
  },
};
</script>

<template>
  <div class="layout-footer">
    <img alt="Logo" src="/images/agro.svg" height="20" class="mr-2" />

    <span class="font-medium ml-2" style="color: #45c295">AgroSense</span>
  </div>
</template>
