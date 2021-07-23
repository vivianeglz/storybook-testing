<template>
  <button @click.prevent="$emit('click')" :class="className">
    <slot />
  </button>
</template>

<script>
import { toRefs, computed } from "vue";

export default {
  name: "ButtonPrimary",
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
    const className = computed(() => `button button--primary button--${size.value}`);
    return {
      className,
    };
  },
};
</script>
