import { default as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material/Avatar'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'

function stringToColor(string: string) {
  let hash = 0
  let i

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substr(-2)
  }

  return color
}

function stringAvatar(name: string, sx: SxProps<Theme> | undefined) {
  return {
    sx: {
      ...sx,
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  }
}

interface AvatarProps extends MuiAvatarProps {
  title: string
  imgUrl?: string
}

export const Avatar = (props: AvatarProps) => {
  const { title, imgUrl, sx, ...rest } = props
  if (!imgUrl) return <MuiAvatar {...stringAvatar(title, sx)} { ...rest } />

  return (
    <MuiAvatar alt={title} src={imgUrl} { ...rest } />
  )
}
