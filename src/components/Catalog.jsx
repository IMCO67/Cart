import React from 'react'

export const Catalog = ({products, addToCart}) => {
    return (
        <div className='flex flex-wrap gap-4 p-4 justify-center'>
            {products.map((product) =>(
                <div key={product.id} className='flex gap-1 shadow-gray-700 border border-s-gray-800 w-1/3 p-2 m-2 items-center bg-sky-100'>
                    {/* Contenedor principal de 2 columnas */}
                    <div className='flex justify-between items-start gap-3 mb-4 w-full'>

                        {/* Nombre y Descripción */}
                        <div className='flex flex-col w-3/5'>
                            <h3 className='font-bold text-amber-600 text-lg capitalize'>
                                {product.name}
                            </h3>
                            <p className='text-black text-sm mt-1 mb-2'>
                                {product.description}
                            </p>
                            {/* Se corrigió 'calssName' y se agregó texto visible al botón */}
                            <button 
                                onClick={() => addToCart(product.id)} 
                                className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded cursor-pointer'
                                disabled={product.quantity === 0}
                            >
                                {product.quantity > 0 ? 'Agregar al carrito' : 'Agotado'}
                            </button>
                        </div>

                        {/* Disponibles */}
                        <div className='text-right w-2/5'>
                            <span className='text-black font-semibold text-sm block'>
                                Disponibles: {product.quantity}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}