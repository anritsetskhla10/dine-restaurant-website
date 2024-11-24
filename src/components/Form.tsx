import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Select } from 'antd';
import '../index.css';
import InputMask from 'react-input-mask-next';


const Form: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    time: "",
    guests: 4,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleGuestChange = (change: number) => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.max(1, prev.guests + change),
    }));
  };

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      date: "",
      time: "",
    };

    if (!formData.name.trim()) newErrors.name = "This field is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.month || !formData.day || !formData.year) {
      newErrors.date = "Please pick a valid date.";
    } else {
      const date = new Date(
        +formData.year,
        +formData.month - 1,
        +formData.day
      );
      const today = new Date();
      if (date < today) newErrors.date = "Date cannot be in the past.";
    }
    if (!formData.time.trim()) newErrors.time = "Please pick a time.";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert("Reservation submitted successfully! We will contact you soon.");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        alert("Failed to send reservation. Please try again later.");
        console.error("FAILED...", error);
      });

      setFormData({
        name: "",
        email: "",
        month: "",
        day: "",
        year: "",
        time: "",
        guests: 4,
      });
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100 w-[540px]">
      <div className="bg-white p-16 shadow-shadow w-full">
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
           {/* Name Field */}
          <div className="form-group flex flex-col gap-3">
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
             {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

            {/* Email Field */}
          <div className="form-group form-group flex flex-col gap-3">
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
           {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

            {/* Date Picker */}
          <div className="flex justify-between items-center">
           <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Pick a Date
            </label>
            {errors.date && <span className="text-red-500 text-sm">{errors.date}</span>}
           </div>
            <div className='flex gap-4'>
              <InputMask type="number"
              placeholder='MM'
              min={1}
              max={12}
              mask='99'
               className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
              <InputMask
              placeholder='DD'
              min={1}
              max={31}
              mask="99"
              type="number" className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
              <InputMask type="number" 
              placeholder='YYYY'
              min={2024}
              mask='9999'
              className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
            </div>
          </div>

             {/* Time Picker */}
          <div className="flex justify-between items-center">
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Pick a Time
              </label>
              {errors.time && <span className="text-red-500 text-sm">{errors.time}</span>}
            </div>
            <div className='flex gap-4'>
              <InputMask type="number" 
              placeholder='09'
              min={1}
              max={23}
              mask='99'
              className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
              <input type="number" 
              placeholder='00'
              min={0}
              max={59}
              className='max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none'/>
                <Select
                  defaultValue={{ value: 'AM', label: 'AM' }} 
                  onChange={(value) => {
                    setFormData((prev) => ({ ...prev, time: `${value.value}` }));
                  }}
                  options={[
                    {
                      value: 'AM',
                      label: 'AM',
                    },
                    {
                      value: 'PM',
                      label: 'PM',
                    },
                  ]}
                  className="ant-select-selector"
                />

            </div>
          </div>

         {/* Guests Counter */}
         <div className="flex justify-between items-center border-b border-gray-300 py-4">
            <button
              type="button"
              onClick={() => handleGuestChange(-1)}
              className="text-2xl text-gray-700 hover:text-black"
            >
              -
            </button>
            <span className="text-lg font-medium">{formData.guests} {formData.guests ==  1 ? 'Person' : 'People' } </span>
            <button
              type="button"
              onClick={() => handleGuestChange(1)}
              className="text-2xl text-gray-700 hover:text-black"
            >
              +
            </button>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="w-full bg-primary-CodGray text-white pt-5 pb-4 border-2 hover:bg-[#ffffff] hover:text-black hover:border-solid  hover:border-black"
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
