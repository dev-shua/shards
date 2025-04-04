import Login from "@/components/auth/login";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20">
      <div>
        <h1 className="font-metamorphous text-5xl text-center mb-2">SHARDS</h1>
        <Login />
      </div>
    </div>
  );
}
