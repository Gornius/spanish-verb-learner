<script setup lang="ts">
import { Icon } from "@iconify/vue";

const wordsDictionary = useWordsDictionary();
const storeSettings = useStoreSettings();
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <div class="text-3xl p-2 bg-primary text-primary-foreground rounded-md">
        <Icon icon="mdi:person" />
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader> Pick a person </DialogHeader>
      <div class="flex flex-col gap-1">
        <Button
          class="mb-2"
          type="button"
          variant="outline"
          @click="storeSettings.checkUncheckAllPersons"
          >Check/Uncheck all</Button
        >
        <div
          class="flex flex-row"
          v-for="person in storeSettings.pickedPersons"
        >
          <div>{{ wordsDictionary.getPerson(person.name) }}</div>
          <div class="flex-grow"></div>
          <div><Switch v-model:checked="person.checked" /></div>
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
