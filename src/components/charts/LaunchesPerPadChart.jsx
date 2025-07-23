import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

const LaunchesPerPadChart = ({ data }) => {
  console.log('Launches per pad data:', data);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="padName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar 
          dataKey="count" 
          name="Launch Count" 
          fill="#82ca9d" 
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default LaunchesPerPadChart;
