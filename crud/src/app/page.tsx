'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {

  const router = useRouter();

  var [usuario, setUsuario] = useState('');
  var [contrasena, setContrasena] = useState('');
  var [error, setError] = useState<string | null>(null);

  const getUsers = async (e: any) => {
    e.preventDefault();

    if (!usuario || !contrasena){
      setError('Rellene todos los campos por favor...');
      return;
    }

    const response = await fetch('/api/getUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({usuario, contrasena})
    });
    setError('')
    const data = await response.json();
    if (data) { 
      router.push('/pages/home/main');
    }
    return console.log(data)
  };


  return (
    <section className="flex place-content-center bg-white h-screen">
      <header></header>
      <main className="mt-10">
        <div className="row grid space-y-5">
          <p className='flex place-content-center text-xl text-blue-950'>Inicio de Sesión</p>
          <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}
            className="input input-bordered input-info w-full max-w-xs"
          />
          <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)}
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
          
        <div className="flex-1 mt-5 ">
          <button onClick={getUsers} className="btn btn-outline btn-accent">Iniciar Sesión</button>
          <button onClick={() => router.push('/pages/register')} className="btn btn-outline">Registrarse</button>
        </div>
      </main>
      <footer></footer>
    </section>
  );
}
