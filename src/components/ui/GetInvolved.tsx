// @ts-nocheck
/* eslint-disable */
'use client';
/** Get Involved 섹션 — ReportComponents.tsx에서 분리 */
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';
import { l, ModalContext, n3, KAKAO_URL } from '@/components/ui/_shared';
import { SectionHeader } from '@/components/ui/SectionHeader';
export function AA1() {
  // 카톡방: 항상 노출 / 멤버되기: 미인증 상태에서만 노출 (클릭 시 비밀번호 모달)
  const { setOpen, authenticated } = n3(ModalContext);
  const goKakao = () => window.open(KAKAO_URL, "_blank", "noopener,noreferrer");
  return /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full max-w-[560px]", children: [
    /* @__PURE__ */ e("button", { type: "button", onClick: goKakao, className: "border border-[#e5e7eb] bg-white relative rounded-[12px] shrink-0 w-full cursor-pointer transition-opacity duration-150 hover:opacity-90 active:opacity-75", children: /* @__PURE__ */ e("div", { className: "content-stretch flex items-center justify-center px-[18px] py-[13px] relative size-full", children: /* @__PURE__ */ e("span", { className: "font-['Pretendard_Variable',sans-serif] font-bold text-[#131313] text-[14px] text-center whitespace-nowrap", children: "무료 카톡방 입장하기" }) }) }),
    !authenticated && /* @__PURE__ */ e("button", { type: "button", onClick: () => setOpen(true), className: "bg-[#0058e0] relative rounded-[12px] shrink-0 w-full cursor-pointer transition-opacity duration-150 hover:opacity-90 active:opacity-75", children: /* @__PURE__ */ e("div", { className: "content-stretch flex items-center justify-center px-[18px] py-[13px] relative size-full", children: /* @__PURE__ */ e("span", { className: "font-['Pretendard_Variable',sans-serif] font-bold text-[14px] text-center text-white whitespace-nowrap", children: "허들링 클럽 멤버되기" }) }) })
  ] });
}
export function z1() {
  return /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Why Huddle Container", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full", children: /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[32px] items-center justify-center px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] py-[80px] relative size-full", children: [
    /* @__PURE__ */ e(SectionHeader, { eyebrow: "Get Involved", maxWidth: "max-w-[560px]", delays: [0, 35, 70], title: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: "저희랑 함께 성장하실래요?" }), description: /* @__PURE__ */ t(Z, { children: [
      /* @__PURE__ */ e("p", { className: "leading-[1.8] mb-0", children: "검증된 경험을 배우고 공유하며" }),
      /* @__PURE__ */ e("p", { className: "leading-[1.8]", children: "순환하는 허들링 클럽에서 함께 성장해봐요" })
    ] }) }),
    /* @__PURE__ */ e("img", { src: "/assets/images/involved.png", alt: "Get Involved", width: 400, height: 211, style: { objectFit: "cover" } }),
    /* @__PURE__ */ e(AA1, {})
  ] }) }) });
}
export function D2() {
  // 모바일: 카톡방 항상 노출 / 멤버되기 미인증에서만 노출
  const { setOpen, authenticated } = n3(ModalContext);
  const goKakao = () => window.open(KAKAO_URL, "_blank", "noopener,noreferrer");
  return /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full", children: [
    /* @__PURE__ */ e("button", { type: "button", onClick: goKakao, className: "border border-[#e5e7eb] bg-white relative rounded-[12px] shrink-0 w-full cursor-pointer transition-opacity duration-150 hover:opacity-90 active:opacity-75", children: /* @__PURE__ */ e("div", { className: "content-stretch flex items-center justify-center px-[18px] py-[13px] relative size-full", children: /* @__PURE__ */ e("span", { className: "font-['Pretendard_Variable',sans-serif] font-bold text-[#131313] text-[14px] text-center whitespace-nowrap", children: "무료 카톡방 입장하기" }) }) }),
    !authenticated && /* @__PURE__ */ e("button", { type: "button", onClick: () => setOpen(true), className: "bg-[#0058e0] relative rounded-[12px] shrink-0 w-full cursor-pointer transition-opacity duration-150 hover:opacity-90 active:opacity-75", children: /* @__PURE__ */ e("div", { className: "content-stretch flex items-center justify-center px-[18px] py-[13px] relative size-full", children: /* @__PURE__ */ e("span", { className: "font-['Pretendard_Variable',sans-serif] font-bold text-[14px] text-center text-white whitespace-nowrap", children: "허들링 클럽 멤버되기" }) }) })
  ] });
}
export function E2() {
  return /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Why Huddle Container", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full", children: /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[32px] items-center justify-center px-[20px] py-[60px] relative size-full", children: [
    /* @__PURE__ */ e(SectionHeader, { eyebrow: "Get Involved", delays: [0, 35, 70], title: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: "저희랑 함께 성장하실래요?" }), description: /* @__PURE__ */ t(Z, { children: [
      /* @__PURE__ */ e("p", { className: "leading-[1.8] mb-0", children: "검증된 경험을 배우고 공유하며" }),
      /* @__PURE__ */ e("p", { className: "leading-[1.8]", children: "순환하는 허들링 클럽에서 함께 성장해봐요" })
    ] }) }),
    /* @__PURE__ */ e("img", { src: "/assets/images/involved.png", alt: "Get Involved", className: "w-full", style: { aspectRatio: "3176/1673", objectFit: "cover" } }),
    /* @__PURE__ */ e(D2, {})
  ] }) }) });
}
