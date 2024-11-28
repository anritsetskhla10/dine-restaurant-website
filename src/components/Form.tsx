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

  const [valueDate, setValueDate] = useState({
    month: '',
    day: '',
    year: '',
    hour: '',
    minute: '',
    period: '',
  })



  const handleMonthChange = (month: string) => {
    const paddedMonth = padWithZero(month);
    const currentParts = formData.date.split("/");
    const formattedDate = `${paddedMonth}/${currentParts[1] || valueDate.day}/${currentParts[2] || valueDate.year}`;
  
    setValueDate((prev) => ({ ...prev, month: paddedMonth }));
    setFormData((prev) => ({ ...prev, date: formattedDate }));
  };
  
  const handleDayChange = (day: string) => {
    const paddedDay = padWithZero(day);
    const currentParts = formData.date.split("/");
    const formattedDate = `${currentParts[0] || valueDate.month}/${paddedDay}/${currentParts[2] || valueDate.year}`;
  
    setValueDate((prev) => ({ ...prev, day: paddedDay }));
    setFormData((prev) => ({ ...prev, date: formattedDate }));
  };
  
  const handleYearChange = (year: string) => {
    setValueDate((prev) => ({ ...prev, year }));
  
    setFormData((prev) => ({
      ...prev,
      date: `${valueDate.month}/${valueDate.day}/${year || valueDate.year}`,
    }));
  };

  const padWithZero = (value: string): string => {
    return value.padStart(2, "0");
  };

  const handleHourChange = (hour: string) => {
    const formattedHour = padWithZero(hour);
  
    setValueDate((prev) => ({ ...prev, hour: formattedHour }));
    setFormData((prev) => ({
      ...prev,
      time: `${formattedHour}:${valueDate.minute} ${valueDate.period}`,
    }));
  };
  
  const handleMinuteChange = (minute: string) => {
    const formattedMinute = padWithZero(minute);
  
    setValueDate((prev) => ({ ...prev, minute: formattedMinute }));
    setFormData((prev) => ({
      ...prev,
      time: `${valueDate.hour}:${formattedMinute} ${valueDate.period}`,
    }));
  };

  const handlePeriodChange = (period: string) => {
    setValueDate((prev) => ({ ...prev, period }));
  
    setFormData((prev) => ({
      ...prev,
      time: `${valueDate.hour}:${valueDate.minute} ${period || valueDate.period}`,
    }));
  };

  const validateTime = (hour: string, minute: string, period: string): boolean => {
    const formattedHour = padWithZero(hour);
    const formattedMinute = padWithZero(minute);
  
    const validHour = /^0[1-9]|1[0-2]$/.test(formattedHour); 
    const validMinute = /^[0-5][0-9]$/.test(formattedMinute); 
    const validPeriod = period === "AM" || period === "PM"; 
  
    return validHour && validMinute && validPeriod;
  };

  const validateDate = (month: string, day: string, year: string): boolean => {
    const currentYear = new Date().getFullYear();
  
    const padWithZero = (value: string): string => value.padStart(2, "0");
    const formattedMonth = padWithZero(month);
    const formattedDay = padWithZero(day);
  
    const validMonth = /^0[1-9]|1[0-2]$/.test(formattedMonth);
    const validDay = /^[0-3][0-9]$/.test(formattedDay); 
    const validYear = /^\d{4}$/.test(year) && parseInt(year) >= currentYear;
  
    if (!validMonth || !validDay || !validYear) return false;

    const date = new Date(`${year}-${formattedMonth}-${formattedDay}`);
    return (
      date.getFullYear() === parseInt(year) &&
      date.getMonth() + 1 === parseInt(formattedMonth) && 
      date.getDate() === parseInt(formattedDay)
    );
  };



  const validateForm = (): boolean => {
    const [month = "", day = "", year = ""] = formData.date.split("/");
    const [hour = "", minute = "", period = "AM"] = formData.time.split(/[: ]/);
  
    console.log(formData.time.split(/[: ]/))
    console.log(formData.date.split(/[: ]/))

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
              value={valueDate.month}
              onChange={(e) => handleMonthChange(e.target.value)}
              maskChar={null}
              className="max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none"
            />
            <InputMask
              placeholder="DD"
              mask="99"
              value={valueDate.day}
              onChange={(e) => handleDayChange(e.target.value)}
              maskChar={null}
              className="max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none"
            />
            <InputMask
              placeholder="YYYY"
              mask="9999"
              value={valueDate.year}
              onChange={(e) => handleYearChange( e.target.value)}
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
              value={valueDate.hour}
              onChange={(e) => handleHourChange(e.target.value)}
              maskChar={null}
              className="max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none"
            />
            <InputMask
              placeholder="MM"
              mask="99"
              value={valueDate.minute}
              onChange={(e) => handleMinuteChange(e.target.value)}
              maskChar={null}
              className="max-w-20 border-b-[1px] border-b-[#8e8e8e] pl-4 pb-3 focus:outline-none"
            />
            <Select
              defaultValue="AM"
              onChange={(value) => handlePeriodChange(value)}
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