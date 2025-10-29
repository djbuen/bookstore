import React from "react";

interface FiltersProps {
  labels: string[];
  selectedLabel: string | null;
  onSelectLabel: (label: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ labels, selectedLabel, onSelectLabel }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {labels.map((label) => (
        <span
          key={label}
          onClick={() => onSelectLabel(label)}
          className={`cursor-pointer px-3 py-1 rounded ${
            selectedLabel === label ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export default Filters;
