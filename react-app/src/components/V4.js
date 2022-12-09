import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import {Line} from "react-chartjs-2"
import axios from 'axios'
import Colors from './Colors'

const URL = 'http://localhost:8080/V4'
const URL_V3_ANNUAL = 'http://localhost:8080/V3annual'
const URL_V3_MONTHLY = 'http://localhost:8080/V3monthly'



export default function V4(props) {
    const [de08, setDe08] = useState([]);
    const [de08_2, setDe08_02] = useState([]);
    const [dss, setDss] = useState([]);
    const [v3annuadata, setV3annualdata] = useState([])
    const [v3monthlydata, setV3monthlydata] = useState([])
    const [colors, setColors] = useState(Colors())
    const [text, setText] = useState("This graph presents carbon dioxide records from three ice cores (DSS, DE08-2, DE08) at Law Dome, East Antarctica and CO2 measurements monthly and annually from Mauna Loa, Hawaii.");


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
        axios.get(URL_V3_ANNUAL)
            .then((response) => {
              setV3annualdata(response.data)
            }).catch(error => {
              alert(error)
            })
        axios.get(URL_V3_MONTHLY)
        .then((response) => {
            setV3monthlydata(response.data)
            if (Object.keys(props.text).length > 0) {
                setText(props.text)
            }
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
                borderColor: colors[0],
                backgroundColor: colors[0] + "50",
                pointRadius: 1,
            },
            {
                label:"DE08-2 Ice Core",
                data: de08_2,
                borderWidth: 2,
                borderColor: colors[1],
                backgroundColor: colors[1] + "50",
                pointRadius: 1,
            },
            {
                label:"DE08 Ice Core",
                data: de08,
                borderWidth: 2,
                borderColor: colors[2],
                backgroundColor: colors[2] + "50",
                pointRadius: 1,
            },
            {
                label:"Mauna Loa Annual CO2",
                data: v3annuadata,
                borderWidth: 2,
                borderColor: colors[3],
                backgroundColor: colors[3] + "50",
                pointRadius: 1,
            },
            {
                label:"Mauna Loa Monthly CO2",
                data: v3monthlydata,
                borderWidth: 2,
                borderColor: colors[4],
                backgroundColor: colors[4] + "50",
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
                text: "Antarctic Ice Core CO2 records with Mauna Loa CO2 measurements",
            },
            subtitle: {
                display: true,
                text: text
            },
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
                <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat" target="_blank" rel='noreferrer'>Law Dome</a>, <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt" target="_blank" rel="noreferrer">Mauna Loa Annual</a>, <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_mlo.txt" target="_blank" rel="noreferrer">Mauna Loa Monthly</a>.
            </p>
          </div>
    </div>
  )
}
