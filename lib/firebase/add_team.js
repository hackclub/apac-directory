const db = require("./firebase");
const _ = require("ramda");

const person = [
  {
    name: "Shubham Gupta",
    role: "lead/member",
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/Shubham.JPG",
    is_lead: true,
    slack_id: "U01F9A5R0R1",
  },
  {
    name: "Keshav Kumar Rohila",
    role: "co-lead/member",
    is_lead: true,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/keshav.png",
    slack_id: "U028APVDDQX",
  },
  {
    name: "Vinay Sharma",
    role: "Secretory/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/vinay.jpg",
    slack_id: "U028WFDPML4",
  },
  {
    name: "Shristi Agarwal",
    role: "Jr. Secretory/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/Shristi.jpg",
    slack_id: "U0293069FBK",
  },
  {
    name: "Manash Khetan",
    role: "Technical head/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/manash.jpg",
    slack_id: "U028RSQ2U5R",
  },
  {
    name: "Shruti Agarwal",
    role: "Web Developer/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/shruti.jpg",
    slack_id: "U029E17C89W",
  },
  {
    name: "Ritika Kumawat",
    role: "App Developer/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/ritika.jpg",
    slack_id: "U028RCQ7S2W",
  },
  {
    name: "Deepak Verma",
    role: "Management Team/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/Deepak.jpg",
    slack_id: "U02B6S2263G",
  },
  {
    name: "Pooja Verma",
    role: "Management Team/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/pooja.jpg",
    slack_id: "U029F3TFX8Q",
  },
  {
    name: "Vikram Kumar",
    role: "Editorial/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/vikram.jpg",
    slack_id: "U029DV9LQRW",
  },
  {
    name: "Ira Goyal",
    role: "Editorial/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/791c28e836cf5ff73626e30139df4cdba450d89e/Hack%20Club%20BKBIET/ira%20Goyal.jpg",
    slack_id: "U02BDJYUBM0",
  },
  {
    name: "Ishan Agarwal",
    role: "Designer/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/791c28e836cf5ff73626e30139df4cdba450d89e/Hack%20Club%20BKBIET/Ishan.jpg",
    slack_id: "slack_id",
  },
  {
    name: "Dheeraj Sharma",
    role: "Designer/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/dheeraj.jpg",
    slack_id: "U028Q9195B4",
  },
  {
    name: "Arjun Sharma",
    role: "Public Relations/member",
    is_lead: false,
    img_url:
      "https://github.com/HackClub-BKBIET/Members-Photos/blob/main/Hack%20Club%20BKBIET/arjun.jpg",
    slack_id: "U029DM7S6GG",
  },
];

const person_2 = [
  {
    name: "Fadhil Abdulla",
    role: "lead",
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/1image.png",
    slack_id: "U01TM2KUPCH",
    is_lead: yes,
  },
  {
    name: "Aditya Praveen",
    role: "member",
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/3image.png",
    slack_id: "U021TQP729K",
    is_lead: no,
  },

  {
    name: " Amarjith Ajayababu T K",
    role: "member",
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/1image.png",
    slack_id: "U025YGHNV6V",
    is_lead: no,
  },

  {
    name: "Basith",
    role: "member",
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/3image.png",
    slack_id: "U021WSW90M8",
    is_lead: no,
  },
];

const add_team = async (club_name, person) =>
  await db
    .collection("clubs")
    .doc(club_name)
    .collection("team")
    .add(person, { merge: true })
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });

person.forEach(async (obj) => {
  await add_team("Hack Club BKBIET", obj);
});

module.exports = add_team;
