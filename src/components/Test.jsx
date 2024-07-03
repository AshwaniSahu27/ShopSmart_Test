import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Link,
} from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { Box, Button, Typography, Link, Container, Grid, IconButton } from '@mui/material';



function Test() {
  
  const faqs = [
    {
      question: "What do I need to get started with Deliver My Tune?",
    },
    {
      question: "How does Deliver My Tune work?",
    },
  ];

  return (
    <>
      <Box minHeight="100vh">
        <Box
          height="40vh"
          bgcolor="#FFFFE4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h1" fontWeight="bold" fontSize="3rem">
            Frequently Asked Questions
          </Typography>
        </Box>

        <Box ml="7rem" mr="7.5rem" mt="4rem">
          <Box mb={4} position="relative">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search your question..."
              sx={{
                height: "45px",
                "& .MuiOutlinedInput-root": {
                  height: "45px",
                  borderRadius: "4px",
                },
              }}
            />
          </Box>

          <Box display="flex" gap={10} mt={2}>
            <Box width="25%">
              <List>
                {[
                  "General Questions",
                  "Pricing & Payments",
                  "Reports",
                  "Partners Related",
                  "Promotions",
                  "UPC & ISRC codes",
                  "Cancelling & Refunds",
                  "Mastering",
                ].map((text) => (
                  <ListItem key={text} disablePadding>
                    <Link
                      display="flex"
                      justifyContent="space-between"
                      width="100%"
                      underline="none"
                      color="black"
                    >
                      <ListItemText primary={text} />
                      <IconButton>
                        <IoIosArrowForward size="1.1vw" />
                      </IconButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box width="75%">
              <Box borderBottom={1} borderColor="grey.300" py={2}>
                <Typography variant="h6">General Questions</Typography>
              </Box>

              <Box borderBottom={1} borderColor="grey.300" py={1}>
                <Button
                  fullWidth
                  variant="text"
                  endIcon={<span style={{ fontSize: "1.5rem" }}>+</span>}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "left",
                    textTransform: "none",
                    padding: "0",
                    color: "#333",
                  }}
                >
                  <Typography variant="body1" fontWeight="medium">
                    Q. What do I need to get started with Deliver My Tune?
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', justifyContent: 'space-between', bgcolor: 'black', color: 'white', px: 5 }}>
      {/* Top Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', py: 4 }}>
        <Typography variant="h1" sx={{ mb: 2, fontSize: '60px', fontWeight: 'bold' }}>
          What are you waiting for?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, fontSize: '22px', color: '#FFFFFF' }}>
          Let Deliver My Tune help you boost your music career
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" sx={{ bgcolor: 'gray', color: 'white', borderRadius: '9999px', px: 3, py: 1 }}>Distribute Now</Button>
          <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', borderRadius: '9999px', px: 3, py: 1 }}>Contact us</Button>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box component="footer" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'orange' }}>
                DELIVER MY TUNE
                <Typography variant="body2" sx={{ color: 'white' }}>Let the world know you</Typography>
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                <IconButton href="#" sx={{ color: 'white' }}><FaInstagram /></IconButton>
                <IconButton href="#" sx={{ color: 'white' }}><FaFacebookF /></IconButton>
                <IconButton href="#" sx={{ color: 'white' }}><FaTwitter /></IconButton>
                <IconButton href="#" sx={{ color: 'white' }}><FaGithub /></IconButton>
                <IconButton href="#" sx={{ color: 'white' }}><FaLinkedinIn /></IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                <Link href="#" color="inherit" underline="hover">Home</Link>
                <Link href="#" color="inherit" underline="hover">Pricing</Link>
                <Link href="#" color="inherit" underline="hover">Blog</Link>
                <Link href="#" color="inherit" underline="hover">Queries</Link>
                <Link href="#" color="inherit" underline="hover">About</Link>
                <Link href="#" color="inherit" underline="hover">Stores</Link>
                <Link href="#" color="inherit" underline="hover">FAQs</Link>
                <Link href="#" color="inherit" underline="hover">Contact</Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
            <Grid item>
              <Typography variant="body2">&copy; Copyright 2022, All Rights Reserved</Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                <Link href="#" color="inherit" underline="hover">Terms of Service</Link>
                <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
                <Link href="#" color="inherit" underline="hover">Sitemap</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
        </Box>




        {/* <div className="flex min-h-screen flex-col justify-between bg-black px-40 text-white">
          {/* Top Section */}
          <div className="flex flex-col items-center py-16 text-center">
            <h1 className="mb-4 text-[60px] font-bold">
              What are you waiting for?
            </h1>
            <p className="mb-8 text-[22px] text-[#FFFFFF]">
              Let Deliver My Tune help you boost your music career
            </p>
            <div className="flex space-x-4">
              <button className="rounded-full bg-gray-600 px-4 py-2 text-white">
                Distribute Now
              </button>
              <button className="rounded-full bg-white px-4 py-2 text-black">
                Contact us
              </button>
            </div>
          </div>

          {/* Footer Section */}
           
          <footer className="flex flex-col items-center bg-black py-8   text-white">
            <div className="flex justify-between items-center w-full">

            
            <div>
              <div>
                <div className="mb-4 text-2xl font-bold text-orange-500">
                  DELIVER MY TUNE
                  <div className="text-sm text-white">
                    Let the world know you
                  </div>
                </div>
              </div>
              <div className="mb-4 flex text-[1.2vw]">
                <a href="#" className="mx-2 text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="mx-2 text-white">
                  <FaFacebookF  />
                </a>
                <a href="#" className="mx-2 text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="mx-2 text-white">
                  <FaGithub />
                </a>
                <a href="#" className="mx-2 text-white">
                  <FaLinkedinIn  />
                </a>
              </div>
            </div>

            <div className="mb-4 w-[20%] flex flex-wrap justify-center">
              <a href="#" className="mx-2 text-white">
                Home
              </a>
              <a href="#" className="mx-2 text-white">
                Pricing
              </a>
              <a href="#" className="mx-2 text-white">
                Blog
              </a>
              <a href="#" className="mx-2 text-white">
                Queries
              </a>
              <a href="#" className="mx-2 text-white">
                About
              </a>
              <a href="#" className="mx-2 text-white">
                Stores
              </a>
              <a href="#" className="mx-2 text-white">
                FAQs
              </a>
              <a href="#" className="mx-2 text-white">
                Contact
              </a>
            </div>

            </div>

           <div className="flex justify-between w-full">
            <div className="mb-4 text-sm">
              &copy; Copyright 2022, All Rights Reserved
            </div>
            <div className="flex flex-wrap justify-center text-sm">
              <a href="#" className="mx-2 text-white">
                Terms of Service
              </a>
              <a href="#" className="mx-2 text-white">
                Privacy Policy
              </a>
              <a href="#" className="mx-2 text-white">
                Sitemap
              </a>
            </div>
            </div>

          </footer>
        {/* </div> */} */

      </Box>
    </>



    // <div className="min-h-screen">

    //   <div className="h-[360px] bg-[#FFFFE4] flex items-center justify-center">
    //     <h1 className="text-[4rem] font-bold">Frequently Asked Questions</h1>
    //   </div>

    //   <div className="ml-[7rem] mr-[7.5rem] mt-[4rem]">
    //     <div className="relative mb-4">
    //       <input
    //         type="text"
    //         placeholder="Search your question..."
    //         className="w-full h-[45px] rounded-md border border-gray-300 p-3"
    //       />

    //     </div>
    //     <div className="flex gap-10 mt-8">

    //       <div className="w-[20%]">
    //         <ul className="space-y-5">
    //           <li className="flex items-center  justify-between">
    //             <button className="text-left font-medium ">
    //               General Questions
    //             </button>
    //             <span >  <IoIosArrowForward size="1.1vw" /></span>
    //           </li>
    //           <li className="flex justify-between">
    //             <button className="text-left">Pricing & Payments</button>
    //             <span > <IoIosArrowForward size="1.1vw" /> </span>
    //           </li>
    //           <li className="flex items-center  justify-between">
    //             <button className="text-left flex items-center gap-10">Reports</button>
    //             <span > <IoIosArrowForward size="1.1vw" /> </span>
    //           </li>
    //           <li className="flex items-center  justify-between">
    //             <button className="text-left flex items-center gap-10">Partners Related</button>
    //             <span > <IoIosArrowForward size="1.1vw" /> </span>
    //           </li>
    //           <li className="flex items-center  justify-between">
    //             <button className="text-left flex items-center gap-10">Promotions</button>
    //             <span > <IoIosArrowForward size="1.1vw" /> </span>
    //           </li>
    //           <li className="flex items-center  justify-between">
    //             <button className="text-left flex items-center gap-10">UPC & ISRC codes</button>
    //             <span > <IoIosArrowForward size="1.1vw" /> </span>
    //           </li>
    //           <li className="flex items-center  justify-between">
    //             <button className="text-left flex items-center gap-10">Cancelling & Refunds</button>
    //             <span > <IoIosArrowForward size="1.1vw" /> </span>
    //           </li>
    //           <li className="flex items-center  justify-between">
    //             <button className="text-left flex items-center gap-10">Mastering</button>
    //             <span > <IoIosArrowForward size="1.1vw" /> </span>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className=" w-[80%]">

    //          <div className="border-b text-2xl border-gray-200 pb-5 w-full">
    //          General Questions
    //          </div>

    //           <div className="border-b border-gray-200 py-4 w-full">
    //             <button
    //               className="flex w-full items-center justify-between text-left"
    //             >
    //               <span className="text-sm text-[#333333] font-medium">Q. What do I need to get started with Deliver My Tune?</span>
    //               <span className="text-xl">+</span>
    //             </button>

    //           </div>
    //           <div className="border-b border-gray-200 py-4 w-full">
    //             <button
    //               className="flex w-full items-center justify-between text-left"
    //             >
    //               <span className="text-sm text-[#333333] font-medium">Q. How does Deliver My Tune work?</span>
    //               <span className="text-xl">+</span>
    //             </button>

    //           </div>

    //       </div>

    //     </div>
    //   </div>

    // </div>
  );
}

export default Test;
