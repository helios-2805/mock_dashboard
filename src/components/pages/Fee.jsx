const FeePage = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Fee Management</h3>
    <p className="text-gray-600 mb-4">This is the fee page. Your fee structure, payment history, and pending payments will be displayed here.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Pending Amount</h4>
        <p className="text-2xl font-bold text-yellow-600">₹0</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">Paid Amount</h4>
        <p className="text-2xl font-bold text-green-600">₹1,25,000</p>
      </div>
    </div>
  </div>
);

export default FeePage;