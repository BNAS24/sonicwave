import theme from "@/styles/muiTheme";
import { Button, Container } from "@mui/material";

export const SubscribeForm = () => {
  return (
    <Container
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        height: "48px",
        mt: "1rem",
        zIndex: 1,
      }}
    >
      <input
        id="enter-email-input"
        name="email-input"
        type="text"
        title="textfield"
        placeholder="Enter Email Address"
      />
      <Button
        variant="contained"
        sx={{
          height: "32px",
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        Subscribe
      </Button>
    </Container>
  );
};
