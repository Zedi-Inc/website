import styles from "./styles.module.css";

const Newletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className="">
        <h2>Join our monthly newsletter</h2>
        <p>
          Be a Zedi Insider, grow your knowledge, join 100s of Zedians, and get
          the recent trends, top industry news, freebies and offerings when you
          join our newsletter, we promise we don't spam
        </p>
        <div className={styles.field}>
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
