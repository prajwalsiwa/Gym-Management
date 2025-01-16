import CustomBarChart from '@Components/common/Charts/BarChart';
import ChartHeader from '@Components/common/Charts/ChartHeader';
import { useRef } from 'react';

function RevenueChart() {
  const ref = useRef();
  return (
    <div className=" w-full ">
      <ChartHeader chartTitle="Revenue Analytics" downloadComponentRef={ref} />
      <CustomBarChart
        fills={['#1f2937', '#374151']}
        data={[
          { name: 'Jan', sales: 4000 },
          { name: 'Feb', sales: 3000 },
          { name: 'Feb', sales: 3000 },
          { name: 'Feb', sales: 3000 },
          { name: 'Feb', sales: 3000 },
          { name: 'Feb', sales: 3000 },
        ]}
      />
    </div>
  );
}

export default RevenueChart;
