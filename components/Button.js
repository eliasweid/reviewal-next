import Image from "next/image";
import styles from "@/app/Global";
import _public from "../public";

const Button = ({ link, image, alt }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={styles.btnBlack}>
        <Image
          src={image}
          alt={alt}
          width={100}
          height={100}
          className={styles.btnBlack}
        />
      </div>
    </a>
  );
};

export default Button;
