<template>
  <HButtonGroup>
    <HButton size="small" @click="hanlderClick"> button </HButton>
    <HButton size="small" type="primary"> button </HButton>
    <HButton size="small" type="success"> button </HButton>
    <HButton size="small" type="danger"> button </HButton>
    <HButton size="small" type="warning"> button </HButton>
    <HButton size="small" type="info"> button </HButton>
  </HButtonGroup>

  <br />
  <HButton>按钮默认尺寸</HButton>
  <HButton size="medium">按钮中等尺寸</HButton>
  <HButton size="small">按钮小尺寸</HButton>
  <HButton size="mini">按钮极小尺寸</HButton>
  <HButton size="tiny">按钮超小尺寸</HButton>
  <br />

  <HButton plain type="primary">朴素按钮</HButton>
  <HButton round type="primary">椭圆</HButton>
  <HButton disabled type="primary">禁止</HButton>
  <HButton circle type="primary">圆</HButton>
</template>

<script setup lang="ts">
const hanlderClick = ()=>{
  console.log('1');
  
}
</script>

<style scoped></style>
