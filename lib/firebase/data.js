const person_fact = (name, role, img_url) => ({
  name,
  role,
  img_url,
});

const data_fact = {
  logo: "",
  name: "",
  desc: "",
  t_points: 0,
  stats: {
    ships: 0,
    hackathons: 0,
    meetings: 0,
    events: 0,
    points: 0,
  },
};

//ship: 30
// hackathons: 500
// meetings: 50
// events: 200

const team = [
  {
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/0image.png",
    name: "Priya Gupta",
    role: "lead",
  },
  {
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/1image.png",
    name: "Aryan Joshi",
    role: "lead",
  },
  {
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/2image.png",
    name: "Riya Aggarwal",
    role: "member",
  },
  {
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/3image.png",
    name: "Rohtansh Sehgal",
    role: "member",
  },
  {
    img_url: "https://cloud-52f856xi2-hack-club-bot.vercel.app/0image.png",
    name: "Rajeev Dogra",
    role: "lead",
  },
];

const clubs = [
  {
    logo: "https://cloud-4nvqu7g0r-hack-club-bot.vercel.app/0cgchack.png",
    name: "Hack Club CGC",
    desc: "hack club cgc was founded in 2019 with a dream of making a cool tech community in cgc! we are now a happy team of 13 members.",
    ships: 1,
    hackathons: 0,
    meetings: 1,
    events: 0,
    points: 80,
    t_points: 80,
    team,
  },
  {
    logo: "https://cloud-r0dw7pkp2-hack-club-bot.vercel.app/0logo__recovered_.png",
    name: "Hack Club SIAS",
    desc: "hack club sias was founded in 2019 with a dream of making a cool tech community in cgc! we are now a happy team of 13 members.",
    ships: 0,
    hackathons: 0,
    meetings: 1,
    events: 0,
    points: 50,
    t_points: 50,
    team,
  },
  {
    logo: "https://cloud-53n96fj1j-hack-club-bot.vercel.app/0igdp.jpeg",
    name: "Hack Club COET",
    desc: "hack club coet was founded in 2019 with a dream of making a cool tech community in cgc! we are now a happy team of 13 members.",
    ships: 1,
    hackathons: 0,
    meetings: 2,
    events: 0,
    points: 130,
    t_points: 130,
    team,
  },
  {
    logo: "https://cloud-btfq9z0jg-hack-club-bot.vercel.app/0hackclub_bkbiet.png",
    name: "Hack Club BKBIET",
    desc: "hack club bkbiet was founded in 2019 with a dream of making a cool tech community in cgc! we are now a happy team of 13 members.",
    ships: 2,
    hackathons: 0,
    meetings: 0,
    events: 0,
    points: 60,
    t_points: 60,
    team,
  },
  {
    logo: "https://cloud-r89ihrmd4-hack-club-bot.vercel.app/0image.png",
    name: "Hack Club NUV",
    desc: "hack club nuv was founded in 2019 with a dream of making a cool tech community in cgc! we are now a happy team of 13 members.",
    ships: 1,
    hackathons: 0,
    meetings: 3,
    events: 0,
    points: 180,
    t_points: 180,
    team,
  },
  {
    logo: "https://cloud-ie0qixa93-hack-club-bot.vercel.app/0image.png",
    name: "Hack Club DPS",
    desc: "hack club dps was founded in 2019 with a dream of making a cool tech community in cgc! we are now a happy team of 13 members.",
    ships: 3,
    hackathons: 0,
    meetings: 0,
    events: 0,
    points: 90,
    t_points: 90,
    team,
  },
];

module.exports.clubs = clubs;

// team should be another sub_collection
