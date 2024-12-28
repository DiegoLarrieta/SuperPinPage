import React from 'react';
import './UserData.css'; // Import the CSS file

// Define the props for UserData
interface UserDataProps {
  userData: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    state: string;
  };
  setUserData: React.Dispatch<React.SetStateAction<{
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    state: string;
  }>>;
}

const UserData: React.FC<UserDataProps> = ({ userData, setUserData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="userdata-container">
      <h2>Contact & Shipping Information</h2>
      <form>
        {/* Form fields for userData */}
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="postalCode"
          value={userData.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
        />
        <input
          type="text"
          name="state"
          value={userData.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
      </form>
    </div>
  );
};

export default UserData;
