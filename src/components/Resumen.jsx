import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import { ResumenProducto } from "./ResumenProducto";

const Resumen = () => {

    const {pedido,total} = useQuiosco();
    const comprobarPedido = () => pedido.length === 0;

  return (
    <div className='md:w-72 h-screen overflow-y-scroll p-5'>
        <h1 className="text-4xl font-black">
            Mi Pedido
        </h1>
        <p className="text-lg my-5">
            Aquí podras ver el resumen y totales de tu pedido
        </p>
        <div className="py-10">
            {pedido.length === 0 ? (
                <p>No hay elementos</p>
            ): (
                pedido.map(producto => (
                    <ResumenProducto
                        key={producto.id}
                        producto={producto}
                    />
                ))
            )}
        </div>
        <div className="text-xl mt-10">
            Total: {formatearDinero(total)}
        </div>
        <form className="w-full">
            <div className="mt-5">
                <input type="submit"
                className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} px-5 py-2
                rounded text-white text-center w-full cursor-pointer`}
                value="Confirmar Pedido"
                disabled={comprobarPedido}
                />
            </div>
        </form>
    </div>
  )
}

export default Resumen