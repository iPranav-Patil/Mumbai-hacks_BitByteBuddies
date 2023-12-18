import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StockCharts = ({ details }) => {
  if (!details) {
    return <div className="">Loading...</div>;
  }

  // Additional data for more charts
  const openData = [{ name: "Open Price", value: details.open }];
  const ebitdaData = [{ name: "EBITDA", value: details.ebitda }];
  const marketCapData = [{ name: "Market Cap", value: details.marketCap }];

  const data = [
    { name: "Volume", value: details.volume },
    { name: "Day High Price", value: details.dayHigh },
    { name: "Total Revenue", value: details.totalRevenue },
  ];

  const COLORS = ["#0088cc", "#36a2eb", "#4caf50"];

  const additionalChartData = [
    { name: "Average Volume", value: details.averageVolume },
    { name: "Dividend Yield", value: details.dividendYield },
    { name: "Profit Margins", value: details.profitMargins },
  ];

  const ADDITIONAL_COLORS = ["#ff9800", "#e91e63", "#795548"];

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4 text-center">Stock Charts</h2>
      <div className="flex justify-center gap-14 flex-wrap">
        
        {/* Line Chart */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Line Chart - Volume</h3>
          <LineChart width={400} height={300} data={openData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Bar Chart - EBITDA</h3>
          <BarChart width={400} height={300} data={ebitdaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#0088cc" />
          </BarChart>
        </div>

        {/* Pie Chart
        <div>
          <h3 className="text-lg font-semibold mb-2">Pie Chart - Market Cap</h3>
          <PieChart width={400} height={300}>
            <Pie
              dataKey="value"
              data={marketCapData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {marketCapData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div> */}
        {/* Line Chart */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Line Chart</h3>
          <LineChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Bar Chart</h3>
          <BarChart width={400} height={300} data={additionalChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#ff9800" />
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Pie Chart</h3>
          <PieChart width={400} height={300}>
            <Pie
              dataKey="value"
              data={additionalChartData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#e91e63"
            >
              {additionalChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={ADDITIONAL_COLORS[index % ADDITIONAL_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Another Bar Chart */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Another Bar Chart</h3>
          <BarChart width={400} height={300} data={additionalChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#795548" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default StockCharts;
