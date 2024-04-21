"use client";
import React, { useState, ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="">
        <div className="relative flex flex-1 flex-col space-y-10">
          <Navbar />
          <main>
            <div className="mx-auto p-4 md:p-6 2xl:p-10">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
