// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * Button — CTA 버튼 (bg-[#0058e0] h-[52px] rounded-[12px])
 * 숨김 처리된 "멤버전용" 뱃지(CrownIcon)를 항상 포함한다.
 * props:
 *   - label: 버튼 텍스트
 *   - onClick: 클릭 핸들러
 *   - variant: 색상 변형 (현재 primary만 사용)
 *   - dataName: data-name 속성 (Figma 노드명 보존용)
 */
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';
import { CrownIcon } from '@/components/ui/_shared';

const VARIANTS = {
  primary: "bg-[#0058e0]",
};

export function Button({ label, onClick, variant = "primary", dataName = "a.btn" }) {
  return /* @__PURE__ */ e("button", { type: "button", onClick, className: `${VARIANTS[variant] || VARIANTS.primary} flex items-center justify-center gap-[8px] px-[16px] h-[52px] rounded-[12px] w-full cursor-pointer transition-opacity duration-150 hover:opacity-90 active:opacity-75`, "data-name": dataName, children: /* @__PURE__ */ t(Z, { children: [
    /* @__PURE__ */ t("div", { className: "hidden items-center gap-[6px] px-[10px] py-[4px] rounded-[99px]", style: { background: "rgba(255,255,255,0.16)" }, children: [
      /* @__PURE__ */ e(CrownIcon, {}),
      /* @__PURE__ */ e("span", { className: "font-['Pretendard_Variable',sans-serif] font-semibold text-[12px] text-white", children: "멤버전용" })
    ] }),
    /* @__PURE__ */ e("span", { className: "font-['Pretendard_Variable',sans-serif] font-bold text-[14px] text-white", children: label })
  ] }) });
}

export default Button;
