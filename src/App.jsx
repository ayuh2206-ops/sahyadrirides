import React, { useState, useEffect, useRef } from 'react';
import { 
  Car, Calendar, MapPin, Star, ShieldCheck, 
  Clock, Phone, Menu, X, ChevronRight, 
  MessageSquare, CheckCircle, Zap, User, Send
} from 'lucide-react';

// --- Mock Data ---

const CAR_FLEET = [
  {
    id: 1,
    name: "Maruti Swift",
    type: "Hatchback",
    fuel: "Petrol",
    seats: 5,
    transmission: "Manual",
    rating: 4.8,
    price: "₹120/hr",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    badge: "Popular"
  },
  {
    id: 2,
    name: "Mahindra Thar",
    type: "SUV",
    fuel: "Diesel",
    seats: 4,
    transmission: "Auto",
    rating: 4.9,
    price: "₹350/hr",
    image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/204996/thar-2025-exterior-right-front-three-quarter-5.png?isig=0&q=80&q=80",
    badge: "Off-Road King"
  },
  {
    id: 3,
    name: "Hyundai Creta",
    type: "SUV",
    fuel: "Petrol",
    seats: 5,
    transmission: "Auto",
    rating: 4.7,
    price: "₹250/hr",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/8667/1755765115423/front-left-side-47.jpg",
    badge: "Comfort"
  },
  {
    id: 4,
    name: "Tata Nexon",
    type: "Compact SUV",
    fuel: "EV",
    seats: 5,
    transmission: "Auto",
    rating: 4.8,
    price: "₹200/hr",
    image: "https://catalog-management.s3.ap-south-1.amazonaws.com/htmobile1/tata_nexonevmax/images/exterior_tata-nexon-ev-max-dark_front-view_600x400.jpeg",
    badge: "Eco Friendly"
  }
];

const LOCATIONS = [
  "Dattawadi", "Kothrud", "Hinjewadi", "Viman Nagar", "Baner", "Hadapsar", "Swargate", "Katraj"
];

const REVIEWS = [
  {
    id: 1,
    name: "Amit Deshmukh",
    text: "Best service in Pune! The Thar was in brand new condition. Zero hidden charges as promised.",
    stars: 5,
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Sneha Patil",
    text: "Booking process took literally 2 minutes. Documentation was easy via WhatsApp.",
    stars: 5,
    date: "1 week ago"
  }
];

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-teal-500 p-1.5 rounded-lg">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Sahyadri<span className="text-teal-400">Rides</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm font-medium">Fleet</a>
          <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm font-medium">How it Works</a>
          <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm font-medium">Locations</a>
          <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm font-medium">Pricing</a>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[0_0_15px_rgba(20,184,166,0.4)] flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +91 95612 43370
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col gap-4 shadow-2xl">
          <a href="#" className="text-slate-300 text-lg py-2 border-b border-slate-800">Fleet</a>
          <a href="#" className="text-slate-300 text-lg py-2 border-b border-slate-800">How it Works</a>
          <a href="#" className="text-slate-300 text-lg py-2 border-b border-slate-800">Locations</a>
          <button className="bg-teal-500 text-white w-full py-3 rounded-lg font-bold">
            Login / Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1920&q=60')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left mt-10 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wide">
            <Zap className="w-3 h-3" />
            #1 Self-Drive Rental in Pune
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Drive Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Freedom</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
            Pune’s most trusted self-drive car rental. Zero hidden charges. 
            Unlimited KMs available. Book in 90 seconds.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <CheckCircle className="w-4 h-4 text-teal-500" /> No Deposit Options
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <CheckCircle className="w-4 h-4 text-teal-500" /> Fully Insured
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <CheckCircle className="w-4 h-4 text-teal-500" /> 24/7 Support
            </div>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-teal-900/20 border border-slate-100 max-w-md mx-auto w-full">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Book</h3>
          
          <div className="space-y-4">
            {/* Location Input */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Pick-up Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-teal-500 outline-none appearance-none font-medium">
                  <option>Dattawadi (Main Hub)</option>
                  <option>Kothrud</option>
                  <option>Hinjewadi</option>
                  <option>Pune Airport</option>
                </select>
              </div>
            </div>

            {/* Date Pickers */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Start Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input type="datetime-local" className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg py-2.5 pl-9 pr-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">End Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input type="datetime-local" className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg py-2.5 pl-9 pr-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all active:scale-[0.98] flex justify-center items-center gap-2 mt-2">
              Find Cars
              <ChevronRight className="w-5 h-5" />
            </button>

            <p className="text-center text-xs text-slate-400 mt-2">
              *Instant confirmation. No credit card needed.
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: "100% Verified Fleet", desc: "Every car undergoes a 40-point safety check before delivery." },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Roadside Support", desc: "Stuck anywhere? Our team is just one call away, anytime." },
    { icon: <MapPin className="w-6 h-6" />, title: "Anywhere Delivery", desc: "Get your car delivered to your doorstep or airport." },
    { icon: <Zap className="w-6 h-6" />, title: "Instant Refund", desc: "Security deposit refunded instantly after trip completion." },
  ];

  return (
    <section className="bg-slate-50 py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose <span className="text-teal-500">Sahyadri?</span></h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-teal-500/50 transition-all shadow-sm hover:shadow-md group">
              <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center text-teal-500 mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FleetSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Premium Fleet</h2>
            <p className="text-slate-500 mt-2">Choose from our wide range of well-maintained cars.</p>
          </div>
          <button className="text-teal-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            View All Cars <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAR_FLEET.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {car.badge}
                </div>
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-800">{car.name}</h3>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-xs font-bold text-yellow-700">
                    <Star className="w-3 h-3 fill-current" /> {car.rating}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                  <span className="bg-slate-100 px-2 py-1 rounded">{car.transmission}</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">{car.fuel}</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">{car.seats} Seats</span>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <span className="text-xl font-bold text-slate-900">{car.price}</span>
                    <span className="text-xs text-slate-400 font-medium"> (excl. fuel)</span>
                  </div>
                  <button className="bg-slate-900 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StepsSection = () => {
  return (
    <section className="bg-slate-900 py-20 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Book in 3 Simple Steps</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

          {[
            { step: "01", title: "Choose Date & Car", desc: "Select your travel dates and pick from our wide range of verified cars." },
            { step: "02", title: "Upload Documents", desc: "Quick digital KYC using your Driving License and Aadhaar card." },
            { step: "03", title: "Enjoy the Ride", desc: "Pick up the car from our hub or get it delivered. Drive unlimited KMs." }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center text-2xl font-bold text-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.3)] mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Trusted by Pune</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! 👋 Looking for a self-drive car in Pune? I can help you with rates and availability.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = ""; // Provided by runtime environment
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
            systemInstruction: {
              parts: [{ 
                text: `You are a helpful and polite AI assistant for Sahyadri Rides, a premium self-drive car rental service in Pune. 
                
                Here is our current Fleet and Pricing data you must use to answer questions:
                ${JSON.stringify(CAR_FLEET)}

                Here are our serviceable locations:
                ${JSON.stringify(LOCATIONS)}

                Key Policies:
                - Zero hidden charges
                - 100% verified fleet
                - 24/7 roadside support
                - No deposit options available
                - Fully insured cars
                - Instant refund on security deposits
                
                If a user asks to book, guide them to the 'Quick Book' form on the homepage or ask for their preferred dates and car type to help them decide. Keep responses concise and friendly.` 
              }]
            }
          })
        }
      );
      
      const data = await response.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I'm having trouble connecting right now. Please try again later.";
      
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, something went wrong. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen && (
        <div className="bg-white w-80 mb-4 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-fade-in-up flex flex-col">
          {/* Chat Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse absolute top-0 right-0"></div>
                <MessageSquare className="w-5 h-5 text-teal-400" />
              </div>
              <span className="text-white font-bold text-sm tracking-wide">Sahyadri Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-80 bg-slate-50 p-4 overflow-y-auto space-y-3 custom-scrollbar">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-teal-500 text-white ml-auto rounded-br-none' 
                    : 'bg-white text-slate-700 mr-auto rounded-bl-none border border-slate-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white text-slate-500 p-3 rounded-xl rounded-bl-none border border-slate-100 mr-auto w-16 flex items-center justify-center gap-1 shadow-sm">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-slate-100 bg-white">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about cars, prices..." 
                className="w-full text-sm bg-slate-50 border border-slate-200 rounded-full pl-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-1.5 bg-teal-500 hover:bg-teal-600 disabled:opacity-50 disabled:hover:bg-teal-500 text-white p-1.5 rounded-full transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} transition-all duration-300 absolute bottom-0 right-0 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(20,184,166,0.4)] hover:shadow-[0_6px_25px_rgba(20,184,166,0.6)] transform hover:-translate-y-1 flex items-center justify-center`}
      >
        <MessageSquare className="w-7 h-7" />
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-900 p-1.5 rounded-lg">
                <Car className="w-5 h-5 text-teal-400" />
              </div>
              <span className="text-xl font-bold text-white">Sahyadri<span className="text-teal-400">Rides</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Pune's premium self-drive car rental service providing verified cars at affordable rates.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">IG</div>
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">FB</div>
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">X</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Our Fleet</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {LOCATIONS.slice(0, 5).map((loc, i) => (
                <li key={i}><a href="#" className="hover:text-teal-400 transition-colors">{loc}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                <span>Sarita Complex, Saritanagari Phase II, Dattawadi, Pune 411030</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <span>+91 95612 43370</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal-500 shrink-0" />
                <span>Mon - Sun: 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} Sahyadri Rides. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <div className="font-sans bg-white text-slate-900">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
      <Navigation />
      <HeroSection />
      <Features />
      <FleetSection />
      <StepsSection />
      <TestimonialSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;