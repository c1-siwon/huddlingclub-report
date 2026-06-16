// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * Divider — 그라데이션 구분선
 * props:
 *   - className: 외부 래퍼에 추가할 클래스 (예: 상단 여백 "mt-[80px]")
 *   - padding: 내부 좌우 패딩 클래스 (데스크탑/모바일 분기)
 */
import { jsx as e } from 'react/jsx-runtime';

export function Divider({ className = "", padding = "px-[20px] md:px-[60px] xl:px-[240px]" }) {
  const outer = ["relative shrink-0 w-full", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: outer, "data-name": "Divider", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: `content-stretch flex flex-col items-center justify-center ${padding} py-[10px] relative size-full`, children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-[rgba(112,115,124,0)] h-px relative shrink-0 to-[rgba(112,115,124,0)] via-1/2 via-[rgba(112,115,124,0.26)] w-full", "data-name": "div.divider" }) }) }) });
}

export default Divider;
