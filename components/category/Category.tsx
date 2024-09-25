import React from 'react';
import Link from 'next/link';

interface Category {
  name: string;
  imageUrl: string;
  href: string;
}

const categories: Category[] = [
  { name: 'Mujer', imageUrl: '/category/mujer.png', href: '/categorias/mujer' },
  { name: 'Hombre', imageUrl: '/category/hombre.png', href: '/categorias/hombre' },
  { name: 'Niñas', imageUrl: '/category/ninas.png', href: '/categorias/ninas' },
  { name: 'Niños', imageUrl: '/category/ninos.png', href: '/categorias/ninos' },
  { name: 'Vestidos', imageUrl: '/category/vestidos.png', href: '/categorias/vestidos' },
  { name: 'Tops', imageUrl: '/category/tops.png', href: '/categorias/tops' },
  { name: 'Otoño e Invierno', imageUrl: '/category/otonoinvierno.png', href: '/categorias/otonoinvierno' },
  { name: 'Ropa Interior y De Dormir', imageUrl: '/category/ropainterior.png', href: '/categorias/ropainterior' },
  { name: 'Deportes y Aire Libre', imageUrl: '/category/deportes.png', href: '/categorias/deportes' },
  { name: 'Zapatos de Mujer', imageUrl: '/category/zapatosmujer.png', href: '/categorias/zapatosmujer' },
  { name: 'Zapatos de Hombre', imageUrl: '/category/zapatoshombre.png', href: '/categorias/zapatoshombre' },
  { name: 'Carteras', imageUrl: '/category/carteras.png', href: '/categorias/carteras' },
  { name: 'Conjuntos', imageUrl: '/category/conjuntos.png', href: '/categorias/conjuntos' },
  { name: 'Electrónica', imageUrl: '/category/electronica.png', href: '/categorias/electronica' },
];

const Category: React.FC = () => {
  return (
    <div className="py-8 bg-gray-100"> {/* Fondo claro */}
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">Categorías</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {categories.map((category, index) => (
          <Link key={index} href={category.href}>
            <div className="flex flex-col items-center cursor-pointer">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-20 h-20 rounded-full object-cover mb-2 border border-gray-400" // Borde redondo visible
              />
              <span className="text-sm text-center text-gray-900">{category.name}</span> {/* Texto visible */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
