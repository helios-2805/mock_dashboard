const AttendancePage = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Attendance</h3>
    <p className="text-gray-600 mb-4">This is the attendance page. Your attendance records and statistics will be displayed here.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">Present Days</h4>
        <p className="text-2xl font-bold text-green-600">85</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-semibold text-red-800 mb-2">Absent Days</h4>
        <p className="text-2xl font-bold text-red-600">7</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-violet-800 mb-2">Attendance Rate</h4>
        <p className="text-2xl font-bold text-violet-600">92%</p>
      </div>
    </div>
  </div>
);

export default AttendancePage;