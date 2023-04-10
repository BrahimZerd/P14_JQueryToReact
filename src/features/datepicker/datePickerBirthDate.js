import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const PickerBirthDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker id={"birthDate"} selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default PickerBirthDate;