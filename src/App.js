import React, { Component } from 'react';
import './App.css';
import jsondata from './data/Webdev_data2.json';
import CanvasJSReact from './data/canvasjs.react';
import Header from "./components/header"
import Table from "./components/table"
var _ = require("underscore");
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  state = {
    table: [],
    janRetail: 0,
    janWhole: 0,
    febRetail: 0,
    febWhole: 0,
    marchRetail: 0,
    marchWhole: 0,
    aprilRetail: 0,
    aprilWhole: 0,
    mayRetail: 0,
    mayWhole: 0,
    juneRetail: 0,
    juneWhole: 0,
    julyRetail: 0,
    julyWhole: 0,
    augRetail: 0,
    augWhole: 0,
    septWhole: 0,
    septRetail: 0,
    octWhole: 0,
    octRetail: 0,
    novWhole: 0,
    novRetail: 0,
    decWhole: 0,
    decRetail: 0,
    img: [],
    tags: []
  }

  componentDidMount() {
    var janRetail = 0, janWhole = 0, febRetail = 0, febWhole = 0, marchRetail = 0, marchWhole = 0, aprilRetail = 0, aprilWhole = 0, mayRetail = 0, mayWhole = 0, juneRetail = 0, juneWhole = 0, julyRetail = 0, julyWhole = 0, augRetail = 0, augWhole = 0, septWhole = 0, septRetail = 0, octWhole = 0, octRetail = 0, novWhole = 0, novRetail = 0, decWhole = 0, decRetail = 0;
    _.filter(jsondata,
      function (a) {
        for (var i = 0; i < a.sales.length; i++) {
          var dates = a.sales[i].weekEnding.substring(a.sales[i].weekEnding.indexOf('-') + 1);
          if ((dates) >= "01-01" && (dates) <= "01-31") {
            janRetail += a.sales[i].retailSales
            janWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "02-01" && (dates) <= "02-31") {
            febRetail += a.sales[i].retailSales
            febWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "03-01" && (dates) <= "03-31") {
            marchRetail += a.sales[i].retailSales
            marchWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "04-01" && (dates) <= "04-31") {
            aprilRetail += a.sales[i].retailSales
            aprilWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "05-01" && (dates) <= "05-31") {
            mayRetail += a.sales[i].retailSales
            mayWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "06-01" && (dates) <= "06-31") {
            juneRetail += a.sales[i].retailSales
            juneWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "07-01" && (dates) <= "07-31") {
            julyRetail += a.sales[i].retailSales
            julyWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "08-01" && (dates) <= "08-31") {
            augRetail += a.sales[i].retailSales
            augWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "09-01" && (dates) <= "09-31") {
            septRetail += a.sales[i].retailSales
            septWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "10-01" && (dates) <= "10-31") {
            octRetail += a.sales[i].retailSales
            octWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "11-01" && (dates) <= "11-31") {
            novRetail += a.sales[i].retailSales
            novWhole += a.sales[i].wholesaleSales
          }
          if ((dates) >= "12-01" && (dates) <= "12-31") {
            decRetail += a.sales[i].retailSales
            decWhole += a.sales[i].wholesaleSales
          }
        }
      });
    this.setState({
      table: jsondata[0].sales,
      janRetail: janRetail,
      janWhole: janWhole,
      febRetail: febRetail,
      febWhole: febWhole,
      marchRetail: marchRetail,
      marchWhole: marchWhole,
      aprilRetail: aprilRetail,
      aprilWhole: aprilWhole,
      mayRetail: mayRetail,
      mayWhole: mayWhole,
      juneRetail: juneRetail,
      juneWhole: juneWhole,
      julyRetail: julyRetail,
      julyWhole: julyWhole,
      augRetail: augRetail,
      augWhole: augWhole,
      septWhole: septWhole,
      septRetail: septRetail,
      octWhole: octWhole,
      octRetail: octRetail,
      novWhole: novWhole,
      novRetail: novRetail,
      decWhole: decWhole,
      decRetail: decRetail,
      img: jsondata[0],
      tags: jsondata[0].tags
    })
  }
  render() {
    const options = {
      animationEnabled: true,

      toolTip: {
        shared: true
      },
      axisY: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function () {
          return " ";
        }
      },
      data: [{
        markerType: "none",
        type: "spline",
        name: "Retail Sales",
        showInLegend: true,
        dataPoints: [
          { y: this.state.janRetail, label: "Jan" },
          { y: this.state.febRetail, label: "Feb" },
          { y: this.state.marchRetail, label: "Mar" },
          { y: this.state.aprilRetail, label: "Apr" },
          { y: this.state.mayRetail, label: "May" },
          { y: this.state.juneRetail, label: "Jun" },
          { y: this.state.julyRetail, label: "Jul" },
          { y: this.state.augRetail, label: "Aug" },
          { y: this.state.septRetail, label: "Sept" },
          { y: this.state.octRetail, label: "Oct" },
          { y: this.state.novRetail, label: "Nov" },
          { y: this.state.decRetail, label: "Dec" }
        ]
      },
      {
        markerType: "none",
        type: "spline",
        name: "Wholes Sales",
        showInLegend: true,
        dataPoints: [
          { y: this.state.janWhole, label: "Jan" },
          { y: this.state.febWhole, label: "Feb" },
          { y: this.state.marchWhole, label: "Mar" },
          { y: this.state.aprilWhole, label: "Apr" },
          { y: this.state.mayWhole, label: "May" },
          { y: this.state.juneWhole, label: "Jun" },
          { y: this.state.julyRetail, label: "Jul" },
          { y: this.state.augWhole, label: "Aug" },
          { y: this.state.septWhole, label: "Sept" },
          { y: this.state.octWhole, label: "Oct" },
          { y: this.state.novWhole, label: "Nov" },
          { y: this.state.decWhole, label: "Dec" }
        ]
      }]
    }
    return (

      <div className="App">
        <Header></Header>
        <section>
          <nav>
            <img key={this.state.img.image} src={this.state.img.image} alt="logo" />
            <h4>{this.state.img.title}</h4>
            <p>{this.state.img.subtitle}</p>
            <ul>
              {this.state.tags.map((tags) => (
                <li key={tags}>{tags}</li>
              ))}

            </ul>
            <h5>OVERVIEW</h5>
            <h5>SALES</h5>
          </nav>
          <article>
            <div id="graph">
              <p>Retails Sales</p>
              <CanvasJSChart options={options} />

            </div>
            <Table table={this.state.table} />
          </article>
        </section>



      </div>
    )
  }
}

export default App;
