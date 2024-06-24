import { Container, Typography } from "@mui/material";
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
                flexDirection: {
                  xs: "column", // 0px
                  sm: "column", // 600px
                  md: section.id % 2 === 0 ? "row" : "row-reverse", // 900px
                  lg: section.id % 2 === 0 ? "row" : "row-reverse", // 1200px
                  xl: section.id % 2 === 0 ? "row" : "row-reverse", // 1536px
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {/*Primary text for section*/}
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignitems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  width: "50%",
                  height: "100%",
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    fontSize: "2.5rem",
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  align="center"
                  sx={{
                    fontSize: "1.5rem",
                  }}
                >
                  {section.description}
                </Typography>
              </Container>

              {/*Media for section*/}
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                {/*Conditionally rending either an image or a video depending on data*/}
                {section.image_src ? (
                  <img
                    alt={section.description}
                    src={section.image_src}
                    height={200}
                    width={300}
                  />
                ) : (
                  <video
                    controls
                    loop
                    autoPlay
                    muted
                    poster="path/to/poster-image.jpg"
                    height={200}
                    width={300}
                  >
                    <source src={section.video_src} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </Container>
            </Container>
          ))
        : null}
    </>
  );
};
