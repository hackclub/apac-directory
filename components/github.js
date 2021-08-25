/**@jsxImportSource theme-ui*/

import { Image } from "theme-ui";

// Github Logo

const Github = () => {
  return (
    <Image
      as="a"
      href="https://github.com/hackclub/leaderboard"
      alt="github logo"
      sx={{
        zIndex: 1000,
        display: "block",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: 60,
        height: 60,
        textDecoration: "none",
        backgroundImage:
          "url(https://cloud-eds3tn6zm-hack-club-bot.vercel.app/0github.png)",
        backgroundSize: "cover",
      }}
    />
  );
};

export default Github;
