# Huddling Club Report 프로젝트

## Figma Make 관련
- 이 프로젝트는 더 이상 Figma Make를 사용하지 않음
- Figma Make 재변환 작업 절대 하지 말 것
- 모든 UI 수정은 직접 코드로 진행

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
├── public/
│   ├── assets/
│   │   ├── images/             # 공용 이미지 (puddy.png, together.png 등)
│   │   ├── icons/              # 공용 아이콘 SVG (linkedin.svg, Logo.svg 등)
│   │   └── styles/             # 공용 CSS (fonts.css, base-styles.css)
│   └── community/report/001/
│       └── images/             # 001호 전용 이미지 (인터뷰 사진 등)
│
├── next.config.mjs             # Next.js 설정
├── tailwind.config.ts          # Tailwind 설정
├── postcss.config.mjs          # PostCSS 설정
├── tsconfig.json               # TypeScript 설정
└── package.json                # 의존성
```

## 프로젝트 파일 구조

### public 폴더 규칙
```
public/
├── assets/
│   ├── images/       ← 공용 이미지 (puddy.png, together.png 등)
│   ├── icons/        ← 공용 아이콘 SVG (linkedin.svg, Logo.svg 등)
│   └── styles/       ← 공용 CSS (fonts.css, base-styles.css)
└── community/report/
    ├── 001/
    │   └── images/   ← 001호 전용 이미지 (인터뷰 사진 등)
    ├── 002/
    │   └── images/   ← 002호 전용 이미지
    └── (호수별 폴더 추가)
```

새 파일 추가 시 규칙:
- 여러 리포트에서 공통으로 쓰는 이미지/아이콘/스타일 → `public/assets/` 하위
- 특정 호수에서만 쓰는 이미지 → `public/community/report/{호수}/images/`
- `public/community/report/{호수}/` 루트에 파일 직접 넣지 말 것

## 리포트 워크플로우

### 새 리포트 만들기

1. `src/app/community/report/001/` 폴더를 `002/`로 복사
2. Figma Make에서 새 리포트 디자인 → Standalone HTML 내보내기
3. HTML에서 `const __code__ = \`...\`;` 내부 코드 추출
4. `ReportComponents.tsx`로 변환 (jsx-runtime import 추가)
5. `public/community/report/002/images/` 폴더만 생성 (호수 전용 이미지용)
   - CSS 파일(fonts.css, base-styles.css)은 `public/assets/styles/`에 공용으로 있으므로 **복사 불필요**

### ReportComponents.tsx 변환 규칙

- 파일 상단에 `'use client';`와 jsx-runtime import 추가
- `\${...}` 이스케이프 제거 (백슬래시 삭제)
- 폰트는 `font-['Pretendard_Variable',sans-serif]`로 통일
- `// @ts-nocheck`와 `/* eslint-disable */` 유지

## 주의사항

- `ReportComponents.tsx`는 직접 수정하지 말 것 (Figma Make에서 재변환)
- `base-styles.css`는 자동 생성 파일이므로 수정 금지
- CSS Module 대신 일반 CSS 사용 (`:global()` 문법 제한 때문)

## 작업 후 검증 규칙

모든 작업 완료 후 아래를 반드시 순서대로 확인할 것:

### 1. 요청 사항 체크

- 사용자가 요청한 항목을 하나씩 대조해서 전부 반영됐는지 확인
- 누락된 항목 있으면 완료 보고 전에 먼저 처리

### 2. UI 검증

- 현재 실행 중인 dev 서버 포트 확인 후 해당 포트로 접속해서 데스크탑 뷰 확인
- 브라우저 개발자도구 모바일 뷰(375px) 확인
- 수정한 섹션 위아래 레이아웃 깨짐 없는지 확인
- 콘솔 에러 없는지 확인

### 3. 완료 보고 형식

반드시 아래 형식으로 보고할 것:
- 요청 항목별 ✅ / ❌ 로 반영 여부 표시
- ❌ 항목 있으면 이유 명시 후 즉시 처리
- 모든 항목 ✅ 확인 후에만 완료 선언

## 디자인 규칙

### AI 핫이슈 섹션
- 모바일 카드 리스트: 컨테이너 좌우 패딩 없음, 카드가 화면 가득 채움
- 모바일 카드 리스트: 마지막 카드 border-bottom 없음 (:last-child)
- 모바일 카드: horizontal 레이아웃 (이미지 좌측 100x100px, 텍스트 우측)
- 모바일 카드: 뱃지 숨김, 제목 최대 2줄, 디스크립션 최대 2줄 (...처리)
- 데스크탑 카드: vertical 레이아웃 유지
- 카드 순서: 좌측 상단이 최신순

### 공통
- 이미지 없을 때 이미지 영역 숨김 처리 (display: none)
- 텍스트 선택 커서 비활성화 전체 적용 (user-select: none)
- 모바일 탭 활성 chip은 항상 보이게 scrollIntoView 처리
