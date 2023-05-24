const Card = (props) => {
    return (
      <div className="card">
        {props.image && <img src={props.image} alt="Card" className="card__image" />}
        <div className="card__content">
          {props.children}
        </div>
      </div>
    );
  };
  
  export default Card;