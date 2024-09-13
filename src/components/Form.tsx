import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'YOUR_SERVICE_ID'; 
    const templateID = 'YOUR_TEMPLATE_ID'; 
    const userID = 'YOUR_USER_ID'; 

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Reservation submitted successfully! We will contact you soon.');
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        alert('Failed to send reservation. Please try again later.');
        console.error('FAILED...', error);
      });

    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: 1,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Make a Reservation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-[14px] py-[14px]  text-[20px] font-normal  text-[#111111] leading-[1.4] border-b-[1px]
               border-b-[#8e8e8e]  focus:outline-none placeholder:opacity-50 focus:border-b-[#111]"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Pick a Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Pick a Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
              Number of People
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="20"
              placeholder="Number of guests"
              value={formData.guests}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Make Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
