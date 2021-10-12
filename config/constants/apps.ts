import { BankDataTypes } from "../datatype";

export const APP_BRAND = "Citra & Dony";
export const APP_DOMAIN = "";

export const APP_SEO = {
  default: {
    title: `${APP_BRAND} - We're getting married`,
    robots: "follow,index",
    description: `${APP_BRAND} is married invitation base on website.`,
    keywords: "married, invitation, together forever",
  },
};

export const APP_CONTENT = {
  bride: {
    man: {
      name: "M.Khairi Usman",
      "family-order": 4,
      image: "/public/image/images.svg"
    },
    woman: {
      name: "Citra Puspita Rinda",
      "family-order": 3,
      image: "/wedding/ico-flower-long-2.svg"
    },
  },
  "brides-parents": {
    man: {
      father: "Turmudi Sujono",
      mother: "Harni Darmawati",
    },
    woman: {
      father: "Mustofa",
      mother: "Mahmidah (Almh)",
    },
  },
  akad: {
    date: "10/30/2021",
    "start-time": "09:00",
    "end-time": "10:00",
    location: "Jl. Baru Poncowati, Lampung Tengah (Rumah mempelai Wanita)",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.294813979658!2d105.18781992996318!3d-4.908310920104136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40a846b0e6d66b%3A0x44c334f9009eb7cb!2sEs%20Cream%20Yono%20Gendong!5e0!3m2!1sid!2sid!4v1633931543502!5m2!1sid!2sid", // https://google-map-generator.com/
  },
  resepsi: {
    date: "10/30/2021",
    "start-time": "10:30",
    "end-time": "Selesai",
    location: "Jl. Baru Poncowati, Lampung Tengah (Rumah mempelai Wanita)",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.294813979658!2d105.18781992996318!3d-4.908310920104136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40a846b0e6d66b%3A0x44c334f9009eb7cb!2sEs%20Cream%20Yono%20Gendong!5e0!3m2!1sid!2sid!4v1633931543502!5m2!1sid!2sid", // https://google-map-generator.com/
  },
  unduh: {
    date: "11/02/2021",
    "start-time": "19:00",
    "end-time": "Selesai",
    location: "Jl. griya Ade Irma 2 Nomor 25 RT 1 RW 10 Rumah Tumbuh (Rumah mempelai Pria)",
    map: "https://maps.google.com/maps?q=idnPrime.com&iwloc=&output=embed", // https://google-map-generator.com/
  },
  "gift-box": {
    other: <any>[],
    bank: <any>[
      {
        name: "MANDIRI",
        "account-number": "1090016837346",
        "account-owner": "M KHAIRI USMAN",
      },
    ],
    bank2: <any>[
      {
        name: "MANDIRI",
        "account-number": "1140017090591",
        "account-owner": "CITRA PUSPITA RINDA",
      },
    ],
  },
};
