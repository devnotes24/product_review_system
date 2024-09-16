import { Typography, Container, Box } from '@mui/material';
import { useTheme } from '@emotion/react';

function AboutPage() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={{ mb: 4 , mt : 2}}>
      <Container maxWidth="lg">
        
      <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            mb: 4,
            fontWeight: 700,
            // color: isDarkMode ? '#b3b3b3' : '#333',
            color : '#384B70'
          }}
        >
          About Us
        </Typography>

        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            mb: 2,
            color: '#555',
            maxWidth: 1100,
            mx: 'auto',
            lineHeight: 1.4,
            fontSize : {sx : "20px" , sm : "28px"}
          }}
        >
            We are passionate about providing a transparent and trustworthy platform for consumers and brands alike. Our Product Review System is designed to empower you with honest and detailed feedback on products you love or are considering purchasing.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            mb: 2,
            color: '#555',
            maxWidth: 1100,
            mx: 'auto',
            lineHeight: 1.4,
            fontSize : {sx : "20px" , sm : "28px"}
          }}
        >
          Founded with the vision of enhancing the shopping experience, our platform is built on the principles of integrity, clarity, and community. We believe that every voice matters, and through our system, we aim to create a space where customers can share their experiences and make informed decisions based on real-world insights.

        </Typography>

        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            mb: 4,
            fontWeight: 700,
            // color: isDarkMode ? '#b3b3b3' : '#333',
            color : '#384B70'
          }}
        >
          Our Mission
        </Typography>

        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            mb: 2,
            color: '#555',
            maxWidth: 1100,
            mx: 'auto',
            lineHeight: 1.4,
            fontSize : {sx : "20px" , sm : "28px"}
          }}
        >
          Our mission is to revolutionize the way people make purchasing decisions by providing a platform that champions transparency, reliability, and user-driven insights.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            mb: 2,
            // color: '#555',
            maxWidth: 1100,
            mx: 'auto',
            lineHeight: 1.4,
            fontSize : {sx : "20px" , sm : "28px"},
            color: isDarkMode ? '#b3b3b3' : '#333',
          }}
        >
          Together, Let’s Make Informed Choices and Elevate the Shopping Experience!
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutPage;














// import { Box, Typography, Container, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
// import ContactMail from '@mui/icons-material/ContactMail';
// import LocationOn from '@mui/icons-material/LocationOn';
// import Phone from '@mui/icons-material/Phone';

// import { useTheme } from '@emotion/react';
// import { getToken } from '../services/tokenService';

// const contactInfo = [
//   { icon: <Phone />, text: '+1-234-567-890' },
//   { icon: <ContactMail />, text: 'info@example.com' },
//   { icon: <LocationOn />, text: '1234 Disposal St, City, Country' },
// ];

// function AboutPage() {
//   const theme = useTheme();
//   const isDarkMode = theme.palette.mode === 'dark';
//   const token = getToken();
//   console.log(token);
//   return (
//     <Box sx={{mb : 4}}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h2"
//           component="h1"
//           align="center"
//           sx={{
//             mb: 2,
//             mt : 1,
//             fontWeight: 'bold',
//             color: isDarkMode ? '#e6e6e6' : '#333',
//             textTransform: 'uppercase',
//             letterSpacing: 1.5,
//             fontSize : {xs: "36px" , sm : "42px" , md : "48px"}
//           }}
//         >
//           About Us
//         </Typography>

//         <Typography
//           variant="h6"
//           component="p"
//           align="center"
//           sx={{
//             mb: 2,
//             color: '#555',
//             maxWidth: 700,
//             mx: 'auto',
//             lineHeight: 1.4,
//           }}
//         >
//           Welcome to our platform, where we help you find the best locations for disposing of various types of waste. Our service provides valuable information on where to dispose of wood, plastic, electronic, and medical waste. We connect you with nearby disposal centers to make recycling and waste management easier and more efficient. Your contributions help us keep the environment clean and sustainable.
//         </Typography>

//         <Typography
//           variant="h4"
//           component="h2"
//           align="center"
//           sx={{
//             mb: 4,
//             fontWeight: 'bold',
//             color: isDarkMode ? '#b3b3b3' : '#333',
//           }}
//         >
//           Contact Us
//         </Typography>

//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 borderRadius: 2,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 height: '100%',
//                 textAlign: 'center',
//               }}
//             >
//               <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
//                 Get in Touch
//               </Typography>
//               <List>
//                 {contactInfo.map((item, index) => (
//                   <ListItem key={index}>
//                     <ListItemText
//                       primary={
//                         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                           <Box sx={{ mr: 1 }}>{item.icon}</Box>
//                           {item.text}
//                         </Box>
//                       }
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 borderRadius: 2,
//                 height: '100%',
//                 textAlign: 'center',
//               }}
//             >
//               <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
//                 Our Mission
//               </Typography>
//               <Typography variant="body1" sx={{ mb: 2 }}>
//                 Our goal is to provide accurate and accessible information on waste disposal. We aim to make it easy for individuals and businesses to find proper disposal facilities for different types of waste. By using our platform, you contribute to a cleaner and healthier environment.
//               </Typography>
//               <Typography variant="body1">
//                 Join us in our mission to improve waste management practices and promote sustainability in your community.
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default AboutPage;
