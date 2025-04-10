import { Suspense } from "react";
import ClientResetPassword from "./ClientResetPassword";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientResetPassword />
    </Suspense>
  );
}
