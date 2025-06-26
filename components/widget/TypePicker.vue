<script setup lang="ts">
import { Icon } from "@iconify/vue";

const storeSettings = useStoreSettings();
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <div class="text-3xl p-2 bg-primary text-primary-foreground rounded-md">
        <Icon icon="material-symbols:list" />
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader> Pick a type </DialogHeader>
      <Button
        class="mb-2"
        type="button"
        variant="outline"
        @click="storeSettings.checkUncheckAllTypes"
        >Check/Uncheck all</Button
      >
      <div class="flex flex-col gap-1">
        <div
          class="flex flex-row"
          v-for="type in storeSettings.pickedVerbsTypes"
        >
          <div>{{ type.name }}</div>
          <div class="flex-grow"></div>
          <div><Switch v-model:checked="type.checked" /></div>
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
