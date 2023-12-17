### 我的常用vscode配置
```json
{
    "git.ignoreLegacyWarning": true,
    "editor.minimap.enabled": false,
    "workbench.editor.enablePreview": false,
    "git.path": "C:/Program Files (x86)/Git/bin/git.exe",
    "git.autofetch": false,
    "editor.fontFamily": "mononoki,Operator Mono,Monaco,'Cascadia Code',source code pro,Zed Mono,Fira Code,Iosevka",
    "editor.fontLigatures": true,
    "editor.snippetSuggestions": "inline",
    "window.autoDetectHighContrast": false,
    "explorer.confirmDelete": false,
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "breadcrumbs.enabled": true,
    "editor.renderWhitespace": "none",
    // 在使用搜索功能时，将这些文件夹/文件排除在外
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/target": true,
        "**/logs": true,
    },
    // 这些文件将不会显示在工作空间中
    // "files.exclude": {
    //     "**/.git": true,
    //     "**/.svn": true,
    //     "**/.hg": true,
    //     "**/CVS": true,
    //     "**/.DS_Store": true,
    //     "**/*.js": {
    //         "when": "$(basename).ts" // ts编译后生成的js文件将不会显示在工作空中
    //     },
    //     "**/node_modules": true
    // },
    "eslint.enable": true, // 开启eslint检查
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    "prettier.requireConfig": true, // 需要Prettier的配置文件
    "typescript.format.semicolons": "insert",
    "typescript.preferences.quoteStyle": "single",
    "[markdown]": {
        "editor.formatOnSave": true,
        "editor.renderWhitespace": "all",
        "editor.quickSuggestions": {
            "other": "on",
            "comments": "on",
            "strings": "on"
        },
        "editor.acceptSuggestionOnEnter": "on",
        "editor.defaultFormatter": "yzhang.markdown-all-in-one"
    },
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "files.associations": {
        "*.mpx": "vue",
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "editor.fontSize": 13,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    // 光标丝滑移动
    "editor.cursorBlinking": "smooth",
    "editor.cursorSmoothCaretAnimation": "on",
    // "editor.tokenColorCustomizations": {
    //     "textMateRules": [
    //         {
    //             "name": "italic font",
    //             "scope": [
    //                 "comment",
    //                 "keyword",
    //                 "storage",
    //                 "keyword.control",
    //                 "keyword.control.from",
    //                 "keyword.control.flow",
    //                 "keyword.operator.new",
    //                 "keyword.control.import",
    //                 "keyword.control.export",
    //                 "keyword.control.default",
    //                 "keyword.control.trycatch",
    //                 "keyword.control.conditional",
    //                 "storage.type",
    //                 "storage.type.class",
    //                 "storage.type.interface",
    //                 "storage.modifier.tsx",
    //                 "storage.type.function",
    //                 "storage.modifier.async",
    //                 "variable.language",
    //                 "variable.language.this",
    //                 "variable.language.super",
    //                 "variable.other.object",
    //                 "variable.parameter",
    //                 "variable.other.enummember",
    //                 "variable.other.readwrite.alias",
    //                 "variable.other.readwrite",
    //                 "variable.other.constant",
    //                 "variable.other.property",
    //                 "variable.other.object.property",
    //                 "variable.object.property",
    //                 "support.variable.property",
    //                 "meta.import",
    //                 "meta.interface",
    //                 "meta.block",
    //                 "meta.object-literal.key",
    //                 "meta.object.member",
    //                 "meta.decorator",
    //                 "meta.definition.variable",
    //                 "meta.preprocessor.scope",
    //                 "constant.language.null",
    //                 "support.type.primitive",
    //                 "entity.name.method.js",
    //                 "entity.other.attribute-name",
    //                 "entity.name.type",
    //                 "entity.name.type.class",
    //                 "entity.name.function",
    //                 "entity.name.type.enum",
    //                 "entity.name.type.interface",
    //                 "punctuation.definition.comment",
    //                 "text.html.basic entity.other.attribute-name",
    //                 "tag.decorator.js entity.name.tag.js",
    //                 "tag.decorator.js punctuation.definition.tag.js",
    //                 "source.js constant.other.object.key.js string.unquoted.label.js",
    //                 "punctuation.definition.tag.end",
    //                 "meta.tag.custom.end",
    //                 "text.html.derivative",
    //                 "string.quoted.single",
    //             ],
    //             "settings": {
    //                 "fontStyle": "italic",
    //             }
    //         },
    //         {
    //             "name": "normal font",
    //             "scope": [
    //                 "meta.block"
    //             ],
    //             "settings": {
    //                 "fontStyle": "",
    //             }
    //         }
    //     ]
    // },
    "minapp-vscode.disableAutoConfig": true,
    "eslint.validate": [
        "vue"
    ],
    "vetur.format.defaultFormatterOptions": {
        "prettyhtml": {
            "printWidth": 100,
            "singleQuote": false
        },
        "prettier": {
            "semi": true,
            "singleQuote": true,
            "eslintIntegration": false
        }
    },
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "workbench.colorCustomizations": {
        "activityBarBadge.background": "#2979FF",
        "list.activeSelectionForeground": "#2979FF",
        "list.inactiveSelectionForeground": "#2979FF",
        "list.highlightForeground": "#2979FF",
        "scrollbarSlider.activeBackground": "#2979FF50",
        "editorSuggestWidget.highlightForeground": "#2979FF",
        "textLink.foreground": "#2979FF",
        "progressBar.background": "#2979FF",
        "pickerGroup.foreground": "#2979FF",
        "tab.activeBorder": "#2979FF",
        "notificationLink.foreground": "#2979FF",
        "editorWidget.resizeBorder": "#2979FF",
        "editorWidget.border": "#2979FF",
        "settings.modifiedItemIndicator": "#2979FF",
        "settings.headerForeground": "#2979FF",
        "panelTitle.activeBorder": "#2979FF",
        "breadcrumb.activeSelectionForeground": "#2979FF",
        "menu.selectionForeground": "#2979FF",
        "menubar.selectionForeground": "#2979FF",
        "editor.findMatchBorder": "#2979FF",
        "selection.background": "#2979FF40"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "task.slowProviderWarning": [
        "gulp"
    ],
    "git.enableSmartCommit": true,
    "gitlens.advanced.messages": {
        "suppressGitVersionWarning": true
    },
    "terminal.integrated.fontWeightBold": "bold",
    "editor.lineHeight": 21,
    "git.confirmSync": false,
    "security.workspace.trust.untrustedFiles": "open",
    "explorer.compactFolders": false,
    "workbench.iconTheme": "material-icon-theme",
    "[less]": {
        "editor.defaultFormatter": "vscode.css-language-features"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "editor.fontWeight": "bold",
    "GitCommitPlugin.MaxSubjectWords": 500,
    "[vue]": {
        "editor.defaultFormatter": "Vue.volar"
    },
    "[shellscript]": {
        "editor.defaultFormatter": "foxundermoon.shell-format"
    },
    "glassit.alpha": 220,
    "GitCommitPlugin.MaxSubjectCharacters": 200,
    "hediet.vscode-drawio.theme": "Kennedy",
    "workbench.sideBar.location": "right",
    "redhat.telemetry.enabled": true,
    "editor.cursorStyle": "block",
    "todo-tree.general.showActivityBarBadge": true,
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "git.openRepositoryInParentFolders": "always",
    "workbench.startupEditor": "none",
    "workbench.colorTheme": "Eclipse Color Theme",
    "window.zoomLevel": 1.2,
    "cSpell.userWords": [
        "autofetch",
        "Cascadia",
        "liveramp",
        "mononoki"
    ],
}
```

### Setting Token Scope设置
 command + shift + p: 选择"Developer: Inspect Editor Tokens and Scopes", 可以查看编辑面板元素的Scope名称
