import TestComp from "../../components/testcomp";
import _public from "../../public";
import styles from "./Global";
import Image from "next/image";
import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <TestComp
        title="Prova produkter helt utan kostnad och dela dina åsikter med oss!"
        description="Vi förstår vikten av att hitta rätt produkter som passar just dig.
          Du får prova produkten helt utan kostnad, i utbyte skriver du en ärlig recension och du får självklart behålla produkten."
        mockupImg={_public.homeHero}
        banner="banner"
        tag="beauty"
        showBtn
      />

      <TestComp
        title="Hur funkar det?"
        description="Ladda ner appen och registrera dig, därefter ser du våra pågående kampanjer och kan ansöka till kampanjer du är intresserad av. "
        mockupImg={_public.feature}
        reverse
        banner="banner04"
        tag="hej"
      />

      <TestComp
        title="Världsledande varumärken!"
        description="Vi samarbetar med ledande skönhetsmärken för att kunna erbjuda dig det bästa inom hudvård, make-up och mycket mer. 
            Direkt i appen kan du se vad tidigare reviwal's har tyckt och få hjälp att hitta din nya favorit."
        mockupImg={_public.mockup}
        banner="banner05"
      />

      <TestComp
        title="Produkten skickas vanligtvis inom 2 veckor."
        description="Direkt under mina kampanjer kan du se dina pågående kampanjer. Blir du utvald kommer produkterna skickas direkt till din dörr inom 2 veckor.
        När du testat produkten i lugn och ro är det dags att lämna en recension hos våra utvalda samarbetspartners."
        mockupImg={_public.scene2}
        reverse
        banner="banner02"
      />
      <TestComp
        title="Vi värdesätter just din åsikt!"
        description="Som tack för dina recensioner kommer du få möjlighet att få exklusiva erbjudanden och delta i unika kampanjer."
        mockupImg={_public.homeCards}
        banner="banner05"
      />

      <div className={`${styles.section} ${styles.bgWhite}`}>
        <div className={`${styles.subSection} flex-col text-center`}>
          <div>
            <h1 className={`${styles.h1Text} ${styles.blackText}`}>
              Ladda ner appen för din enhet
            </h1>
          </div>
          <Button
            image={_public.expo}
            link="https://apps.apple.com/se/app/reviewal/id6450650944?l=en-GB"
            alt="App store"
          />
          <Button
            image={_public.expo01}
            link="https://play.google.com/store/apps/details?id=com.loiloi.reviewal"
            alt="Google play"
          />
          <div className={styles.flexCenter}>
            <Image
              src={_public.scene}
              alt="download_png"
              className={styles.fullImg}
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Copyright Ⓒ 2023 Reviewal.{" "}
          <span className="bold">Support inquiries: info@reviewal.io</span>
        </p>
      </div>
    </>
  );
}
