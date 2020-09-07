import React, { Component } from "react";


export default class Header extends Component {
    render() {
        return (
            <table className="sortable">
            <tr>
              <th>WEEK ENDING</th>
              <th>RETAIL SALES</th>
              <th>WHOLES SALES</th>
              <th>UNITS SOLD</th>
              <th>RETAILER MARGIN</th>
            </tr>



            {this.props.table.map((table) => (
              <tr className="item">
                <td>{table.weekEnding}</td>
                <td>{table.retailSales}</td>
                <td>{table.wholesaleSales}</td>
                <td>{table.unitsSold}</td>
                <td>{table.retailerMargin}</td>
              </tr>

            ))}
          </table> 
    );
  }
}