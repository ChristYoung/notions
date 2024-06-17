## Mac文件的常见操作

### 主目录和根目录的区别

- [(https://www.jianshu.com/p/9cbc9e9633f7)](https://www.jianshu.com/p/9cbc9e9633f7)

### 快速定位到根目录

- 前往文件夹(Go to the folder)：command+shift+g，使用快捷键可以快速激活“前往文件夹”功能，窗口打开后，***输入“/”并回车即可进入根目录***

### Linux终端命令行的释义

- cp: 复制文件到指定目录.
- curl: 用来向服务器发送请求.
- cat: 开启一个vim窗口并展示文件内容.

### 环境变量

- Mac系统中, $path是一个环境变量, 他是一个包含一系列目录的字符串, 这些目录包含可执行的文件,当您在终端输入命令时, 系统会搜索这些目录以查找该命令. .bash_profile是一个文件, 它位于用户主目录下, 用于存储bash shell会话启动时要执行的命令.
- Mac每次都要执行souce ~/.bash_profile配置的环境变量才生效? 在~/.zshrc文件的最后一行, 增加 **souce ~/.bash_profile**

### 将脚本文件添加到全局

在 macOS 中，你可以将一个 shell 脚本添加到系统的 PATH 环境变量中，以便在任何地方都可以执行它。以下是将 shell 脚本添加到全局的步骤：

1. 将 shell 脚本保存到一个目录中，例如 `/usr/local/bin`。你也可以选择其他目录，只要它在 PATH 环境变量中即可。
2. 打开终端应用程序，并输入以下命令来编辑你的 shell 配置文件：
    
    ```bash
    nano ~/.bash_profile
    
    ```
    
    如果你使用的是 `zsh` 终端，则可以编辑 `~/.zshrc` 文件。
    
3. 在文件末尾添加以下行：
    
    ```bash
    export PATH="/usr/local/bin:$PATH"
    
    ```
    
    这将把 `/usr/local/bin` 目录添加到 PATH 环境变量中，以便系统可以找到该目录中的脚本。
    
4. 保存并关闭文件。
5. 在终端中运行以下命令以重新加载配置文件：
    
    ```bash
    source ~/.bash_profile
    
    ```
    
    或者，如果你使用的是 `zsh` 终端，则运行：
    
    ```bash
    source ~/.zshrc
    
    ```
    

现在，你可以在终端中运行添加到 `/usr/local/bin` 目录中的任何 shell 脚本了。只需在终端中输入脚本名称，并按回车键即可运行它。
