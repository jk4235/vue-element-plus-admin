<template>
  <HelloWorld :msg="msg" @click="reverseMsg" />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
ref: msg = 'Hello World!'
const reverseMsg = () => {
  msg = msg.split('').reverse().join('')
}
</script>
