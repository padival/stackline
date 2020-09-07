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
                <td>${table.retailSales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                <td>${table.wholesaleSales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                <td>{table.unitsSold}</td>
                <td>${table.retailerMargin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>

            ))}
          </table> 
    );
  }
}