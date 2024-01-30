"use client"
import Loader from "@/Loader"
import Image from "next/image"

export function MyImage({ src, alt, width, height, className }: {
    src: string, alt: string, width: number, height: number, className: string
}) {
    return (
        <Image
            className={className}
            loader={Loader}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}