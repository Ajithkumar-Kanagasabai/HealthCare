import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Box id='about' sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '70vh'
        }}
            points="0,100 50,00, 100,100" >
            <Container maxWidth="xl">
                <Typography sx={{ mx: 2, p: 2, textAlign: "center", fontWeight:'bold'  }}
                    variant='h5'>
                    All-in-One Website Health Solution
                </Typography>

                <Typography sx={{ color: 'primary.main', my:2, textAlign: "center", fontWeight:'bold' }}
                    variant='h4'>
                    ABOUT THE LONDON GENERAL PRACTICE
                </Typography>

                <Typography
                sx={{ my: 4,
                    textAlign: "center", 
                    mx: "auto",
                    maxWidth: "1000px",
                    fontSize:"20px"
                }}
                variant='body1'
                >The London General Practice is a renowned private medical practice based on Harley Street in London.
                    <br /><br />
                        Established in 2005, the practice operates out of state of the art consulting and treatment rooms in the heart of the Harley Street medical district. Since April 2022 the practice is very pleased to be operating as a part of HCA International. <br /><br />
                    The practice has a total of more than 30 staff, including 11 Doctors and two nurses, plus a 24/7 on-call team.
                    </Typography>
            </Container>
        </Box>
    );
};

export default About;