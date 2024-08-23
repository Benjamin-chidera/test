import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>welcome</div>

      <div>
        <SignInButton mode="modal"/>
      </div>

      <div></div>
    </main>
  );
}
