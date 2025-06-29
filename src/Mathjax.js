let isMathjaxConfig = false
const initMathjaxConfig = () => {
  if (isMathjaxConfig) return;
  // 如果 MathJax 还没加载，先设置配置对象，等 loader.js 加载时会自动读取
  window.MathJax = window.MathJax || {};
  window.MathJax.tex = {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
  };
  window.MathJax.options = {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'],
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process',
  };
  isMathjaxConfig = true;
}
const TypeSet = async function (elementId) {
  if (!window.MathJax || !window.MathJax.typesetPromise) {
    return;
  }
  // 如果传入 elementId，只 typeset 该元素，否则全局 typeset
  let elements = undefined;
  if (elementId) {
    const el = document.getElementById(elementId);
    if (el) elements = [el];
  }
  return window.MathJax.typesetPromise(elements).catch((err) => {
    console.log('Typeset failed: ' + err.message);
  });
}
export default {
  isMathjaxConfig,
  initMathjaxConfig,
  TypeSet,
}
