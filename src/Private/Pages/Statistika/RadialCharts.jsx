import ReactApexChart from "react-apexcharts"
import { useState } from "react"

export const Radial = () => {
    const [state, setState] = useState(
        {
          
            series: [30, 70, 30],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%',
                  },

                },
              },
              labels: ["", "", ""],
              colors: ["#69FF93", "#6993FF", "#FF6969"]
            },
          }
    )
    return(
        <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="donut" />
      </div>
    )
}