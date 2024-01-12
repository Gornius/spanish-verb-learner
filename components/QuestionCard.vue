<script setup lang="ts">
import type { Verb } from '~/models/Verb';

const props = defineProps<{
    verb: Verb,
}>();

const personDict = {
    p1: '1. Singular',
    p2: '2. Singular',
    p3: '3. Singular',
    m1: '1. Plural',
    m2: '2. Plural',
    m3: '3. Plural',
    all: 'Any',
}
function getPerson() {
    return personDict[props.verb.person];
}

const input = ref<string>();
</script>
<template>
    <UCard>
        <div class="flex flex-row items-middle justify-center">
            <div class="flex flex-col flex-grow basis-0 text-center">
                <div class="text-2xl">
                    {{ verb.base }}
                </div>
                <div class="flex-row">
                    <div class="flex flex-row space-x-2 flex-grow items-center justify-center">
                        <div>
                            <UIcon name="mingcute:time-line" dynamic />
                            {{ verb.time }}
                        </div>
                    </div>
                    <div class="flex flex-row space-x-2 flex-grow items-center justify-center">
                        <div>
                            <UIcon name="carbon:person" dynamic/>
                            {{ getPerson() }}
                        </div>
                    </div>
                </div>
            </div>
            <UDivider :type="'solid'" orientation="vertical" class="w-8" />
            <div class="flex flex-col flex-grow basis-0 items-center justify-center">
                <div class="flex flex-col justify-center align-middle space-y-1">
                    <UInput v-model="input">
                    </UInput>
                    <UButton class="rounded-full justify-center">Check</UButton>
                </div>
            </div>
        </div>
    </UCard>
</template>
