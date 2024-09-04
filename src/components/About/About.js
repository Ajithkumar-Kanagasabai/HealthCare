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
                            {/* <Typography sx={{mx: 2, p: 2, textAlign: "center" }}
                                variant='h5'>
                                All-in-One Website Health Solution
                            </Typography> */}

                            <Typography sx={{ color: 'primary.main',  mt:8, mb:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h4'>
                                ABOUT THE LONDON GENERAL PRACTICE
                            </Typography>

                            <Typography
            sx={{
                textAlign: "center", 
                mx: "auto", // Horizontal centering
                maxWidth: "1000px" // Optional: set a max width to control the line length
            }}
            variant='body1' // Change 'p' to 'body1' for valid MUI variant
            >The London General Practice is a renowned private medical practice based on Harley Street in London.
                                <br /><br />
                                    Established in 2005, the practice operates out of state of the art consulting and treatment rooms in the heart of the Harley Street medical district. Since April 2022 the practice is very pleased to be operating as a part of HCA International. <br /><br />

                                The practice has a total of more than 30 staff, including 11 Doctors and two nurses, plus a 24/7 on-call team.<br />      <br/><br/>          
                                </Typography>

                            <Typography sx={{ mb:2, textAlign: "center", fontWeight:'bold' }}
                                variant='h4'>
                                Private GP Services
                            </Typography>

                            <Typography
            sx={{
                textAlign: "center", 
                mx: "auto", // Horizontal centering
                maxWidth: "1000px" // Optional: set a max width to control the line length
            }}
            variant='body1' // Change 'p' to 'body1' for valid MUI variant
            >Our philosophy is to provide swift same-day appointments, with an emphasis on personal, individualised and preventative health care. <br /><br />

            Appointments are usually half an hour, ensuring there is ample opportunity for a thorough examination, understanding of any health issues, and plenty of time for questions.<br /><br />

            The emphasis we place on wellbeing, prevention and the early identification of disease leads us to recommend regular health screening to all our patients. Our screening programmes are bespoke and designed to meet the specific needs of each of our patients.
                                <br /><br />
                                Our location on Harley Street allows us to partner with world class laboratories, diagnostic and scanning providers ensuring high quality fast test results. Our Doctors have strong relationships with the best medical Consultants in every field and work closely with them to ensure our patients get the best care and service.<br/><br />
                                The Practice operates a 24 hour, 365 days a year on-call service for our patients.<br/><br/>
                                Our Doctors are available for home or hotel visits any time of the day or night ensuring The London General Practice provides the best primary medical care in London.<br/><br/><br/>
                            </Typography>

                        </Container>
                    </Box>
                );
            };

            export default About;