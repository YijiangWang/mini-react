import { scheduleUpdateOnFiber } from "./ReactFiberWorkLoop";

function render(vnode, container) {
  console.log('vnode: ', vnode, container);

  const fiberRoot = {
    type: container.nodeName.toLowerCase(),
    stateNode: container,
    props: {children: vnode},
  }

  // 处理更新
  scheduleUpdateOnFiber(fiberRoot)
}

export default {render};