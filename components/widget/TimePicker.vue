<script setup lang="ts">
import { Icon } from '@iconify/vue';

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
            <DialogHeader>
            </DialogHeader>
            <div class="flex flex-col gap-1">
                <div class="flex flex-row" v-for="time in storeSettings.pickedTimes">
                    <div>{{ time.name }}</div>
                    <div class="flex-grow"></div>
                    <div><Switch :checked="time.checked" @update:checked="(checked) => time.checked = checked" /></div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
</template>
