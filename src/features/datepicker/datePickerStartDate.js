import React, { useState } from "react";
import DatePicker from "react-datepicker";




const PickerStartDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker id={"start-date"} for='startdate' selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default PickerStartDate;