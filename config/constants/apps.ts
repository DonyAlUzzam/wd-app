import { BankDataTypes } from "../datatype";

export const APP_BRAND = "Nurul & Avie";
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
      name: "Avie Nur Darojat",
      "family-order": 2,
      image: "/public/image/images.svg"
    },
    woman: {
      name: "Nurul Pratiwi",
      "family-order": 3,
      image: "/wedding/ico-flower-long-2.svg"
    },
  },
  "brides-parents": {
    man: {
      father: "Sardi (Alm)",
      mother: "Sunarni (Almh)",
    },
    woman: {
      father: "Priyanto, S.Pd",
      mother: "Hj. Wahyu Supriyati",
    },
  },
  akad: {
    date: "11/23/2022",
    "start-time": "10:00",
    "end-time": "Selesai",
    location: "Desa Muara Harapan (Unit 6) Blok C Dusun III. Kab. Muara Enim (Rumah Mempelai Wanita)",
    map: "#", // https://google-map-generator.com/
  },
  resepsi: {
    date: "11/24/2021",
    "start-time": "09:00",
    "end-time": "Selesai",
    location: "Desa Muara Harapan (Unit 6) Blok C Dusun III. Kab. Muara Enim (Rumah Mempelai Wanita)",
    map: "#", // https://google-map-generator.com/
  },
  // unduh: {
  //   date: "11/02/2021",
  //   "start-time": "19:00",
  //   "end-time": "Selesai",
  //   location: "Jl. griya Ade Irma 2 Nomor 25 RT 1 RW 10 Rumah Tumbuh (Rumah mempelai Pria)",
  //   map: "https://maps.google.com/maps?q=idnPrime.com&iwloc=&output=embed", // https://google-map-generator.com/
  // },
  "gift-box": {
    other: <any>[],
    bank: <any>[
      {
        name: "BRI",
        "account-number": "573001034570536",
        "account-owner": "AVIE BUR DAROJAT",
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
