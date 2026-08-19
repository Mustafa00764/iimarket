import { useCallback, useEffect, useRef, useState } from 'react'

export const useSidebar = () => {
  const [isScrolled, setIsScrolled] = useState(0)
  const [isScroll, setIsScroll] = useState(false)
  const [isSidebarSize, setIsSidebarSize] = useState(true)
  const resentRef = useRef<HTMLDivElement>(null)

  const onScroll = useCallback(() => {
    const target = resentRef.current

    if (!target) return

    const scrollHeight = target.scrollHeight > target.clientHeight

    setIsScrolled(target.scrollTop)
    setIsScroll(scrollHeight)
  }, [resentRef])

  useEffect(() => {
    onScroll()
  }, [resentRef, onScroll])

  return {
    isScroll,
    isScrolled,
    isSidebarSize,
    resentRef,
    onScroll,
    setIsSidebarSize
  }
}
