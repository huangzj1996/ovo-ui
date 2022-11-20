<template>
  <button
    class="h-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts" name="HBotton">
  import { computed } from 'vue';
  import { Emits, Props } from './button';

  const props = defineProps(Props);
  const emits = defineEmits(Emits);
  console.log(props);

  const classList = computed(() => {
    const { type, size, round, plain, circle, disabled, loading } = props;
    return [
      {
        [`h-button--${type}`]: type,
        [`h-button--${size}`]: size,
        ['is-disabled']: disabled,
        ['is-loading']: loading,
        ['is-round']: round,
        ['is-plain']: plain,
        ['is-circle']: circle
      }
    ];
  });

  function handlerClick(ev: MouseEvent): void {
    emits('click', ev);
  }
</script>

<style scoped></style>
