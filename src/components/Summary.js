import classes from "./Summary.module.css";

import heroPic from "../images/illustration-hero.svg";

import Plan from "./Plan";

const Summary = () => {
  return (
    <div className={classes.container}>
      <img className={classes.hero} src={heroPic} alt="" />
      <div className={classes.summary}>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <Plan />

        <button className={classes.payment}>Proceed to Payment</button>
        <button className={classes.cancel}>Cancel Order</button>
      </div>
    </div>
  );
};

export default Summary;
