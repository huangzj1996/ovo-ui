<template>
  <h-button-group>
    <h-button size="small" @click="hanlderClick"> button </h-button>
    <h-button size="small" type="primary"> button </h-button>
    <h-button size="small" type="success"> button </h-button>
    <h-button size="small" type="danger"> button </h-button>
    <h-button size="small" type="warning"> button </h-button>
    <h-button size="small" type="info"> button </h-button>
  </h-button-group>

  <br />
  <h-button>按钮默认尺寸</h-button>
  <h-button size="medium">按钮中等尺寸</h-button>
  <h-button size="small">按钮小尺寸</h-button>
  <h-button size="mini">按钮极小尺寸</h-button>
  <h-button size="tiny">按钮超小尺寸</h-button>
  <br />

  <h-button plain type="primary">朴素按钮</h-button>
  <h-button round type="primary">椭圆</h-button>
  <h-button disabled type="primary">禁止</h-button>
  <h-button circle type="primary">圆</h-button>
</template>

<script setup lang="ts">
  const hanlderClick = () => {
    console.log('1');
  };
</script>

<style scoped></style>
