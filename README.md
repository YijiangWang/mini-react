## virtual dom
### 是什么
- React 会先将你的代码转换成一个 JavaScript 对象，然后这个 JavaScript 对象再转换成真是的 DOM。这个 JavaScript 对象就是所谓的虚拟 DOM。
- 描述了 DOM 信息和结构，当状态变更的时候，重新渲染这个 JavaScript 的对象结构。
- DOM 结构发生变更，首先先更改这个 JavaScript 对象，然后让 JavaScript 对象和真实的 DOM 结构保持同步，这个过程就叫做`协调` 。
### 为什么要用
- 尽可能少的操作真实 DOM；
- DOM 操作很慢，轻微的操作都可能导致页面重新排版，非常耗性能。相对于DOM对象，js对象处理起来更快，而且更简单。通过diff算法对比新旧vdom之间的差异，可以批量的、最小化的执行DOM操作，从而提高性能。

### 哪里使用
- React 中使用 JSX 语法描述视图（View），[React17 之后通过内部的jsx方法；React17 之前通过 babel-loader 转译后它们变为 React.createElement(...)的形式]，该函数将生成 vdom 来描述真实的 DOM。将来如果状态变化，vdom 将做出相应变化，再通过 diff 算法对比新老 vdom 区别从而做出最终 DOM 操作。
##### JSX
- React16 原理：通过 babel-loader 预编译 JSX 为 React.createElement()；
- React17 原理：不会将 JSX 转换为 React.createElement，而是自动从 React 的 package 中引入新的入口函数并调用。另外升级到 17 之后不会改变 JSX 语法，旧的 JSX 转换也将继续工作。    
    
## React
- 核心文件夹：react、react-dom、react-reconciler、scheduler、shared