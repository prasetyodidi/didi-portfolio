"use client";

import { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-slate-900 text-white min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primaryOrange rounded-full mix-blend-multiply filter blur-[128px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s work together</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
              I&apos;m always open to discussing web development work, mobile app projects, or partnership opportunities.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:didiprasetyo360@gmail.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primaryOrange group-hover:border-primaryOrange transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                  <p className="font-semibold group-hover:text-orange-700 transition-colors">didiprasetyo360@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/prasetyodidi" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primaryOrange group-hover:border-primaryOrange transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">GitHub</p>
                  <p className="font-semibold group-hover:text-orange-700 transition-colors">github.com/prasetyodidi</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="relative">
            {/* Glowing effect behind form */}
            <div className="absolute inset-0 bg-primaryOrange rounded-3xl filter blur-[64px] opacity-10"></div>
            
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative z-10">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primaryOrange focus:border-transparent transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primaryOrange focus:border-transparent transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primaryOrange focus:border-transparent transition-all" placeholder="How can I help you?"></textarea>
                </div>
                
                {status === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                    {errorMessage}
                  </div>
                )}
                {status === "success" && (
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-sm">
                    Message sent successfully! I will get back to you soon.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-4 bg-primaryOrange text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30 disabled:opacity-70 flex items-center justify-center"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                       Sending...
                    </span>
                  ) : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
