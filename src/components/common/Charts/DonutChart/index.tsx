/* eslint-disable react/no-array-index-key */
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { IChartProps } from '../types';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const tooltipTextColor = payload[0].payload.fill; // dynamic => changes acc to fill
    return (
      <div
        className="custom-tooltip relative z-20 rounded-xl border-2 bg-white px-3 py-2 text-sm "
        style={{ color: tooltipTextColor }}
      >
        <p className="label font-bold">
          <span className="font-normal">{payload[0]?.name}</span> :{' '}
          {payload[0]?.value}
        </p>
      </div>
    );
  }
  return null;
};

export default function CustomDonutChart({ data, fills }: IChartProps) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minHeight={140}
      maxHeight={190}
    >
      <PieChart>
        <Pie
          data={data}
          cx="45%"
          cy="50%"
          labelLine={false}
          fill="#8884d8"
          dataKey="value"
          outerRadius="95%"
          innerRadius={38}
          paddingAngle={0}
        >
          {data?.map((_entry: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Cell
              style={{ outline: 'none' }}
              key={`cell-${index}`}
              fill={fills && fills[index % fills.length]}
            />
          ))}
        </Pie>
        <Tooltip content={CustomTooltip} />
      </PieChart>
    </ResponsiveContainer>
  );
}
