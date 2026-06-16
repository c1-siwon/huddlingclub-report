// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * QAItem — 인터뷰 Q&A 항목 (QuestionItem 래퍼 포함)
 * props: question, answer, media(선택: Q와 A 사이에 들어가는 노드, 예: 캡처 이미지)
 */
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';

export function QAItem({ question, answer, media }) {
  return /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[10px] items-start py-[4px] relative shrink-0 w-full", "data-name": "QuestionItem", children: [
    /* @__PURE__ */ t("div", { className: "[word-break:break-word] content-stretch flex font-['Pretendard_Variable',sans-serif] font-bold gap-[8px] h-[22px] items-center leading-[0] relative shrink-0 text-[14px] w-full whitespace-nowrap", "data-name": "questionArea", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col justify-center relative shrink-0 text-[#0058e0]", children: /* @__PURE__ */ e("p", { className: "leading-[1.8]", children: "Q." }) }),
      /* @__PURE__ */ e("div", { className: "flex flex-col justify-center relative shrink-0 text-[#131313]", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: question }) })
    ] }),
    media,
    /* @__PURE__ */ t("div", { className: "content-stretch flex gap-[8px] items-start relative shrink-0 w-full", "data-name": "AnswerArea", children: [
      /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.8]", children: "A." }) }),
      /* @__PURE__ */ e("div", { className: "content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[2px] relative", "data-name": "AnswerSpan", children: /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard_Variable',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(46,47,51,0.82)]", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: answer }) }) })
    ] })
  ] });
}

export default QAItem;
