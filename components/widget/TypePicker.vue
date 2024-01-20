<script setup lang="ts">
import { Icon } from '@iconify/vue';

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
            <DialogHeader>
                Pick a type
            </DialogHeader>
            <div class="flex flex-col gap-1">
                <div class="flex flex-row" v-for="type in storeSettings.pickedVerbsTypes">
                    <div>{{ type.name }}</div>
                    <div class="flex-grow"></div>
                    <div><Switch :checked="type.checked" @update:checked="(checked) => type.checked = checked" /></div>
                </div>
                <Button type="button" variant="secondary" @click="storeSettings.checkUncheckAllPersons">Check/Uncheck all</Button>
            </div>
        </DialogContent>
    </Dialog>
</template>
