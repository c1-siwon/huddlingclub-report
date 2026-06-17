// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * 비밀번호 모달 (공통) — idle / loading / error / success 4단계 상태머신
 *  - idle    : 비밀번호 입력 (기본)
 *  - loading : 확인 버튼 클릭 후 검증 중 (1.5초, 버튼에 스피너)
 *  - error   : 비밀번호 불일치 (입력 필드 빨간 테두리 + 에러 메시지)
 *  - success : 인증 완료 (디스코드 입장 안내)
 * 인증 성공 시 ModalContext.authenticated 를 true 로 올려 다른 섹션과 공유한다 (메모리 상태, localStorage 미사용).
 */
import Image from 'next/image';
import { jsx as e, jsxs as t, Fragment as Z } from 'react/jsx-runtime';
import { L, N, ModalContext, n3, DISCORD_URL } from '@/components/ui/_shared';
import { Modal } from '@/components/ui/Modal';

const PASSWORD = "huddling2024";

// 닫기(X) 버튼 — 우측 상단 공통
function CloseButton({ onClose }) {
  return /* @__PURE__ */ e("button", { type: "button", onClick: onClose, "aria-label": "닫기", className: "absolute top-0 right-0 p-[16px] text-[#131313] cursor-pointer", children: /* @__PURE__ */ e("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: "M5 5L15 15M15 5L5 15", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" }) }) });
}

// 원형 회전 스피너 (CSS animation: Tailwind animate-spin)
function Spinner() {
  return /* @__PURE__ */ e("span", { className: "inline-block w-[20px] h-[20px] rounded-full border-[2px] border-white/40 border-t-white animate-spin" });
}

// 눈 뜬 아이콘 (비밀번호 표시 중 → type=text)
function EyeIcon() {
  return /* @__PURE__ */ t("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ e("path", { d: "M2.5 10S5 5 10 5s7.5 5 7.5 5-2.5 5-7.5 5-7.5-5-7.5-5Z", stroke: "currentColor", strokeWidth: 1.4, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: 10, cy: 10, r: 2.3, stroke: "currentColor", strokeWidth: 1.4 })
  ] });
}

// 눈 감은 아이콘 (기본 → type=password)
function EyeOffIcon() {
  return /* @__PURE__ */ t("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ e("path", { d: "M8.2 4.7A7.4 7.4 0 0 1 10 4.5c4.9 0 7.2 4.3 7.5 5-.18.46-.85 1.7-2 2.85", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M5.1 5.7C3.35 6.85 2.55 8.55 2.5 9.5c.3.7 2.7 5 7.5 5 1.2 0 2.25-.27 3.15-.7", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M8.4 8.4a2.2 2.2 0 0 0 3.1 3.1", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M3.5 3.5l13 13", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" })
  ] });
}

export function PasswordModal() {
  const { open, setOpen, setAuthenticated, authenticated } = n3(ModalContext);
  const [pw, setPw] = L("");
  const [status, setStatus] = L("idle"); // idle | loading | error | success
  const [imgError, setImgError] = L(false); // success 이미지 로드 실패 시 placeholder 대체
  const [showPw, setShowPw] = L(false);     // 비밀번호 표시 토글

  // 모달이 열릴 때마다 상태 초기화 (이미 인증된 경우 곧장 success 화면)
  N(() => {
    if (open) {
      setPw("");
      setImgError(false);
      setShowPw(false);
      setStatus(authenticated ? "success" : "idle");
    }
  }, [open]);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (isLoading) return;
    setStatus("loading");
    // 검증 중 상태를 1.5초 노출 후 결과 분기
    setTimeout(() => {
      if (pw === PASSWORD) {
        setAuthenticated(true);
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  const handleChange = (ev) => {
    setPw(ev.target.value);
    if (status === "error") setStatus("idle"); // 다시 입력하면 에러 해제
  };

  // 디스코드 새 탭 열기
  const goDiscord = () => {
    window.open(DISCORD_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  // success 상태에서 보여줄 이미지 (없으면 placeholder)
  const successVisual = imgError
    ? /* @__PURE__ */ e("div", { className: "w-[120px] h-[120px] rounded-[16px] bg-[#f3f4f6] flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "font-['Pretendard_Variable',sans-serif] text-[12px] text-[#9ca3af]", children: "이미지 준비중" }) })
    : /* @__PURE__ */ e(Image, { src: "/assets/images/join-success.png", alt: "멤버 인증 완료", width: 120, height: 120, onError: () => setImgError(true), style: { width: 120, height: 120, objectFit: "contain", background: "transparent" } });

  return /* @__PURE__ */ e(Modal, { isOpen: open, onClose: handleClose, children:
    /* @__PURE__ */ t("div", { className: "relative bg-[#ffffff] rounded-[20px] pt-[32px] pb-[20px] px-[20px] w-[340px] max-w-[90vw] flex flex-col gap-[20px] items-center", children: [
      /* @__PURE__ */ e(CloseButton, { onClose: handleClose }),

      isSuccess
        // ── success 상태 ─────────────────────────────
        ? /* @__PURE__ */ t(Z, { children: [
            /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-[12px]", children: [
              successVisual,
              /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-[6px] text-center", children: [
                /* @__PURE__ */ e("h2", { className: "font-['Pretendard_Variable',sans-serif] font-extrabold text-[20px] text-[#131313] leading-[1.5]", children: "멤버 인증 완료!" }),
                /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-normal text-[14px] text-[#4b5563] leading-[1.8] whitespace-pre-line", children: "아래 버튼을 눌러 디스코드로\n입장하여 콘텐츠를 확인하세요." })
              ] })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: goDiscord, className: "w-full h-[48px] bg-[#050510] text-[#ffffff] font-['Pretendard_Variable',sans-serif] font-bold text-[14px] rounded-[12px] cursor-pointer hover:opacity-90 active:opacity-75", children: "디스코드 입장하기" })
          ] })
        // ── idle / loading / error 상태 (공통 UI) ─────
        : /* @__PURE__ */ t(Z, { children: [
            /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-[12px]", children: [
              /* @__PURE__ */ e(Image, { src: "/assets/images/join.png", alt: "멤버 가입", width: 100, height: 75, style: { width: 100, height: 75, objectFit: "contain", background: "transparent" } }),
              /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-[6px] text-center", children: [
                /* @__PURE__ */ e("h2", { className: "font-['Pretendard_Variable',sans-serif] font-extrabold text-[20px] text-[#131313] leading-[1.5]", children: "멤버 전용 콘텐츠입니다" }),
                /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-normal text-[14px] text-[#4b5563] leading-[1.8] whitespace-pre-line", children: "허들링 멤버는 비밀번호를 입력해\n전체 콘텐츠를 확인하세요." })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "w-full flex flex-col gap-[8px]", children: [
              // 테두리/높이를 wrapper가 갖고, input·아이콘을 flex item으로 수직 중앙 정렬
              /* @__PURE__ */ t("div", { className: `w-full h-[48px] box-border flex items-center gap-[8px] px-[16px] border rounded-[12px] ${isError ? "border-[#ff543e]" : "border-[#e5e7eb] focus-within:border-[#0058e0]"}`, children: [
                /* @__PURE__ */ e("input", { type: showPw ? "text" : "password", value: pw, disabled: isLoading, onChange: handleChange, onKeyDown: (ev) => { if (ev.key === "Enter") handleSubmit(); }, placeholder: "비밀번호 입력", className: "flex-1 min-w-0 h-full bg-transparent border-0 p-0 font-['Pretendard_Variable',sans-serif] font-semibold text-[14px] text-[#131313] placeholder:text-[#757575] outline-none" }),
                /* @__PURE__ */ e("button", { type: "button", onClick: () => setShowPw((v) => !v), "aria-label": showPw ? "비밀번호 숨기기" : "비밀번호 표시", className: "flex-shrink-0 flex items-center justify-center w-[20px] h-[20px] text-[#9ca3af] hover:text-[#131313] cursor-pointer", children: showPw ? /* @__PURE__ */ e(EyeIcon, {}) : /* @__PURE__ */ e(EyeOffIcon, {}) })
              ] }),
              isError && /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-normal text-[12px] text-[#ff543e]", children: "비밀번호가 일치하지 않습니다." })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: handleSubmit, disabled: isLoading, className: "w-full h-[48px] bg-[#0058e0] text-[#ffffff] font-['Pretendard_Variable',sans-serif] font-bold text-[14px] rounded-[12px] cursor-pointer hover:opacity-90 active:opacity-75 disabled:cursor-default flex items-center justify-center", children: isLoading ? /* @__PURE__ */ e(Spinner, {}) : "확인" })
          ] })
    ] })
  });
}


export default PasswordModal;
