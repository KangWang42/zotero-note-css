<template>
    <div class="wrapcont">
  <div class="editor">
    <div class="inputs">
      <h3>样式编辑器</h3>
      <!-- 输入字段 -->
      <div>
        <label for="h1-color">一级标题颜色:</label>
        <input v-model="styles.h1.color" type="color" />
      </div>
      <div>
        <label for="h1-margin">一级标题外边距 (如 10px 0):</label>
        <input v-model="styles.h1.margin" type="text" />
      </div>
      <!-- 更多输入字段 -->
    </div>
    <div class="preview">
      <h1 :style="{ color: styles.h1.color, margin: styles.h1.margin }">
        预览一级标题
      </h1>
      <!-- 更多预览内容 -->
    </div>
  </div>
  <button @click="applyUIValues">应用 UI 值</button>
</div>
</template>
  
  <script setup>
import { reactive } from "vue";

const styles = reactive({
  h1: {
    color: "#000000",
    margin: "0",
  },
  // 添加更多样式
});

function applyUIValues() {
  console.log("应用了 UI 值:", styles);
}
</script>
  
  <style>
.wrapcont {
  display: flex;
  justify-content: space-between;
}
.editor {
  display: flex;
}
.inputs {
  flex-basis: 40%;
}
.preview {
  flex-basis: 60%;
  border-left: 1px solid #ccc;
  padding-left: 20px;
}
</style>
  