import React from 'react';
import { Wrench, Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-nunito relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dwe4p22ut/image/upload/v1750285650/Main_image_mcurr8.webp")'
        }}
      />
      <div className="absolute inset-0 bg-hero-pattern backdrop-blur-xs" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Logo */}
        <header className="p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="bg-white p-3 h-[100px]">
              <img src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1750285650/Logo_iiwjil.avif" alt="ArtCreativity Logo" className="w-full h-full object-contain" />
            </div>
            {/* <h1 className="text-xl md:text-2xl font-bold text-white">ArtCreativity</h1> */}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-3 py-12">
          <div className="max-w-3xl w-full">
            {/* Main Card */}
            <div className="bg-white/95 backdrop-blur-lg  p-8 md:p-12 shadow-2xl border border-white/20">
              {/* Icon */}
              {/* <div className="flex justify-center mb-8">
                <div className="bg-primary/10 rounded-full p-6">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
              </div> */}

              {/* Main Heading */}
              <h1 className="text-[1.5rem] leading-[2rem] md:text-[2.5rem] md:leading-[3.5rem] font-bold text-gray-800 text-center mb-6">
                We're Working on Something Exciting!
              </h1>

              {/* Description */}
              <p className="text-[18px] text-gray-600 text-center mb-8 leading-relaxed">
                Our website is currently undergoing maintenance as we prepare a fresh new look and experience for you.
              </p>

     {/* CTA Section */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit the New Website</h3>
                <p className="text-[18px] text-gray-600 mb-8">
                  Click the button below to continue shopping on our new and improved site!
                </p>
                <button className="inline-flex items-center gap-3 bg-greenCta hover:bg-greenCta/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Continue Shopping
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>


              {/* Need Help Section */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Need Help?</h2>
                <p className="text-[18px] text-gray-600 text-center mb-8">
                  If you have any questions about your order or need tracking assistance, feel free to reach out:
                </p>
                
                {/* Contact Info */}
                <div className="gap-3 flex flex-col md:flex-row justify-center mx-auto">
                  {/* Phone */}
                {/* Phone */}
<a href="tel:+18457836009" className="block">
  <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
    <div className="bg-success/10 rounded-full p-3">
      <Phone className="w-6 h-6 text-success" />
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium">Phone</p>
      <p className="text-[18px] font-semibold text-gray-800 hover:text-success transition-colors">
        +1 845-783-6009
      </p>
    </div>
  </div>
</a>

{/* Email */}
<a href="mailto:Help@artcreativity.com" className="block">
  <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
    <div className="bg-accent/10 rounded-full p-3">
      <Mail className="w-6 h-6 text-accent" />
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium">Email</p>
      <p className="text-[18px] font-semibold text-gray-800 hover:text-accent transition-colors">
        Help@artcreativity.com
      </p>
    </div>
  </div>
</a>
                </div>
              </div>

         
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center">
          <p className="text-white/80 text-sm">
            © 2025 ArtCreativity.We'll be back soon with something amazing!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;