import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Api } from "sst/node/api";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const results = await fetch(Api.api.url, {
    credentials: "include",
  });
  const data = await results.json();

  return json(data)
}

export default function Index() {
  const loaderData = useLoaderData();
  return (
    <div>
      loaderData: {JSON.stringify(loaderData)}
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}
