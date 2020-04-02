import React from 'react'
import tw from 'twin.macro'

tw``

interface DataCardProps {
  name: string
  description: string
  image: string
}

interface CardGalleryProps {
  title: string
  data?: DataCardProps
}

const CardGallery = (props: CardGalleryProps) => (
  <div tw="flex min-w-full items-center justify-center">
    <h1 tw="text-black text-4xl">{props.title}</h1>
  </div>
)

export default CardGallery
