import React from "react";
import Section from "../page";

export default function EmailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { section: string; email: string };
}) {
  return (
    <>
      <Section params={params} />
      {children}
    </>
  );
}
