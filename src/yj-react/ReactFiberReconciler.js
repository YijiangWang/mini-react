import { createFiber } from "./fiber";
import { isStr } from "./utils";

export function updateHostComponent(wip) {
  if(!wip.stateNode) {
    wip.stateNode = document.createElement(wip.type);

    // 更新属性
  }

  reconcileChildren(wip, wip.props.children)

  console.log('wip: ', wip);
}

function reconcileChildren(returnFiber, children) {
  // 如果是文本，就不再去循环，直接返回
  if(isStr(children)) return;

  const newChildren = Array.isArray(children) ? children : [children];

  let previousNewFiber = null;
  for(let i=0; i<newChildren.length; i++) {
    const newChild = newChildren[i];
    const newFiber = createFiber(newChild, returnFiber);
    
    if(i === 0) {
      returnFiber.child = newFiber;
    } else {
      previousNewFiber.sibling = newFiber;
    }

    previousNewFiber = newFiber;
  }
}