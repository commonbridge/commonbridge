import React from 'react'
import Box from '@mui/material/Box'

type ContainerProps = {
  placement?: 'left' | 'right'
  children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
  const { placement, children } = props
  return (
    <Box sx= {{
      marginLeft: placement === 'left' ? 'unset' : 'auto',
      marginRight: placement === 'right' ? 'unset' : 'auto',
      maxWidth: '550px'
    }}>
      {children}
    </Box>
  )
}
