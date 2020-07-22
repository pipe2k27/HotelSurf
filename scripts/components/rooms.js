export default function Rooms(props) {
  return (
    <div className="lugar">
      <div className="place-icon">
        <i className="fas fa-bed mini-icon2"></i>
      </div>
      <p className="city">{props.rooms} Habitaciones</p>
    </div>
  );
}
