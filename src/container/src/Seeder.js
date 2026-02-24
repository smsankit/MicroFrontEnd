const users = [
  {
    id: 1,
    name: 'Ankit Chauhan',
    age: 37,
    gender:'male',
    income:1250000,
    email: 'ankit.chauhan@example.com',
    aadhaarNumber: '5678 1234 9087',
    address: 'Mahaveer Apartment, Gurgaon, Haryana, 122001',
    insurance: {
      policyNumber: 'HI908765432',
      insuranceType: 'Health Insurance',
      premium: 15000,
      coverageAmount: 700000,
      insuranceProvider: 'Star Health Insurance'
    }
  },
  {
    id: 2,
    name: 'Neha Gupta',
    email: 'neha.gupta@example.com',
    age: 30,
    gender:'female',
    income:1950000,
    aadhaarNumber: '7788 9900 1122',
    address: 'D-45, Palm Residency, Noida, Uttar Pradesh, 201301',
    insurance: {
      policyNumber: 'MI556677889',
      insuranceType: 'Motor Insurance',
      premium: 21000,
      coverageAmount: 3500000,
      insuranceProvider: 'HDFC ERGO'
    }
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    email: 'arjun.mehta@example.com',
    age: 45,
    gender:'male',
    income:1350000,
    aadhaarNumber: '8899 0011 2233',
    address: 'A-88, Silver Springs, Hyderabad, Telangana, 500001',
    insurance: {
      policyNumber: 'LI667788990',
      insuranceType: 'Life Insurance',
      premium: 32000,
      coverageAmount: 12000000,
      insuranceProvider: 'LIC of India'
    }
  },
  {
    id: 4,
    name: 'Sandeep Kulkarni',
    email: 'sandeep.k@example.com',
    age: 34,
    gender:'male',
    income:1750000,
    aadhaarNumber: '4455 6677 8899',
    address: 'H-21, Sunrise Colony, Ahmedabad, Gujarat, 380001',
    insurance: {
      policyNumber: 'LI334455667',
      insuranceType: 'Life Insurance',
      premium: 27000,
      coverageAmount: 9000000,
      insuranceProvider: 'TATA AIA Life Insurance'
    }
  },
   {
    id: 5,
    name: 'Ankit Kumar',
    email: 'a@b.com',
    age: 34,
    gender:'male',
    income:1750000,
    aadhaarNumber: '4455 6677 8899',
    address: 'H-21, Palam Vihar, Gurgaon, Haryana, 122001',
    insurance: {
      policyNumber: 'LI334455667',
      insuranceType: 'Life Insurance',
      premium: 27000,
      coverageAmount: 9000000,
      insuranceProvider: 'Bajaj Life Insuranc'
    }
  }
];


function initializeLocalStorage() {

  if (!localStorage.getItem('users')) {

    localStorage.setItem('users', JSON.stringify(users));  
  }
}


function getUserById(userId) {
  const users = JSON.parse(localStorage.getItem('users'));  
  return users.find(user => user.id === userId) || null; 
}


function getInsuranceDetails(userId) {
  const user = getUserById(userId);  
  if (user) {
    return user.insurance; 
  }
  return null;  
}


initializeLocalStorage();


export default {
  initializeLocalStorage,
  getUserById,
  getInsuranceDetails
};
