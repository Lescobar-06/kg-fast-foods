import React from 'react';
import { Menu, Clock, MapPin, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FFC107]">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="text-2xl font-bold text-[#B71C1C] flex items-center gap-2">
                <span className="text-4xl">K</span>
                <span className="text-[#FFC107] text-3xl">9</span>
                <span className="italic">Fast Foods</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#" active>About</NavLink>
              <NavLink href="#">All Products</NavLink>
              <NavLink href="#">KOTA</NavLink>
              <NavLink href="#">Breakfast</NavLink>
              <NavLink href="#">Contact Us</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-700">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Best Food Menu Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl relative">
            <div className="text-3xl font-bold mb-6">
              <span className="text-[#B71C1C]">BEST</span> Food
              <div className="text-5xl italic mt-2">Menu</div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Delicious Burger"
              className="rounded-full w-48 h-48 object-cover border-8 border-[#B71C1C] mx-auto"
            />

            <div className="mt-6 bg-[#FFC107] inline-block px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>8am to 6pm</span>
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div className="space-y-8">
            {/* Breakfast Offer */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-[#B71C1C]">
                Breakfast
                <div className="text-lg italic text-[#FFC107]">on the go</div>
              </div>
              <div className="mt-4">
                <span className="text-5xl font-bold text-[#B71C1C]">R10</span>
                <p className="text-gray-600 mt-2">
                  Full chicken, chips and French polony
                </p>
              </div>
            </div>

            {/* Lunch Special */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-[#B71C1C]">
                Lunch
                <div className="text-lg italic text-[#FFC107]">special</div>
              </div>
              <div className="mt-4">
                <p className="text-xl">
                  Spend <span className="text-[#B71C1C] font-bold">R25</span> or more and
                  get the second one <span className="text-[#FFC107] font-bold">FREE</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center bg-white/80 rounded-xl p-8">
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            When it's time for Real flavour, you know what the deal is: only KG Fast Foods will do. 
            So if you love a tasty bunny chow or tender cooked chips, come to the home of kasi fast foods. 
            Get your lunch meal for R20.00. Or order online for delivery.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#B71C1C] text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>123 Fast Food Street, Kasi Town</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span>+27 123 456 789</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>Daily: 8am - 6pm</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Navigation Link Component
function NavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a
      href={href}
      className={`${
        active 
          ? 'text-[#B71C1C] font-bold' 
          : 'text-gray-500 hover:text-gray-700'
      } transition-colors duration-200`}
    >
      {children}
    </a>
  );
}

export default App;