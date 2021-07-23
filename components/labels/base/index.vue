<template>
  <div class="label-value">
    <p class="label-value__label">{{ label }}</p>
    <p class="label-value__value">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "LabelValue",
  props: {
    label: {
      type: String,
      default: "- -",
    },
    value: {
      type: String,
      default: "- -",
    },
  },
};
</script>
