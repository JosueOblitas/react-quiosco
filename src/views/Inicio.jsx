import { productos as data } from "../data/productos"
import { Producto } from "../components/Producto"
import useQuiosco from "../hooks/useQuiosco"
const Inicio = () => {
  const {categoriaActual} = useQuiosco();
  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)
  return (
    <>
      <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {productos.map(producto => (
          <Producto producto={producto} key={producto.imagen} />
        ))}
      </div>
    </>
  )
}

export default Inicio