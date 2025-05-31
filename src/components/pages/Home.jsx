const HomePage = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h3>
      <p className="text-gray-600 mb-6">Here's an overview of your academic progress and important information.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-violet-800">Current CGPA</h4>
          <p className="text-2xl font-bold text-violet-600">9.01</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800">Attendance</h4>
          <p className="text-2xl font-bold text-green-600">92%</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800">Pending Fees</h4>
          <p className="text-2xl font-bold text-yellow-600">₹0</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800">Credits</h4>
          <p className="text-2xl font-bold text-purple-600">120/140</p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h4>
      <div className="space-y-3">
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
          <span className="text-gray-700">Assignment submitted for ML</span>
        </div>
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
          <span className="text-gray-700">Attendance marked for FLAT</span>
        </div>
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
          <span className="text-gray-700">Fee payment reminder sent</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;