import React from "react";
import { useState, useEffect } from "react";
import { Chart as chartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

const URL = "http://localhost:8080/V2"

export default function V2() {
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
        labels: chartData.map(d => d.year),
        datasets: [
            {
                label:"Temperature",
                data: chartData.map(d => d.temp),
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
                text: "V2",
            },
        },
        scales: {
            yAxis: {
                type: "linear",
                display: true,
                position: "right",
            },
        },
    }

    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )

}