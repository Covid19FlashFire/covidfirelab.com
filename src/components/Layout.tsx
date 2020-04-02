import React, {ReactChild} from 'react'

import './layout.scss'

interface LayoutProps {
  children: ReactChild | ReactChild[]
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
