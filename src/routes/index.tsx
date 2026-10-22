import { createFileRoute } from "@tanstack/react-router";
import { ZenoraPage } from "@/components/zenora/zenora-page";

export const Route = createFileRoute("/")({
  component: ZenoraPage,
});
