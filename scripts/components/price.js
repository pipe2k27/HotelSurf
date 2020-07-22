export default class price extends React.Component {
  render() {
    return (
      <div className="price">
        <i className="fas fa-dollar-sign dolar number1"></i>
        <i
          className={"fas fa-dollar-sign dolar number" + (5 - this.props.price)}
        ></i>
        <i
          className={"fas fa-dollar-sign dolar number" + (6 - this.props.price)}
        ></i>
        <i
          className={"fas fa-dollar-sign dolar number" + (7 - this.props.price)}
        ></i>
      </div>
    );
  }
}
