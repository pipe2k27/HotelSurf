import hotelsData from "./data.js";
import Price from "./price.js";
import Place from "./place.js";
import Rooms from "./rooms.js";
import Button from "./button.js";

export default class Card extends React.Component {
  render() {
    return (
      <div className="cardy">
        <div>
          <img src={this.props.photo} className="pic" alt="la bamba de areco" />
          <div className="card-info">
            <h1 className="title">{this.props.name}</h1>
            <p className="description">{this.props.description}</p>

            <Place city={this.props.city} country={this.props.country} />

            <div className="room-price">
              <Rooms rooms={this.props.rooms} />
              <Price price={this.props.price} />
            </div>
          </div>
        </div>
        <Button />
      </div>
    );
  }
}
