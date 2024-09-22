export default {
    mounted () {
        setTimeout(() => {
            console.log('askjdhaskjhdasd')
            document.querySelectorAll('div[class*="language-"] pre').forEach(el => {
                const copyButton = document.createElement('button');
                copyButton.textContent = '复制代码';
                copyButton.className = 'copy-code-button';
                el.parentNode.appendChild(copyButton);
                console.log('dasdasd', el);
                copyButton.addEventListener('click', () => {
                    navigator.clipboard.writeText(el.textContent);
                    alert('代码已复制');
                });
            });
        }, 1000); // 等待页面渲染完成
    },
};
