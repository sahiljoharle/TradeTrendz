import React, { Component } from "react";

class StockRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    const url = `https://slhbll0kj1.execute-api.us-east-1.amazonaws.com/Testing/stockapidata?symbol=${this.props.ticker}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data,
        });
      });
  }

  render() {
    return (
      <tr>
        <td> {this.props.ticker} </td>
        <td> {this.state.data.price} </td>
        <td> {this.state.data.date} </td>
        <td> {this.state.data.time} </td>
      </tr>
    );
  }
}
export default StockRow;
