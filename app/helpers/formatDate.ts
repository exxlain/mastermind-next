const formatDate=(date: string)=>{
  const fullDate = new Date(date);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  //@ts-expect-error its ok
  const formattedDate = fullDate.toLocaleString(undefined, options);

  const [datePart, timePart] = formattedDate.split(', ');

  return `${datePart} ${timePart}`;

}

export default formatDate;
