const STAGGER_MS = 70
// Safety net: browsers can throttle/delay IntersectionObserver for hidden or
// backgrounded tabs (e.g. middle-click open, prerendering). Content must
// never stay invisible indefinitely if that happens.
const FALLBACK_MS = 1200

function initReveal() {
  const groups = new Map<Element, HTMLElement[]>()

  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    const group = el.closest("[data-reveal-group]") ?? document.body
    if (!groups.has(group)) groups.set(group, [])
    groups.get(group)!.push(el)
  })

  if (!groups.size) return

  const reveal = (el: HTMLElement) => el.classList.add("is-revealed")

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        reveal(entry.target as HTMLElement)
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  )

  groups.forEach((items) => {
    items.forEach((el, index) => {
      el.style.transitionDelay = `${index * STAGGER_MS}ms`
      observer.observe(el)
      window.setTimeout(() => reveal(el), FALLBACK_MS + index * STAGGER_MS)
    })
  })
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initReveal)
} else {
  initReveal()
}
