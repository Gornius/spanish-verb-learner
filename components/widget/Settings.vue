<script setup lang="ts">
import { Icon } from "@iconify/vue";
const opened = ref<boolean>(false);
const darkMode = useDark();
const toggleDarkMode = useToggle(darkMode);
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <div class="text-3xl p-2 bg-primary text-primary-foreground rounded-md">
        <Icon icon="ci:settings" class="m-0" />
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader> Settings </DialogHeader>
      <div class="flex flex-row gap-4">
        <label>Dark mode</label>
        <div class="flex-grow"></div>
        <Switch :checked="darkMode" @update:checked="toggleDarkMode" />
      </div>
    </DialogContent>
    <div v-if="opened === true"></div>
  </Dialog>
</template>
