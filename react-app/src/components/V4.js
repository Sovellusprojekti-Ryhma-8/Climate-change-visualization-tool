import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import {Line} from "react-chartjs-2"
import axios from 'axios'

const URL = 'http://localhost:8080/V4'
const URL_V3 = 'http://localhost:8080/V3annual'


export default function V4() {
    const [de08, setDe08] = useState([]);
    const [de08_2, setDe08_02] = useState([]);
    const [dss, setDss] = useState([]);
    const [v3data, setV3data] = useState([])

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            console.log(res.data["DE08-2"])
            setDss(res.data.DSS)
            setDe08_02(res.data["DE08-2"])
            setDe08(res.data.DE08)
        }).catch(error => {
            alert(error)
        })
        axios.get(URL_V3)
            .then((response) => {
              setV3data(response.data)
              console.log(v3data)
            }).catch(error => {
              alert(error)
            })
    },[])

    const data = {
        datasets: [
            {
                label:"DSS Ice Core",
                data: dss,
                borderWidth: 2,
                borderColor:  "rgb(60, 179, 113)",
                backgroundColor: "rgba(60, 179, 113, 0.5)",
                pointRadius: 1,
            },
            {
                label:"DE08-2 Ice Core",
                data: de08_2,
                borderWidth: 2,
                borderColor:  "rgba(0, 0, 255)",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                pointRadius: 1,
            },
            {
                label:"DE08 Ice Core",
                data: de08,
                borderWidth: 2,
                borderColor:  "rgba(255, 165, 0)",
                backgroundColor: "rgba(255, 165, 0, 0.5)",
                pointRadius: 1,
            },
            {
                label:"Mauna Loa Annual CO2",
                data: v3data,
                borderWidth: 2,
                borderColor:  "rgba(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                pointRadius: 1,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Antarctic Ice Core CO2 records with Mauna Loa annual CO2",
            },
            subtitle: {
                display: true,
                text: "This graph presents carbon dioxide records from three ice cores (DSS, DE08-2, DE08) at Law Dome, East Antarctica and annual mean co2 measurements from Mauna Loa, Hawaii."
            },
            tooltip: {
                callbacks: {
                    title: (context) => {
                        return "Year: " +  context[0].raw.time;
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: "nearest",
            axis: "x",
        },
        parsing:{
            xAxisKey: "time",
            yAxisKey: "co2"
        },
        scales: {
            x: {
                type: "time",
                display: true,
                title: {
                    display: true,
                    text: "Year",
                    color: "" //Tähän joku väri?
                }
            },
            co2: {
                type: "linear",
                display: true,
                position: "right",
                title: {
                    display: true,
                    text: "CO2",
                    color: "" //Tähän joku väri?
                }
            },
        },
    }

  return (
    <div >
          <Line data={data} options={options}/>
          <div>
            <p>
                Learn more about <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html' target="_blank" rel="noreferrer">Law Dome</a> or <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html' target="_blank" rel="noreferrer"> Mauna Loa</a> measurements.
            </p>
            <h4>Data Source</h4>
            <p>
                <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat" target="_blank" rel='noreferrer'>Law Dome</a>, <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt" target="_blank" rel="noreferrer">Mauna Loa</a>
            </p>
          </div>
    </div>
  )
}
