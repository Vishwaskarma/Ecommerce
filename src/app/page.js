import Image from "next/image";
import PromotionalBanner from "./Banner/Banner";


export default function Home() {
  return (
    <>
 <PromotionalBanner />
        <ProductSlider />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          {/* Featured Categories Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Watches', 'Clothing', 'Shoes', 'Accessories'].map((category) => (
                <div key={category} className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
                  <Image
                    src={`/images/${category.toLowerCase()}-category.jpg`}
                    alt={category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold">{category}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* New Arrivals Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">New Arrivals</h2>
              <button className="text-amber-600 hover:text-amber-700 font-medium">
                View All →
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group">
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={`/images/product-${item}.jpg`}
                      alt={`Product ${item}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add to Cart
                    </button>
                  </div>
                  <h3 className="font-medium">Product Name {item}</h3>
                  <p className="text-amber-600 font-semibold">${(199 + item * 50).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Special Offers Section */}
          <section className="mb-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-8 text-white">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Summer Sale - Up to 50% Off</h2>
              <p className="mb-6">Limited time offer on selected items. Don't miss out!</p>
              <button className="bg-white text-amber-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Shop the Sale
              </button>
            </div>
          </section>

          {/* Best Sellers Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[5, 6, 7, 8].map((item) => (
                <div key={item} className="group">
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={`/images/product-${item}.jpg`}
                      alt={`Product ${item}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      -30%
                    </div>
                  </div>
                  <h3 className="font-medium">Popular Product {item}</h3>
                  <div className="flex gap-2">
                    <p className="text-amber-600 font-semibold">${(299 + item * 30).toLocaleString()}</p>
                    <p className="text-gray-400 line-through text-sm">${(399 + item * 30).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}