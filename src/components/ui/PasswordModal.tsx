// @ts-nocheck
/* eslint-disable */
'use client';
/** 비밀번호 모달 (공통) 섹션 — ReportComponents.tsx에서 분리 */
import Image from 'next/image';
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';
import { L, ModalContext, n3 } from '@/components/ui/_shared';

export function PasswordModal() {
  const { open, setOpen } = n3(ModalContext);
  const [pw, setPw] = L("");
  const [error, setError] = L("");
  if (!open) return null;
  const handleSubmit = () => {
    if (pw === "huddling2024") {
      setOpen(false);
      setPw("");
      setError("");
    } else {
      setError("비밀번호가 일치하지 않습니다.");
    }
  };
  return /* @__PURE__ */ e("div", { className: "fixed inset-0 z-[9999] flex items-center justify-center", children: /* @__PURE__ */ t(Z, { children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/50", onClick: () => setOpen(false) }),
    /* @__PURE__ */ t("div", { className: "relative bg-[#ffffff] rounded-[20px] pt-[32px] pb-[20px] px-[20px] max-w-[400px] w-[90%] flex flex-col gap-[20px] items-center", children: [
      // 닫기 버튼 (우측 상단, 패딩 16px, X 아이콘 20px)
      /* @__PURE__ */ e("button", { type: "button", onClick: () => setOpen(false), "aria-label": "닫기", className: "absolute top-0 right-0 p-[16px] text-[#131313] cursor-pointer", children: /* @__PURE__ */ e("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: "M5 5L15 15M15 5L5 15", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" }) }) }),
      // 헤더: join 이미지 + 제목 + 부제
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-[12px]", children: [
        /* @__PURE__ */ e(Image, { src: "/community/report/001/join.png", alt: "멤버 가입", width: 100, height: 75, style: { width: 100, height: 75, objectFit: "contain", background: "transparent" } }),
        /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-[6px] text-center", children: [
          /* @__PURE__ */ e("h2", { className: "font-['Pretendard_Variable',sans-serif] font-extrabold text-[20px] text-[#131313] leading-[1.5]", children: "멤버 전용 콘텐츠입니다" }),
          /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-normal text-[14px] text-[#4b5563] leading-[1.8] whitespace-pre-line", children: "허들링 멤버는 비밀번호를 입력해\n전체 콘텐츠를 확인하세요." })
        ] })
      ] }),
      // 비밀번호 입력 + 확인 버튼
      /* @__PURE__ */ t("div", { className: "w-full flex flex-col gap-[12px]", children: [
        /* @__PURE__ */ e("input", { type: "password", value: pw, onChange: (ev) => { setPw(ev.target.value); setError(""); }, onKeyDown: (ev) => { if (ev.key === "Enter") handleSubmit(); }, placeholder: "비밀번호 입력", className: "w-full h-[48px] box-border border border-[#e5e7eb] rounded-[12px] py-[13px] px-[21px] font-['Pretendard_Variable',sans-serif] font-semibold text-[14px] text-[#131313] placeholder:text-[#757575] outline-none focus:border-[#0058e0]" }),
        error && /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] text-[13px] text-[#ef4444]", children: error }),
        /* @__PURE__ */ e("button", { type: "button", onClick: handleSubmit, className: "w-full h-[48px] bg-[#0058e0] text-[#ffffff] font-['Pretendard_Variable',sans-serif] font-bold text-[14px] rounded-[12px] cursor-pointer hover:opacity-90 active:opacity-75", children: "확인" })
      ] }),
      // 구분선 (그라데이션)
      /* @__PURE__ */ e("div", { className: "w-full h-[1px]", style: { background: "linear-gradient(90deg, rgba(112,115,124,0) 0%, rgba(112,115,124,0.26) 50%, rgba(112,115,124,0) 100%)" } }),
      // 가입 안내 + 멤버 가입하기 버튼
      /* @__PURE__ */ t("div", { className: "w-full flex flex-col gap-[12px] items-center", children: [
        /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-normal text-[14px] text-[#4b5563] text-center", children: "아직 허들링 클럽 멤버가 아니신가요?" }),
        /* @__PURE__ */ e("button", { type: "button", className: "w-full h-[48px] bg-[#f0f5ff] text-[#0058e0] font-['Pretendard_Variable',sans-serif] font-bold text-[14px] rounded-[12px] cursor-pointer hover:opacity-90 active:opacity-75", children: "멤버 가입하기" })
      ] })
    ] })
  ] }) });
}


export default PasswordModal;
