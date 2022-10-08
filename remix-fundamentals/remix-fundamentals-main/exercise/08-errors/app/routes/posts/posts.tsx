import { Outlet } from "@remix-run/react";
import { ErrorFallback } from "~/components";

export default function HiddenParentRoute() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);

    return <ErrorFallback>Something went wrong!</ErrorFallback>
}