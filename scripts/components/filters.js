import Money from "./money.js";
import Country from "./country.js";
import Size from "./size.js";
import Date1 from "./date1.js";
import Date2 from "./date2.js";

export default class Filters extends React.Component {
  render() {
    return (
      <div className="filters">
        <Date1 start={this.props.money} />
        <Date2 end={this.props.money} />

        <Money money={this.props.money} />
        <Country country={this.props.money} />
        <Size size={this.props.money} />
      </div>
    );
  }
}
