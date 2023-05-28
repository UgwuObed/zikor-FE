import React from 'react';
import dashboardStyles from '../styles/dashboard.module.css';
import Image from 'next/image';

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
      <div className={dashboardStyles['center']}>
        <ul className={dashboardStyles['list-items']}>
          <li className={dashboardStyles['active']}><a href="#">Dashboard</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Order</a></li>
          <li><a href="#">Completed</a></li>
        </ul>
      </div>
      <div className={dashboardStyles['boxes-container']}>
        <div className={dashboardStyles['box']}>
          <h2>Box 1</h2>
          <p>Description 1</p>
        </div>
        <div className={dashboardStyles['box']}>
          <h2>Box 2</h2>
          <p>Description 2</p>
        </div>
        <div className={dashboardStyles['box']}>
          <h2>Box 3</h2>
          <p>Description 3</p>
        </div>
        <div className={dashboardStyles['box']}>
          <h2>Box 4</h2>
          <p>Description 4</p>
        </div>
      </div>
      {/* Rest of your code */}
    </div>
  );
};

export default DashboardPage;

