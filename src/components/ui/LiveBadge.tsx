// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * LiveBadge — 라이브 리플레이 뱃지 (깜빡이는 dot 포함)
 * props:
 *   - label: 뱃지 텍스트 (예: "LIVE REPLAY")
 */
import { jsx as e, jsxs as t } from 'react/jsx-runtime';

export function LiveBadge({ label }) {
  return /* @__PURE__ */ t("div", { className: "absolute bg-[rgba(255,66,66,0.92)] content-stretch flex gap-[6px] items-center left-[13px] px-[9px] py-[4px] rounded-[6px] top-[13px] pointer-events-none z-10", "data-name": "span.badge", children: [
    /* @__PURE__ */ e("div", { className: "bg-white relative rounded-[3px] shrink-0 size-[6px]", style: { animation: "live-dot-blink 1.2s ease-in-out infinite" }, "data-name": "span.live" }),
    /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10.5px] text-white tracking-[0.84px] whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[15.75px]", children: label }) })
  ] });
}

export default LiveBadge;
