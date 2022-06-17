<template>
  <div>
    <bk-color-picker
      v-model="color1"
      @change="change"
    />
    <bk-color-picker
      v-model="color1"
      :show-value="false"
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
      const color1 = ref('');
      const change = (v) => {
        console.log(v);
      };
      return {
        color1,
        change,
      };
    },
  });
</script>

<style lang="postcss">
.bk-color-picker {
  margin-right: 20px;
}
</style>
