export default class Money extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="form-box">
        <i className="fas fa-dollar-sign"></i>
        <select
          className="select"
          value={this.state.value}
          onChange={(e) => {
            this.handleChange(e);
            this.props.money("money", e.target.value);
          }}
        >
          <option value="none">Todos los precios</option>
          <option value={1}>$</option>
          <option value={2}>$$</option>
          <option value={3}>$$$</option>
          <option value={4}>$$$$</option>
        </select>
      </div>
    );
  }
}
