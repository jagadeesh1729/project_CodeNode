import { ArrowRight, Mail, LayoutList } from 'lucide-react'; // Added LayoutList for the secondary button

const Hero = ({ onExploreServices }: { onExploreServices: () => void }) => {
  return (
    <section className="min-h-[85vh] flex items-center bg-gray-950 text-white relative overflow-hidden">
      
      {/* Subtle Background Accent/Gradient - Adds Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 opacity-95"></div>
      
      {/* Faux Grid or Pattern for Tech Feel (Optional but nice) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none [background:radial-gradient(ellipse_at_top,_#2d3748_0%,_transparent_50%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        
        {/* Pre-Header: Stronger Color for Visibility */}
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-3">
          Construction Automation
        </p>

        {/* Main Header: Bigger, Bolder, More Impact */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-white block">We help construction teams</span>
          <span className="text-cyan-400">
            eliminate repetitive manual work
          </span>
          <span className="text-white block">using AI.</span>
        </h1>

        {/* Subtext: Better Contrast and Slightly Wider */}
        <p className="text-base md:text-xl text-slate-300 max-w-4xl mb-12 font-light">
          We automate time-consuming construction tasks such as drawings interpretation,
          BOQ and estimate preparation, DPR creation, material logs, progress tracking,
          safety documentation, and compliance reporting — **enabling faster, more accurate, and more efficient project execution.**
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* Primary Button: High Contrast, Solid Blue */}
          <a
            href="mailto:director@aarambhly.com"
            className="rounded-lg px-8 py-4 text-base font-bold bg-cyan-500 text-gray-950 hover:bg-cyan-400 transition transform hover:scale-[1.02] shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Book a Demo
          </a>

          {/* Secondary Button: Subtle, Outline Style */}
          <button 
            onClick={onExploreServices}
            className="rounded-lg px-8 py-4 text-base font-medium border border-slate-700 text-slate-200 hover:bg-slate-800 transition flex items-center justify-center gap-2"
          >
            <LayoutList className="h-5 w-5" />
            See Our Solutions
          </button>
        </div>

        {/* Footer/Value Bar: Better separation and alignment */}
        <div className="mt-16 pt-6 border-t border-slate-800 text-sm text-slate-400 max-w-5xl">
          <p className="font-medium text-slate-300 mb-2">
            AI-Automated Processes:
          </p>
          <p>
            BOQs, estimates, DPRs, material logs, blueprint interpretation, safety checklists, compliance reports, progress documentation, project records and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;  