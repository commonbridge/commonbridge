import Box from '@mui/material/Box'

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <Box>
      <h1>
        { title }
      </h1>
    </Box>
  )
}
