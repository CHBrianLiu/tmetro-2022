import Image from "next/image";
import styles from "./Points.module.css";
import FakePointStatus from "../../public/assets/Membership/Points/fake-point-status.webp";
import FakeDateSelector from "../../public/assets/Membership/Points/fake-date-selector.webp";
import FakePointRecord051901 from "../../public/assets/Membership/Points/fake-record1.webp";
import FakePointRecord051902 from "../../public/assets/Membership/Points/fake-record2.webp";
import FakePointRecord052001 from "../../public/assets/Membership/Points/fake-record3.webp";
import FakePointRecord052002 from "../../public/assets/Membership/Points/fake-record4.webp";

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
