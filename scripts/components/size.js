export default class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "pais" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="form-box">
        <i className="fas fa-bed"></i>
        <select
          value={this.state.value}
          className="select"
          onChange={(e) => {
            this.handleChange(e);
            this.props.size("size", e.target.value);
          }}
        >
          <option value="none">Todos los tamaños</option>
          <option value="small">Pequeño</option>
          <option value="mid">Mediano</option>
          <option value="large">Grande</option>
        </select>
      </div>
    );
  }
}
