'use client'

import { siteConfig } from '@/data/site'

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 mb-4 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium">
            Por Que Escolher
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Nossos <span className="text-accent">Diferenciais</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprometidos em oferecer a melhor experiência em cada visita
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 bg-accent/10 border border-accent/30 rounded-full group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-4xl">{benefit.icon}</span>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

