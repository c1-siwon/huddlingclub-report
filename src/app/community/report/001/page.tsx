'use client'

/**
 * Huddling Club 주간 리포트 #001
 *
 * 구조:
 *   - Figma Make에서 내보낸 코드를 순수 React 컴포넌트로 변환
 *   - ReportComponents.tsx: 변환된 React 컴포넌트
 *   - fonts.css: Pretendard Variable CDN
 *   - base-styles.css: Tailwind v4 + 기본 스타일
 *   - report.module.css: 커스텀 레이아웃 보정 CSS
 *
 * runtime.js 의존성 완전 제거됨
 */

import React, { useEffect, useState } from 'react'
import ReportContent from './ReportComponents'
import './report.css'

const TRANSPARENT_PIXEL =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

export default function ReportPage() {
  // 비밀번호 모달 open/close 상태를 페이지에서 소유하고 props로 전달
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const insertLink = (href: string): HTMLLinkElement => {
      if (document.querySelector(`link[href="${href}"]`)) {
        return document.querySelector(`link[href="${href}"]`) as HTMLLinkElement
      }
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
      return link
    }

    const fontsLink = insertLink('/assets/styles/fonts.css')
    const baseLink = insertLink('/assets/styles/base-styles.css')

    const W560_SELECTORS = [
      '[data-name="Monthly Live Video Container"]',
      '[data-name="div.video"]',
      '[data-name="Monthly Live Takeaways Container"]',
      '[data-name="div.card"]',
    ]

    function fixMonthlyLiveWidth() {
      if (window.innerWidth < 768) return
      ;['desktop-section-best-report', 'desktop-section-monthly-live'].forEach((id) => {
        const s = document.getElementById(id)
        if (s) s.style.setProperty('width', '100%', 'important')
      })
      const section = document.getElementById('desktop-section-monthly-live')
      if (!section) return
      W560_SELECTORS.forEach((sel) => {
        const el = section.querySelector<HTMLElement>(sel)
        if (el) {
          el.style.setProperty('width', '100%', 'important')
          el.style.setProperty('max-width', '560px', 'important')
        }
      })
    }

    function applyImageFill(root: Document | HTMLElement) {
      root.querySelectorAll<HTMLElement>('[style*="background-image"]').forEach((el) => {
        if (!el.style.backgroundColor) el.style.backgroundColor = '#f5f5f5'
      })
    }

    function hideBrokenImages(root: Document | HTMLElement) {
      root.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
        const onError = () => {
          img.src = TRANSPARENT_PIXEL
        }
        img.addEventListener('error', onError)
        if (img.complete && img.naturalWidth === 0 && img.src !== TRANSPARENT_PIXEL) {
          onError()
        }
      })
    }

    applyImageFill(document)
    hideBrokenImages(document)

    let applied = false
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          const el = node as HTMLElement
          if (el.style && el.style.backgroundImage) el.style.backgroundColor = '#f5f5f5'
          applyImageFill(el)
          hideBrokenImages(el)
        })
      })
      if (!applied && document.getElementById('desktop-section-monthly-live')) {
        fixMonthlyLiveWidth()
        applied = true
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('resize', fixMonthlyLiveWidth)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', fixMonthlyLiveWidth)
      fontsLink.remove()
      baseLink.remove()
    }
  }, [])

  return <ReportContent open={modalOpen} setOpen={setModalOpen} />
}
