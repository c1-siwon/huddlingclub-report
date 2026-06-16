// @ts-nocheck
/* eslint-disable */
'use client';
/** 헤더 (로고, 호수, 발행일) 섹션 — ReportComponents.tsx에서 분리 */
import Image from 'next/image';
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';
import { L, N, g } from '@/components/ui/_shared';
import { Logo } from '@/components/ui/Logo';

export function H() {
  return /* @__PURE__ */ t("div", { className: "relative shrink-0", style: { background: "transparent" }, "data-name": "HuddingClubLogoWrapper", children: [
    /* @__PURE__ */ e("img", {
      src: "/assets/images/lofo.svg",
      alt: "",
      width: 380,
      height: 297,
      style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, background: "transparent" }
    }),
    /* @__PURE__ */ e(Logo, { className: "h-[49.429px] w-[382px] relative", style: { zIndex: 1, background: "transparent" }, width: 382, height: 49, color: "brightness(0) invert(1)", priority: true })
  ] });
}
export function D() {
  return /* @__PURE__ */ t("div", { className: "content-stretch flex gap-[12px] items-center relative shrink-0", "data-name": "Date and Edition Container", children: [
    /* @__PURE__ */ e("div", { className: "bg-[rgba(255,255,255,0.16)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[6px] shrink-0", "data-name": "Badge", children: /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: "제 1호" }) }) }),
    /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: "2026년 7월 1일 발행" }) })
  ] });
}
export function F() {
  return /* @__PURE__ */ t("div", { className: "bg-black content-stretch flex flex-col gap-[24px] items-center justify-center px-[366px] relative size-full", "data-name": "Header", children: [
    /* @__PURE__ */ e(H, {}),
    /* @__PURE__ */ e(D, {})
  ] });
}
export function q() {
  return /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Intro Container", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full", children: /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[20px] items-center justify-center px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] pt-[80px] pb-[40px] relative size-full", children: [
    /* @__PURE__ */ e("img", { src: "/assets/images/together.png", alt: "", width: 240, style: { height: "auto", objectFit: "contain", margin: "0 auto", background: "transparent" } }),
    /* @__PURE__ */ t("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#131313] text-[0px] text-center whitespace-normal", children: [
      /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-extrabold leading-[1.5] mb-0 text-[32px]", children: "혼자였다면 며칠을 헤맸을 문제들." }),
      /* @__PURE__ */ t("p", { className: "font-['Pretendard_Variable',sans-serif] font-extrabold text-[32px]", children: [
        /* @__PURE__ */ e("span", { className: "leading-[1.5]", children: "우리가 함께 만든 " }),
        /* @__PURE__ */ e("span", { className: "leading-[1.5] text-[#0058e0]", children: "허들링" }),
        /* @__PURE__ */ e("span", { className: "leading-[1.5]", children: "을 공유합니다" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[20px] text-center whitespace-normal", children: /* @__PURE__ */ e("p", { className: "leading-[1.8]", children: "먼저 뛰어든 First Penguin의 경험이 다음 사람의 성장으로 이어진 한 주를 모았습니다." }) })
  ] }) }) });
}
export const M = [
  { label: "이주의 베스트 실험", target: "desktop-section-best-report" },
  { label: "라이브 하이라이트", target: "desktop-section-monthly-live" },
  { label: "이번주 AI 핫이슈", target: "desktop-section-ai-news" }
];
export function Y() {
  const [s, C] = L(!1), [c, o] = L(0), b = g(null), h = g(!1), x = g(null);
  N(() => {
    const a = b.current;
    if (!a) return;
    const d = new IntersectionObserver(
      ([r]) => C(!r.isIntersecting),
      { threshold: 0 }
    );
    return d.observe(a), () => d.disconnect();
  }, []), N(() => {
    const a = () => {
      if (h.current) return;
      const d = window.innerHeight * 0.35;
      let r = 0;
      M.forEach(({ target: v }, V) => {
        const k = document.getElementById(v);
        k && k.getBoundingClientRect().top <= d && (r = V);
      }), o(r);
    };
    return window.addEventListener("scroll", a, { passive: !0 }), a(), () => window.removeEventListener("scroll", a);
  }, []);
  const w = (a, d) => {
    o(d), h.current = !0, x.current && clearTimeout(x.current);
    const r = document.getElementById(a);
    r && r.scrollIntoView({ behavior: "smooth" });
    const v = () => {
      x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        h.current = !1, window.removeEventListener("scroll", v);
      }, 120);
    };
    window.addEventListener("scroll", v, { passive: !0 }), x.current = setTimeout(() => {
      h.current = !1, window.removeEventListener("scroll", v);
    }, 2500);
  };
  return /* @__PURE__ */ t(Z, { children: [
    /* @__PURE__ */ e("div", { ref: b, className: "h-px w-full shrink-0" }),
    /* @__PURE__ */ e(
      "div",
      {
        className: `sticky top-0 z-50 w-full shrink-0 overflow-x-hidden transition-all duration-200 ${s ? "backdrop-blur-[10px] bg-[rgba(255,255,255,0.85)] border-b border-[#e5e7eb]/60" : "bg-transparent"}`,
        children: /* @__PURE__ */ e("div", { className: "w-full overflow-x-auto [&::-webkit-scrollbar]:hidden", style: { scrollbarWidth: "none", scrollPaddingLeft: "20px", scrollPaddingRight: "20px" }, children: /* @__PURE__ */ e("div", { className: `flex justify-center w-full min-w-max ${s ? "py-[12px]" : "py-[16px]"}`, children: /* @__PURE__ */ e("div", { className: s ? "flex gap-[12px] items-center px-[20px]" : "backdrop-blur-[5px] bg-[rgba(255,255,255,0.2)] flex gap-[12px] items-center px-[20px]", children: M.map((a, d) => {
          const r = c === d;
          return /* @__PURE__ */ e(
            "button",
            {
              onClick: (g) => { w(a.target, d); g.currentTarget.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" }); },
              "aria-pressed": r,
              className: `flex items-center justify-center px-[12px] py-[8px] rounded-[8px] shrink-0 cursor-pointer outline-none transition-all duration-200 border active:scale-[0.97] ${r ? "bg-[#131313] border-transparent" : "bg-white border-[#e5e7eb] hover:bg-[#f3f4f6]"}`,
              children: /* @__PURE__ */ e(
                "span",
                {
                  className: `font-['Pretendard_Variable',sans-serif] font-semibold text-[16px] whitespace-nowrap ${r ? "text-white" : "text-[#131313]"}`,
                  children: a.label
                }
              )
            },
            a.target
          );
        }) }) }) })
      }
    )
  ] });
}
export function D1() {
  return /* @__PURE__*/ t("div", { className: "relative shrink-0", style: { background: "transparent" }, "data-name": "HuddingClubLogoWrapper", children: [
    /* @__PURE__ */ e("img", {
      src: "/assets/images/lofo.svg",
      alt: "",
      width: 200,
      height: 156,
      style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, background: "transparent" }
    }),
    /* @__PURE__ */ e(Logo, { className: "h-[29.761px] w-[230px] relative", style: { zIndex: 1, background: "transparent" }, width: 230, height: 30, color: "brightness(0) invert(1)", priority: true })
  ] });
}
export function F1() {
  return /* @__PURE__ */ t("div", { className: "content-stretch flex gap-[12px] items-center relative shrink-0", "data-name": "Date and Edition Container", children: [
    /* @__PURE__ */ e("div", { className: "bg-[rgba(255,255,255,0.16)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[6px] shrink-0", "data-name": "Badge", children: /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: "제 1호" }) }) }),
    /* @__PURE__ */ e("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.5]", children: "2026년 7월 1일 발행" }) })
  ] });
}
export function U1() {
  return /* @__PURE__ */ t("div", { className: "bg-black content-stretch flex flex-col gap-[12px] items-center justify-center overflow-hidden relative size-full", "data-name": "Header", children: [
    /* @__PURE__ */ e(D1, {}),
    /* @__PURE__ */ e(F1, {})
  ] });
}
export function Y1() {
  return /* @__PURE__ */ e("div", { className: "relative shrink-0 w-full", "data-name": "Intro Container", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full", children: /* @__PURE__ */ t("div", { className: "content-stretch flex flex-col gap-[20px] items-center justify-center px-[20px] pt-[60px] pb-[40px] relative size-full", children: [
    /* @__PURE__ */ e("img", { src: "/assets/images/together.png", alt: "", width: 160, style: { height: "auto", objectFit: "contain", margin: "0 auto", background: "transparent" } }),
    /* @__PURE__ */ t("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] justify-center leading-[0] max-w-[556px] min-w-full not-italic relative shrink-0 text-[#131313] text-[0px] text-center w-[min-content]", children: [
      /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-extrabold leading-[1.5] mb-0 text-[24px]", children: "혼자였다면" }),
      /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-extrabold leading-[1.5] mb-0 text-[24px]", children: "며칠을 헤맸을 문제들." }),
      /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-extrabold leading-[1.5] mb-0 text-[24px]", children: "우리가 함께 만든" }),
      /* @__PURE__ */ t("p", { className: "font-['Pretendard_Variable',sans-serif] font-extrabold text-[24px]", children: [
        /* @__PURE__ */ e("span", { className: "leading-[1.5] text-[#0058e0]", children: "허들링" }),
        /* @__PURE__ */ e("span", { className: "leading-[1.5]", children: "을 공유합니다" })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "[word-break:break-word] flex flex-col font-['Pretendard_Variable',sans-serif] font-medium justify-center leading-[0] max-w-[556px] min-w-full relative shrink-0 text-[#4b5563] text-[16px] text-center w-[min-content]", children: [
      /* @__PURE__ */ e("p", { className: "leading-[1.8] mb-0", children: "먼저 뛰어든 First Penguin의 경험이" }),
      /* @__PURE__ */ e("p", { className: "leading-[1.8]", children: "다음 사람의 성장으로 이어진 한 주를 모았습니다." })
    ] })
  ] }) }) });
}
export const B = [
  { label: "이주의 베스트 실험", target: "section-best-report" },
  { label: "라이브 하이라이트", target: "section-monthly-live" },
  { label: "이번주 AI 핫이슈", target: "section-ai-news" }
];
export function J1() {
  const [s, C] = L(!1), [c, o] = L(0), b = g(null), h = g(!1), x = g(null);
  N(() => {
    const a = b.current;
    if (!a) return;
    const d = new IntersectionObserver(
      ([r]) => C(!r.isIntersecting),
      { threshold: 0 }
    );
    return d.observe(a), () => d.disconnect();
  }, []), N(() => {
    const a = () => {
      if (h.current) return;
      const d = window.innerHeight * 0.35;
      let r = 0;
      B.forEach(({ target: v }, V) => {
        const k = document.getElementById(v);
        k && k.getBoundingClientRect().top <= d && (r = V);
      }), o(r);
    };
    return window.addEventListener("scroll", a, { passive: !0 }), a(), () => window.removeEventListener("scroll", a);
  }, []);
  const w = (a, d) => {
    o(d), h.current = !0, x.current && clearTimeout(x.current);
    const r = document.getElementById(a);
    r && r.scrollIntoView({ behavior: "smooth" });
    const v = () => {
      x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        h.current = !1, window.removeEventListener("scroll", v);
      }, 120);
    };
    window.addEventListener("scroll", v, { passive: !0 }), x.current = setTimeout(() => {
      h.current = !1, window.removeEventListener("scroll", v);
    }, 2500);
  };
  return /* @__PURE__ */ t(Z, { children: [
    /* @__PURE__ */ e("div", { ref: b, className: "h-px w-full" }),
    /* @__PURE__ */ e(
      "div",
      {
        className: `sticky top-0 z-50 w-full overflow-x-hidden transition-all duration-200 ${s ? "backdrop-blur-[10px] bg-[rgba(255,255,255,0.85)] border-b border-[#e5e7eb]/60" : "bg-transparent"}`,
        children: /* @__PURE__ */ e("div", { className: "w-full overflow-x-auto [&::-webkit-scrollbar]:hidden", style: { scrollbarWidth: "none", scrollPaddingLeft: "20px", scrollPaddingRight: "20px" }, children: /* @__PURE__ */ e("div", { className: "flex justify-center w-full min-w-max py-[12px]", children: /* @__PURE__ */ e("div", { className: s ? "flex gap-[12px] items-center px-[20px]" : "backdrop-blur-[5px] bg-[rgba(255,255,255,0.2)] flex gap-[12px] items-center px-[20px]", children: B.map((a, d) => {
          const r = c === d;
          return /* @__PURE__ */ e(
            "button",
            {
              onClick: (g) => { w(a.target, d); g.currentTarget.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" }); },
              "aria-pressed": r,
              className: `flex items-center justify-center px-[12px] py-[8px] rounded-[8px] shrink-0 cursor-pointer outline-none transition-all duration-200 border active:scale-[0.97] ${r ? "bg-[#131313] border-transparent" : "bg-white border-[#e5e7eb] hover:bg-[#f3f4f6]"}`,
              children: /* @__PURE__ */ e(
                "span",
                {
                  className: `font-['Pretendard_Variable',sans-serif] font-semibold text-[16px] whitespace-nowrap ${r ? "text-white" : "text-[#131313]"}`,
                  children: a.label
                }
              )
            },
            a.target
          );
        }) }) }) })
      }
    )
  ] });
}
