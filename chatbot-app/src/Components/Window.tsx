import { Box, Container, createTheme, ThemeProvider, Typography } from '@mui/material'
import { SiChatbot } from 'react-icons/si'

const Window = () => {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#4b74f3',
            dark: '#4b84ec',
          },
        },
      })
  return (
    <Container maxWidth="sm">
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '30vw',
          height: '80vh',
          borderRadius: 7,
          padding:'20px',
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        <Box 
        sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            gap:'10px',
            padding:'15px 30px',
        }
        }
        >
        <SiChatbot size={'60px'} color='#fff'/> 
        
        <Box>
        <Typography variant="h4" color='#fff'
        fontFamily={'lexend'} fontWeight={500} marginBottom={'5px'} textAlign={'justify'} fontSize={'24px'} lineHeight={'20px'}
        >
       ChatBot
     </Typography>
     <Typography variant="caption" color='#bbc0ff' gutterBottom sx={{ display: 'block' }}>
        You can ask me anything
     </Typography>
        </Box>
        
        </Box>
        
      </Box>
    </ThemeProvider>

</Container>
  )
}

export default Window