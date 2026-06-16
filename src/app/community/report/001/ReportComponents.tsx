// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * Huddling Club Report #001 — 루트 조합 컴포넌트
 * 섹션 컴포넌트는 src/components/ui/ 로 분리. 데스크탑(R1)/모바일($2) 레이아웃을 조합하며
 * 비밀번호 모달 상태는 page.tsx에서 props로 전달받는다.
 */
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';
import { L, N, ModalContext, VideoContext, l } from '@/components/ui/_shared';
import { PasswordModal } from '@/components/ui/PasswordModal';
import { F, q, Y, U1, Y1, J1 } from '@/components/ui/Header';
import { m1, u2 } from '@/components/ui/BestReport';
import { M1, j2 } from '@/components/ui/LiveHighlight';
import { Z1, R2 } from '@/components/ui/AINews';
import { z1, E2 } from '@/components/ui/GetInvolved';
import { BannerSectionDesktop, BannerSectionMobile } from '@/components/ui/CommunityBanner';
import { W, q1 } from '@/components/ui/Footer';

function R1() {
  return /* @__PURE__ */ t("div", { className: "bg-white content-stretch flex flex-col items-center relative size-full", "data-name": "Desktop", children: [
    /* @__PURE__ */ e("div", { className: "h-[360px] relative shrink-0 w-full", children: /* @__PURE__ */ e(F, {}) }),
    /* @__PURE__ */ e(q, {}),
    /* @__PURE__ */ e(Y, {}),
    /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full mt-[80px]", "data-name": "Divider", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex flex-col items-center justify-center px-[20px] md:px-[60px] xl:px-[240px] py-[10px] relative size-full", children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-[rgba(112,115,124,0)] h-px relative shrink-0 to-[rgba(112,115,124,0)] via-1/2 via-[rgba(112,115,124,0.26)] w-full", "data-name": "div.divider" }) }) }) }),
    /* @__PURE__ */ e("div", { id: "desktop-section-best-report", children: /* @__PURE__ */ e(l, { children: /* @__PURE__ */ e(m1, {}) }) }),
    /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Divider", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex flex-col items-center justify-center px-[20px] md:px-[60px] xl:px-[240px] py-[10px] relative size-full", children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-[rgba(112,115,124,0)] h-px relative shrink-0 to-[rgba(112,115,124,0)] via-1/2 via-[rgba(112,115,124,0.26)] w-full", "data-name": "div.divider" }) }) }) }),
    /* @__PURE__ */ e("div", { id: "desktop-section-monthly-live", children: /* @__PURE__ */ e(l, { delay: 50, children: /* @__PURE__ */ e(M1, {}) }) }),
    /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Divider", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex flex-col items-center justify-center px-[20px] md:px-[60px] xl:px-[240px] py-[10px] relative size-full", children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-[rgba(112,115,124,0)] h-px relative shrink-0 to-[rgba(112,115,124,0)] via-1/2 via-[rgba(112,115,124,0.26)] w-full", "data-name": "div.divider" }) }) }) }),
    /* @__PURE__ */ e("div", { id: "desktop-section-ai-news", children: /* @__PURE__ */ e(l, { delay: 50, children: /* @__PURE__ */ e(Z1, {}) }) }),
    /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Divider", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex flex-col items-center justify-center px-[20px] md:px-[60px] xl:px-[240px] py-[10px] relative size-full", children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-[rgba(112,115,124,0)] h-px relative shrink-0 to-[rgba(112,115,124,0)] via-1/2 via-[rgba(112,115,124,0.26)] w-full", "data-name": "div.divider" }) }) }) }),
    /* @__PURE__ */ e(l, { delay: 50, children: /* @__PURE__ */ e(z1, {}) }),
    /* @__PURE__ */ e(BannerSectionDesktop, {}),
    /* @__PURE__ */ e(W, {})
  ] });
}

function $2() {
  return /* @__PURE__ */ t("div", { className: "bg-white content-stretch flex flex-col items-center relative size-full", "data-name": "Mobile", children: [
    /* @__PURE__ */ e("div", { className: "h-[200px] relative shrink-0 w-full", children: /* @__PURE__ */ e(U1, {}) }),
    /* @__PURE__ */ e(Y1, {}),
    /* @__PURE__ */ e(J1, {}),
    /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full mt-[60px]", "data-name": "Divider", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex flex-col items-center justify-center px-[60px] py-[10px] relative size-full", children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-[rgba(112,115,124,0)] h-px relative shrink-0 to-[rgba(112,115,124,0)] via-1/2 via-[rgba(112,115,124,0.26)] w-full", "data-name": "div.divider" }) }) }) }),
    /* @__PURE__ */ e("div", { id: "section-best-report", children: /* @__PURE__ */ e(l, { children: /* @__PURE__ */ e(u2, {}) }) }),
    /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Divider", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex flex-col items-center justify-center px-[60px] py-[10px] relative size-full", children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-[rgba(112,115,124,0)] h-px relative shrink-0 to-[rgba(112,115,124,0)] via-1/2 via-[rgba(112,115,124,0.26)] w-full", "data-name": "div.divider" }) }) }) }),
    /* @__PURE__ */ e("div", { id: "section-monthly-live", children: /* @__PURE__ */ e(l, { delay: 50, children: /* @__PURE__ */ e(j2, {}) }) }),
    /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Divider", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex flex-col items-center justify-center px-[60px] py-[10px] relative size-full", children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-[rgba(112,115,124,0)] h-px relative shrink-0 to-[rgba(112,115,124,0)] via-1/2 via-[rgba(112,115,124,0.26)] w-full", "data-name": "div.divider" }) }) }) }),
    /* @__PURE__ */ e("div", { id: "section-ai-news", children: /* @__PURE__ */ e(l, { delay: 50, children: /* @__PURE__ */ e(R2, {}) }) }),
    /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Divider", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex flex-col items-center justify-center px-[60px] py-[10px] relative size-full", children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-[rgba(112,115,124,0)] h-px relative shrink-0 to-[rgba(112,115,124,0)] via-1/2 via-[rgba(112,115,124,0.26)] w-full", "data-name": "div.divider" }) }) }) }),
    /* @__PURE__ */ e(l, { delay: 50, children: /* @__PURE__ */ e(E2, {}) }),
    /* @__PURE__ */ e(BannerSectionMobile, {}),
    /* @__PURE__ */ e(q1, {})
  ] });
}

function I2() {
  const [s, C] = L(0);
  return N(() => {
    const c = () => {
      const o = document.documentElement, b = o.scrollTop || document.body.scrollTop, h = o.scrollHeight - o.clientHeight;
      C(h > 0 ? b / h * 100 : 0);
    };
    return window.addEventListener("scroll", c, { passive: !0 }), () => window.removeEventListener("scroll", c);
  }, []), /* @__PURE__ */ e("div", { className: "fixed top-0 left-0 right-0 h-[3px] z-[100] motion-reduce:hidden", children: /* @__PURE__ */ e(
    "div",
    {
      className: "h-full bg-[#0058e0] transition-[width] duration-75 ease-out",
      style: { width: `${s}%` }
    }
  ) });
}

function T2({ open, setOpen }) {
  const [startTime, setStartTime] = L(6);
  const [isPlaying, setIsPlaying] = L(false);
  return /* @__PURE__ */ e(ModalContext.Provider, { value: { open, setOpen }, children:
    /* @__PURE__ */ e(VideoContext.Provider, { value: { startTime, setStartTime, isPlaying, setIsPlaying }, children: /* @__PURE__ */ t("div", { className: "size-full", children: [
      /* @__PURE__ */ e(PasswordModal, {}),
      /* @__PURE__ */ e(I2, {}),
      /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e($2, {}) }),
      /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(R1, {}) })
    ] }) })
  });
}

export default T2;
