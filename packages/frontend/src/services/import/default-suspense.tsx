import React from "react";

export const DefaultSuspense = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const loader = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "5px solid #ccc",
          borderTopColor: "#333",
          animation: "spin 1s linear infinite",
        }}
      />
    </div>
  );
  return <React.Suspense fallback={loader}>{children}</React.Suspense>;
};
