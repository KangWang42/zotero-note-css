<template>
  <div class="demo-dropdown-wrap">
    <a-dropdown >
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            <a href="https://test.wk8686.top/">01 zotero插件一览</a>
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            <a
              href="https://alist.wk8686.top/%E5%8D%9A%E5%AE%A2%E8%B5%84%E6%BA%90%E5%88%86%E4%BA%AB/01%20zotero%E8%B5%84%E6%BA%90%E5%90%88%E9%9B%86/01%20zotero_%E6%8F%92%E4%BB%B6%E5%90%88%E9%9B%86/01%20%E6%8F%92%E4%BB%B6-z7%20%E6%AD%A3%E5%BC%8F%E7%89%88"
            >02 zotero资源在线下载</a>
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            <a href="https://alist.wk8686.top/%E5%8D%9A%E5%AE%A2%E8%B5%84%E6%BA%90%E5%88%86%E4%BA%AB/05%20%E8%BD%AF%E4%BB%B6%E8%B5%84%E6%BA%90%E5%90%88%E9%9B%86">
              03 实用软件工具合集
            </a>
          </a-menu-item>
          <a-menu-item key="4">
            <UserOutlined />
            <a href="https://rtuto.wk8686.top/">
              04 R语言教程合集
            </a>
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        查看更多推文
        <DownOutlined />
      </a-button>
    </a-dropdown>
  </div>
</template>

<script setup>
import { FontSizeOutlined } from "@ant-design/icons-vue";
import Dropdown from "ant-design-vue/es/dropdown/dropdown";

const handleMenuClick = (e) => {
  console.log("click", e);
};
</script>

<style lang="less" scoped>
.demo-dropdown-wrap {
  display: inline;
}
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
