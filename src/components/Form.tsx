import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Select } from 'antd';
import '../index.css'; 

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChangeTime = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
  };

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
    <div className="flex justify-center items-center  bg-gray-100 absolute top-[258px]">
      <div className="bg-white p-8 shadow-shadow  w-full max-w-[540px]">
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
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
              className="w-full px-[14px] py-[14px]  text-[20px] font-normal  text-[#111111] leading-[1.4] border-b-[1px]
              border-b-[#8e8e8e]  focus:outline-none placeholder:opacity-50 focus:border-b-[#111]"
           />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Pick a Date
            </label>
            <div className='flex gap-4'>
              <input type="number"
              placeholder='MM'
               className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
              <input 
              placeholder='DD'
              type="number" className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
              <input type="number" 
              placeholder='YYYY'
              className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Pick a Time
            </label>
            <div className='flex gap-4'>
              <input type="number" 
              placeholder='09'
              className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
              <input type="number" 
              placeholder='00'
              className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
             <Select
                labelInValue
                defaultValue={{ value: 'AM', label: 'AM' }}
                onChange={handleChangeTime}
                options={[
                  {
                    value: 'PM',
                    label: 'PM',
                  },
                  {
                    value: 'AM',
                    label: 'AM',
                  }
                ]}
                className='ant-select-selector'
              />

            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="w-full bg-primary-CodGray text-white pt-5 pb-4  hover:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
