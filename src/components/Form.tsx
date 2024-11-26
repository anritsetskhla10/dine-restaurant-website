import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Select } from 'antd';
import InputMask from 'react-input-mask';
import '../index.css';

const Form: React.FC = () => {

  // ინფუთის მნიშვნელობებისთვის მაქვს შესაცვლელი ლოგიკა. თუ რეალთაიმ მნიშვნელობა ცარიელია ეგ გამოაჩინოს

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 4,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });


  const validateDate = (month: string, day: string, year: string): boolean => {
    const currentYear = new Date().getFullYear();
    const validMonth = /^0[1-9]|1[0-2]$/.test(month);
    const validDay = /^0[1-9]|[12][0-9]|3[01]$/.test(day); 
    const validYear = /^\d{4}$/.test(year) && parseInt(year) >= currentYear;
  
    return validMonth && validDay && validYear;
  };

  const handleDateChange = (month: string, day: string, year: string) => {
    const [currentMonth = "", currentDay = "", currentYear = ""] = formData.date.split("/");

    const formattedMonth = month || currentMonth;
    const formattedDay = day || currentDay;
    const formattedYear = year || currentYear;


    setFormData((prev) => ({
      ...prev,
      date: `${formattedMonth}/${formattedDay}/${formattedYear}`,
    }));
    console.log(formData.date)
  };

  const validateTime = (hour: string, minute: string, period: string): boolean => {
    const validHour = /^0[1-9]|1[0-2]$/.test(hour); 
    const validMinute = /^[0-5][0-9]$/.test(minute); 
    const validPeriod = period === "AM" || period === "PM"; 
    return validHour && validMinute && validPeriod;
  };

  const handleTimeChange = (hour: string, minute: string, period: string) => {
    const [currentHour = "", currentMinute = "", currentPeriod = "AM"] = formData.time
      ? formData.time.split(/[: ]/)
      : ["", "","AM"];

    const formattedHour = hour || currentHour;
    const formattedMinute = minute || currentMinute;
    const formattedPeriod = period || currentPeriod;


    setFormData((prev) => ({
      ...prev,
      time: `${formattedHour}:${formattedMinute} ${formattedPeriod}`,
    }));
    
  };

  const validateForm = (): boolean => {
    const [month = "", day = "", year = ""] = formData.date.split("/");
    const [hour = "", minute = "", period = "AM"] = formData.time.split(/[: ]/);
  
    console.log(formData.time.split(/[: ]/))

    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Invalid email format.",
      date: validateDate(month, day, year) ? "" : "Invalid date format.",
      time: validateTime(hour, minute, period) ? "" : "Invalid time format.",
    };
  
    setErrors(newErrors);
    console.log(newErrors)
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleGuestChange = (change: number) => {
    setFormData((prev) => ({ ...prev, guests: Math.max(1, prev.guests + change) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        alert("Reservation submitted successfully! We will contact you soon.");
        setFormData({ name: "", email: "", date: "", time: "", guests: 4 });
      })
      .catch(() => {
        alert("Failed to send reservation. Please try again later.");
      });

    console.log(formData);
  };



  return (
    <div className="flex justify-center items-center bg-gray-100 w-[540px]">
      <div className="bg-white p-16 shadow-shadow w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Name Field */}
          <div className="form-group flex flex-col gap-3">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-[14px] py-[14px] text-[20px] font-normal text-[#111111] leading-[1.4] border-b-[1px] border-b-[#8e8e8e] focus:outline-none placeholder:opacity-50 focus:border-b-[#111]"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group flex flex-col gap-3">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-[14px] py-[14px] text-[20px] font-normal text-[#111111] leading-[1.4] border-b-[1px] border-b-[#8e8e8e] focus:outline-none placeholder:opacity-50 focus:border-b-[#111]"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          {/* Date Picker */}
          <div className="flex justify-between items-center">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Pick a Date
            </label>
            {errors.date && <span className="text-red-500 text-sm">{errors.date}</span>}
            <div className="flex gap-4">
            <InputMask
              placeholder="MM"
              mask="99"
              value={formData.date.split("/")[0] || "MM"}
              onChange={(e) => handleDateChange(e.target.value, "", "")}
              maskChar={null}
              className="max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none"
            />
            <InputMask
              placeholder="DD"
              mask="99"
              value={formData.date.split("/")[1] || "DD"}
              onChange={(e) => handleDateChange("", e.target.value, "")}
              maskChar={null}
              className="max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none"
            />
            <InputMask
              placeholder="YYYY"
              mask="9999"
              value={formData.date.split("/")[2] || "YYYY"}
              onChange={(e) => handleDateChange("", "", e.target.value)}
              maskChar={null}
              className="max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none"
            />
            </div>
          </div>

          {/* Time Picker */}
          <div className="flex justify-between items-center">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Pick a Time
            </label>
            {errors.time && <span className="text-red-500 text-sm">{errors.time}</span>}
            <div className="flex gap-4">
            <InputMask
              placeholder="HH"
              mask="99"
              value={formData.time.split(":")[0] || "HH"}
              onChange={(e) => handleTimeChange(e.target.value, "", "")}
              maskChar={null}
              className="max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none"
            />
            <InputMask
              placeholder="MM"
              mask="99"
              value={formData.time.split(":")[1] || "MM"}
              onChange={(e) => handleTimeChange("", e.target.value, "")}
              maskChar={null}
              className="max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none"
            />
            <Select
              defaultValue="AM"
              onChange={(value) => handleTimeChange("", "", value)}
              options={[
                { value: "AM", label: "AM" },
                { value: "PM", label: "PM" },
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary-CodGray text-white pt-5 pb-4 border-2 hover:bg-[#ffffff] hover:text-black hover:border-solid hover:border-black"
          >
            Make Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;