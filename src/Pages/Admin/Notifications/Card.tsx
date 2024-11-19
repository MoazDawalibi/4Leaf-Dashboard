import { notifications } from "../../../types/Notifications";

const Card = ({ name, date, image, id }: notifications) => {
  return (
    <div className="notification_card" key={id}>
      <div>
        <img src={image} alt={name} />
        <div>
          <h5>{name}</h5>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
