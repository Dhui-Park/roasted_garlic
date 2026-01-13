import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | roasted garlic" },
    { name: "description", content: "Welcome to roasted garlic." },
  ];
};

export default function Home() {
  return (
    <div className="px-20 pt-24 space-y-40">
      <h1 className="text-5xl font-bold leading-tight tracking-tight">home</h1>
    </div>
  );
}
