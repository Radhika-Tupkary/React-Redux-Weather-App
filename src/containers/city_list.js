import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class CityList extends Component {
  renderList() {
    return this.props.weather.map((res) => {
      if(res !== undefined) {
        let city_name = res.city.name;
        let y1 = res.list.map((cur) => cur.main.temp);
        let y2 = res.list.map((cur) => cur.main.pressure);
        let y3 = res.list.map((cur) => cur.main.humidity);

        let {lat, lon} = res.city.coord;

        return (
          <tr key={city_name}>
            <td><GoogleMap lat={lat} lon={lon}/></td>
            <td><Chart data={y1} color="blue" units="K"/></td>
            <td><Chart data={y2} color="orange" units="hPa"/></td>
            <td><Chart data={y3} color="green" units="%"/></td>
          </tr>
        );
      } else {
        return (<tr key={Math.floor(Math.random()*1000)}></tr>);
      }
    });
  }

  render() {
    console.log("this.props.weather", this.props.weather);

    if(this.props.weather.length == 0) {
      return (<div></div>);
    }
    return (
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (K)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
            </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(CityList);
// connect takes a function and a component to produce a container.
// A container is a smart component - a component which cares about app's state. It acts like a bridge between react and redux.
// In this case, we have promoted our CityList component to be a container.
