import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts';

const LaunchesPerYearChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <Tooltip />
        <Legend /> 
        <Line 
          type="monotone" 
          dataKey="count" 
          name="Launches" 
          stroke="#8884d8" 
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LaunchesPerYearChart;
