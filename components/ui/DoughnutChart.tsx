'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({accounts}:DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1200,1300,1440],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
      }
    ],
    labels: ["Bank1","Bank2","Bank3"]
  }
    
    
  return (
    <div><Doughnut data={data} 
    options={{
      cutout:'60%',
        plugins:{
          legend:{
            display:false
          }
        
      }
    }}
    /></div>
  )
}

export default DoughnutChart