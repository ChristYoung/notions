## 如何添加user-snippets


### 参考文章:


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


### Snippets 示例
  - #### *react tsx snippets*
  
    ```json
    {
	"reactfcprops": {
		"prefix": "ffc",
		"body": [
			"export interface ${TM_FILENAME_BASE}Props extends React.HTMLAttributes<HTMLDivElement> {",
			"}",
			"",
			"export const ${TM_FILENAME_BASE}: React.FC<${1:${TM_FILENAME_BASE}Props}> = (props: ${2:${TM_FILENAME_BASE}Props}) => {",
			"    return <div className='__${TM_FILENAME_BASE}'>${TM_FILENAME_BASE} component works!</div>;",
			"};"
		],
		"description": "generate react component with props definitions"
	},
  	"reactprops": {
		"prefix": "ffp",
		"body": [
			"export interface ${TM_FILENAME_BASE}Props extends React.HTMLAttributes<HTMLDivElement> {",
			"}"
		],
		"description": "generate react component props definitions"
	},
	"reactfc": {
		"prefix": "fc",
		"body": [
			"export const ${TM_FILENAME_BASE}: React.FC = () => {",
			"    return <div className='__${TM_FILENAME_BASE}'>${TM_FILENAME_BASE} component works!</div>;",
			"};"
		],
		"description": "generate react component without props definitions"
	},
	"usb_react_storybook": {
		"prefix": "stb",
		"body": [
			"import React from 'react';",
			"import { ComponentMeta, ComponentStory } from '@storybook/react';",
			"import { ${TM_SELECTED_TEXT} } from '../../src/components';",
			"",
			"const Template: ComponentStory<typeof ${TM_SELECTED_TEXT}> = (args) => <${TM_SELECTED_TEXT} {...args} />;",
			"export const Default = Template.bind({});",
			"Default.args = {};",
			"",
			"export default {",
			"  title: 'Components/${TM_SELECTED_TEXT}',",
			"  component: ${TM_SELECTED_TEXT},",
			"} as ComponentMeta<typeof ${TM_SELECTED_TEXT}>;"
		],
		"description": ""
	},
	"reactContext": {
		"prefix": "co",
		"body": [
			"import React, { createContext, useContext, useReducer } from 'react';",
			"",
			"export type ${TM_FILENAME_BASE}StateType = {};",
			"",
			"export type ${TM_FILENAME_BASE}ActionType = {};",
			"",
			"const INIT_STATE: ${TM_FILENAME_BASE}StateType = {};",
			"",
			"export const ${TM_FILENAME_BASE} = createContext<{",
			"  ${1:${TM_FILENAME_BASE/^(.)(.*)/${1:/downcase}$2/}}State: ${TM_FILENAME_BASE}StateType;",
			"  ${1:${TM_FILENAME_BASE/^(.)(.*)/${1:/downcase}$2/}}Dispatch: React.Dispatch<${TM_FILENAME_BASE}ActionType>;",
			"}>({",
			"  ${1:${TM_FILENAME_BASE/^(.)(.*)/${1:/downcase}$2/}}State: { ...INIT_STATE },",
			"  ${1:${TM_FILENAME_BASE/^(.)(.*)/${1:/downcase}$2/}}Dispatch: () => null,",
			"});",
			"",
			"export const ${TM_FILENAME_BASE}Reducer = (state: ${TM_FILENAME_BASE}StateType, action: ${TM_FILENAME_BASE}ActionType): ${TM_FILENAME_BASE}StateType => {",
			"      switch (action.type) {",
			"          case '':",
			"            return {...state };",
			"          default:",
			"            return {...state };",
			"      }",
			"};",
			"",
			"export const use${TM_FILENAME_BASE} = () => {",
			"      return useContext(${TM_FILENAME_BASE});",
			"};",
			"",
			"export const ${TM_FILENAME_BASE}Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {",
			"  const [${1:${TM_FILENAME_BASE/^(.)(.*)/${1:/downcase}$2/}}State, ${1:${TM_FILENAME_BASE/^(.)(.*)/${1:/downcase}$2/}}Dispatch] = useReducer(${TM_FILENAME_BASE}Reducer, { ...INIT_STATE });",
			"",
			"  return (",
			"    <${TM_FILENAME_BASE}.Provider value={{ ${1:${TM_FILENAME_BASE/^(.)(.*)/${1:/downcase}$2/}}State, ${1:${TM_FILENAME_BASE/^(.)(.*)/${1:/downcase}$2/}}Dispatch }}>",
			"      {children}",
			"    </${TM_FILENAME_BASE}.Provider>",
			"  );",
			"};"
		],
		"description": ""
	}}
    ```
  - #### *typescript snippets*
    ```json
    {
	"hooks": {
		"prefix": "hooks",
		"body": [
		  "import { useEffect, useState } from 'react';",
		  "",
		  "export const ${TM_FILENAME_BASE} = () => {}"
		],
		"description": ""
	  },
	"react_storybook": {
		"prefix": "stb",
		"body": [
			"import type { Meta, StoryObj } from '@storybook/react';",
			"import ${TM_SELECTED_TEXT} from './';",
			"",
			"const meta = {",
			"  title: 'Example/${TM_SELECTED_TEXT}',",
			"  component: ${TM_SELECTED_TEXT},",
			"  tags: ['autodocs'],",
			"  parameters: {",
			"    layout: 'fullscreen',",
			"  },",
			"} satisfies Meta<typeof ${TM_SELECTED_TEXT}>;",
			"",
			"type Story = StoryObj<typeof meta>;",
			"",
			"",
			"export default meta;",
			"export const ${TM_SELECTED_TEXT}Story: Story = {",
			"  args: {",
			"    ",
			"  }",
			"};",
			"",
			""
		],
		"description": ""
	},
	"reactReduxSlice": {
		"prefix": "slc",
		"body": [
		  "import { PayloadAction, createSlice } from '@reduxjs/toolkit';",
		  "",
		  "export const INIT_STATE = {};",
		  "export const ${TM_FILENAME_BASE} = createSlice({",
		  "    name: '${TM_FILENAME_BASE}',",
		  "    initialState: INIT_STATE,",
		  "    reducers: {},",
		  "});",
		  "",
		  "export const {} = ${TM_FILENAME_BASE}.actions;",
		  "export default ${TM_FILENAME_BASE}.reducer;",
		  ""
		],
		"description": ""
	  },
	"styled": {
		"prefix": "sty",
		"body": [
			"import { styled } from '@liveramp/motif/styles';",
			"",
			"export const ${TM_SELECTED_TEXT}Style = styled('div')({});",
			""
		],
		"description": ""
	}}
    ```
  - #### *markdown snippets*
    ```json
    {
	"H1": {
		"prefix": "h1",
		"body": [
			"# ${1:H1}",
			"${0}"
		],
		"description": "H1"
	},
	"H2": {
		"prefix": "h2",
		"body": [
			"## ${1:H2}",
			"${0}"
		],
		"description": "H2"
	},
	"H3": {
		"prefix": "h3",
		"body": [
			"### ${1:H3}",
			"${0}"
		],
		"description": "H3"
	},
	"H4": {
		"prefix": "h4",
		"body": [
			"#### ${1:H4}",
			"${0}"
		],
		"description": "H4"
	},
	"picture": {
		"prefix": "pic",
		"body": [
			"![](${1:link})",
			"${0}"
		],
		"description": "picture"
	},
	"code block": {
		"prefix": "code",
		"body": [
			"```${1:lang}",
			"${2:code}",
			"```",
			"${0}"
		],
		"description": "code block"
	},
	"split line": {
		"prefix": "line",
		"body": [
			"",
			"---",
			"",
			"${0}"
		],
		"description": "split line"
	},
	"bold font": {
		"prefix": "bo",
		"body": [
			"**${1:content}**${0}"
		],
		"description": "bold font"
	},
	"italic font": {
		"prefix": "ita",
		"body": [
			"*${1:content}*${0}"
		],
		"description": "italic font"
	},
	"bold italic font": {
		"prefix": "bi",
		"body": [
			"***${1:content}***${0}"
		],
		"description": "bold italic font"
	},
	"slashed font": {
		"prefix": "sla",
		"body": [
			"~~${1:content}~~${0}"
		],
		"description": "slashed font"
	},
	"inline content": {
		"prefix": "ili",
		"body": [
			"`${1:content}`${0}"
		],
		"description": "inline content"
	},
	"inline math": {
		"prefix": "ima",
		"body": [
			"$${1:math}$${0}"
		],
		"description": "inline math"
	},
	"blocked math": {
		"prefix": "bma",
		"body": [
			"$$",
			"${1:math}",
			"$$",
			"${0}"
		],
		"description": "blocked math"
	},
	"anchor": {
		"prefix": "a",
		"body": [
			"[${1:title}](${2:link})${0}"
		],
		"description": "anchor"
	},
	"checked block": {
		"prefix": "che",
		"body": [
			"- [x] ${1:content}${0}"
		],
		"description": "checked block"
	},
	"unchecked block": {
		"prefix": "uch",
		"body": [
			"- [ ] ${1:content}${0}"
		],
		"description": "unchecked block"
	},
	"centered picture": {
		"prefix": "cpic",
		"body": [
			"<div align=center><img src=\"${1:link}\"></div>",
			"${0}"
		],
		"description": "centered picture"
	},
	"Insert a simple table with 2 columns": {
		"prefix": "table2",
		"body": [
			"|${0:title} |  |",
			"| - | - |",
			"|   |   |"
		],
		"description": "Insert a simple table"
	},
	"Insert a simple table with 3 columns": {
		"prefix": "table3",
		"body": [
			"|${0:title} |  | |",
			"| - | - | - | ",
			"|   |   | | "
		],
		"description": "Insert a simple table"
	}}
    ```
  