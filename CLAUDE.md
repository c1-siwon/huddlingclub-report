# Huddling Club Report 프로젝트

## 프로젝트 개요

- Huddling Club 커뮤니티의 주간 리포트 웹페이지
- IT/개발/AI를 배우는 디자이너 커뮤니티
- 디스코드 공유 또는 figmapedia.com에 붙일 예정

## 기술 스택

- Next.js 14, TypeScript, Tailwind CSS
- 포트: 3002 (`npm run dev -- --port 3002`)

## 프로젝트 구조

```
huddlingclub1/
├── src/app/
│   ├── layout.tsx              # 루트 레이아웃 (lang="ko")
│   ├── page.tsx                # 메인 페이지
│   ├── globals.css             # Tailwind 기본 스타일
│   └── community/report/001/   # 1호 리포트
│       ├── page.tsx            # 페이지 컴포넌트 ('use client')
│       ├── ReportComponents.tsx # Figma Make 변환 React 컴포넌트
│       ├── report.css          # 커스텀 레이아웃 CSS
│       └── CLAUDE.md           # 리포트별 상세 문서
│
├── public/community/report/001/
│   ├── fonts.css               # Pretendard Variable CDN
│   └── base-styles.css         # Tailwind v4 + Figma 리셋
│
├── next.config.mjs             # Next.js 설정
├── tailwind.config.ts          # Tailwind 설정
├── postcss.config.mjs          # PostCSS 설정
├── tsconfig.json               # TypeScript 설정
└── package.json                # 의존성
```

## 리포트 워크플로우

### 새 리포트 만들기

1. `src/app/community/report/001/` 폴더를 `002/`로 복사
2. Figma Make에서 새 리포트 디자인 → Standalone HTML 내보내기
3. HTML에서 `const __code__ = \`...\`;` 내부 코드 추출
4. `ReportComponents.tsx`로 변환 (jsx-runtime import 추가)
5. `public/community/report/002/` 폴더 생성 후 CSS 파일 배치

### ReportComponents.tsx 변환 규칙

- 파일 상단에 `'use client';`와 jsx-runtime import 추가
- `\${...}` 이스케이프 제거 (백슬래시 삭제)
- 폰트는 `font-['Pretendard_Variable',sans-serif]`로 통일
- `// @ts-nocheck`와 `/* eslint-disable */` 유지

## 주의사항

- `ReportComponents.tsx`는 직접 수정하지 말 것 (Figma Make에서 재변환)
- `base-styles.css`는 자동 생성 파일이므로 수정 금지
- CSS Module 대신 일반 CSS 사용 (`:global()` 문법 제한 때문)
