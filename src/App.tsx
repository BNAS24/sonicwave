import { Nav } from "@/components/navigation/Nav";
import theme from "@/styles/muiTheme";
import "@fontsource/pt-sans";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { SubscribeForm } from "./components/buttons/call-to-action/SubscribeForm";
import { Section } from "./components/layout/Section";
import { sectionMedia } from "./assets/section-media";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />

        {/*Main body of Application*/}
        <Container
          disableGutters={true}
          maxWidth={false}
          component="main"
          sx={{
            position: "relative",
            bottom: "64px",
            display: "flex",
            flexDirection: "column",
            // height: "100%",
            zIndex: 1,
          }}
        >
          {/*Image Containers*/}
          <Container
            disableGutters={true}
            maxWidth={false}
            sx={{
              position: "relative",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // maxWidth: "100%",
              width: "100%",
              height: "100vh",
              paddingX: {
                xs: "3rem", // 0px
                sm: "5rem", // 600px
                md: "5rem", // 900px
                lg: "5rem", // 1200px
                xl: "5rem", // 1536px
              },
              background:
                "url(media/heroimage/concert-official.webp) center/cover no-repeat ",
              overflowX: "hidden",
            }}
          >
            <Typography
              align="center"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "3.5rem", // 0px
                  sm: "4.5rem", // 600px
                  md: "5rem", // 900px
                  lg: "5.4rem", // 1200px
                  xl: "6rem", // 1536px
                },
                zIndex: 1,
              }}
            >
              Sonicwave
            </Typography>
            <Typography
              align="center"
              sx={{
                fontSize: {
                  xs: "1rem", // 0px
                  sm: "1.2rem", // 600px
                  md: "1.3rem", // 900px
                  lg: "1.6rem", // 1200px
                  xl: "2rem", // 1536px
                },
                zIndex: 1,
              }}
            >
              Where sound meets soul, and the beats never stop. Dive into a
              world of electrifying performances, unforgettable moments, and
              pure musical magic. This is not just a festival, it's a movement.
            </Typography>
            <Typography
              align="center"
              sx={{
                mt: "2rem",
                fontSize: {
                  xs: "0.92rem", // 0px
                  sm: "1.1rem", // 600px
                  md: "1.3rem", // 900px
                  lg: "1.4rem", // 1200px
                  xl: "1.7rem", // 1536px
                },
                zIndex: 1,
              }}
            >
              Get updates on upcoming events and more!
            </Typography>

            {/*Input text field for email address*/}
            <SubscribeForm />
          </Container>

          {/*Information about events container*/}
          <Container
            disableGutters={true}
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // gap: "8rem",
              // mt: "6rem",
            }}
          >
            <Section sections={sectionMedia} />
          </Container>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
