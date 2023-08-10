import { Link } from "react-router-dom"
const Login = () => {
  return (
    <>
        <h1 className='text-4xl font-black'>Iniciar Sesión</h1>
        <p>Para crear un pedido debes iniciar sesion</p>
        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
                <div className="mb-4">
                    <label htmlFor="email" className='text-slate-800'>Email:</label>
                    <input 
                        type="email"
                        id="email"
                        name='email'
                        className='mt-2 block p-3 bg-gray-100 w-full' 
                        placeholder='Tu nombre'
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className='text-slate-800'>Password:</label>
                    <input 
                        type="password"
                        id="password"
                        name='password'
                        className='mt-2 block p-3 bg-gray-100 w-full' 
                        placeholder='Tu nombre'
                    />
                </div>
                <input 
                    type="submit"
                    value="Iniciar Sesion"
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
                />
            </form>
        </div>
        <nav className="mt-5">
            <Link to="/auth/register">
                ¿No tienes cuenta? Crea una
            </Link>
        </nav>
    </>
  )
}

export default Login