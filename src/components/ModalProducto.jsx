import { useState,useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function ModalProducto()  {
    const {handleClickModal,producto,handleAgregarPedido,pedido} = useQuiosco();
    const [cantidad,setCantidad] = useState(1);
    const [edicion,setEdicion] = useState(false);

    useEffect(() => {
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const productoEdicion = pedido.filter(pedidoState => pedidoState.id === producto.id)[0]
            setCantidad(productoEdicion.cantidad)
            setEdicion(true)
        }
    },[pedido])
  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <img src={`img/${producto.imagen}.jpg`} alt={`Imagen del producto ${producto.nombre}`} />
        </div>
        {/* <button
        onClick={() => handleClickModal()}
        >cerrar</button> */}
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button onClick={() => handleClickModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

            </div>
            <h1 className="text-3xl font-bold mt-5">
                {producto.nombre}
            </h1>
            <p className="mt-5 font-black text-5xl text-amber-500">
                {formatearDinero(producto.precio)}
            </p>
            <div className="flex gap-4 mt-5">
            <button
                    type="button"
                    onClick={() =>{
                        if(cantidad <= 1) return
                        setCantidad(cantidad - 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>

                </button>
                <p className="text-3xl">{cantidad}</p>
                <button
                    type="button"
                    onClick={() =>{
                        if(cantidad > 4) return
                        setCantidad(cantidad + 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            
            <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 px-5 my-2 mt-5 text-white uppercase font-bold rounded"
            onClick={() => {
                handleAgregarPedido({...producto,cantidad})
                handleClickModal()
            }}
            >
                {edicion ? "Guardar Cambios" : "Añadir al Pedido"}
            </button>
        </div>
    </div>
  )
}