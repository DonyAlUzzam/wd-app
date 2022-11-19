import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import AOS from "aos";
import Image from "next/image";
// Components
import Layout from "../components/templates";
import { Gap } from "../components/atoms";
import ReactPlayer from "react-player";

import {
  SectionHero,
  SectionMempelai,
  SectionAcara,
  SectionCountdown,
  SectionUcapan,
  SectionSendGift,
} from "../components/organisms/homepage";
// Configs
import { APP_SEO } from "../config";

const divStyle = {
  display: "none !important",
};

const Home: NextPage = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      {/* SEO */}
      <Head>
        <title>{APP_SEO.default.title}</title>
        <meta name="robots" content={APP_SEO.default.robots} />
        <meta name="description" content={APP_SEO.default.description} />
        <meta name="keywords" content={APP_SEO.default.keywords} />
      </Head>

      {/* Content */}
      <>
        <Gap height="h-4 sm:h-14" />
        <SectionHero />
        <Gap height="h-32 sm:h-52" />
        <SectionMempelai />
        <Gap height="h-32" />
        <SectionAcara />
        <Gap height="h-32" />
        <SectionCountdown />
        <Gap height="h-32" />
        <SectionUcapan />
        <Gap height="h-32" />
        <SectionSendGift />
        <ReactPlayer
        // url="https://j.top4top.io/m_2110cbrrh1.mp3"
        url="/music/m-1.mp3"
        playing={active}
        controls={true}
        style={divStyle}
      />
       <button className="fixed bottom-10 right-0 bg-transparent" type="button" onClick={handleClick} >
         {
         active ? <Image src="/images/mic-on.svg" alt="" width={80} height={80}/> 
         : (<Image src="/images/mic.svg" alt="" width={80} height={80}/>)
         }
        </button> 
      </>

      <>
        <div className="absolute -top-80 -right-36 sm:right-10" style={{ zIndex: -1 }}>
          <Image alt="img" src="/images/flower-one.svg" width={254} height={800} />
        </div>

        <div className="absolute top-80 -left-36 sm:-left-5" style={{ zIndex: -1 }}>
          <Image alt="img" src="/images/flower-one.svg" width={254} height={800} />
        </div>

        <div className="absolute top-1/3 -right-40 sm:-right-10 rotate-180" style={{ zIndex: -1 }}>
          <Image alt="img" src="/images/flower-one.svg" width={254} height={800} />
        </div>

        <div className="flex flex-col absolute -left-36 sm:left-5" style={{ top: "calc(50% - 500px)", zIndex: -1 }}>
          <Image alt="img" src="/images/flower-three.svg" width={104} height={109} />
        </div>

        <div className="flex flex-col absolute -left-28 sm:left-28" style={{ top: "calc(50% - 300px)", zIndex: -1 }}>
          <Image alt="img" src="/images/flower-three.svg" width={139} height={146} />
        </div>

        <div className="flex flex-col absolute top-1/2 -left-28 sm:-left-5" style={{ zIndex: -1 }}>
          <Image alt="img" src="/images/flower-two.svg" width={180} height={170} />
        </div>

        <div className="flex flex-col absolute -right-10 sm:right-28" style={{ top: "calc(75% - 300px)", zIndex: -1 }}>
          <Image alt="img" src="/images/leaf-two.svg" width={91} height={97} />
        </div>

        <div className="flex flex-col absolute top-3/4 -right-10 sm:right-5" style={{ zIndex: -1 }}>
          <Image alt="img" src="/images/leaf-one.svg" width={172} height={182} />
        </div>

        <div className="flex flex-col absolute bottom-80 -left-20 sm:left-56" style={{ zIndex: -1 }}>
          <Image alt="img" src="/images/flower-two.svg" width={180} height={170} />
        </div>
      </>
    </Layout>
  );
};

export default Home;
