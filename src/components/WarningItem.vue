<template>  
  <div class="warning-message">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style>
.warning-message {
  font-weight: 600;
  font-size: 12px;
  margin-top: 5px;
  margin-right: 10px;
  color: #F44336;
  text-align: right;
}
</style>