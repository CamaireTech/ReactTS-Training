import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';

registerLocale('fr', fr);
setDefaultLocale('fr');

interface DatePickerFieldProps {
  selected: Date | null; // Specify the type of the 'selected' prop
  onChange: (date: Date | null) => void; // Specify the type of the 'onChange' prop
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      placeholderText="Sélectionnez une date"
      locale="fr"
      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};

export default DatePickerField;
