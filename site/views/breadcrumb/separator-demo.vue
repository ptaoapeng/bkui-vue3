<template>
  <div>
    <div style="margin-bottom: 10px">
      分割符：<bk-input
        style="width: 200px"
        v-model="separator"
        clearable
      />
    </div>
    <bk-breadcrumb :separator="separator">
      <bk-breadcrumb-item
        v-for="(item, index) in list"
        :key="index"
        :to="item.link"
      >
        {{ item.title }}
      </bk-breadcrumb-item>
      <bk-breadcrumb-item :to="{ path: 'switcher' }">
        <span>自定义separator</span>
        <template #separator>
          <span style="margin: 0px 9px">slot</span>
        </template>
      </bk-breadcrumb-item>
      <bk-breadcrumb-item>
        <a
          href="https://magicbox.bk.tencent.com/static_api/v3/main/index.html"
          target="_blank"
          >MagicBox</a
        >
      </bk-breadcrumb-item>
    </bk-breadcrumb>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue';

  import { BkBreadcrumb, BkBreadcrumbItem } from '@bkui-vue/breadcrumb';
  import BkInput from '@bkui-vue/input';

  export default defineComponent({
    name: 'SiteBreadcrumb',
    components: {
      BkBreadcrumb,
      BkBreadcrumbItem,
      BkInput,
    },
    setup() {
      const separator = ref('/');
      const list = [
        { title: '首页', link: { path: '/' } },
        { title: '进度条', link: { path: 'loading' } },
        { title: '滑块开关', link: { path: 'switcher' } },
        { title: '面包屑', link: null },
      ];
      const list1 = [{ title: 'MagicBox', link: null }];
      return {
        list,
        list1,
        separator,
      };
    },
  });
</script>
