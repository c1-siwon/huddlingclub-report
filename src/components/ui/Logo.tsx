// @ts-nocheck
/* eslint-disable */
'use client';
/**
 * Logo — Huddling Club 워드마크 로고
 * props:
 *   - className: 래퍼 div 클래스 (크기/배치 — Tailwind 임의값을 위해 호출부에서 리터럴로 전달)
 *   - style: 래퍼 div 인라인 스타일
 *   - width, height: 이미지 크기
 *   - color: 로고 색상 필터 (CSS filter 문자열)
 *   - priority: next/image priority 여부
 */
import Image from 'next/image';
import { jsx as e } from 'react/jsx-runtime';

export function Logo({ className, style, width, height, color, priority = false }) {
  return /* @__PURE__ */ e("div", { className, style, "data-name": "HuddingClubLogo", children:
    /* @__PURE__ */ e(Image, { src: "/community/report/001/Logo.svg", alt: "Huddling Club", width, height, ...(priority ? { priority: true } : {}), style: { background: "transparent", filter: color } })
  });
}

export default Logo;
