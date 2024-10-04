'use client'
import { useEffect, useState } from 'react';
import formatDate from "@/app/helpers/formatDate";

const DateFormatter = ({ date }: { date: Date }) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(formatDate(date));
  }, [date]);

  return <span>{formattedDate}</span>;
};

export default DateFormatter;
