import {React, useState} from 'react'
//Icons
import { RiMailFill, RiLockFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
//Links
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className="text-3xl uppercase font-bold tracking-[5px] text-btnsecondary mb-8">
        Iniciar sección
      </h1>
      <form className='mb-8'>
        <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
          <img
            src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/imagem-google-logo-com-fundo-transparente-1.png"
            className="w-4 h-4"
          />
          Ingresa con google
        </button>
        <div className="relative mb-4">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="email"
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="relative mb-4">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Contraseña"
          />
          { showPassword ? (
            <RiEyeOffFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          ) : (
            <RiEyeFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          <button type='submit' className='bg-secondary-900 w-full py-3 px-4 rounded-lg text-btnsecondary hover:text-white transition-colors hover:bg-btnprimary hover:rounded-full transition-oll duration-700'>
            Ingresar
          </button>
        </div>
      </form>
      <div className='flex flex-col items-center gap-4'>
        <Link to="/" className='hover:text-btnsecondary transition-colors'>¿Olvidaste tu contraseña?</Link>
        <span className='flex items-center gap-2'>
          ¿No tienes cuenta? <Link className='text-btnsecondary hover:text-gray-100 transition-colors' to="/">Registrate</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
