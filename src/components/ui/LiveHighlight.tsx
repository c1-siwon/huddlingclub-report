// @ts-nocheck
/* eslint-disable */
'use client';
/** 이번 달 라이브 하이라이트 섹션 — ReportComponents.tsx에서 분리 */
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';
import { CrownIcon, ModalContext, VideoContext, l, n3 } from '@/components/ui/_shared';
import { Button } from '@/components/ui/Button';
import { LiveBadge } from '@/components/ui/LiveBadge';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function v1() {
  return /* @__PURE__ */ e(LiveBadge, { label: "LIVE REPLAY" });
}
export function b1() {
  const { startTime, isPlaying, setIsPlaying } = n3(VideoContext);
  return /* @__PURE__ */ t("div", { className: "bg-[#0a0d12] h-[319px] relative rounded-[16px] shrink-0 w-full max-w-[560px] overflow-hidden", "data-name": "div.video", children: [
    isPlaying ? /* @__PURE__ */ e("iframe", { src: `https://www.youtube.com/embed/a-wzqVa_nLM?start=${startTime}&rel=0&autoplay=1`, title: "Monthly Live - 프롬프트 엔지니어링, 실전에서 쓰는 법", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: !0, className: "absolute inset-0 size-full rounded-[16px] border-0" }) : /* @__PURE__ */ t("div", { className: "absolute inset-0 cursor-pointer", onClick: () => setIsPlaying(!0), children: [
      /* @__PURE__ */ e("img", { src: "https://img.youtube.com/vi/a-wzqVa_nLM/maxresdefault.jpg", alt: "동영상 썸네일", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.25)" }, children: /* @__PURE__ */ e("div", { style: { width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", width: 32, height: 32, children: /* @__PURE__ */ e("path", { d: "M8 5v14l11-7z", fill: "#FF0000" }) }) }) })
    ] }),
    !isPlaying && /* @__PURE__ */ e(v1, {}),
    /* @__PURE__ */ e("div", { "aria-hidden": !0, className: "absolute border border-[rgba(112,115,124,0.26)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_14px_40px_0px_rgba(20,30,60,0.14)]" })
  ] });
}
export function k1() {
  return /* @__PURE__ */ t("div", { className: "bg-white max-w-[560px] relative rounded-[16px] shrink-0 w-full", "data-name": "div.card", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": !0, className: "absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" }),
    /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[12px] items-start p-[21px] relative size-full", children: [
      /* @__PURE__ */ e("div", { className: "bg-[#f3f4f6] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[6px] shrink-0", children: /* @__PURE__ */ e("span", { className: "font-['Pretendard_Variable',sans-serif] font-semibold text-[14px] text-[#131313]", children: "하이라이트 요약" }) }),
      /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-normal text-[14px] text-[#4b5563] leading-[1.5]", children: "이번 라이브에서는 컴포넌트의 기본 구조와 오토레이아웃을 활용한 화면 구조화 방법을 배웠습니다. 실무에서 바로 적용할 수 있는 팁들을 중심으로 진행되었습니다." })
    ] })
  ] });
}
export function y1() {
  const { setOpen } = n3(ModalContext);
  return /* @__PURE__ */ e(Button, { label: "영상 풀 버전 보러가기", onClick: () => setOpen(true) });
}
export function _1() {
  return /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full", "data-name": "Monthly Live Takeaways Container", children: [
    /* @__PURE__ */ e(k1, {}),
    /* @__PURE__ */ e(y1, {})
  ] });
}
export function V1() {
  return /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[24px] items-start max-w-[560px] relative shrink-0 w-full", "data-name": "Monthly Live Video Container", children: [
    /* @__PURE__ */ e(b1, {}),
    /* @__PURE__ */ e(_1, {})
  ] });
}
export function M1() {
  return /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Monthly Live Container", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full", children: /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[60px] items-center justify-center px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] py-[80px] relative size-full", children: [
    /* @__PURE__ */ e(SectionHeader, { eyebrow: "Monthly Live", maxWidth: "max-w-[560px]", title: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: "이번 달 라이브 하이라이트" }), description: /* @__PURE__ */ t(Z, { children: [
      /* @__PURE__ */ e("p", { className: "leading-[1.8] mb-0", children: "FoF리더이신 스무님과 함께한 주간 라이브입니다. " }),
      /* @__PURE__ */ e("p", { className: "leading-[1.8]", children: "컴포넌트, 오토레이아웃으로 화면 구조화하는 방법을 배워보았습니다." })
    ] }) }),
    /* @__PURE__ */ e(V1, {})
  ] }) }) });
}
export function b2() {
  return /* @__PURE__ */ e(LiveBadge, { label: "LIVE REPLAY" });
}
export function w2() {
  const { startTime, isPlaying, setIsPlaying } = n3(VideoContext);
  return /* @__PURE__ */ t("div", { className: "aspect-[556/318.760009765625] bg-[#0a0d12] relative rounded-[16px] shrink-0 w-full overflow-hidden", "data-name": "div.video", children: [
    isPlaying ? /* @__PURE__ */ e("iframe", { src: `https://www.youtube.com/embed/a-wzqVa_nLM?start=${startTime}&rel=0&autoplay=1`, title: "Monthly Live - 프롬프트 엔지니어링, 실전에서 쓰는 법", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: !0, className: "absolute inset-0 size-full rounded-[16px] border-0" }) : /* @__PURE__ */ t("div", { className: "absolute inset-0 cursor-pointer", onClick: () => setIsPlaying(!0), children: [
      /* @__PURE__ */ e("img", { src: "https://img.youtube.com/vi/a-wzqVa_nLM/maxresdefault.jpg", alt: "동영상 썸네일", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.25)" }, children: /* @__PURE__ */ e("div", { style: { width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", width: 32, height: 32, children: /* @__PURE__ */ e("path", { d: "M8 5v14l11-7z", fill: "#FF0000" }) }) }) })
    ] }),
    !isPlaying && /* @__PURE__ */ e(b2, {}),
    /* @__PURE__ */ e("div", { "aria-hidden": !0, className: "absolute border border-[rgba(112,115,124,0.26)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_14px_40px_0px_rgba(20,30,60,0.14)]" })
  ] });
}
export function y2() {
  return /* @__PURE__ */ t("div", { className: "bg-white relative rounded-[16px] shrink-0 w-full", "data-name": "div.card", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": !0, className: "absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" }),
    /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[12px] items-start p-[21px] relative size-full", children: [
      /* @__PURE__ */ e("div", { className: "bg-[#f3f4f6] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[6px] shrink-0", children: /* @__PURE__ */ e("span", { className: "font-['Pretendard_Variable',sans-serif] font-semibold text-[14px] text-[#131313]", children: "하이라이트 요약" }) }),
      /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-normal text-[14px] text-[#4b5563] leading-[1.5]", children: "이번 라이브에서는 컴포넌트의 기본 구조와 오토레이아웃을 활용한 화면 구조화 방법을 배웠습니다. 실무에서 바로 적용할 수 있는 팁들을 중심으로 진행되었습니다." })
    ] })
  ] });
}
export function _2() {
  const { setOpen } = n3(ModalContext);
  return /* @__PURE__ */ e(Button, { label: "영상 풀 버전 보러가기", onClick: () => setOpen(true) });
}
export function V2() {
  return /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full", "data-name": "Monthly Live Takeaways Container", children: [
    /* @__PURE__ */ e(y2, {}),
    /* @__PURE__ */ e(_2, {})
  ] });
}
export function M2() {
  return /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full", "data-name": "Monthly Live Video Container", children: [
    /* @__PURE__ */ e(w2, {}),
    /* @__PURE__ */ e(V2, {})
  ] });
}
export function j2() {
  return /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Monthly Live Container", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full", children: /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[32px] items-center justify-center px-[20px] py-[60px] relative size-full", children: [
    /* @__PURE__ */ e(SectionHeader, { eyebrow: "Monthly Live", title: /* @__PURE__ */ t(Z, { children: [
      /* @__PURE__ */ e("p", { className: "leading-[1.5] mb-0", children: "이번 달 라이브" }),
      /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: "하이라이트" })
    ] }), description: /* @__PURE__ */ t(Z, { children: [
      /* @__PURE__ */ e("p", { className: "leading-[1.8] mb-0", children: "프롬프트 엔지니어링, 실전에서 쓰는 법." }),
      /* @__PURE__ */ e("p", { className: "leading-[1.8]", children: "못 보신 분을 위해 풀 영상과 핵심만 요약했어요." })
    ] }) }),
    /* @__PURE__ */ e(M2, {})
  ] }) }) });
}
