export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "fitness",
    label: "Fitness",
    path: "/product/listing/fitness",
  },
  {
    id: "listing",
    label: "Products",
    path: "/product/listing/all-products",
  },

  {
    id: "listingdoctor",
    label: "Appoinments",
    path: "/product/listing/appoinments",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Products",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Add New Product",
    path: "/admin-view/add-product",
  },
  {
    id: "allUsers",
    label: "All Users",
    path: "/admin-view/all-users",
  },
];

export const doctorsAddControl = [
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "available",
        label: "Available",
      },
      {
        id: "unavailable",
        label: "Unavailable",
      },
    ],
  },
  {
    id: "hospital",
    type: "",
    placeholder: "",
    label: "Hospital",
    componentType: "select",
    options: [
      {
        id: "lab",
        label: "Lab Aid Hospital",
      },
      {
        id: "square",
        label: "Square Hospital",
      },
    ],
  },
  {
    id: "special",
    type: "",
    placeholder: "",
    label: "Specialization",
    componentType: "select",
    options: [
      {
        id: "medicine",
        label: "Medicine",
      },
      {
        id: "heart",
        label: "Heart",
      },
    ],
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "age",
    type: "age",
    placeholder: "Enter your age",
    label: "Age",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "customer",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter shop-name",
    label: "Shop Name",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyA347aJRODpHtLQ7n7T6ReVt7bMy5YNQck",
  authDomain: "defence-project-9fdeb.firebaseapp.com",
  projectId: "defence-project-9fdeb",
  storageBucket: "defence-project-9fdeb.appspot.com",
  messagingSenderId: "642927989735",
  appId: "1:642927989735:web:c5b798aaa2f32f897ca342",
  measurementId: "G-C41ZZ9CBZ9",
};

export const firebaseStroageURL = "gs://defence-project-9fdeb.appspot.com/";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Postal Code",
    componentType: "input",
  },
];
