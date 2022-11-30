import React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const URL = "http://localhost:8080/V5"

export default function V5() {
    const [chartData, setData] = useState([]);

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            setData(res.data)
        }).catch(error => {
            alert(error)
        })
    },[])

    const data = {
        labels: chartData.map(d => d.year-1950+"BC"),
        datasets: [
            {
                label: "Co2",
                data: chartData.map(d => d.co2),
                borderWidth: 2,
                borderColor:  "rgb(60, 179, 113)",
                backgroundColor: "rgba(60, 179, 113, 0.5)",
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
                text: "Vostok Ice Core Co2 measurements",
            },  
            subtitle: {
                display: true,
                text: "Graph displays Co2 measurements from Vostok station."
            }    
        },
        scales: {
            yAxis: {
                type: "linear",
                display: true,
                position: "right",
                title: {
                    display: true,
                    text: "Co2"
                }
            },
            x: { 
                reverse: true,
                title: {
                    display: true,
                    text: "Year"
                }, 
                ticks: {
                    maxTicksLimit: 36
                }               
            }
        },
    }

    return (
        <div>
            <Line data={data} options={options}/>
            <div>
                <p>
                    Learn more about <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html" target="_blank">Vostok ice core measurements</a>.
                </p>
                <h4>Data source</h4>
                <p>
                <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2" target="_blank">Vostok Co2 measurements</a>
                </p>
            </div>
        </div>
    )
}