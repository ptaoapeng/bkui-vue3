<template>
  <div class="color-container">
    <bk-color-picker
      v-model="color3"
      :recommend="false"
    />
    <bk-color-picker
      v-model="color3"
      :recommend="recommendColors"
    />
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';

  import BkColorPicker from '@bkui-vue/color-picker';

  export default defineComponent({
    components: {
      BkColorPicker,
    },
    setup() {
      const color3 = ref('3A84FF');
      const recommendColors = ref(['#000', '#333', '#666', '#999', 'FFF']);
      return {
        color3,
        recommendColors,
      };
    },
  });
</script>

<style lang="postcss">
.bk-color-picker {
  margin-right: 20px;
}
</style>
