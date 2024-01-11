<script setup lang="ts">
import type { Verb } from '~/models/Verb';

const props = defineProps<{
    verb: Verb,
}>();
</script>
<template>
    <UCard>
        <div class="rounded-xl p-8">{{ verb.base }}</div>
    </UCard>
</template>
