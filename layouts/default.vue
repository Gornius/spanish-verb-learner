<template>
  <div class="flex flex-row gap-2 sticky top-2 m-2 justify-end">
    <WidgetTypePicker />
    <WidgetPersonPicker />
    <WidgetTimePicker />
    <WidgetSettings />
  </div>
  <slot></slot>
</template>
