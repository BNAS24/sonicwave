import { Box, Container, Typography } from "@mui/material";
import { sectionData } from "@/types/interfaces/sectionData";

export const Section = ({ sections }: { sections: sectionData[] }) => {
  return (
    <>
      {sections
        ? sections.map((section) => (
            // Main container
            <Container
              key={section.id}
              disableGutters={true}
              maxWidth={false}
              component="section"
              sx={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                minHeight: "100vh",
                gap: "1.5rem",
                scrollSnapAlign: "start",
              }}
            >
              {/*Main content container*/}
              <Container
                maxWidth={false}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column", // 0px
                    sm: "column", // 600px
                    md: section.id % 2 === 0 ? "row" : "row-reverse", // 900px
                    lg: section.id % 2 === 0 ? "row" : "row-reverse", // 1200px
                    xl: section.id % 2 === 0 ? "row" : "row-reverse", // 1536px
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                {/*Primary text for section*/}
                <Container
                  disableGutters={true}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignitems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    width: {
                      xs: "100%", // 0px
                      sm: "100%", // 600px
                      md: "50%", // 900px
                      lg: "50%", // 1200px
                      xl: "50%", // 1536px
                    },
                    height: {
                      xs: "50%", // 0px
                      sm: "50%", // 600px
                      md: "100%", // 900px
                      lg: "100%", // 1200px
                      xl: "100%", // 1536px
                    },
                  }}
                >
                  <Typography
                    align="center"
                    // noWrap
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "4rem", // 0px
                        sm: "4rem", // 600px
                        md: "4.5rem", // 900px
                        lg: "5rem", // 1200px
                        xl: "5rem", // 1536px
                      },
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    align="center"
                    sx={{
                      fontSize: {
                        xs: "1.1rem", // 0px
                        sm: "1.2rem", // 600px
                        md: "1.4rem", // 900px
                        lg: "1.6rem", // 1200px
                        xl: "1.6rem", // 1536px
                      },
                    }}
                  >
                    {section.description}
                  </Typography>
                </Container>

                {/*Media for section*/}
                <Container
                  disableGutters={true}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: {
                      xs: "100%", // 0px
                      sm: "100%", // 600px
                      md: "50%", // 900px
                      lg: "50%", // 1200px
                      xl: "50%", // 1536px
                    },
                    height: {
                      xs: "50%", // 0px
                      sm: "50%", // 600px
                      md: "100%", // 900px
                      lg: "100%", // 1200px
                      xl: "100%", // 1536px
                    },
                    overflow: "hidden",
                  }}
                >
                  <Container
                    disableGutters={true}
                    maxWidth={false}
                    sx={{
                      aspectRatio: "4/3",
                      position: "relative",
                    }}
                  >
                    {/*Conditionally rending either an image or a video depending on data*/}
                    {section.image_src ? (
                      <Box
                        component="img"
                        alt={section.description}
                        src={section.image_src}
                        style={{ height: "100%", width: "100%" }}
                      />
                    ) : (
                      <video
                        loop
                        autoPlay
                        muted
                        preload="auto"
                        playsInline
                        // poster="path/to/poster-image.jpg"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <source src={section.video_src} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </Container>
                </Container>
              </Container>
            </Container>
          ))
        : null}
    </>
  );
};
