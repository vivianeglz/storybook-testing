<template>
  <div class="label-value label-value--address">
    <p class="label-value__label">{{ label }}</p>
    <p class="label-value__value">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "LabelValueAddress",
  props: {
    label: {
      type: String,
      default: "- -",
    },
    /**
     * Address object wich contains `street`, `number`, `city` properties
     */
    address: {
      type: Object,
    },
  },
  setup(props) {
    const value = "- -";
    return {
      value,
    };
  },
};
</script>
