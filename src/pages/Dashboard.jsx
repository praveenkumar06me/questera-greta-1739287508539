import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

export default function Dashboard() {
  const usage = {
    xAxis: {
      type: 'category',
      data: Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return format(date, 'MMM dd');
      }).reverse()
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        smooth: true
      }
    ],
    tooltip: {
      trigger: 'axis'
    }
  };

  const storage = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 45, name: 'Documents' },
          { value: 25, name: 'Images' },
          { value: 15, name: 'Videos' },
          { value: 15, name: 'Other' }
        ]
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Usage Analytics</h2>
              <ReactECharts option={usage} style={{ height: '300px' }} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Storage Distribution</h2>
              <ReactECharts option={storage} style={{ height: '300px' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-primary-600">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Storage Used</h3>
              <p className="text-3xl font-bold text-primary-600">45.8 GB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
              <p className="text-3xl font-bold text-primary-600">23</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}