import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Select } from 'antd';
import InputMask from 'react-input-mask';
import '../index.css';

const Form: React.FC = () => {


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
    month: '',
    day: '',
    year: '',
    hour: '',
    minute: '',
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

  const validateTimePart = (value: string, type: "hour" | "minute"): boolean => {
    const number = parseInt(value, 10);
  
    if (type === "hour") {
      return number >= 1 && number <= 12; 
    }
  
    if (type === "minute") {
      return number >= 0 && number <= 59; 
    }
  
    return false;
  };

  const validateDatePart = (value: string, type: "month" | "day" | "year"): boolean => {
    const currentYear = new Date().getFullYear();
  
    if (type === "month") {
      const month = parseInt(value, 10);
      return month >= 1 && month <= 12;
    }
  
    if (type === "day") {
      const day = parseInt(value, 10);
      return day >= 1 && day <= 31; 
    }
  
    if (type === "year") {
      const year = parseInt(value, 10);
      return year >= currentYear; 
    }
  
    return false;
  };



  const validateForm = (): boolean => {
    const { month, day, year, hour, minute } = valueDate;
  
    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Invalid email format.",
      month: validateDatePart(month, "month") ? "" : "Invalid date.",
      day: validateDatePart(day, "day") ? "" : "Invalid date.",
      year: validateDatePart(year, "year") ? "" : "Invalid date.",
      hour: validateTimePart(hour, "hour") ? "" : "Invalid time.",
      minute: validateTimePart(minute, "minute") ? "" : "Invalid time.",
    };
  
    setErrors(newErrors);
  
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleGuestChange = (change: number) => {
    setFormData((prev) => ({ ...prev, guests: Math.max(1, prev.guests + change) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(errors)
    if (!validateForm()) return;

    const serviceID = "service_g25a2dd";
    const templateID = "template_p1sto8c";
    const userID = "WzfoXw6icAoeCDBQn";

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
            className={`w-full px-[14px] py-[14px] text-[20px] font-normal leading-[1.4] border-b-[1px] ${
              errors.name ? 'border-b-red-500 text-red-500' : 'border-b-[#8e8e8e] text-[#111111]'
            } focus:outline-none placeholder:opacity-50 focus:border-b-[#111]`}
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
            className={`w-full px-[14px] py-[14px] text-[20px] font-normal leading-[1.4] border-b-[1px] ${
              errors.email ? 'border-b-red-500 text-red-500' : 'border-b-[#8e8e8e] text-[#111111]'
            } focus:outline-none placeholder:opacity-50 focus:border-b-[#111]`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          {/* Date Picker */}
          <div className="flex justify-between items-center">
            <div className='flex flex-col gap-2'>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Pick a Date
            </label>
            {errors.month || errors.day || errors.year ? (
            <p className="text-red-500 text-sm">{errors.month || errors.day || errors.year}</p>
          ) : null}
            </div>
            <div className="flex gap-4">
            <InputMask
              placeholder="MM"
              mask="99"
              value={valueDate.month}
              onChange={(e) => handleMonthChange(e.target.value)}
              maskChar={null}
              className={`max-w-20 border-b-[1px] ${
                errors.month ? 'border-b-red-500 text-red-500' : 'border-b-[#8e8e8e] text-[#111]'
              } pl-4 pb-3 focus:outline-none`}
            />
            <InputMask
              placeholder="DD"
              mask="99"
              value={valueDate.day}
              onChange={(e) => handleDayChange(e.target.value)}
              maskChar={null}
              className={`max-w-20 border-b-[1px] ${
                errors.day ? 'border-b-red-500 text-red-500' : 'border-b-[#8e8e8e] text-[#111]'
              } pl-4 pb-3 focus:outline-none`}
            />
            <InputMask
              placeholder="YYYY"
              mask="9999"
              value={valueDate.year}
              onChange={(e) => handleYearChange( e.target.value)}
              maskChar={null}
              className={`max-w-20 border-b-[1px] ${
                errors.year ? 'border-b-red-500 text-red-500' : 'border-b-[#8e8e8e] text-[#111]'
              } pl-4 pb-3 focus:outline-none`}
            />
            </div>
          </div>

          {/* Time Picker */}
          <div className="flex justify-between items-center">
            <div className='flex flex-col gap-2'>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Pick a Time
              </label>
              {errors.hour || errors.minute ? (
              <p className="text-red-500 text-sm">{errors.hour || errors.minute}</p>
            ) : null}
            </div>
            <div className="flex gap-4">
            <InputMask
              placeholder="HH"
              mask="99"
              value={valueDate.hour}
              onChange={(e) => handleHourChange(e.target.value)}
              maskChar={null}
              className={`max-w-20 border-b-[1px] ${
                errors.hour ? 'border-b-red-500 text-red-500' : 'border-b-[#8e8e8e] text-[#111]'
              } pl-4 pb-3 focus:outline-none`}
            />
            <InputMask
              placeholder="MM"
              mask="99"
              value={valueDate.minute}
              onChange={(e) => handleMinuteChange(e.target.value)}
              maskChar={null}
              className={`max-w-20 border-b-[1px] ${
                errors.minute? 'border-b-red-500 text-red-500' : 'border-b-[#8e8e8e] text-[#111]'
              } pl-4 pb-3 focus:outline-none`}
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