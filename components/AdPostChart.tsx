'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface DataItem {
    month: string;
    views: number;
    clicks: number;
}

interface AdPostChartProps {
    data: DataItem[];
}

const AdPostChart: React.FC<AdPostChartProps> = ({ data }) => {
    const totalViews = data.reduce((sum, item) => sum + item.views, 0);
    const totalClicks = data.reduce((sum, item) => sum + item.clicks, 0);

    const chartData = {
        labels: data.map(item => item.month),
        datasets: [
            {
                label: 'Total Views',
                data: data.map(item => item.views),
                borderColor: 'rgba(112, 134, 253, 0.3)',
                backgroundColor: 'rgba(112, 134, 253, 0.3)',
                tension: 0.4,
            },
            {
                label: 'Total Clicks',
                data: data.map(item => item.clicks),
                borderColor: 'rgba(111, 209, 149, 0.3)',
                backgroundColor: 'rgba(111, 209, 149, 0.3)',
                tension: 0.4,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: ('top' as 'top' | 'left' | 'right' | 'bottom' | 'center'),
            },
            title: {
                display: true,
                text: `Ad Post Interactivity - Views: ${totalViews}, Clicks: ${totalClicks}`,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };

    return <Line data={chartData} options={options} />;
};

export default AdPostChart;