import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
;
/** @const PickerBirthDate is using a framework from npm to display a picker to catch the date */
const PickerBirthDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker id={"date-of-birth"} name='dataofbirth' selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default PickerBirthDate;