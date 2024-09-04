import React from 'react';
import { Avatar, Box, Chip, colors, Container, Divider, Grid, Stack, styled, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';


const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

// copyright function for generate year automatically
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright ©'}
            {new Date().getFullYear()}
            <strong><a className='text-style' href="https://github.com/Foy5al" target="_blank" rel="noreferrer noopener"> The London General Practice</a></strong>{', Private GP Clinic London'}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <footer>
            <Box className='sticky-container' sx={{ bgcolor: 'primary.main', color: 'text.secondary', pb: 2, top: 'auto' }}>
                <Container maxWidth="xl">
                    <Grid container
                        spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid sx={{ m: 'auto' }} item xs={12} sm={6} md={4}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    sx={{ mr: 2, mb:2, display: { xs: 'flex', md: 'flex' }, color:'text.secondary', fontWeight:'bold' }}
                                > 
                                {/* <Avatar sx={{ mt: 1, mb: 1, mr: 1, bgcolor: 'white' }}>
                                        <HealingTwoToneIcon
                                            color='primary'
                                            fontSize='large' />
                                    </Avatar> */}
                                    The London General Practice
                                </Typography>
                                <Divider />
                            </Box>
                            <a href='https://www.google.com/maps/place/The+London+General+Practice/@51.5218873,-0.1503944,17z/data=!3m1!4b1!4m6!3m5!1s0x417031500ae8ce23:0xbb8948dac948f2c!8m2!3d51.5218873!4d-0.1478195!16s%2Fg%2F1q6j7ggy7?entry=ttu&g_ep=EgoyMDI0MDkwMi4wIKXMDSoASAFQAw%3D%3D' target='blank' style={{textDecoration: "none"}}>
                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mt: 1, bgcolor: 'secondary.main', color:'white' }}>
                                    <LocationOnIcon />
                                </Avatar>
                                <Typography
                                sx={{
                                    color: 'black',
                                    
                                    cursor: 'pointer',
                                    
                                }}
                                >
                                114a Harley Street London W1G 7JL
                                </Typography>
                            </Stack >
                            </a>

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, mt: 1, bgcolor: 'secondary.main', color:'white'  }}>
                                    <EmailIcon />
                                </Avatar>
                                <a className='text-style' href="mailto:info@thelondongeneralpractice.com">
                                info@thelondongeneralpractice.com                               
                                </a>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, bgcolor: 'secondary.main', color:'white'  }}>
                                    <CallIcon />
                                </Avatar>
                                <a className='text-style' href="tel:+44 (0)207 935 1000">
                                +44 (0)207 935 1000
                                </a>
                            </Stack >


                        </Grid>

                        {/* ----------service part ---------------*/}
                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip sx={{bgcolor:'secondary.main', color:'white', fontWeight:'bold'}} label="Our Services" />
                                </Divider>
                            </Root>

                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/doctors#doctors' color='inherit'>Find a Doctor</HashLink></Box>

                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/services#services' color='inherit'>All services</HashLink></Box>

                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/appointment#appointment' color='inherit'>Make An Appointment</HashLink></Box>

                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/register' color='inherit'>Register For Service </HashLink></Box>
                        </Grid>

                        {/* ----------social media part ------------*/}

                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip sx={{bgcolor:'secondary.main', color:'white', fontWeight:'bold'}}  label="Find us on social media" />
                                </Divider>
                            </Root>

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, mt: 1, bgcolor: 'secondary.main', color:'white'  }}>
                                    <FacebookIcon />
                                </Avatar>
                                <a className='text-style' href="https://www.facebook.com/Londongeneralpractice/" target="_blank" rel="noopener noreferrer" >
                                    Facebook
                                </a>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, bgcolor: 'secondary.main', color:'white'  }}>
                                    <YouTubeIcon />
                                </Avatar>
                                <a className='text-style' href="https://www.youtube.com/channel/UCXwDGzrTlOMuEd7H-y513Mg/videos" target="_blank" rel="noopener noreferrer" >
                                    Youtube
                                </a>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, bgcolor: 'secondary.main', color:'white'  }}>
                                    <TwitterIcon />
                                </Avatar>
                                <a className='text-style' href="https://x.com/i/flow/login?redirect_after_login=%2Ftlgp_doc" target="_blank" rel="noopener noreferrer" >
                                    Twitter
                                </a>
                            </Stack >


                        </Grid>

                    </Grid>
                    <Divider sx={{ mb: 2 }} />
                    <Copyright sx={{ mt: 5 }} />

                </Container>
            </Box>

        </footer >
    );
};

export default Footer;