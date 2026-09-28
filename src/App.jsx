import React from 'react';

export default function App() {
  const foodGroups = [
    { name: 'Sea Fish', desc: 'Essential proteins & minerals' },
    { name: 'Grains & Spices', desc: 'Complex carbs & active botanicals' },
    { name: 'Linoleic Oils', desc: 'Healthy fatty acid profile' },
    { name: 'Leafy Greens', desc: 'Micronutrient & antioxidant source' },
    { name: 'Legumes & Seeds', desc: 'Plant protein & fiber support' },
    { name: 'Fruits & Dairy', desc: 'Vitamins & calcium nourishment' },
  ];

  const products = [
    {
      title: 'NUTRIMAX ReGen Meal Flour',
      tagline: 'Regenerative Food Composite',
      desc: 'A whole-food composite powder integrating multiple nutrient-dense food groups for daily meals and beverages.',
    },
    {
      title: 'NUTRIMAX Porridge',
      tagline: 'Ultimate Nourishment Meal',
      desc: 'Formulated for high dietary completeness, offering sustained energy, digestion support, and cellular vitality.',
    },
    {
      title: 'NUTRIMAX Juice Hydrolyte',
      tagline: 'Nature’s Solutions Beverage',
      desc: 'A rich, refreshing electrolyte and nutrient drink cocktail packed with natural fruit and botanical extracts.',
    },
    {
      title: 'NUTRIMAX Capsules',
      tagline: 'Precision Daily Nutrition',
      desc: 'Convenient, precise-dose whole-food capsule format designed for modern daily wellness on the go.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-700 text-white font-bold text-xl rounded-full flex items-center justify-center">
              N
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 tracking-tight block">NUTRIMAX ReGen</span>
              <span className="text-xs text-emerald-700 font-medium">Multigen Food Solutions Ltd</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-emerald-700 transition">About Us</a>
            <a href="#products" className="hover:text-emerald-700 transition">Products</a>
            <a href="#ingredients" className="hover:text-emerald-700 transition">Ingredients</a>
            <a href="#contact" className="hover:text-emerald-700 transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-400/30">
            Harnessing Nature's Regenerative Power
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            REGENERATE, RESTORE AND REJUVENATE...
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8 font-light">
            A Ugandan whole-food nutrition platform designed for cellular vitality and complete everyday diet-based solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="bg-white text-emerald-900 px-8 py-3.5 rounded-lg font-bold shadow-lg hover:bg-emerald-50 transition"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="border border-emerald-300/40 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </header>

      {/* About / Mission Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              <strong>Multigen Food Solutions Limited</strong> is positioned as a confident, innovative, and collaborative partner in the global wellness space.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our goals and objectives are to deliver natural wellness solutions for both short-term vitality and long-term health through diet-based innovation.
            </p>
            <div className="p-4 bg-emerald-50 border-l-4 border-emerald-700 rounded-r-lg">
              <p className="text-xs text-emerald-900 italic">
                <strong>Important Notice:</strong> Nutrimax ReGen is a whole-food supplement, not a cure. It supports normal body functions when dietary intake is incomplete.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Benefits</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span> Broad micronutrient coverage & healthy fat profile
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span> Gut & digestion support
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span> Sustained energy plus blood sugar balance
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span> Anti-oxidant and anti-inflammatory support
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span> Muscle and bone structural support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Product Platform Section */}
      <section id="products" className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Product Portfolio</h2>
            <p className="text-slate-600 mt-2">Whole-food formats designed for everyday consumption occasions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide block mb-2">{item.tagline}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whole-Food Composite Ingredients */}
      <section id="ingredients" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Whole-Food Platform</h2>
          <p className="text-slate-600 mt-2">Integrating multiple natural food groups into a single nutritional unit</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foodGroups.map((group, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-slate-200 text-center hover:border-emerald-500 transition">
              <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{group.name}</h3>
              <p className="text-xs text-slate-500">{group.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Location Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">MULTIGEN FOOD SOLUTIONS LTD</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ugandan homegrown nutrition platform delivering natural diet-based solutions.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold text-white mb-3">Our Location</h4>
            <p className="text-sm text-slate-400">P.O. Box 860827</p>
            <p className="text-sm text-slate-400">Wakiso, Kireka, Naalya</p>
            <p className="text-sm text-slate-400">Uganda</p>
          </div>
          <div>
            <h4 className="text-md font-semibold text-white mb-3">Direct Contacts</h4>
            <p className="text-sm text-slate-400 mb-1">+256 769 601325</p>
            <p className="text-sm text-slate-400 mb-1">+256 700 498962</p>
            <p className="text-sm text-slate-400">+256 787 604355 (Christine Drakuru)</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-slate-800 text-xs text-center text-slate-500">
          © {new Date().getFullYear()} Multigen Food Solutions Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}