import React, { useState, useEffect } from 'react';
import dashboardStyles from '../styles/product.module.css';
import Image from 'next/image';
import Link from 'next/link';

const DashboardPage = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formValues, setFormValues] = useState({});
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleMoreClick = (rowIndex) => {
    setSelectedRow(rowIndex === selectedRow ? null : rowIndex);
  };

  const handleAddButtonClick = () => {
    setShowAddProduct(true);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleUpload = () => {
    // Perform upload logic here
    // Once upload is successful, set isProductAdded to true to display the notification
    setIsProductAdded(true);
    // Reset form values
    setFormValues({});
  };

  useEffect(() => {
    if (isProductAdded) {
      setIsNotificationVisible(true);

      // Hide the notification after 3 seconds
      const timer = setTimeout(() => {
        setIsNotificationVisible(false);
        setIsProductAdded(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isProductAdded]);
  

  const renderForm = () => {
    if (selectedCategory === 'cloths') {
      return (
                <div className={dashboardStyles['form-wrapper']}>
          <div className={dashboardStyles['form-field']}>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" value={formValues.name || ''} onChange={handleInputChange} className={dashboardStyles.inputName} />
          </div>
          <div className={dashboardStyles['form-field1']}>
            <label htmlFor="type">Type *</label>
            <input type="text" id="type" value={formValues.type || ''} onChange={handleInputChange} className={dashboardStyles.inputType} />
          </div>
          <div className={dashboardStyles['form-field2']}>
            <label htmlFor="brand">Brand *</label>
            <input type="text" id="brand" value={formValues.brand || ''} onChange={handleInputChange} className={dashboardStyles.inputBrand} />
          </div>
          <div className={dashboardStyles['form-field3']}>
            <label htmlFor="size">Size *</label>
            <input type="text" id="size" value={formValues.size || ''} onChange={handleInputChange} className={dashboardStyles.inputSize} />
          </div>
          <div className={dashboardStyles['form-field4']}>
            <label htmlFor="category">Gender *</label>
            <select id="category" value={formValues.category || ''} onChange={handleInputChange} className={dashboardStyles.selectCategory}>
              <option value="">Select a gender category</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
          <div className={dashboardStyles['form-field5']}>
            <label htmlFor="description">Description *</label>
            <textarea id="description" value={formValues.description || ''} onChange={handleInputChange} className={dashboardStyles.textareaDescription}></textarea>
          </div>
          <div className={dashboardStyles['form-field6']}>
            <label htmlFor="color">Color *</label>
            <input type="text" id="color" value={formValues.color || ''} onChange={handleInputChange} className={dashboardStyles.inputColor} />
          </div>
          <div className={dashboardStyles['form-field7']}>
            <label htmlFor="price">Price *</label>
            <input type="text" id="price" value={formValues.price || ''} onChange={handleInputChange} className={dashboardStyles.inputPrice} />
          </div>
          <div className={dashboardStyles['form-field8']}>
          <label htmlFor="image" className={dashboardStyles.dropContainer}>
            <span className={dashboardStyles.dropTitle}>Drop files here </span>
            or
            <input type="file" id="image" accept="image/*" className={dashboardStyles.inputImage} />
          </label>
        </div>

          <div>
            <button type="button" onClick={handleUpload} className={dashboardStyles.uploadButton}>
              Add
            </button>
          </div>
        </div>

      );
    } else if (selectedCategory === 'food') {
      return (
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={formValues.name || ''} onChange={handleInputChange} />
          </div>
          {/* Add food specific form fields here */}
          {/* ... */}
        </div>
      );
    } else if (selectedCategory === 'shoes') {
      return (
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={formValues.name || ''} onChange={handleInputChange} />
          </div>
          {/* Add shoes specific form fields here */}
          {/* ... */}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={dashboardStyles['product-container']}>
      <div className={dashboardStyles['gray-background']}>
        <div className={dashboardStyles['left-side']}>
          <div className={dashboardStyles['logo-container']}>
            <Image src="/zikor-logo.png" alt="Logo" width={100} height={50} />
            <div className={dashboardStyles['icons-container']}>
              <ul>
                <li>
                  <a href="#">
                    <Image src="/home.png" alt="Home" width={25} height={25} />{' '}
                    <span className={dashboardStyles['nav-text']}>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src="/noti.png" alt="Notification" width={25} height={25} />{' '}
                    <span className={dashboardStyles['nav-text']}>Notification</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src="/setting.png" alt="Settings" width={25} height={25} />{' '}
                    <span className={dashboardStyles['nav-text']}>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src="/sms.png" alt="Help" width={25} height={25} />{' '}
                    <span className={dashboardStyles['nav-text']}>Help</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src="/call.png" alt="Contact Us" width={25} height={25} />{' '}
                    <span className={dashboardStyles['nav-text']}>Contact Us</span>
                  </a>
                </li>
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
          <li className={dashboardStyles['active']}>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Order</a>
          </li>
          <li>
            <a href="#">Completed</a>
          </li>
        </ul>
      </div>

      <div className={dashboardStyles['search-bar']}>
        <input type="text" placeholder="Search products by name" />
        <button type="button">Search</button>
      </div>
      <div className={dashboardStyles['button-add']}>
        <button className={dashboardStyles['add-button']} style={{ float: 'left' }} onClick={handleAddButtonClick}>
          Add
        </button>
      </div>
      {showAddProduct && (
        <div className={`${dashboardStyles['add-product-section']} ${dashboardStyles['show-form']}`}>
          <h2>Add Product</h2>
          <div className={dashboardStyles['category-container']}>
            <label htmlFor="category">Category:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">Select a option</option>
              <option value="cloths">Cloth</option>
              <option value="food">Food</option>
              <option value="shoes">Shoes</option>
            </select>
          </div>
          {renderForm()}
        </div>
      )}
      {isNotificationVisible && (
        <div className={`${dashboardStyles['notification']} ${dashboardStyles['show']}`}>
          Product successfully added!
        </div>
      )}
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
              <td className={dashboardStyles['last-body']}>
                <a href="#">
                  <Image
                    src="/more.png"
                    alt="More"
                    width={20}
                    height={8}
                    onClick={() => handleMoreClick(0)}
                  />
                </a>
                {selectedRow === 0 && (
                  <div className={dashboardStyles['more-options']}>
                    <ul>
                      <li>
                        <a href="#" className={dashboardStyles.edit}>
                          Edit
                        </a>
                      </li>
                      <li>
                        <a href="#" className={dashboardStyles.delete}>
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>Type 2</td>
              <td>$20</td>
              <td>Category 2</td>
              <td className={dashboardStyles['last-body']}>
                <a href="#">
                  <Image
                    src="/more.png"
                    alt="More"
                    width={20}
                    height={8}
                    onClick={() => handleMoreClick(1)}
                  />
                </a>
                {selectedRow === 1 && (
                  <div className={dashboardStyles['more-options']}>
                    <ul>
                      <li>
                        <a href="#" className={dashboardStyles.edit}>
                          Edit
                        </a>
                      </li>
                      <li>
                        <a href="#" className={dashboardStyles.delete}>
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </td>
            </tr>
            {/* ... */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
