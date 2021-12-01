import React from 'react'
import { PageTitle } from '@commonbridge/components'

type NotFoundProps = {
  title?: string
  children?: React.ReactNode
}

export function NotFound(props: NotFoundProps) {
  const { title, children } = props
  return (
    <PageTitle title={title || 'Page Not Found'}>
      {children}
    </PageTitle>
  )
}
