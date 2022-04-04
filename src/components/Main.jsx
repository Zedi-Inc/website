import styles from "./styles.module.css";
import arrow from "../assets/chevron-down.svg";
import plus from "../assets/plus.svg";

const Main = () => {
  return (
    <main>
      <div className={styles.tableContainer}>
        <div className={styles.head}>
          <div className={styles["no-border"]}></div>
          <div className="">Role</div>
          <div className="">Level</div>
          <div className="">Quantity</div>
          <div className="">Cost/Month</div>
        </div>
        <div className={styles.item}>
          <div className={styles["no-border"]}>1</div>
          <div className={styles.selection}>
            <select name="" id="">
              <option value="copywriter">Copywriter</option>
              <option value="designer">Designer</option>
              <option value="strategist">Strategist</option>
              <option value="content">Content creator</option>
            </select>
          </div>
          <div className={styles.selection}>
            <select name="" id="">
              <option value="intern">Intern</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <div className="">
            <input type="number" min={1} placeholder="1" />
          </div>
          <div className="">$700</div>
        </div>
        <div className={styles.add}>
          <button>
            <span>Add new role</span>
            <img src={plus} alt="add" />
          </button>
        </div>
        <div className={styles.foot}>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className="">Total Cost</div>
          <div className={styles.border}>$3,500</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
