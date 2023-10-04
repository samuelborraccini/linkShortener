import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{
        background: `url(/images/bg.jpg)`,
      }}
    >
      <Form />
    </div>
  );
}
