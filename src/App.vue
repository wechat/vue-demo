<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import router from "./router";

const includeList = ref<string[]>([]);

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const { name, meta, query } = to;
    if (meta?.keepAlive) {
      includeList.value.push(name as string);
    }
    if (meta?.title) {
      document.title = meta.title as string;
    }
    next();
  }
);
</script>
