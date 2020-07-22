export default class Country extends React.Component {
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
        <i className="fas fa-flag"></i>
        <select
          value={this.state.value}
          className="select"
          onChange={(e) => {
            this.handleChange(e);
            this.props.country("country", e.target.value);
          }}
        >
          <option value="none">Todos los paises</option>
          <option value="Argentina">Argentina</option>
          <option value="Chile">Chile</option>
          <option value="Brasil">Brasil</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </div>
    );
  }
}
