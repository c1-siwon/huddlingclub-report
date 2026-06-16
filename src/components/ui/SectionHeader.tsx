// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * SectionHeader — 섹션 상단 eyebrow + 제목 + 설명 (fade-in 래퍼 l 포함)
 * props:
 *   - eyebrow: 파란 소제목 텍스트 (단일 문자열)
 *   - title: 제목 노드 (단일 <p> 또는 Fragment로 묶은 여러 줄)
 *   - description: 설명 노드 (단일 <p> 또는 Fragment로 묶은 여러 줄)
 *   - maxWidth: 외부 래퍼에 추가할 클래스 (예: "max-w-[560px]", "px-[20px]")
 *   - delays: 세 블록(eyebrow/title/description)의 fade-in delay [기본 0,70,140]
 */
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';
import { l } from '@/components/ui/_shared';

export function SectionHeader({ eyebrow, title, description, maxWidth = "", delays = [0, 70, 140] }) {
  const wrap = ["content-stretch flex flex-col items-center", maxWidth, "relative shrink-0 w-full"].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: wrap, "data-name": "SectionHeader", children:
    /* @__PURE__ */ t("div", { className: "[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full", "data-name": "TextArea", children: [
      /* @__PURE__ */ e(l, { delay: delays[0], className: "w-full", children: /* @__PURE__ */ e("div", { className: "flex flex-col font-['Pretendard_Variable',sans-serif] font-medium justify-center relative shrink-0 text-[#0058e0] text-[20px] w-full", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: eyebrow }) }) }),
      /* @__PURE__ */ e(l, { delay: delays[1], className: "w-full", children: /* @__PURE__ */ e("div", { className: "flex flex-col font-['Pretendard_Variable',sans-serif] font-extrabold justify-center relative shrink-0 text-[#131313] text-[32px] w-full", children: title }) }),
      /* @__PURE__ */ e(l, { delay: delays[2], className: "w-full", children: /* @__PURE__ */ e("div", { className: "flex flex-col font-['Pretendard_Variable',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[14px] w-full", children: description }) })
    ] })
  });
}

export default SectionHeader;
