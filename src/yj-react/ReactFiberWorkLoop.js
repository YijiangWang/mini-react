// 根节点

import { updateHostComponent } from "./ReactFiberReconciler";
import { isStr } from "./utils";

// wip：work in progress：当前正在工作当中的
let wipRoot = null;
// 将要更新的下一个节点
let nextUnitOfWork = null;

// 处理更新
export function scheduleUpdateOnFiber(fiber) {
  wipRoot = fiber;
  wipRoot.sibling = null;

  // 刚开始，下一个要更新的就是自己
  nextUnitOfWork = wipRoot;
}

// 协调

// 提交
function commitRoot() {}

function performUnitOfWork(wip) {
  // 1、更新自己
  const { type } = wip;
  if(isStr(type)) {
    // 原生标签
    updateHostComponent(wip);
  }

  // 2、返回下一个要更新的fiber
  // 深度优先遍历
  if (wip.child) return wip.child;
  let next = wip;
  while (next) {
    if (next.sibling) return next.sibling;
    next = next.return;
  }
  return null;
}

function workLoop(IdleDeadline) {
  while (nextUnitOfWork && IdleDeadline.timeRemaining() > 0) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  if (!nextUnitOfWork && wipRoot) {
    // 进行提交操作
    commitRoot();
  }
}

requestIdleCallback(workLoop);
