import React from "react";

export default function DecentCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full p-7 bg-decentCard ${className}`}>{children}</div>
  );
}
