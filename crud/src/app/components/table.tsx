"use client";

import { useEffect, useState } from "react";

export default function Table() {
const [data, setData] = useState([])

useEffect(() => {
    handleFetchData()
}, [])

const handleFetchData=()=>{
    fetch('http://localhost:3000/api/getAllUsers') //axios
  .then(response => response.json())
  .then(data => setData(data.usuarios));
  
}



  return (
    <>
        <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
        {data.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.nombre_usuario}</td>
                <td>{user.contrasena}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
}
