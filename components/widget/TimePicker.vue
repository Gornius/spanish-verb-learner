<script setup lang="ts">
import { Icon } from "@iconify/vue";

const storeSettings = useStoreSettings();
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <div class="text-3xl p-2 bg-primary text-primary-foreground rounded-md">
        <Icon icon="mdi:clock" />
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader> Pick a tense </DialogHeader>
      <div class="flex flex-col gap-1">
        <Button
          class="mb-2"
          type="button"
          variant="outline"
          @click="storeSettings.checkUncheckAllTimes"
          >Check/Uncheck all</Button
        >
        <div class="flex flex-row" v-for="time in storeSettings.pickedTimes">
          <div>{{ time.name }}</div>
          <div class="flex-grow"></div>
          <div><Switch v-model:checked="time.checked" /></div>
        </div>
      </div>
      <DialogFooter>
        <DialogClose as-child>
          <Button class="w-full" type="button" variant="secondary"
            >Close</Button
          >
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
