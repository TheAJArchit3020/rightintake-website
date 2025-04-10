import { Suspense } from "react";
import ClientVerifyOtp from "./ClientVerifyOtp";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading OTP screen...</div>}>
      <ClientVerifyOtp />
    </Suspense>
  );
}
