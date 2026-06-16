// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * Modal — 모달 셸 (전체 화면 오버레이 + 중앙 정렬 컨테이너)
 * 오버레이 클릭 시 onClose 호출. 카드 내용은 children으로 전달한다.
 * props: isOpen, onClose, children
 */
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return /* @__PURE__ */ e("div", { className: "fixed inset-0 z-[9999] flex items-center justify-center", children: /* @__PURE__ */ t(Z, { children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/50", onClick: onClose }),
    children
  ] }) });
}

export default Modal;
