## 玩转Vscode:

### 文件和Tab:
| 快捷键     | 描述               | 命令ID                             |
| ---------- | ------------------ | ---------------------------------- |
| Ctrl + ->  | 打开下一个文件tab  | workbench.action.nextEditor        |
| Ctrl + <-  | 打开上一个文件tab  | workbench.action.previousEditor    |
| Ctrl + w   | 关闭打开的文件     | workbench.action.closeActiveEditor |
| Ctrl + l&w | 关闭所有打开的文件 | workbench.action.closeAllEditors   |
| Ctrl + 1   | 复制文件的相对路径 | copyRelativeFilePath               |

### 光标:
| 快捷键            | 描述                                                                                       | 命令ID                                   |
| ----------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------- |
| Ctrl + Home       | 跳转到当前文件的第一行                                                                     | workbench.action.terminal.scrollToTop    |
| Ctrl + End        | 跳转到当前文件的最后                                                                       | workbench.action.terminal.scrollToBottom |
| Ctrl + ;          | 将光标快速定位到行首                                                                       | cursorLineStart                          |
| Ctrl + '          | 将光标快速定位到行尾                                                                       | cursorLineEnd                            |
| Ctrl + Alt + ->   | 可以按照单词快速移动光标                                                                   | cursorWordEndRight                       |
| Ctrl + Shift + \  | 在代码快中移动光标                                                                         | editor.action.jumpToBracket              |
| Ctrl + Shift + >  | 快速打开当前文件中的所有方法的引用(ps: 按好Ctrl + Shift + >之后, 再继续按方向键, 可以切换) | -                                        |
| Ctrl + Shift + -> | 可以按单词word逐个选择文本, 且按住Ctrl + Shift 不放, 移动上下箭头可以选择多行文本          | cursorWordEndRightSelect                 |
| Ctrl + Shift + ;  | 可以选择当前光标之前的所有文本, 且按住Ctrl + Shift 不放, 移动上下箭头可以选择多行文本      | cursorLineStartSelect                    |
| Ctrl + Shift + '  | 可以选择当前光标之后的所有文本, 且按住Ctrl + Shift 不放, 移动上下箭头可以选择多行文本      | cursorLineEndSelect                      |
| Alt + up arrow    | 向上移动行                                                                                 | editor.action.moveLinesUpAction          |

### 多光标操作
| -   |                                                                           |     |
| --- | ------------------------------------------------------------------------- | --- |
| -   | 按住Alt，用鼠标左键点击，可以出现多个光标，输入的代码可以在光标处同时增加 |     |
| -   | 按住Ctrl + Alt，再按键盘上向上或者向下的键，可以使一列上出现多个光标      |     |
| -   | 选中一段文字，按shift+Alt+i，可以在每行末尾出现光标                       |     |
| -   | 任何光标操作，可以按Ctrl + U取消                                          |     |


### 代码块:
| 快捷键           | 描述                     | 命令ID           |
| ---------------- | ------------------------ | ---------------- |
| Ctrl + k&o       | 快速折叠整个文件的代码   | editor.foldAll   |
| Ctrl + k&j       | 快速展开整个文件的代码   | editor.unfoldAll |
| Ctrl + Shift + [ | 折叠当前光标所在的代码块 | editor.fold      |
| Ctrl + Shift + ] | 展开当前光标所在的代码块 | editor.unfold    |


### 辅助操作栏
| 快捷键           | 描述                             | 命令ID                                   |
| ---------------- | -------------------------------- | ---------------------------------------- |
| Ctrl + b         | 快速打开侧边栏                   | workbench.action.toggleSidebarVisibility |
| Ctrl + m         | 快速打开侧边栏资源管理器         | workbench.view.explorer                  |
| Ctrl + n         | 在资源管理器中快速新建文件       | explorer.newFile                         |
| Ctrl + Alt + f   | 在资源管理器中快速新建文件夹     | explorer.newFolder                       |
| Ctrl + shift + f | 在当前工作区中根据关键字进行搜索 | workbench.view.search                    |
| Ctrl + Alt + n   | 在标签栏中快速新增一个空文件     | workbench.action.files.newUntitledFile   |

### Vscode窗口
| 快捷键             | 描述                           | 命令ID                                              |
| ------------------ | ------------------------------ | --------------------------------------------------- |
| Ctrl + shift + n   | 打开一个vscode新窗口           | workbench.action.newWindow                          |
| Ctrl + r           | 选择vscode窗口最近打开过的项目 | workbench.action.openRecent                         |
| Ctrl + Shift + w   | 关闭vscode窗口                 | workbench.action.closeWindow                        |
| Windows + up arrow | 最大化和最小化vscode窗口       | 这是windows自带的快捷方式, 任何程序的窗口都可以使用 |

### Git
| 快捷键           | 描述                           | 命令ID                  |
| ---------------- | ------------------------------ | ----------------------- |
| Ctrl + Shift + g | 打开vscode commit template插件 | extension.showGitCommit |
| Ctrl + Alt + g   | 快速打开代码提交窗口           | workbench.view.scm      |
| Ctrl + g         | git提交                        | git.commit              |
| Ctrl + e         | git拉取                        | git.pull                |
| Ctrl + p         | git push                       | git.sync                |

### 终端控制台
| 快捷键        | 描述               | 命令ID                                  |
| ------------- | ------------------ | --------------------------------------- |
| Ctrl + j      | 打开/隐藏 控制台   | workbench.action.togglePanel            |
| f1            | 最大化 控制台      | workbench.action.toggleMaximizedPanel   |
| Ctrl + q      | 终止所有的终端     | workbench.action.terminal.killAll       |
| Ctrl + F9     | 终止当前活动的终端 | workbench.action.terminal.kill          |
| Ctrl + PageUp | 切换上一个终端     | workbench.action.terminal.focusPrevious |

### Bookmark插件
| 快捷键         | 描述              | 命令ID                      |
| -------------- | ----------------- | --------------------------- |
| Ctrl + Alt + K | 新建/删除一个书签 | bookmarks.toggle            |
| Ctrl + Alt + J | 书签跳转          | bookmarks.jumpToPrevious    |
| Ctrl + Alt + C | 清空所有书签      | bookmarks.clearFromAllFiles |

### 其他
 - Ctrl + k&s: 打开快捷键设置(workbench.action.openGlobalKeybindings)
