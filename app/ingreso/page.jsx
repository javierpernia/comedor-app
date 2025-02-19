'use client';

import toast from "react-hot-toast";

export default function IngresoComedor() {
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log('hola')
    toast('Boton.');

  }

  return (
    <div className="grid items-top justify-items-center min-h-screen px-8 pb-20 sm:px-20 sm:pb-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="container">
          <h1 className="titulo text-center text-4xl mb-10 font-PlaywriteHrvatskaLijeva font-bold mx-auto">Ingreso al Comedor</h1>

          <form onSubmit={handleSubmit} className="text-neutral-700">
            
            <div className="presentacion flex flex-col shadow-[0px_0px_25px_10px_rgba(0,_0,_0,_0.5)] rounded-3xl bg-white w-[330px] h-fit items-center gap-4 px-1 py-4 mx-auto">
              <div className="flex gap-4">
                <label htmlFor="cedula" className="mx-auto">Ingrese la cédula</label>
                <input type="text" name="cedula" id="cedula" className="w-[130px] border-solid border-2 border-neutral-400 rounded-3xl px-3 mx-auto text-center" />
              </div>
              <p className="">19649096</p>
              <div className="flex items-center gap-4">
                <button type="button" className="border-solid border-[3px] border-yellow-700 rounded-3xl px-3 text-yellow-700 hover:bg-yellow-700 hover:text-white font-bold w-[95px]">Buscar</button>
                <button type="submit" className="border-solid border-[3px] border-yellow-700 rounded-3xl px-3 text-yellow-700 hover:bg-yellow-700 hover:text-white font-bold w-[95px]" >Aceptar</button>
              </div>
            </div>
            
            
          </form>
        </div>

      </main>

    </div>
  );
}
