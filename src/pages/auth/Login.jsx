import React from 'react'

const Login = () => {
  return (
    <div className='bg-secondary-100 p-8 rounded-xl'>
      <h1 className='text-3xl uppercase font-bold tracking-[5px] text-btnsecondary mb-8'>Iniciar sección</h1>
      <form>
        <button className='flex items-center justify-center py-2 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8'>
          <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/imagem-google-logo-com-fundo-transparente-1.png" className='w-4 h-4' />
          Ingresa con google
        </button>
        <div>
          <input type="email" className="py-2 px-4 bg-secondary-900 w-full outline-none rounded-lg" 
            placeholder='Correo electrónico'
          />
        </div>
      </form>
    </div>
  )
}

export default Login;
