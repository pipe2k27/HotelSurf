export default class Date1 extends React.Component {
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
        <i className="fas fa-sign-in-alt"></i>
        <form>
          <input
            className="select"
            type="date"
            value={this.state.value}
            onChange={(e) => {
              this.handleChange(e);
              this.props.start(
                "start",
                new Date(e.target.value).valueOf() + 97199000
                // 97199000 was added to make the date 23:59 of that date in argentina, it ads 26.999 hours to add for 3 hours time difference and 23.99 hours to make it the end of the day
              );
            }}
          ></input>
        </form>
      </div>
    );
  }
}
