import React from "react";

export const Cart = ({ productsCart, removeFromCart }) => {
    if (!productsCart || productsCart.length === 0) {
        return (
            <div className='p-6 text-center text-gray-500 font-semibold'>
                El carrito está vacío 🛒
            </div>
        );
    }

    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold text-center mb-4 text-gray-800'>
                Carrito de Compras
            </h2>
            <div className='flex flex-wrap gap-4 justify-center'>
                {productsCart.map((product) => (
                    <div 
                        key={product.id} 
                        className='bg-sky-100 border border-sky-200 rounded-lg p-4 shadow-md w-full sm:w-80 flex flex-col justify-between relative'
                    >
                        {/* Botón 'X' para vaciar este producto y regresar stock */}
                        <button 
                            onClick={() => removeFromCart(product.id)}
                            className='absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold text-lg w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors cursor-pointer'
                            title='Vaciar este producto'
                        >
                            ✕
                        </button>

                        {/* Imagen del producto */}
                        {product.imagen && (
                            <div className='w-full h-32 mb-3 overflow-hidden rounded-md bg-white flex items-center justify-center mt-4'>
                                <img 
                                    src={product.imagen} 
                                    alt={product.name} 
                                    className='h-full w-full object-contain p-2' 
                                />
                            </div>
                        )}

                        {/* Datos del producto en carrito */}
                        <div className='flex justify-between items-start gap-3 mt-2 mb-2 pr-6'>
                            <div className='flex flex-col w-3/5'>
                                <h3 className='font-bold text-amber-600 text-lg capitalize'>
                                    {product.name}
                                </h3>
                                <p className='text-black text-sm mt-1'>
                                    {product.description}
                                </p>
                            </div>
                            <div className='text-right w-2/5'>
                                <span className='text-black font-semibold text-sm block'>
                                    En carrito: {product.quantity}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};