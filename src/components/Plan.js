import classes from "./Plan.module.css";
import musicIcon from "../images/icon-music.svg";

const Plan = () => {
  return (
    <div className={classes.container}>
      <div className={classes.plan}>
        <img src={musicIcon} alt="" />
        <div className={classes["plan-type-price"]}>
          <h3>Annual Plan</h3>
          <p>$59.99/year</p>
        </div>
      </div>
      <button>Change</button>
    </div>
  );
};

export default Plan;
