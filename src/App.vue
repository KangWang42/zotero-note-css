<script setup>


</script>

<template>
  <div class="container">

    <Float />
    <header>
      <nav>
        <span class="return"><a href="https://wk8686.top">返回博客</a> </span>
        <span class="return"
          ><a href="https://wk8686.top/archives/zoteroepi93">使用教程</a>
        </span>
        <span class="router">
          <RouterLink to="/">全部CSS</RouterLink>
          <RouterLink to="/theme">主题CSS</RouterLink>
          <RouterLink to="/backview">背景CSS</RouterLink>
          <RouterLink to="/elemenview">元素CSS</RouterLink>
          <RouterLink to="/otherview">其它CSS</RouterLink>
          <RouterLink to="/betternote">Betternote模板</RouterLink>
        </span>


      </nav>
      <span
        class="absolute github transition ease-in-out delay-150 hover:scale-125 duration-300"
      >
        <a href="https://github.com/KangWang42/zotero-note-css" target="_blank">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            width="40"
            height="40"
          />
        </a>
      </span>

      <div class="absolute cursor-pointerinline-block group wechat">
        <!-- 小尺寸的 SVG 微信图标 -->
        <svg
          t="1730884416770"
          class="hover:scale-125 w-10 h-10 text-green-500 transition ease-in-out duration-300"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#00C800"
        >
          <path
            d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
          />
          <path
            d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
          />
        </svg>

        <!-- 悬浮显示的较大二维码图片 -->
        <img
          src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/202411061710319.webp"
          alt="WeChat QR Code"
          class="hidden group-hover:block fixed top-38 right-2 transform -translate-x-1/2 w-60 border border-gray-300 rounded-lg shadow-lg z-10"
        />
      </div>
    </header>

    <RouterView></RouterView>
  </div>
</template>

<style  scoped>
nav {
  width: 100%;
  font-size: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: rgb(205, 205, 205) 4px solid;
  margin-left: 2%;
  margin-top: 2rem;
  display: block;
}

.wechat {
  top: 60px;
  right: 80px;
}

.github {
  top: 32px;
  right: 24px;
}
.return a {
  padding: 0 1rem;
  color: rgb(33, 38, 57);
  padding-right: 10px;
  font-weight: 600;
}
.return:nth-child(2) a {
  padding-right: 30px;
  border-right: green 4px dashed;
}

nav a.router-link-exact-active {
  color: rgb(240, 132, 31);
  font-weight: bolder;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (max-width: 800px) {
  .wechat {
    display: none;
  }

  .github {
    display: none;
  }
  .return a {
    display: block;
    text-align: center;
    padding: 10px 0px;
  }
  .return:nth-child(2) a {
    padding-right: 0;
  }

  header nav span.router {
    display: flex;

    flex-wrap: wrap;
    gap: 5%;
    row-gap: 10px;
    margin-bottom: 10px;
  }

  header nav span.router a {
    min-width: 72px;
    width: 30%;
    justify-content: space-around;
    text-align: center;
  }
  .drop {
    display: block;
    margin-left: 5%;
  }
}
</style>
