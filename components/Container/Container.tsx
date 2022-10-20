import React, { FC } from 'react'
import classNames from 'classnames'

import { IContainerProps } from './Container.def'

export const Container: FC<IContainerProps> = (props) => {
  const { children, margin, className, ...otherProps } = props

  return (
    <div
      {...otherProps}
      className={classNames(
        'w-full ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg',
        {
          'mx-16 sm:mx-32': margin,
        }
      )}
    >
      {children}
    </div>
  )
}
