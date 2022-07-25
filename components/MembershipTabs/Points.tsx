import Image from "next/image";
import styles from "./Points.module.css";
import FakePointStatus from "../../assets/Membership/Points/FakePointStatus.svg";
import FakeDateSelector from "../../assets/Membership/Points/FakeDateSelector.svg";
import FakePointRecord051901 from "../../assets/Membership/Points/FakePointRecord051901.svg";
import FakePointRecord051902 from "../../assets/Membership/Points/FakePointRecord051902.svg";
import FakePointRecord052001 from "../../assets/Membership/Points/FakePointRecord052001.svg";
import FakePointRecord052002 from "../../assets/Membership/Points/FakePointRecord052002.svg";

export const Points = () => {
  return (
    <div className={styles.container}>
      <Image src={FakePointStatus} />
      <div className={styles.PointRecordsViewer}>
        <Image src={FakeDateSelector} />
        <div className={styles.PointRecords}>
          <Image src={FakePointRecord052001} />
          <Image src={FakePointRecord052002} />
          <Image src={FakePointRecord051901} />
          <Image src={FakePointRecord051902} />
        </div>
      </div>
    </div>
  );
};
