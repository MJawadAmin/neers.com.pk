// app/dashboard/layout.js
"use client"; // Only if you need client-side features

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      {/* Add any shared UI or navigation here */}
      {children}
    </div>
  );
}