// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * AuthorProfile — 작성자 프로필 (아바타 + 이름/뱃지 + 소속)
 * props: avatar(이미지 경로), name, detail, badge(선택)
 */
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';

export function AuthorProfile({ avatar, name, detail, badge }) {
  return /* @__PURE__ */ t("div", { className: "flex gap-[20px] items-center", children: [
    /* @__PURE__ */ e("div", { className: "overflow-clip relative shrink-0 size-[60px]", style: { borderRadius: "999px", border: "1px solid #e5e7eb" }, "data-name": "User Logo Container", children: /* @__PURE__ */ e("img", { src: avatar, alt: "퍼디 프로필", className: "absolute inset-0 w-full h-full object-cover", style: { borderRadius: "999px" } }) }),
    /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[4px] items-start relative shrink-0", "data-name": "User Details", children: [
      /* @__PURE__ */ t("div", { className: "content-stretch flex gap-[6px] items-center relative shrink-0", "data-name": "User Name Container", children: [
        /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131313] text-[20px] text-center whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: name }) }),
        badge && /* @__PURE__ */ e("div", { className: "bg-[#f3f4f6] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[6px] shrink-0", "data-name": "Badge", children: /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131313] text-[14px] text-center whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: badge }) }) })
      ] }),
      /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] text-center whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: detail }) })
    ] })
  ] });
}

export default AuthorProfile;
