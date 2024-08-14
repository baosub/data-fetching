'use client'

import React from 'react'
import useSWR from 'swr';

// Función para obtener datos desde la API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {

  // Usando SWR para obtener datos
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  // Imprimir en la consola del navegador
  if (data) {
    console.log('Datos obtenidos:', data);
  }

  // Manejo de errores
  if (error) return <div>Error al cargar los datos</div>;
  if (!data) return <div>Cargando...</div>;

  //Renderizado de los datos obtenidos
  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
