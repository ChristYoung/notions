## 如何添加user-snippets


参考文章:

- [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- [如何把 vscode snippets 用在项目中提高开发效率 - 掘金 (juejin.cn)](https://juejin.cn/post/7005878164517814280)
- ***如何在指定项目下, 创建该项目的code smippets?***
    - *在项目根目录下创建一个**.vscode**文件夹.*
    - *在**.vscode**文件夹中, 创建一个名为**snippets.code-snippets**的文件.*
    - *在 **snippets.code-snippets** 文件中，使用以下格式创建您的代码片段：*
    
    ```json
    {
      "snippet": {
        "prefix": "mySnippet",
        "body": [
          "console.log('Hello, World!');"
        ],
        "description": "My custom code snippet"
      }
    }
    ```
    
- *常见的变量名*
    
    *• TM_FILENAME: 文件名*
    
    *• TM_FILENAME_BASE: 文件名的前缀
    • TM_CURRENT_LINE: 当前行的内容
    • CLIPBOARD: 剪贴板内容
    • WORKSPACE_NAME：workspace 的名字
    • UUID: 唯一 id
    • RANDOM_HEX: 6 位随机 16 进制数
    • RANDOM: 随机数
    • CURRENT_DATE：当前日
    • CURRENT_MONTH：当前月
    • CURRENT_YEAR：当前年
    • WORKSPACE_PATH：workspace 的路径*
    

*snippet generator*: [snippet generator (snippet-generator.app)](https://snippet-generator.app/?description=&tabtrigger=&snippet=export+const+MyComponent%3A+FC%3Cany%3E+%3D+%28props%3A+any%29+%3D%3E+%7B%0A++++return+%3C%3E%3C%2F%3E%3B%0A%7D%3B&mode=vscode)
