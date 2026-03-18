import { useEffect, useState } from 'react'

/**
 * Detecta qué sección está activa basándose en el scroll.
 * @param sectionIds - array de IDs de las secciones a observar
 * @param offset - margen superior en px para considerar activa una sección
 * @returns el ID de la sección activa
 */
export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, offset])

  return activeId
}
