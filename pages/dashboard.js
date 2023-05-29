import React from 'react';
import dashboardStyles from '../styles/dashboard.module.css';
import Image from 'next/image';
import Link from 'next/link';


const DashboardPage = () => {
  return (
    <div className={dashboardStyles['dashboard-container']}>
      <div className={dashboardStyles['gray-background']}>
        <div className={dashboardStyles['left-side']}>
          <div className={dashboardStyles['logo-container']}>
            <Image src="/zikor-logo.png" alt="Logo" width={100} height={50} />
            <div className={dashboardStyles['icons-container']}>
              <ul>
                <li><a href="#"><Image src="/home.png" alt="Home" width={25} height={25} /> <span className={dashboardStyles['nav-text']}>Home</span></a></li>
                <li><a href="#"><Image src="/noti.png" alt="Notification" width={25} height={25} /> <span className={dashboardStyles['nav-text']}>Notification</span></a></li>
                <li><a href="#"><Image src="/setting.png" alt="Settings" width={25} height={25} /> <span className={dashboardStyles['nav-text']}>Settings</span></a></li>
                <li><a href="#"><Image src="/sms.png" alt="Help" width={25} height={25} /> <span className={dashboardStyles['nav-text']}>Help</span></a></li>
                <li><a href="#"><Image src="/call.png" alt="Contact Us" width={25} height={25} /> <span className={dashboardStyles['nav-text']}>Contact Us</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={dashboardStyles['center']}>
        <ul className={dashboardStyles['list-items']}>
          <li className={dashboardStyles['active']}><a href="#">Dashboard</a></li>
          <li>
            <Link href="/product" as="/product">
              <h4>Products</h4>
            </Link>
          </li>
          <li><a href="#">Order</a></li>
          <li><a href="#">Completed</a></li>
        </ul>
      </div>
      <div className={dashboardStyles['boxes-container']}>
        <div className={dashboardStyles['box']}>
          <h2><Image src="/sales.png" alt="sales" width={25} height={25} /> <span className={dashboardStyles['box-text']}>Total Sales </span> </h2>
          <p>&#8358; 120,000</p>
        </div>
        <div className={dashboardStyles['box']}>
          <h2><Image src="/orders.png" alt="orders" width={25} height={25} /> <span className={dashboardStyles['box-text']}>Total Orders </span> </h2>
          <p>1200</p>
        </div>
        <div className={dashboardStyles['box']}>
          <h2><Image src="/found.png" alt="found" width={25} height={25} /> <span className={dashboardStyles['box-text']}>Total Found </span> </h2>
          <p>30,00</p>
        </div>
        <div className={dashboardStyles['box']}>
          <h2><Image src="/products.png" alt="products" width={25} height={25} /> <span className={dashboardStyles['box-text']}>Total Product</span> </h2>
          <p>4,500</p>
        </div>
      </div>
      <div className={dashboardStyles['rectangle-container']}>
        <div className={`${dashboardStyles['rectangle']} ${dashboardStyles['rectangle-left']}`}>
          <div className={dashboardStyles['rectangle-content']}>
            <h3 className={dashboardStyles['rectangle-sales']}>Top Sale:</h3>
            <img src="/nike.jpg" alt="Image" className={dashboardStyles['rectangle-image']} />
            <h3 className={dashboardStyles['rectangle-title']}>Nike Air Force 1</h3>
            <p className={dashboardStyles['rectangle-description']}>Dunk</p>
            <p className={dashboardStyles['rectangle-description1']}>Size: 43</p>
            <p className={dashboardStyles['rectangle-description2']}>Color: Black</p>
            <button className={dashboardStyles['share-button']}>Share</button>
          </div>
        </div>
      </div>
      <div className={dashboardStyles['srectangle-container']}>
        <div className={`${dashboardStyles['srectangle']} ${dashboardStyles['rectangle-left']}`}>
          <div className={dashboardStyles['srectangle-content']}>
            <h3 className={dashboardStyles['srectangle-title']}>Recent Order:</h3>
            <img src="/polo.jpg" alt="Image" className={dashboardStyles['srectangle-image']} />
            <h3 className={dashboardStyles['srectangle-title']}>T-shirt Polo</h3>
            <p className={dashboardStyles['srectangle-description']}>For men</p>
            <p className={dashboardStyles['srectangle-description1']}>Size: XL</p>
            <p className={dashboardStyles['srectangle-description2']}>Color: Gray</p>
            <button className={dashboardStyles['sshare-button']}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
