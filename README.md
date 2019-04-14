## 扩展 monaco-editor 功能

针对业务需要，对 monaco-editor 进行功能扩展的探索。以插件的形式，尽量做到可拔插，不影响其他功能。

当前完成:

- diffEditor 屏蔽自带的差异计算，手动导入 git diff 信息进行差异渲染

问题:

- git diff 信息不带有字符级别的差异，且不能控制是否渲染空白差异
