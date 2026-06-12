# Huddling Club 주간 리포트 — 001

## 폴더 목적

이 폴더는 **Huddling Club 주간 리포트**를 Next.js App Router 페이지로 제공합니다.
원본은 Figma Make(figma.site)에서 제작·내보낸 Standalone HTML이며,
순수 React 컴포넌트로 변환하여 runtime.js 의존성을 완전히 제거했습니다.

> **매주 새 리포트를 만들 때**: 이 폴더(`001/`) 전체를 복사하고 번호만 바꾸세요.
> 그런 다음 `ReportComponents.tsx`를 새 Figma 내보내기 코드로 교체합니다.

---

## 파일 구조

```
src/app/community/report/001/
├── page.tsx              — Next.js 페이지 컴포넌트 ('use client')
├── ReportComponents.tsx  — Figma Make에서 변환된 React 컴포넌트 (~210KB)
├── report.css            — 커스텀 레이아웃 보정 CSS
└── CLAUDE.md             — 이 문서

public/community/report/001/
├── fonts.css             — Pretendard Variable CDN @import (108 bytes)
└── base-styles.css       — Tailwind v4 + Figma 리셋 CSS (103 KB)
```

### 각 파일 역할

| 파일 | 역할 | 수정 빈도 |
|---|---|---|
| `page.tsx` | 페이지 진입점, CSS 로딩, DOM 보정 useEffect | 거의 수정 없음 |
| `ReportComponents.tsx` | 전체 React 컴포넌트 (T2가 메인) | **매주 교체** |
| `report.css` | 레이아웃 너비 보정, live-dot 애니메이션 | 디자인 변경 시 |
| `fonts.css` | Pretendard Variable CDN | 폰트 변경 시 |
| `base-styles.css` | Tailwind / Figma 리셋 (자동 생성) | 거의 수정 없음 |

---

## 수정 시 지켜야 할 규칙

### 1. ReportComponents.tsx 직접 수정 금지
- 디자인·텍스트·이미지 변경은 반드시 **Figma Make에서 수정 → 재변환** 하세요.
- 이 파일은 minified 상태이며, 직접 수정하면 추후 업데이트가 어려워집니다.

### 2. 폰트는 Pretendard Variable로 통일
- `fonts.css`에서 CDN으로 Pretendard Variable을 로드합니다.
- `ReportComponents.tsx`의 Tailwind 클래스: `font-['Pretendard_Variable',sans-serif]`
- font-weight는 `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold` 클래스로 지정

### 3. CSS 수정은 `report.css`에만
- `base-styles.css`는 **자동 생성 파일**이므로 직접 수정하지 마세요.
- ID 셀렉터(`#section-*`, `#desktop-section-*`)와 `data-name` 속성은 Figma에서 부여한 이름입니다.
- `@keyframes live-dot-blink`는 전역 keyframes로 정의되어 있습니다.

### 4. TypeScript 규칙
- `ReportComponents.tsx`는 `// @ts-nocheck`와 `/* eslint-disable */`을 유지하세요.
- `page.tsx`는 `'use client'`로 유지하세요.
- `useEffect` cleanup에서 반드시 observer와 event listener를 해제하세요.

---

## 새 리포트 만드는 방법

1. 이 `001/` 폴더를 `002/`로 복사
2. Figma Make에서 새 리포트 디자인 후 Standalone HTML로 내보내기
3. HTML 변환 스크립트로 `ReportComponents.tsx` 생성:
   - `const __code__ = \`...\`;` 내부 코드 추출
   - jsx-runtime import 헤더 추가
   - `\${...}` 이스케이프 제거
   - 폰트 참조를 `Pretendard_Variable`로 통일
4. `page.tsx`의 CSS 경로를 새 번호로 업데이트 (필요시)
5. `public/community/report/002/`에 파일 배치

---

## 기술 참고

- **메인 컴포넌트**: `T2()` — 데스크톱(`R1`)과 모바일(`$2`) 레이아웃을 md breakpoint로 분기
- **스크롤 진행률**: `I2()` — 상단 파란 진행 바 (useState + scroll event)
- **Fade-in 애니메이션**: `l()` 컴포넌트 — IntersectionObserver + transition
- **React Runtime**: `react/jsx-runtime`에서 `jsx`, `jsxs`, `Fragment` 사용
