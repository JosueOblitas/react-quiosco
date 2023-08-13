import {createContext,useState,useEffect} from 'react';
import {toast} from 'react-toastify'
import { categorias as categoriasDB} from '../data/categoria';
const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    const [categorias,setCategorias] = useState(categoriasDB);
    const [categoriaActual,setCategoriaActual] = useState(categorias[0])
    const [modal,setModal] = useState(false)
    const [producto,setProducto] = useState({})
    const [pedido,setPedido] = useState([])
    const [total,setTotal] = useState(0)


    useEffect(() => {
        const nuevoTotal = pedido.reduce((total,producto) => (producto.precio * producto.cantidad) + total,0)
        setTotal(nuevoTotal)
    },[pedido])

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }
    const handleClickModal = () => {
        setModal(!modal)
    }
    const handleSetProducto = producto => {
        setProducto(producto)
    }
    const handleAgregarPedido = ({categoria_id, ...producto}) => {

        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success("Cambios guardados")
        }else{
            setPedido([...pedido,producto])
            toast.success("Producto agregado al Pedido")
        }
    }
    const handleEditarCantidad = id => {
        const productoActualizado = pedido.filter(producto => producto.id ===id)[0]
        setProducto(productoActualizado)
        setModal(!modal)
    }
    const handleEliminarProducctoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Eliminado del Pedido')
    }
  return (
    <QuioscoContext.Provider
        value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal,
            producto,
            handleSetProducto,
            pedido,
            handleAgregarPedido,
            handleEditarCantidad,
            handleEliminarProducctoPedido,
            total
        }}
    > {children} </QuioscoContext.Provider>
  )
}

export{
    QuioscoProvider
}

export default QuioscoContext