import Button from '@mui/material/Button'
import React, { FC } from 'react'

import { CardProps } from './Card.def'

export const Card: FC<CardProps> = (props) => {
  const { imageSrc, title, buttonLink } = props

  return (
    <div className="max-w-xl rounded-lg shadow-md overflow-hidden	mb-6">
      <div className="">
        <img className="w-full h-auto" src={imageSrc} alt={title} />
      </div>
      <div className="p-6 text-2xl">{title}</div>
      <div className="px-4 py-2">
        <Button
          className="py-1 px-3 border-solid border-2 border-black text-black text-xs rounded-3xl hover:bg-black hover:text-white"
          // classes={{
          //   root: 'p-6',
          // }}
          component={'button'}
          href={buttonLink}
        >
          See more
        </Button>
      </div>
    </div>
  )
}
