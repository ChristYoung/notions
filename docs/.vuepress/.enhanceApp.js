export default ({ router, Vue, isServer }) => {
    Vue.mixin({
      mounted() {
        // 不加 setTimeout 会有报错，但不影响效果
        setTimeout(() => {
          try {
            docsearch({
              appId: "WNMYY748BP",
              apiKey: "5f669c59288fc7f04ce565bae59e961d",
              indexName: "notions",
              container: '.search-box',
              debug: false
            });
          } catch(e) {
            console.log(e);
          }
        }, 100)
      },
    });
  };