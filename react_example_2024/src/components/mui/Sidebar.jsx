import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box bgcolor={'yellow'} flex={1} sx={{display:{xs:'none', sm:'block'}}}>Sidebar</Box>
  )
}

export default Sidebar