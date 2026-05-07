import * as React from 'react';

import { Calendar } from '@admiral-ds/react-ui';

export const AdmiralCalendar = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const handleChange = (value: Date | Array<Date | null> | null) => {
    if (Array.isArray(value)) {
      setStartDate(value[0] ?? null);
      setEndDate(value[1] ?? null);
    }
  };

  return <Calendar range startDate={startDate} endDate={endDate} onChange={handleChange} />;
};
