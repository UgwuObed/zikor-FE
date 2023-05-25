import React from 'react';
import styles from '../styles/dashboard.module.css';
import Image from 'next/image';

const DashboardPage = () => {
  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['logo-container']}>
        {/* Add your logo image or logo component here */}
        <Image src="/zikor-logo.png" alt="Logo" width={200} height={100} />
      </div>
      <div className={styles['user-container']}>
        <span>Welcome</span>
      </div>
      {/* Add the rest of your dashboard content here */}
    </div>
  );
};

export default DashboardPage;


