import styles from "../styles/ShareButton.module.css";
import ShareIcon from "../assets/share-icon.svg";
import Image from "next/image";

interface ShareButtonProps {
  data: {
    title: string;
    text?: string;
    url?: string;
    files?: File[];
  };
}

const ShareButton = ({ data }: ShareButtonProps) => {
  const shareButtonClickHandler = async () => {
    try {
      await navigator.share(data);
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <div onClick={shareButtonClickHandler} className={styles.Button}>
      <Image src={ShareIcon} alt={"share icon"} />
      分享我的徽章
    </div>
  );
};

export default ShareButton;
