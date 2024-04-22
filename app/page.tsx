"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Metrics from "./metrics/[timestamp]/page";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {
  // const router = useRouter();
  // router.push("/metrics/300000");

  return (
    <>
      <DefaultLayout>
        <div>Home Page</div>
        <div>Created By : Abhay Kumar Mittal</div>
      </DefaultLayout>
    </>
  );
}
