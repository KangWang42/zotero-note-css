import { computed } from "vue";

export function copyCSS(cssFileName) {
  fetch(`/zotero-theme/${cssFileName}`)
    .then((response) => response.text())
    .then((cssContent) => {
      var tempInput = document.createElement("textarea");
      tempInput.value = cssContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("CSS内容已复制!");
    })
    .catch((error) => {
      console.error("Error fetching CSS:", error);
    });
}

export const highlightMatch = (text, query) => {
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts
    .map((part) =>
      part.toLowerCase() === query.toLowerCase() ? `<mark>${part}</mark>` : part
    )
    .join("");
};

export function filterc(cards, content, searchword) {
  return computed(() => {
    // 如果 content 为空，返回所有 cards
    if (!content) {
      let filteredCards = cards.value;
      if (searchword.value.trim()) {
        filteredCards = filteredCards
          .filter((card) =>
            card.details.some((detail) =>
              detail.toLowerCase().includes(searchword.value.toLowerCase())
            )
          )
          .map((card) => ({
            ...card,
            details: card.details.map((detail) =>
              highlightMatch(detail, searchword.value)
            ),
          }));
      }

      return filteredCards;
    } else {
      // 根据 content 进行初步筛选
      let filteredCards = cards.value.filter((card) =>
        card.tags.includes(content)
      );

      // 如果 searchword 不为空，进一步筛选并高亮匹配项
      if (searchword.value.trim()) {
        filteredCards = filteredCards
          .filter((card) =>
            card.details.some((detail) =>
              detail.toLowerCase().includes(searchword.value.toLowerCase())
            )
          )
          .map((card) => ({
            ...card,
            details: card.details.map((detail) =>
              highlightMatch(detail, searchword.value)
            ),
          }));
      }

      return filteredCards;
    }
  });
}
