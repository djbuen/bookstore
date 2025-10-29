import React from "react";

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Search by author or title..."}
      // className="w-full p-2 border rounded mb-4"
      className="px-3 py-2.5 text-lg font-bold rounded-lg border focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc]"
    />
  );
};

export default SearchField;