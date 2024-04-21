"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Metrics from "./metrics/[timestamp]/page";

export default function Home() {
  const router = useRouter();
  router.push("/metrics/300000");

  return (
    <>
      <Metrics />
    </>
  );
}
