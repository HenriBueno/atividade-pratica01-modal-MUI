import React from "react";

interface CardContentProps {
  children: React.ReactNode;
}

function CardContent({ children }: CardContentProps) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: "#333",
        borderRadius: "15px",
        padding: "20px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default CardContent;
