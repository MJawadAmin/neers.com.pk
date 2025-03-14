"use client";
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const useHashNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentView, setCurrentView] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setCurrentView(hash || 'default');
    };

    // Initialize view
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view) => {
    router.replace(`${pathname}#${view}`, { scroll: false });
  };

  return { currentView, navigate };
};

export default useHashNavigation;