import React from 'react';
import dashboardStyles from '../styles/dashboard.module.css';
import Image from 'next/image';
import globalStyles from '../styles/styles.css';

const DashboardPage = () => {
  return (
    <div className={dashboardStyles['dashboard-container']}>
      <div className={dashboardStyles['gray-background']}>
        <div className={dashboardStyles['left-side']}>
          <div className={dashboardStyles['logo-container']}>
            <Image src="/zikor-logo.png" alt="Logo" width={100} height={50} />
            <div className={dashboardStyles['icons-container']}>
              <ul>
                <li><a href="#"><Image src="/home.png" alt="Home" width={25} height={25} /> Home</a></li>
                <li><a href="#"><Image src="/noti.png" alt="Logo" width={25} height={25} /> Notification</a></li>
                <li><a href="#"><Image src="/setting.png" alt="Logo" width={25} height={25} /> Settings</a></li>
                <li><a href="#"><Image src="/sms.png" alt="Logo" width={25} height={25} /> Help</a></li>
                <li><a href="#"><Image src="/call.png" alt="Logo" width={25} height={25} /> Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={dashboardStyles['right-side']}>
        <div className={dashboardStyles['user-container']}>
          <span>Welcome</span>
        </div>
      </div>
      {/* Add the rest of your dashboard content here */}
    </div>
  );
};

export default DashboardPage;
