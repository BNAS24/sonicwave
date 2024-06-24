import { Container, Typography } from "@mui/material";

export const Section = ({ sections }: any) => {
  return (
    <>
      {sections
        ? sections.map((section) => (
            // Main container
            <Container
              key={section.id}
              disableGutters={true}
              maxWidth={false}
              sx={{
                flexShrink: 0,
                display: "flex",
                flexDirection: {
                  xs: "column", // 0px
                  sm: "column", // 600px
                  md: "row", // 900px
                  lg: "row", // 1200px
                  xl: "row", // 1536px
                },
                width: "100vw",
                height: "65%",
              }}
            >
              {/*Primary text for section*/}
              <Container
                sx={{
                  width: "50%",
                  height: "100%",
                }}
              >
                <Typography>{section.title}</Typography>
                <Typography>{section.description}</Typography>
              </Container>

              {/*Media for section*/}
              <Container
                sx={{
                  width: "50%",
                  height: "100%",
                }}
              >
                
                {/*Conditionally rending either an image or a video depending on data*/}
                {section.image_src ? (
                  <img alt={section.description} src={section.image_src} />
                ) : (
                  <video controls loop muted poster="path/to/poster-image.jpg">
                    <source src={section.video_src} type="video/mp4" />
                  </video>
                )}
              </Container>
            </Container>
          ))
        : null}
    </>
  );
};
