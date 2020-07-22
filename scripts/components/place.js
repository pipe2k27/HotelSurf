export default function Place(props) {
  return (
    <div className="lugar">
      <div className="place-icon">
        <i className="fas fa-map-marker mini-icon"></i>
      </div>
      <p className="city">
        {props.city}, {props.country}
      </p>
    </div>
  );
}
