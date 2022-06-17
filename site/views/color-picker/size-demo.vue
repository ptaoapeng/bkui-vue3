<template>
  <div>
    <bk-color-picker
      v-model="color2"
      size="large"
    />
    <bk-color-picker v-model="color2" />
    <bk-color-picker
      v-model="color2"
      size="small"
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
      const color2 = ref('3A84FF');
      return {
        color2,
      };
    },
  });
</script>

<style lang="postcss">
.bk-color-picker {
  margin-right: 20px;
}
</style>
