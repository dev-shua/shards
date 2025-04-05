import LoginButton from "@/components/auth/LoginButton";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hiddenh-72">
      {/* Overlay bruit SVG pour casser le banding */}

      {/* Contenu centré */}
      <div className="relative z-10 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-5xl font-bold font-metamorphous text-center mb-6 tracking-widest">
          SHARDS
        </h1>
        <div className="flex justify-center">
          <LoginButton />
        </div>
      </div>
    </main>
  );
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20">
      <div>
        <h1 className="font-metamorphous text-5xl text-center mb-2">SHARDS</h1>
        <div className="text-center">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
