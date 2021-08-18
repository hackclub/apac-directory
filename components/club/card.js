/**@jsxImportSource theme-ui */

import { Box, Flex } from "theme-ui";
import ReactPlayer from "react-player";

const Component = ({ text, video_url = undefined, video_poster, img_url }) => {
  return (
    <Box
      sx={{
        bg: "steel",
        color: "white",
        borderRadius: [10],
        border: "3px solid",
        borderColor: "purple",
        my: [4],
        px: [3],
        py: video_url ? [3] : [1],
        mx: [3, 2],
        transition: "0.5s",
        position: "relative",
        ":hover": {
          transform: [null, "rotate(-5deg) scale(1.1)"],
          transition: "0.5s",
        },
      }}
    >
      {video_url ? (
        <video
          sx={{ width: "100%", height: "100%", borderRadius: [10] }}
          controls
          poster={video_poster}
        >
          <source src="video_cgc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p sx={{ fontSize: [1], mb: [3] }}>{text}</p>
      )}

      {img_url ? (
        <img
          src={img_url}
          sx={{ width: "100%", height: "100%", borderRadius: [10] }}
        />
      ) : null}
    </Box>
  );
};

export default Component;
