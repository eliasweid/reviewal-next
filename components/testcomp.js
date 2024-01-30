import styles from "../src/app/Global";
import _public from "../public";
import Image from "next/image";
import Button from "./Button";

const TestComp = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
  tag,
}) => {
  return (
    <div>
      <div
        className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}
      >
        <div
          className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
        >
          <div
            className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}
          >
            <h1
              className={`
          ${reverse ? styles.blackText : styles.blackText}
          ${styles.h1Text}`}
            >
              {title}
            </h1>
            <p
              className={`
          ${reverse ? styles.whiteText : styles.whiteText}
          ${styles.descriptionText}`}
            >
              {description}
            </p>

            {showBtn && (
              <>
                <Button
                  link="https://apps.apple.com/se/app/reviewal/id6450650944?l=en-GB"
                  image="/expo.png"
                  alt="App store"
                />

                <Button
                  link="https://engulf.se/"
                  image="/expo01.png"
                  alt="Google play"
                />
              </>
            )}
          </div>

          <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
            <Image
              src={mockupImg}
              alt="beauty"
              className={`
        ${reverse ? " fadeLeftMini" : " fadeRightMini"} ${styles.sectionImg}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComp;
