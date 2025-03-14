"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../components/ProtectedRoute';
import ProductsList from '../protected/productsList/page';

const Dashboard = () => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const [section, view] = hash.split('#');
    
    if (section === 'protected' && view === 'productsList') {
      setCurrentView('productsList');
    } else {
      // Handle invalid hash or default view
      router.replace('/dashboard#protected#productsList');
    }
  }, [router]);

  return (
    <ProtectedRoute>
      <div className="dashboard-container">
        {currentView === 'productsList' && <ProductsList />}
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;