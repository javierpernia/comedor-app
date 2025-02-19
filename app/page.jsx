import Image from "next/image";
import OpcionesMenu from './components/OpcionesMenu.jsx'

export default function Home() {
  return (
      
      <div className="grid items-center justify-items-center min-h-screen px-8 pt-20 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="container">
            <h1 className="titulo text-center text-4xl mb-10 font-PlaywriteHrvatskaLijeva font-bold">Menú del Día</h1>
            <OpcionesMenu />
          </div>
        </main>
      </div>
  );
}
