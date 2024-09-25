import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa'; // Importamos el ícono de carrito

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  isLocal: boolean;
  rating: number;
  sales: number;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Juego de niños',
    price: 2500,
    originalPrice: 3000,
    imageUrl: '/category/ninas.png',
    isLocal: true,
    rating: 4.5,
    sales: 200,
  },
  {
    id: 2,
    title: 'Conjunto de Hombre',
    price: 4500,
    originalPrice: 5500,
    imageUrl: '/productos/conjuntohombre.jpg',
    isLocal: true,
    rating: 4.5,
    sales: 200,
  },
  {
    id: 3,
    title: 'Carteras',
    price: 3000,
    originalPrice: 3500,
    imageUrl: '/productos/cartera.jpg',
    isLocal: true,
    rating: 4.5,
    sales: 200,
  },
  {
    id: 4,
    title: 'Juego de niños',
    price: 15.99,
    originalPrice: 20.99,
    imageUrl: '/category/ninas.png',
    isLocal: true,
    rating: 4.5,
    sales: 200,
  },
  {
    id: 5,
    title: 'Juego de niños',
    price: 15.99,
    originalPrice: 20.99,
    imageUrl: '/category/ninas.png',
    isLocal: true,
    rating: 4.5,
    sales: 200,
  },
  {
    id: 6,
    title: 'Juego de niños',
    price: 15.99,
    originalPrice: 20.99,
    imageUrl: '/category/ninas.png',
    isLocal: true,
    rating: 4.5,
    sales: 200,
  },
  {
    id: 7,
    title: 'Juego de niños',
    price: 15.99,
    originalPrice: 20.99,
    imageUrl: '/category/ninas.png',
    isLocal: true,
    rating: 4.5,
    sales: 200,
  },
  {
    id: 8,
    title: 'Juego de niños',
    price: 15.99,
    originalPrice: 20.99,
    imageUrl: '/category/ninas.png',
    isLocal: true,
    rating: 4.5,
    sales: 200,
  },
  {
    id: 9,
    title: 'Juego de niños',
    price: 15.99,
    originalPrice: 20.99,
    imageUrl: '/category/ninas.png',
    isLocal: true,
    rating: 4.5,
    sales: 200,
  },
  // Agrega más productos aquí...
];

const ProductGrid: React.FC = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-4 rounded-lg">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm">
            <div className="relative w-full h-56"> {/* Ajusta la altura de la imagen */}
              <Image
                src={product.imageUrl}
                alt={product.title}
                
                layout="fill" /* Ocupa todo el espacio disponible */
                objectFit="cover" /* Recorta la imagen si es necesario para llenar el espacio */
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold truncate text-gray-500">{product.title}</h3>
              <p className="text-xs text-gray-500">Vendido: {product.sales}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-lg font-bold text-red-500">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center">
                  <span className="text-yellow-500">
                    {'★'.repeat(Math.round(product.rating))}
                  </span>
                  <span className="ml-1 text-xs text-gray-500">({product.rating})</span>
                </div>
                <button className="flex items-center justify-center bg-white border border-gray-300 rounded-full p-2 text-gray-700">
                  <FaShoppingCart className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductGrid;