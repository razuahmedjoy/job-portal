import React from 'react';
import Statistics from '../../components/EmployerDashboard/Statistics';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fa, faker } from '@faker-js/faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler


);
const options = {

    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },



    },
};

// generate 8 days of January interval of 2 days in each date
const labels = Array.from({ length: 10 }, (_, i) => `2021-01-0${i * 2 + 1}`);
const data = {
    labels,
    datasets: [
        {   

            data: [0,0,1,0,1,0,0,1,0,0],
            borderColor: '#FF65C4',
            backgroundColor: '#FF65C4',
            fill: true,
            tension: 0.3, // Smooth the line (creates a bezier curve)
            pointBackgroundColor: '#e02197',
            pointBorderColor: '#FF65C4',
            pointRadius: 5,
            pointHoverRadius: 7,

        },
    ],
};
const EmployerDashboard = () => {


    return (


        <div>
            <h1 className="text-lg md:text-3xl font-medium mb-7">Applications statistics</h1>

            <Statistics />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

                <div className="col-span-1 md:col-span-2 bg-white rounded shadow-md shadow-blue-gray-200/40 p-8">
                    <h2 className="text-lg font-medium">Your Profile Views</h2>
                    <div className='mt-5'>
                        <Line options={options} data={data} />

                    </div>
                </div>
                <div className="col-span-1  bg-white rounded shadow-md shadow-blue-gray-200/40 p-8">
                    <h2 className="text-lg font-medium">Notifications</h2>

                </div>

            </div>

            <div>
                <div className="w-full bg-white rounded shadow-md shadow-blue-gray-200/40 p-8">
                    <h2 className="text-lg font-medium">Recent Applications</h2>
                    <p className='mt-3 text-gray-600'>No Application Found</p>
                </div>
            </div>



        </div>

    );
};

export default EmployerDashboard;