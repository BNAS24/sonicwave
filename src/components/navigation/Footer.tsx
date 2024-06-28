import { Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "64px",
        width: "100%",
      }}
    >
      <Typography
        align="center"
        sx={{
          fontSize: {
            xs: "1rem", // 0px
            sm: "", // 600px
            md: "", // 900px
            lg: "", // 1200px
            xl: "", // 1536px
          },
          scrollSnapAlign: "end",
        }}
      >
        Website created by Brandon Bradley
      </Typography>
    </Container>
  );
};
