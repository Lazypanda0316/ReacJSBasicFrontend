const AdminDashboard = () => {
  const invoiceData = [
    { count: 2478, label: "Total Invoices", color: "bg-orange-400" },
    { count: 983, label: "Paid Invoices", color: "bg-green-400" },
    { count: 1256, label: "Unpaid Invoices", color: "bg-purple-400" },
    { count: 652, label: "Total Invoices Sent", color: "bg-blue-400" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {invoiceData.map((invoice, index) => (
          <div
            key={index}
            className={`${invoice.color} text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center`}
          >
            <span className="text-3xl font-bold">{invoice.count}</span>
            <span className="text-sm">{invoice.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard