'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
    const router = useRouter();

  var [usuario, setUsuario] = useState('');
  var [contrasena, setContrasena] = useState('');
  var [contrasenaC, setContrasenaC] = useState('');
  var [error, setError] = useState<string | null>(null);

  const postUsers = async (e: any) => {
    e.preventDefault();

    //validación de que ambos campos estan llenos
    if (!usuario || !contrasena || !contrasenaC){
        setError('Rellene todos los campos por favor...');
        return;
    }
    if (contrasena != contrasenaC){
        setError('¡Las contraseñas no coinciden!');
        return;
    }


    console.log(usuario,contrasena,contrasenaC)
    const response = await fetch('/api/postUsers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({usuario, contrasena})
    });

    const data = await response.json();

    if(data){
        router.push('/');
    }
    return console.log(data)
  };


  return (
    <section className="flex place-content-center bg-white h-screen">
      <header className=''>
        
      </header>
      <main className="mt-10">
        <div className="row grid space-y-5">
            <p className='flex place-content-center text-xl text-blue-950'>Formulario de Registro</p>
            <div>
                <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}
                className="input input-bordered input-info w-full max-w-xs"
                />
            </div>
            <div>
                <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)}
                className="input input-bordered input-info w-full max-w-xs"
                />
            </div>
            <div>
                <input type="password" placeholder="Confirme su Contraseña" value={contrasenaC} onChange={(e) => setContrasenaC(e.target.value)}
                className="input input-bordered input-info w-full max-w-xs"
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
        </div>
        
        <div className="flex-1 mt-5 ">
          <button onClick={postUsers} className="btn btn-outline btn-accent">Completar Registro</button>
          <button onClick={() => router.push('/')} className="btn btn-outline">Cancelar</button>
        </div>
      </main>
      <footer></footer>
    </section>
  );
}
