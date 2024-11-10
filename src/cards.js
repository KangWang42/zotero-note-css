import { ref, computed } from "vue";
export const cards = ref([
    {
      title: "zotero笔记主题CSS-专注版加强",
      author: "wang",
      subtitle: "css介绍",
      details: [
        "在专注版的基础上加了列表样式和表格样式之类的",
        "我用的最多的css，感觉也最好看",
        "背景样式用的横线背景，个人觉得比较好看"
      ],
      image: "/pic/202410281536561.webp",
      cssFile: "zotero6-专注版加强.css",
      tags : [
        "主题"
      ]
    },
    {
      title: "zotero笔记主题CSS-多彩版",
      author: "wang",
      subtitle: "css介绍",
      details: [
        "标题的边框和颜色",
        "引用样式的颜色修改，间距调整",
        "无序列表和有序列表的marker颜色根据层级多彩",
        "添加列表的左绿边框",
        "每个一级的列表下边会有分割线",
        "加粗选用了耀眼的橙灰搭配",
        "超链接也改了绿色",
        "这是一个做的很早的css，bug很多"
      ],
      image: "/pic/202405231525656.png",
      cssFile: "zotero1-彩色.css",
      tags : [
        "主题"
      ]
    },
    {
      title: "zoteroCSS片段-无序列表样式",
      author: "wang",
      subtitle: "主题介绍",
      details: [
        "为什么只有无序列表样式，因为平时太懒，基本都是用无序列表",
        "加了列表一级的字体和marker大小和深浅",
        "加了列表的分割线",
        "修改了一些字体大小和间距",
        "修改列表的hover突出显示"
      ],
      image: "/pic/202411072254734.gif",
      cssFile: "zotero-无序列表效果.css",
      tags : [
        "元素"
      ]
    },
    {
      title: "zoteroCSS片段-图片样式",
      author: "wang",
      subtitle: "CSS介绍",
      details: [
        "去除图片的淡色外框，自定义一个边框",
        "悬浮图片为放大显示，小屏放大1.05，大屏放大1.2",
        "设置图片宽度，小屏幕100%，大屏80%",
        "修改了悬浮的阴影效果",
        "边框还不是太好看，应该再改改"
      ],
      image: "/pic/202410311518795.gif",
      cssFile: "zotero-图片样式.css",
      tags : [
        "元素"
      ]
    },
    {
      title: "zoteroCSS片段-三线表",
      author: "wang",
      subtitle: "主题介绍",
      details: [
        "感觉有时候医学笔记还是三线表好看",
        "设置了表头样式，虽然我查看之后发现插入的第一行不是表头，而是表体第一行",
        "修改了一些字体大小",
        "三线表看不到左右边框，设置了hover样式，悬浮在上边能看到当前单元格的左右范围"
      ],
      image: "/pic/202410281731967.webp",
      cssFile: "zotero-表格片段.css",
      tags : [
        "元素"
      ]
    },
    {
      title: "zoteroCSS片段-网格背景",
      author: "wang",
      subtitle: "主题介绍",
      details: [
        "网格的背景",
        "网格的网眼设置比较大"
      ],
      image: "/pic/202410281719535.webp",
      cssFile: "zotero-网格背景.css",
      tags : [
        "背景"
      ]
    },
    {
      title: "zoteroCSS片段-字体修改",
      author: "wang",
      subtitle: "CSS介绍",
      details: [
        "设置中文字体为宋体",
        "设置英文字体为times new roman"
      ],
      image: "/pic/1731209621568.png",
      cssFile: "zotero-font.css",
      tags : [
        "其它"
      ]

    },
    {
      title: "zoteroCSS片段-横线背景",
      author: "wang",
      subtitle: "主题介绍",
      details: [
        "设置背景是横线样式",
        "横线设置比较淡，不会影响文字，又有种书面感",
        "算是效果相当好的一个背景了"
      ],
      image: "/pic/202410281804382.webp",
      cssFile: "zotero-横线背景.css",
      tags : [
        "背景"
      ]
    },
    {
      title: "zoteroCSS片段-点阵背景",
      author: "wang",
      subtitle: "主题介绍",
      details: [
        "设置背景是淡灰色的点阵样式",
        "点设置比较淡，不会影响文字",
        "感觉书面感没有那么强，似乎和笔记不太搭配？"
      ],
      image: "/pic/202410281826796.webp",
      cssFile: "zotero-点阵背景.css",
      tags : [
        "背景"
      ]
    },
    {
      title: "zoteroCSS片段-横线背景2",
      author: "wang",
      subtitle: "主题介绍",
      details: [
        "设置背景也是横线样式",
        "横线设置比较淡，不会影响文字，又有种书面感",
        "区别在于加了一个比较明亮的左边线，用于存在缩进的情况下"
      ],
      image: "/pic/202410281823012.webp",
      cssFile: "zotero-横线背景2.css",
      tags : [
        "背景"
      ]
    },
    {
    title: "zotero笔记主题CSS-专注版",
    author: "wang",
    subtitle: "css介绍",
    details: [
      "标题的颜色，加粗和边框",
      "引用的卡片化处理，悬浮提示",
      "列表的marker颜色",
      "超链接颜色",
      "加粗样式修改"
    ],
    image: "/pic/202405231603347.gif",
    cssFile: "zotero2-专注版.css",
      tags : [
        "主题"
      ]
  },
  {
    title: "zotero笔记主题CSS-tomatolight",
    author: "wang",
    subtitle: "css介绍",
    details: [
      "每一级标题的特殊样式，比如二级标题的左边框，三级标题的下划线；以及悬浮变色",
      "引用的样式修改，绿色温暖色调",
      "列表的颜色设置为橙色主题",
      "超链接的橙色效果"
    ],
    image: "/pic/202405231629041.gif",
    cssFile: "zotero3-tomatolight.css",
      tags : [
        "主题"
      ]
  },
  {
    title: "betternote模板-不同颜色注释导出",
    author: "githubcopy来的",
    subtitle: "内容介绍",
    details: [
      "这个模板直接粘贴到betternote模板编辑器使用",
      "可以导出不同颜色的注释标注标题",
      "如果用translate插件就可以导出注释的翻译"
    ],
    image: "/pic/1731213483657.png",
    cssFile: "zoteronote-注释导出.txt",
      tags : [
        "betternote模板",
        "其它"

      ]
  },
  {
    title: "zotero笔记主题CSS-greenfocus",
    author: "wang",
    subtitle: "css介绍",
    details: [
      "每一级标题的特殊样式，比如二级标题的左边框，三级标题的下划线；以及悬浮变色",
      "引用的样式修改，清新色调",
      "列表的颜色设置为绿色主题",
      "超链接的绿色效果"
    ],
    image: "/pic/202410282042176.webp",
    cssFile: "zotero4-greenfocus.css",
      tags : [
        "主题"
      ]
  },
  
  {
    title: "betternote模板-总结表格",
    author: "wang",
    subtitle: "css介绍",
    details: [
      "用来插入总结的表格",
      "包含了标题、标题翻译、作者、出版年份、期刊、期刊等级、论文标签、附件链接等信息",
      "设置了一些表格样式"
    ],
    image: "/pic/1731212798670.png",
    cssFile: "zoteronote-总结表.txt",
      tags : [
        "betternote模板",
        "表格"
      ]
  },
  {
    title: "zotero笔记主题CSS-删除外链的citation",
    author: "wang",
    subtitle: "css介绍",
    details: [
      "zotero笔记主题CSS-删除外链的citation",
      "强迫症需要",
      "频繁使用copy来做笔记的同学需要"
    ],
    image: "/pic/202410311444485.webp",
    cssFile: "zotero-删除citation.css",
      tags : [
        "其它"
      ]
  }
  
  ]);
  