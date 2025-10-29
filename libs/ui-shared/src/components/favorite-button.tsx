import React from "react";

type FavoriteButtonProps = {
  isFavorite: boolean;
  onToggle: () => void;
  type?: "heart" | "star";
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onToggle, type = "heart" }) => {
  const icon = isFavorite ? "❤️" : "⭐";
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // prevent parent click
        onToggle();
      }}
      className={`text-xl transition-colors duration-200 ${
        isFavorite ? "text-red-500" : "text-gray-400 hover:text-yellow-500"
      }`}
    >
      {icon}
    </button>
  );
};

export default FavoriteButton;