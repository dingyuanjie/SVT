<template>
  <div v-html="htmlContent" class="markdown-body"></div>
</template>

<script>
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
// 不喜欢Ant Design Vue，可以不用它
import 'github-markdown-css/github-markdown-light.css'

const doCopy = function (e) {
  const code = this.parentNode.parentNode.querySelector('code')
  navigator.clipboard
    .writeText(code.innerText)
    .then(() => {})
    .catch((error) => {})
}

export default defineComponent({
  name: 'DynamicMarkdown',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const htmlContent = ref('')

    // 初始化 marked 实例，禁用 gfm，避免 $...$ 被当成代码
    const marked = new Marked(
      markedHighlight({
        async: false,
        langPrefix: 'language-',
        emptyLangClass: 'no-lang',
        highlight: (code, language) => {
          return hljs.highlightAuto(code, [language]).value
        },
      }),
    )
    marked.setOptions({
      gfm: false,
    })

    // 增强代码块功能
    const enhanceCodeBlock = (content) => {
      return content.replace(
        /<pre><code/g,
        '<pre><div class="enhance"><div class="copyCode">复制</div></div><code',
      )
    }

    // 复制功能绑定
    const bindCopyFunction = (el) => {
      const codeBlocks = el.querySelectorAll('pre')
      codeBlocks.forEach((codeBlock) => {
        const enhance = codeBlock.querySelector('.enhance')
        if (enhance) {
          const copyCode = enhance.querySelector('.copyCode')
          if (copyCode) {
            copyCode.removeEventListener('click', doCopy)
            copyCode.addEventListener('click', doCopy)
          }
        }
      })
    }

    // 解析 Markdown 内容
    const parseMarkdown = () => {
      console.log('MathJax:', window.MathJax)
      // 1. 先用 marked 解析 markdown
      let html = enhanceCodeBlock(marked.parse(props.value))
      // 2. 兼容处理：把所有 <code> 或 <code class=...> 包裹的 $...$ 或 \(...\) 替换回原始公式
      html = html.replace(/<code[^>]*>(\$[^<]*?\$|\\\([^<]*?\\\))<\/code>/g, '$1')
      htmlContent.value = html
      // 3. 渲染后 typeset
      nextTick(() => {
        if (mathJax) {
          if (!mathJax.isMathjaxConfig) {
            mathJax.initMathjaxConfig()
          }
          mathJax.TypeSet()
        }
        // 4. 绑定复制功能
        nextTick(() => {
          const el = document.querySelector('.markdown-body')
          if (el) {
            bindCopyFunction(el)
          }
        })
      })
    }

    // 监听 value 变化
    watch(
      () => props.value,
      (newValue, oldValue) => {
        if (newValue) {
          parseMarkdown()
        }
      },
      { immediate: true },
    )

    onMounted(() => {
      if (props.value) {
        parseMarkdown()
      }
    })

    return {
      htmlContent,
    }
  },
})
</script>

<style lang="less">
.markdown-body {
  padding: 20px;
  box-sizing: border-box;
}

pre {
  position: relative;
}

pre .enhance {
  display: flex;
  color: #247aaa;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;
  border-radius: 9px;
  justify-content: flex-end;
  //background-color: #202020;
  position: absolute;
  top: 0;
  right: 0;

  .copyCode {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      color: rgba(2, 120, 255, 0.84);
    }

    i {
      font-size: 16px;
      margin-left: 5px;
    }
  }
}
.markdown-body code,
.markdown-body tt {
  background-color: #ffe6e6;
  color: #df3b3b;
}
</style>
