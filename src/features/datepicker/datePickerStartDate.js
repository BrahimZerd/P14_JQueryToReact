import React, { useState } from "react";
import DatePicker from "react-datepicker";



/** @const PickerStartDate is using a framework from npm to display a picker to catch the date */

const PickerStartDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker id={"start-date"} for='startdate' selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default PickerStartDate;