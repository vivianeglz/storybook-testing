<template>
  <button @click.prevent="$emit('click')" :class="className">
    <!-- Button's title -->
    <slot />
  </button>
</template>

<script>
import { toRefs, computed } from "vue";

export default {
  name: "ButtonSecondary",
  props: {
    /**
     * Component's size
     */
    size: {
      type: String,
      default: "s",
    },
  },
  setup(props) {
    const { size } = toRefs(props);
    const className = computed(() => `button button--secondary button--${size.value}`);
    return {
      className,
    };
  },
};
</script>
