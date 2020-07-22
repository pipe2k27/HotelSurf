import Header from "./components/header.js";
import Filters from "./components/filters.js";
import Card from "./components/card.js";
import hotelsData from "./components/data.js";
import Footer from "./components/footer.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: hotelsData,
      money: "none",
      country: "none",
      size: "none",
      start: "none",
      end: "none",
    };

    this.mapper = this.mapper.bind(this);
    this.money = this.money.bind(this);
    this.noHotels = this.noHotels.bind(this);
  }
  mapper(e, index) {
    return <Card {...e} key={index} />;
  }

  noHotels() {
    if (this.state.data.length < 1) {
      return (
        <div className="no-container">
          <h3 classname="no-hotels">
            No hay hoteles que cumplan con los requisitos que especificás. Por
            favor inteta con otras fechas, lugares o precios.
          </h3>
        </div>
      );
    }
  }

  money(name, value) {
    let oldData = hotelsData;
    let range = {};
    let newData = "";

    this.setState({ [name]: value }, () => {
      if (this.state.size === "small") {
        range = {
          lower: 1,
          upper: 10,
        };
      } else if (this.state.size === "large") {
        range = {
          lower: 21,
          upper: 30,
        };
      } else {
        range = {
          lower: 11,
          upper: 20,
        };
      }
      newData = oldData
        .filter((e) => {
          if (this.state.money !== "none") {
            return e.price == this.state.money;
          } else {
            return e;
          }
        })
        .filter((e) => {
          if (this.state.country !== "none") {
            return e.country == this.state.country;
          } else {
            return e;
          }
        })
        .filter((e) => {
          if (this.state.size !== "none") {
            return e.rooms >= range.lower && e.rooms <= range.upper;
          } else {
            return e;
          }
        }, range)
        .filter((e) => {
          if (this.state.start !== "none" && this.state.end !== "none") {
            return (
              e.availabilityFrom < this.state.start &&
              e.availabilityTo > this.state.end
            );
          } else {
            return e;
          }
        })
        .filter((e) => {
          if (this.state.start > this.state.end) {
            return e.price === 5;
          } else {
            return e;
          }
        });

      this.setState({ data: newData });
      this.noHotels();
    });
  }

  render() {
    return (
      <div>
        <Header start={this.state.start} end={this.state.end} />
        <Filters money={this.money} />
        <div className="over-box">
          <div className="flex-cont">{this.state.data.map(this.mapper)}</div>
        </div>
        {this.noHotels()}
        <Footer />
      </div>
    );
  }
}
