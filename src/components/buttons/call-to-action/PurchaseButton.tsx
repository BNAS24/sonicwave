import theme from "@/styles/muiTheme";
import { Button } from "@mui/material";

export const PurchaseButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      Purchase Tickets
    </Button>
  );
};
