import dia, { mes } from "/days.js";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <img
            src="./images/surf-logo2.png"
            alt="Hotel Surf"
            className="logo"
          />
          <h4 className="slogan">Pagá menos, viajá más!</h4>
          <div className="empty"></div>
        </div>
        <div className="header2">
          <h4 className="dates">
            Desde el{" "}
            <span className="date">
              {this.props.start === "none"
                ? " elegir fecha de entrada "
                : dia[new Date(this.props.start).getDay()] +
                  " " +
                  new Date(this.props.start).getDate() +
                  " de " +
                  mes[new Date(this.props.start).getMonth()] +
                  " "}
            </span>
            hasta el{" "}
            <span className="date">
              {" "}
              {this.props.end === "none"
                ? " elegir fecha de salida "
                : dia[new Date(this.props.end).getDay()] +
                  " " +
                  new Date(this.props.end).getDate() +
                  " de " +
                  mes[new Date(this.props.end).getMonth()]}{" "}
            </span>
          </h4>
        </div>
      </div>
    );
  }
}
