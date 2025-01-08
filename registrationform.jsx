import React, { useState } from 'react';
import qr from './qrcode2.png';
import { Upload } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    institution: '',
    ticketType: '',
    paymentProof: null,
    profileImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      {/* Personal Details Section */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            className="w-full px-4 py-2 bg-[#2C2C2C] border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300"
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-[#2C2C2C] border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300"
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            required
            className="w-full px-4 py-2 bg-[#2C2C2C] border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300"
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">College / Institution</label>
          <input
            type="text"
            name="institution"
            required
            className="w-full px-4 py-2 bg-[#2C2C2C] border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300"
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Ticket Selection Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Payment Details
        </h3>
        
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="radio"
              name="ticketType"
              value="day1"
              className="form-radio text-purple-400"
              onChange={handleInputChange}
            />
            <span className="text-gray-300  font-bold group-hover:text-white transition-colors duration-300">
              DAY 1 - 21st January (₹100)
            </span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="radio"
              name="ticketType"
              value="day2"
              className="form-radio text-purple-400"
              onChange={handleInputChange}
            />
            <span className="text-gray-300  font-bold group-hover:text-white transition-colors duration-300">
              DAY 2 - 22nd January (₹100)
            </span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="radio"
              name="ticketType"
              value="bothDays"
              className="form-radio text-purple-400"
              onChange={handleInputChange}
            />
            <span className="text-gray-300 font-bold group-hover:text-white transition-colors duration-300">
              DAY 1 & DAY 2 (₹150)
            </span>
          </label>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="space-y-4">
        <div className="bg-[#2C2C2C] p-4 rounded-lg border border-white/10">
          <img 
            src={qr} 
            alt="Payment QR Code" 
            className="mx-auto w-[400px]"
          />
          <p className="text-center text-lg text-gray-400 mt-2 font-bold" >
            UPI ID: iganarase@okicici
          </p>
          <p className="text-center text-sm text-gray-400 mt-2">
            Scan to pay using UPI
          </p>
        </div>
      </div>

      {/* File Upload Sections */}
      <div className="space-y-4">
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-300">Payment Proof</label>
    <div className="relative group">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFileChange(e, 'paymentProof')}
        className="hidden"
        id="paymentProof"
      />
      <label 
        htmlFor="paymentProof" 
        className="flex items-center justify-center w-full px-4 py-6 bg-[#2C2C2C] border border-white/10 rounded-lg cursor-pointer hover:border-purple-400 transition-all duration-300"
      >
        <div className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300">
          <Upload className="w-5 h-5" />
          <span>{formData.paymentProof?.name || 'Upload Payment Proof'}</span>
        </div>
      </label>
    </div>
    {formData.paymentProof && (
      <p className="text-sm text-gray-400 mt-2">
        Selected File: <span className="text-gray-300 font-medium">{formData.paymentProof.name}</span>
      </p>
    )}
  </div>
</div>


      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-400 to-blue-400 text-white font-medium py-3 rounded-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
      >
        Submit Registration
      </button>
    </form>
  );
};

export default RegistrationForm;
