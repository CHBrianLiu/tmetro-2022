import styles from "./Slide.module.css";
import ShareButton from "../ShareButton";

interface SlideProps {
  closeModal: () => void;
}

const BadgeAcquisitionSlide = ({ closeModal }: SlideProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.ContentBox}>
        <div className={styles.DragIndicator} />
        <button className={styles.CloseButton} onClick={closeModal}>
          X
        </button>
        <div className={styles.BadgeSection}>
          <div className={styles.BadgeIcon} style={{ zIndex: 1 }}></div>
          <div className={styles.BadgeContent}>
            <div className={styles.BadgeTitle}>徽章01</div>
            <div className={styles.CongratsWords}>
              恭喜您!
              <br />
              獲得XXX徽章!
            </div>
            <div className={styles.BadgeDescription}>
              您在一個月內於淡水捷運站進出超過20次以
              <br />
              您已經是台北的夕陽達人了，好多人羨慕著你呢!
            </div>
          </div>
        </div>
        <div className={styles.PointStatusSection}>
          <div className={styles.PointStatusIcon} />
          <div className={styles.PointStatusText}>捷客點已累積至550點</div>
        </div>
        <div className={styles.ButtonSection}>
          <ShareButton data={{ title: "Badge1", text: "Your badge 1" }} />
          <div className={styles.GoToBadges}>前往查看我所有的徽章</div>
        </div>
      </div>
    </div>
  );
};

export default BadgeAcquisitionSlide;
