import React, { useState } from "react";
import { Star } from "lucide-react";

export default function StarRating({
  initialRating = 0,
  onRatingChange,
  readOnly = false,
}) {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (index) => {
    if (readOnly) return; // Không cho phép thay đổi nếu ở chế độ chỉ hiển thị
    setRating(index + 1); // Cập nhật số sao
    if (onRatingChange) {
      onRatingChange(index + 1); // Gọi callback nếu có
    }
  };

  return (
    <div className="star-rating flex gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const isFullStar = index < Math.floor(rating); // Sao đầy
        const isHalfStar = index === Math.floor(rating) && rating % 1 !== 0; // Sao nửa

        return (
          <div
            key={index}
            className="relative"
            style={{ width: "12px", height: "12px", margin: "0 2px" }}
          >
            {/* Nền sao xám */}
            <Star
              fill="gray"
              strokeWidth={0}
              className={readOnly ? "" : "cursor-pointer"}
              onClick={() => handleRating(index)}
              style={{ position: "absolute", top: 0, left: 0, opacity: 0.5 }}
            />
            {/* Sao vàng hoặc nửa sao */}
            <Star
              fill={isFullStar || isHalfStar ? "hsl(43.3 96.4% 56.3%)" : "none"}
              strokeWidth={0}
              className={readOnly ? "" : "cursor-pointer"}
              onClick={() => handleRating(index)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                clipPath: isHalfStar
                  ? "polygon(0 0, 50% 0, 50% 100%, 0 100%)" // Hiển thị nửa trái
                  : "none",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
