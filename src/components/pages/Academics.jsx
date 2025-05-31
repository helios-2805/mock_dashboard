const AcademicsPage = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Academics</h3>
    <p className="text-gray-600 mb-4">This is the academics page. Your course details, grades, and academic progress will be displayed here.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Current Semester</h4>
        <p className="text-gray-600">3rd Year 2nd Semester - 2025</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Total Credits</h4>
        <p className="text-gray-600">15 Credits</p>
      </div>
    </div>
  </div>
);

export default AcademicsPage;