import React from 'react'

// Definimos el tipo de los datos que esperamos recibir
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

const page = async () => {
     // Realizamos la solicitud al API desde el servidor
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }, // Opcional: Habilita ISR (Incremental Static Regeneration) para revalidar cada 60 segundos
  });
    // Convertimos la respuesta a JSON
    const posts: Post[] = await response.json();

    //los imprime en la consola donde els ervidor esta corriendo, no se pueden imprimir en la consola del navegador porques es un server component
    console.log('Datos recibidos del API:', posts);
    
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
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
