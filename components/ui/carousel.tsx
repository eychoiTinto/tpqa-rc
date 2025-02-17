"use client"

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      ref={ref}
      className={cn(
      "absolute h-8 w-8 rounded-full",
      orientation === "horizontal"
        ? "-left-12 top-1/2 -translate-y-1/2"
        : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
      className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      >
      <rect width={60} height={60} rx={30} fill="white" fillOpacity="0.3" />
      <mask
        id="mask0_24_225"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={18}
        y={18}
        width={24}
        height={24}
      >
        <rect
        width={24}
        height={24}
        transform="matrix(-1 0 0 1 42 18)"
        fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_24_225)">
        <path
        d="M26.5254 30L33.8754 22.65C34.1254 22.4 34.2462 22.1042 34.2379 21.7625C34.2295 21.4208 34.1004 21.125 33.8504 20.875C33.6004 20.625 33.3045 20.5 32.9629 20.5C32.6212 20.5 32.3254 20.625 32.0754 20.875L24.4004 28.575C24.2004 28.775 24.0504 29 23.9504 29.25C23.8504 29.5 23.8004 29.75 23.8004 30C23.8004 30.25 23.8504 30.5 23.9504 30.75C24.0504 31 24.2004 31.225 24.4004 31.425L32.1004 39.125C32.3504 39.375 32.642 39.4958 32.9754 39.4875C33.3087 39.4792 33.6004 39.35 33.8504 39.1C34.1004 38.85 34.2254 38.5542 34.2254 38.2125C34.2254 37.8708 34.1004 37.575 33.8504 37.325L26.5254 30Z"
        fill="white"
        />
      </g>
      </svg>
      <span className="sr-only">Previous slide</span>
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      ref={ref}
      className={cn(
      "absolute h-8 w-8 rounded-full",
      orientation === "horizontal"
        ? "-right-12 top-1/2 -translate-y-1/2"
        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
      className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      >
      <rect width={60} height={60} rx={30} fill="white" fillOpacity="0.3" />
      <mask
        id="mask0_24_238"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={18}
        y={18}
        width={24}
        height={24}
      >
        <rect x={18} y={18} width={24} height={24} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_24_238)">
        <path
        d="M33.4746 30L26.1246 22.65C25.8746 22.4 25.7538 22.1042 25.7621 21.7625C25.7705 21.4208 25.8996 21.125 26.1496 20.875C26.3996 20.625 26.6955 20.5 27.0371 20.5C27.3788 20.5 27.6746 20.625 27.9246 20.875L35.5996 28.575C35.7996 28.775 35.9496 29 36.0496 29.25C36.1496 29.5 36.1996 29.75 36.1996 30C36.1996 30.25 36.1496 30.5 36.0496 30.75C35.9496 31 35.7996 31.225 35.5996 31.425L27.8996 39.125C27.6496 39.375 27.358 39.4958 27.0246 39.4875C26.6913 39.4792 26.3996 39.35 26.1496 39.1C25.8996 38.85 25.7746 38.5542 25.7746 38.2125C25.7746 37.8708 25.8996 37.575 26.1496 37.325L33.4746 30Z"
        fill="white"
        />
      </g>
      </svg>
      <span className="sr-only">Next slide</span>
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi
}
