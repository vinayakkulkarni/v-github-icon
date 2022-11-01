<template>
  <v-github-icon
    :position="state.position"
    :url="state.url"
    :bg-color="state.background"
    :fill-color="state.fill"
  />
  <!-- Netlify Badge -->
  <div class="absolute bottom-4 right-4">
    <a
      href="https://app.netlify.com/sites/v-github-icon/deploys"
      aria-label="View deploys on Netlify"
      target="_blank"
      rel="noopener noreferrer"
      class="gray-400"
    >
      <img
        src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
        alt="Deploys by Netlify"
      />
    </a>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { VGithubIcon } from 'v-github-icon';

  export default defineComponent({
    components: {
      VGithubIcon,
    },
    setup() {
      const state = ref({
        position: 'top-left',
        url: 'https://github.com/vinayakkulkarni/v-pip',
        background: '#FFF',
        fill: '#111',
      });

      return {
        state,
      };
    },
  });
</script>
<style>
  @import 'v-github-icon/dist/v-github-icon.css';
</style>
