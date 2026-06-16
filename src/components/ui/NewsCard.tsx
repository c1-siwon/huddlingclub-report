// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * NewsCard — AI 뉴스 카드 (세로형, 데스크탑 그리드용)
 * props: badge, date, title, description, image
 */
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';

export function NewsCard({ badge, date, title, description, image }) {
  return /* @__PURE__ */ t("div", { className: "bg-white content-stretch flex flex-col items-start p-[21px] relative rounded-[12px] shrink-0 flex-1 min-w-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-[2px] active:scale-[0.98] active:shadow-none cursor-pointer", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": !0, className: "absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" }),
    /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", children: /* @__PURE__ */ t("div", { className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full", children: [
      /* @__PURE__ */ e("div", { className: "h-[160px] relative rounded-[8px] shrink-0 w-full overflow-hidden", children: /* @__PURE__ */ e("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full", src: image }) }),
      /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full", children: [
        /* @__PURE__ */ t("div", { className: "content-stretch flex items-center justify-between relative shrink-0 w-full", children: [
          /* @__PURE__ */ e("div", { className: "bg-[#f0f2ff] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[6px] shrink-0", children: /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0058e0] text-[14px] text-center whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: badge }) }) }),
          /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: date }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[14px] w-full", children: [
          /* @__PURE__ */ e("div", { className: "flex flex-col font-['Pretendard_Variable',sans-serif] font-bold justify-center overflow-hidden relative shrink-0 text-[#171719] text-ellipsis w-full whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5] overflow-hidden text-ellipsis", children: title }) }),
          /* @__PURE__ */ e("div", { className: "flex flex-col font-['Pretendard_Variable',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[rgba(46,47,51,0.82)] w-full", children: /* @__PURE__ */ e("p", { className: "leading-[1.8] line-clamp-3", children: description }) })
        ] })
      ] })
    ] }) })
  ] });
}

export default NewsCard;
