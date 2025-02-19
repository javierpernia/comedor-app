// 'use client';

import React from 'react'
import Image from 'next/image'
import Menu1 from '../assets/images/menu-1.jpg'
import Menu2 from '../assets/images/menu-2.jpg'
import { FaRegCircleCheck } from "react-icons/fa6"
import toast from 'react-hot-toast';
import { getData } from '../utils/db';

export default async function OpcionesMenu() {

  const handleSubmit = async e => {
    e.preventDefault()
    
    const data = await getData();
    console.log(data)

    /* NOTE - 
      1. Crear archivo para realizar queries en DB
      2. Crear funcion para que guarde temporalmente las imagenes de las opciones del menu
        2.1. La opción 2 debe tener un boton para ocultarla que solo debe estar disponible para admin.
          2.1.1. Al presionarlo debe hacer un toggle de hidden en esa opción
        2.2. Las opciones del menu deben guardarse en la tabla menu_dia
        2.3. Las opciones del menu se extraen y se imprimen en la pagina
        2.4. Si los datos del menu no coinciden con el del useState() del mismo, se crea una nueva opcion en la DB al pulsar el boton de actualizar menu
        2.5. El boton de actualizar menu solo debe mostrarse para para los admin
      3. Extraer el valor del input
      4. Si el valor es 0 mandar mensaje de seleccionar o inhabilitar el boton de aceptar
      5. Si el valor es != 0 compararlo con el valor inicial en el useState(), 
        4.1. Si el valor del useState() no existe realizar un INSERT. toast(`la opción ${opcion} ha sido seleccionada`)
        4.2. Si el valor es el mismo bloquear el boton de aceptar
        4.3. Si es distinto de ese valor y != 0 UPDATE. toast(`la opción ${opcion} ha sido seleccionada`)
      5. 
    */ 
    toast('hola');

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="menu lg:grid gap-10 grid-cols-2 w-full">

          <div className="opcion-1">
            <div className="presentacion shadow-[0px_0px_25px_10px_rgba(0,_0,_0,_0.5)] rounded-3xl">
              <Image src={Menu1} width="300" height="250" key="opcion-1" className="rounded-t-3xl max-h-[250px]" alt="menu-1" />
              <p id="opcion-1-descripcion" className="bg-white text-[#111] w-[300px] text-center p-4 pb-10 rounded-b-3xl text-xl" >Parrilla mixta de pollo y carne acompañada de ensalada nazaret. Jugo de papelón con limón.</p>
            </div>

            <div className="option-bullet w-full">
              <input type="radio" name="menu" id="menu-opcion-1" value="1" className="circle-selection peer hidden" />
              <label htmlFor="menu-opcion-1" className="bg-[#bbf7d0] w-[50px] h-[50px] rounded-full hover:drop-shadow-[0_0_10px_hsl(150,100%,66%)] peer-checked:drop-shadow-[0_0_10px_hsl(150,100%,66%)] grid place-content-center cursor-pointer mx-auto relative bottom-[25px] filter grayscale peer-checked:grayscale-0"><FaRegCircleCheck size={50} color="15803d" /></label>
            </div>
          </div>


          <div className="opcion-2">  
            <div className="presentacion shadow-[0px_0px_25px_10px_rgba(0,_0,_0,_0.5)] rounded-3xl"> 
              <Image src={Menu2} width="300" height="250" key="opcion-1" className="rounded-t-3xl max-h-[250px]" alt="menu-2" />
              <p id="opcion-1-descripcion" className="bg-white text-[#111] w-[300px] text-center p-4 pb-10 rounded-b-3xl text-xl" >Parrilla mixta de pollo y carne acompañada de ensalada nazaret. Jugo de papelón con limón.</p>
            </div>

            <div className="option-bullet w-full">
              <input type="radio" name="menu" id="menu-opcion-2" value="2" className="circle-selection peer hidden" />
              <label htmlFor="menu-opcion-2" className="bg-[#bbf7d0]  w-[50px] h-[50px] rounded-full hover:drop-shadow-[0_0_10px_hsl(150,100%,66%)] peer-checked:drop-shadow-[0_0_10px_hsl(150,100%,66%)] grid place-content-center cursor-pointer mx-auto relative bottom-[25px] filter grayscale peer-checked:grayscale-0"><FaRegCircleCheck size={50} color="15803d" /></label>
            </div>

              <input type="radio" name="menu" value="0" className="hidden" defaultChecked />
          </div>
        </section>

        <section className="flex">
          <button type="submit" className="border-solid border-[3px] bg-white border-yellow-700 rounded-3xl py-2 px-3 text-yellow-700 shadow-[0px_0px_25px_10px_rgba(0,_0,_0,_0.5)] mx-auto hover:bg-yellow-700 hover:text-white font-bold w-[130px]">Confirmar</button>
        </section>

      </form>
    </>
  )
}

