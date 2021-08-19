import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div classname={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div classname={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div classname={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
