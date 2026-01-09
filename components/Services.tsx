'use client'

import { siteConfig } from '@/data/site'

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 mb-4 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium">
            Nossos Serviços
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Serviços <span className="text-accent">Premium</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para cuidar do seu estilo
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-primary-dark border border-gray-800 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Price */}
              {service.price && (
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="text-accent text-xl font-bold">
                    {service.price}
                  </span>
                  <span className="text-gray-500 text-sm">por serviço</span>
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

