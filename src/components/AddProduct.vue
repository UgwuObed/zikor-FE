<template>
  <div class="add-product">
    <div v-if="currentStep === 'step1'">
      <h3>Add Product</h3>
      <div class="form-group">
        <input type="text" id="product-name" v-model="productName" placeholder="Product Name">
      </div>
      <div class="form-group">
        <input type="number" id="product-price" v-model="productPrice" placeholder="Product Price(No comma)">
      </div>
      <div class="form-group">
        <input type="number" id="discount-price" v-model="discountPrice" placeholder="Discount Price(No comma)">
      </div>
       <div class="discount-note">
          <span class="note-label">Note:</span>
          <br>
          <span class="note-text">
            Set a discount price to help our bot negotiate and 
            increase your chances of closing deals faster!
          </span>
        </div>
      <div class="form-group">
        <input type="number" id="quantity" v-model="quantity" placeholder="Quantity (Optional)">
      </div>
      <div class="form-group">
        <select id="category" v-model="selectedCategory">
          <option disabled value="">Select a category</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <button @click="nextStep">Next</button>
    </div>
    <div v-else-if="currentStep === 'step2'">
      <h3>Add Image</h3>
    <p>Click to add an image</p>
      <div class="image-upload">

        <label for="product-image" class="image-upload-label">
          <input type="file" id="product-image" @change="handleImageChange" class="image-upload-input">
          <div class="image-upload-icon"></div> 
        </label>
      </div>
      
      <div class="form-group">
        <label for="product-description">Product Description (Optional)</label>
        <textarea id="product-description" v-model="productDescription" class="description-input"></textarea>
      </div>
      <button @click="uploadProduct" class="upload-button">Upload</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../config';

export default {
  data() {
    return {
      currentStep: 'step1',
      productName: '',
      productPrice: '',
      discountPrice: '',
      quantity: '',
      selectedCategory: '',
      categories: [],
      productImage: null,
      productDescription: '',
    };
  },
  methods: {
    async nextStep() {
      // Validate step 1 fields if needed
      this.currentStep = 'step2';
    },
    prevStep() {
      this.currentStep = 'step1';
    },
async fetchCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/admin/categories`);
    this.categories = response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
},
    handleImageChange(event) {
      this.productImage = event.target.files[0];
    },
    async uploadProduct() {
      // Validate step 2 fields if needed
      const formData = new FormData();
      formData.append('name', this.productName);
      formData.append('main_price', this.productPrice);
      formData.append('discount_price', this.discountPrice);
      formData.append('quantity', this.quantity);
      formData.append('category_id', this.selectedCategory);
      formData.append('description', this.productDescription);
      formData.append('image', this.productImage);

      try {
        const response = await axios.post(`${BASE_URL}/products`, formData);
        console.log('Product uploaded successfully:', response.data);
        // Optionally, reset the form fields
        this.resetForm();
      } catch (error) {
        console.error('Error uploading product:', error);
      }
    },
    resetForm() {
      this.currentStep = 'step1';
      this.productName = '';
      this.productPrice = '';
      this.discountPrice = '';
      this.quantity = '';
      this.selectedCategory = '';
      this.productImage = null;
      this.productDescription = '';
    },
  },
  created() {
    // Fetch categories when the component is created
    this.fetchCategories();
  },
};
</script>

<style scoped>

@media only screen and (max-width: 600px) {
.add-product {
  margin: 0 auto;
  max-width: 400px; 
  overflow-x: hidden;
  font-family: 'Poppins';
}

.form-group {
  margin-bottom: 40px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 90%;
  padding: 10px;
  border: 1px solid #5E17EB;
  background-color: white;
  border-radius: 5px;
  height: 25px;
  outline: none;
}

select {
  width: 95%;
  padding: 10px;
  border: 1px solid #5E17EB;
  background-color: white;
  border-radius: 5px;
  height: 45px;
  outline: none;
  color: grey;
}

button {
    padding: 20px 40px;
    background-color: #5E17EB;
    color: white;
    border: none;
    border-radius: 5px;
    width: 50%;
    height: 35px;
    align-item: center;
    line-height: 2px;
    font-family: 'Poppins';
    font-size: 16px;
}

.discount-note {
  margin-bottom: 20px; 
  margin-top: -30px;
  background-color: #ffe6e6;
  width: 90%; 
  padding: 10px; 
  border-radius: 5px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin-left: 10px;
}

.note-label {
  color: red;
  font-weight: bold; 
  margin-right: 290px;
}

.note-text {
  margin-left: 10px;
  text-align: left; 
  font-size: 14px;
}

.image-upload {
  position: relative;
  display: inline-block;
}

.image-upload-label {
  display: block;
  width: 120px; 
  height: 120px; 
  border: 2px dashed #5E17EB; 
  border-radius: 8px; 
  text-align: center; 
  cursor: pointer; 
}

.image-upload-input {
  display: none; 
}

.image-upload-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 2px solid #5E17EB;
  border-radius: 50%; 
}

.image-upload-icon::after {
  content: '+';
  font-size: 24px;
  line-height: 40px; 
}


.description-input {
  width: 90%; 
  height: 150px; 
  padding: 10px; 
  border: 1px solid #5E17EB;
  border-radius: 8px;  
  resize: none; 
  margin-bottom: 10px; 
}

.upload-button {
  padding: 10px 20px;
  background-color: #5E17EB; 
  color: #fff; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
}

 }
</style>
