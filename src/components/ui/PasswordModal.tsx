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

export function PasswordModal() {
  const { open, setOpen, setAuthenticated, authenticated } = n3(ModalContext);
  const [pw, setPw] = L("");
  const [status, setStatus] = L("idle"); // idle | loading | error | success
  const [imgError, setImgError] = L(false); // success 이미지 로드 실패 시 placeholder 대체

  // 모달이 열릴 때마다 상태 초기화 (이미 인증된 경우 곧장 success 화면)
  N(() => {
    if (open) {
      setPw("");
      setImgError(false);
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
              /* @__PURE__ */ e("input", { type: "password", value: pw, disabled: isLoading, onChange: handleChange, onKeyDown: (ev) => { if (ev.key === "Enter") handleSubmit(); }, placeholder: "비밀번호 입력", className: `w-full h-[48px] box-border border rounded-[12px] py-[13px] px-[16px] font-['Pretendard_Variable',sans-serif] font-semibold text-[14px] text-[#131313] placeholder:text-[#757575] outline-none ${isError ? "border-[#ff543e]" : "border-[#e5e7eb] focus:border-[#0058e0]"}` }),
              isError && /* @__PURE__ */ e("p", { className: "font-['Pretendard_Variable',sans-serif] font-normal text-[12px] text-[#ff543e]", children: "비밀번호가 일치하지 않습니다." })
            ] }),
            /* @__PURE__ */ e("button", { type: "button", onClick: handleSubmit, disabled: isLoading, className: "w-full h-[48px] bg-[#0058e0] text-[#ffffff] font-['Pretendard_Variable',sans-serif] font-bold text-[14px] rounded-[12px] cursor-pointer hover:opacity-90 active:opacity-75 disabled:cursor-default flex items-center justify-center", children: isLoading ? /* @__PURE__ */ e(Spinner, {}) : "확인" })
          ] })
    ] })
  });
}


export default PasswordModal;
