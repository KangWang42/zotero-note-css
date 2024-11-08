export function copyCSS(cssFileName) {
    fetch(`/zotero-theme/${cssFileName}`)
        .then(response => response.text())
        .then(cssContent => {
            var tempInput = document.createElement('textarea');
            tempInput.value = cssContent;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('CSS内容已复制!');
        })
        .catch(error => {
            console.error('Error fetching CSS:', error);
        });
}



export const highlightMatch = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map(part => part.toLowerCase() === query.toLowerCase()
      ? `<mark>${part}</mark>`
      : part).join('');
  };
  
