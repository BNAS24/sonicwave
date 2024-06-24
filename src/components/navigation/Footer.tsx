import { Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography align="center" sx={{
        fontSize: {
            xs: "1.rem", // 0px
            sm: "", // 600px
            md: "", // 900px
            lg: "", // 1200px
            xl: "", // 1536px    
        }
      }}>Website created Brandon Bradley</Typography>
    </Container>
  );
};
