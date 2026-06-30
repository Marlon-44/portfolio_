import { useCallback, useEffect, useRef, useState } from "react"
import { projects } from "../../../data/projects"
import { FeaturedProjectCard } from "../FeaturedProjectCard"
import styles from "./index.module.css"

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
const TOTAL_CARDS = projects.length

export const ProjectsSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    const getCardStyle = useCallback(
        (i: number) => {
            const isPast = i < activeIndex
            const isNext = i === activeIndex + 1
            const isLastCard = i === TOTAL_CARDS - 1

            let scale = 1
            let translateY = "100%"

            if (isPast) {
                scale = 0.92
                translateY = "0%"
            } else if (i === activeIndex) {
                scale = isLastCard ? 1 : 1 - progress * 0.08
                translateY = "0%"
            } else if (isNext) {
                const easedProgress = easeOutCubic(progress)
                translateY = `${(1 - easedProgress) * 100}%`
            }

            return {
                transform: `translateY(${translateY}) scale(${scale})`,
                zIndex: i + 1, // la segunda (i=1) encima de la primera (i=0)
                transition: "none",
            }
        },
        [activeIndex, progress]
    )

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current
            if (!container) return

            const rect = container.getBoundingClientRect()
            const totalScrollable = container.offsetHeight - window.innerHeight
            const scrolled = Math.max(0, Math.min(-rect.top, totalScrollable))

            const stepSize = totalScrollable / TOTAL_CARDS
            const rawIndex = scrolled / stepSize
            const index = Math.min(Math.floor(rawIndex), TOTAL_CARDS - 1)
            const stepProgress = Math.min(Math.max(rawIndex - index, 0), 1)

            setActiveIndex(index)
            setProgress(stepProgress)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            ref={containerRef}
            className={styles.scrollTrack}
            style={{ "--card-count": TOTAL_CARDS } as React.CSSProperties}
        >
            <div className={styles.stickyArea}>
                <div className={styles.stack}>
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            className={styles.cardSlot}
                            style={getCardStyle(i)}
                        >
                            <FeaturedProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}