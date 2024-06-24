import Logo from "@/components/buttons/Logo";
import { PurchaseButton } from "@/components/buttons/call-to-action/PurchaseButton";
import Container from "@mui/material/Container";

export const Nav = () => {
  return (
    <Container
      maxWidth={false}
      component="nav"
      sx={{
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
        zIndex: 100,
      }}
    >
      <Logo />
      <PurchaseButton />
    </Container>
  );
};
