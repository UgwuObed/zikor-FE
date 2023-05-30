import React from 'react';
import dashboardStyles from '../styles/product.module.css';
import Image from 'next/image';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div className={dashboardStyles['product-container']}>
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
        <li>
            <Link href="/dashboard" as="/dashboard">
              <h4>Dashboard</h4>
            </Link>
          </li>
          <li className={dashboardStyles['active']}><a href="#">Products</a></li>
          <li><a href="#">Order</a></li>
          <li><a href="#">Completed</a></li>
        </ul>
      </div>

      <div className={dashboardStyles['search-bar']}>
  <input type="text" placeholder="Search products by name" />
  <button type="button">Search</button>
</div>
<div className={dashboardStyles['button-add']}>
<button className={dashboardStyles['add-button']} style={{float: "left"}}>Add</button>
</div>
<div className={dashboardStyles['table-container']}>
  <h2 className={dashboardStyles['table-title']}>Products</h2>
  <table className={dashboardStyles['product-table']}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Price</th>
        <th>Category</th>
        <td className={dashboardStyles['last-body']}>More</td>
      </tr>
    </thead>
    <tbody>
      {/* Dummy table content */}
      <tr>
        <td>Product 1</td>
        <td>Type 1</td>
        <td>$10</td>
        <td>Category 1</td>
        <td className={dashboardStyles['last-body']}>More 1</td>
      </tr>
      <tr>
        <td>Product 2</td>
        <td>Type 2</td>
        <td>$20</td>
        <td>Category 2</td>
        <td className={dashboardStyles['last-body']}>More 2</td>
      </tr>
      {/* ... */}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default DashboardPage;
