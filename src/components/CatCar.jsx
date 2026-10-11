import React from 'react'
import { Navbar } from './Navbar'
import { Catalog } from './Catalog'
import { Cart } from './Cart' // Importación agregada
import { useState } from 'react'

export const CatCar = () => {

    const [products, setProducts] = useState([
        {name: "Cámara", id:1, quantity: 12, description: "Cámara chida", imagen: "/images/camara.jpg"},
        {name: "Tripié", id:2, quantity: 6, description: "Tripié profesional", imagen: "/imagenes/tripie.jpg"},
        {name: "Audífonos", id:3, quantity: 7, description: "Audífonos ultra", imagen: "/imagenes/audifonos.jpg"},
        {name: "Telefono", id:4, quantity: 3, description: "Teléfono Flip", imagen: "/imagenes/telefono.jpg"},
    ])

    const [productCart, setProductsCart] = useState([]);

    const addToCart = (id) => {
        const product = products.find((p) => p.id === id);
        
        if(!product || product.quantity === 0) return;

        // Restar 1 de la cantidad en el catálogo sin mutar el estado directamente
        const updatedProducts = products.map((p) => {
            if (p.id === id) {
                return { ...p, quantity: p.quantity - 1 };
            }
            return p;
        });
        setProducts(updatedProducts);

        // Sumar 1 o agregar nuevo al carrito
        if(productCart.find((p) => p.id === id)) {
            const updatedCart = productCart.map((p) => {
                if(p.id === id) {
                    return { ...p, quantity: p.quantity + 1 };
                }
                return p;
            });
            setProductsCart(updatedCart);
        } else {
            const newCartProduct = { ...product, quantity: 1 };
            setProductsCart([...productCart, newCartProduct]);
        }  
    }

    const removeFromCart = (id) => {
        const itemToRemove = productCart.find((p) => p.id === id);
        if (!itemToRemove) return;

        // Regresar la cantidad acumulada al catálogo
        const updatedProducts = products.map((p) => {
            if (p.id === id) {
                return { ...p, quantity: p.quantity + itemToRemove.quantity };
            }
            return p;
        });
        setProducts(updatedProducts);

        // Eliminar el producto del carrito
        const updatedCart = productCart.filter((p) => p.id !== id);
        setProductsCart(updatedCart);
    }

    return (
        <div>
            <Catalog products={products} addToCart={addToCart}></Catalog>
            <Cart productsCart={productCart} removeFromCart={removeFromCart}></Cart>
        </div>
    )
}