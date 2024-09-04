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

                            <Typography sx={{ color: 'secondary.main',  mt:8, mb:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h4'>
                                ABOUT THE LONDON GENERAL PRACTICE
                            </Typography>

                            <Typography
            sx={{
                textAlign: "center", 
                mx: "auto", // Horizontal centering
                maxWidth: "1000px",
                fontSize:"20px"
                // Optional: set a max width to control the line length
            }}
            variant='body1' // Change 'p' to 'body1' for valid MUI variant
            >The London General Practice is a renowned private medical practice based on Harley Street in London.
                                <br /><br />
                                    Established in 2005, the practice operates out of state of the art consulting and treatment rooms in the heart of the Harley Street medical district. Since April 2022 the practice is very pleased to be operating as a part of HCA International. <br /><br />

                                The practice has a total of more than 30 staff, including 11 Doctors and two nurses, plus a 24/7 on-call team.<br />      <br/><br/>          
                                </Typography>

                                <Typography sx={{ mb:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h4'>
                                “96% of patients said they would recommend the service to others”
                                </Typography>

                            <Typography sx={{ color: 'secondary.main', mb:2, textAlign: "center", fontWeight:'bold' }}
                                variant='h4'>
                                Why choose The London General Practice?
                            </Typography>
                            <Typography sx={{ my:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h5'>
                                Treating patients as individuals
                            </Typography>

                            <Typography sx={{ textAlign: "center", mx: "auto", maxWidth: "1000px", fontSize:"20px" }}
                            variant='body1'> We recognise that medical consultation and health checks can be stressful for some people. That’s why we treat all patients as individuals and respect them accordingly. <br /><br />

                            Getting to know patients is key to this so that a trusting open rapport can be built, ensuring any worries or concerns are expressed at the earliest opportunity and dealt with accordingly.<br /><br />
                            </Typography>
                            <Typography sx={{ my:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h5'>
                                Direct access to secondary and tertiary care
                            </Typography>

                            <Typography sx={{ textAlign: "center", mx: "auto", maxWidth: "1000px", fontSize:"20px" }}
                            variant='body1'> Where additional expertise is required, our relationship with many of the leading medical specialists is instantly accessible to all of our patients, as is admission to the best private hospitals.
                            <br /><br />
                            </Typography>

                            <Typography sx={{ my:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h5'>
                                The latest technology and first class facilities
                            </Typography>

                            <Typography sx={{ textAlign: "center", mx: "auto", maxWidth: "1000px", fontSize:"20px" }}
                            variant='body1'>Procedures such as scans, cardiac tests, x-rays, audiograms, mammograms and others, can be taken at the time of appointment within the Practice’s own consulting rooms or within the same building.<br /><br />
                            </Typography>

                            <Typography sx={{ my:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h5'>
                                Round the clock care
                            </Typography>

                            <Typography sx={{ textAlign: "center", mx: "auto", maxWidth: "1000px", fontSize:"20px" }}
                            variant='body1'>The London General Practice provides care that is available 365 days a year, including weekends and outside office hours.
                            <br /><br />
                            </Typography>

                            <Typography sx={{ my:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h5'>
                                Complete private healthcare
                            </Typography>

                            <Typography sx={{ textAlign: "center", mx: "auto", maxWidth: "1000px", fontSize:"20px" }}
                            variant='body1'>We can provide treatments and services not currently available on the NHS.
                            <br /><br />
                            </Typography>

                            <Typography sx={{ my:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h5'>
                                A strong and robust approach to Clinical Governance
                            </Typography>

                            <Typography sx={{ textAlign: "center", mx: "auto", maxWidth: "1000px", fontSize:"20px" }}
                            variant='body1'>The London General Practice delivers excellence in patient care through it’s formal Clinical Governance Process. Led by our Governance Lead the Practice formally reviews all aspects of patient care, health and safety, complaints, compliments and incidents every month. These regular sessions are attended by all medical personal employed at the Practice to create an open learning environment for continuous improvement.
                            <br /><br />
                            </Typography>

                            <Typography sx={{ my:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h5'>
                                A positive, proactive approach to wellbeing
                                </Typography>

                                <Typography sx={{ textAlign: "center", mx: "auto", maxWidth: "1000px", fontSize:"20px" }}
                            variant='body1'>From GP appointments to nutrition and lifestyle advice, we have a range of appointments and services available that support you all the way along the health spectrum to advise you how to stay in the best possible shape for work and family life.
                            <br /><br />
                            </Typography>

                            <Typography sx={{ my:4, textAlign: "center", fontWeight:'bold' }}
                                variant='h5'>
                                CONTINUITY OF CARE
                            </Typography>

                            <Typography sx={{ textAlign: "center", mx: "auto", maxWidth: "1000px", fontSize:"20px", mb: 8 }}
                            variant='body1'> At The London General Practice, we believe in supporting our patients throughout their medical journey by delivering safe and effective medical care. <br /><br />

                            We provide rapid diagnostics and ensure referrals, ongoing care and follow up are organised in a timely and effective manner to improve the patient experience. Continuity of care is facilitated by a doctor-led, team-based approach to follow the patient throughout their medical care journey. We promote a proactive approach to healthcare and review our patients regularly to ensure they are moving forward with their prescribed treatment plan, always providing high quality of care.<br /><br />
                            </Typography>


                        </Container>
                    </Box>
                );
            };

            export default About;