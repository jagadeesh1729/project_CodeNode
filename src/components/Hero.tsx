import { ArrowRight, Mail } from 'lucide-react';

const Hero = ({ onExploreServices }: { onExploreServices: () => void }) => {
  return (
    <section className="min-h-[70vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        <p className="text-sm uppercase tracking-[0.25em] text-blue-400 mb-4">
          Civil Engineering Automation
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          We help civil engineering teams<br />
          <span className="text-blue-400">
            eliminate repetitive manual work using AI.
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-300 max-w-3xl mb-10">
          We automate time-consuming civil engineering tasks such as drawings analysis,
          BOQ preparation, DPR creation, material logs, estimation sheets, safety reports, 
          and compliance documentation — enabling faster and more accurate project execution.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:director@aarambhly.com"
            className="rounded-xl px-6 py-3 text-sm md:text-base font-medium bg-blue-400 text-slate-950 hover:bg-blue-300 transition flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Book a Demo
          </a>
          <button 
            onClick={onExploreServices}
            className="rounded-xl px-6 py-3 text-sm md:text-base font-medium border border-slate-600 text-slate-100 hover:bg-slate-800/60 transition flex items-center gap-2"
          >
            See Our Solutions
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 text-xs md:text-sm text-slate-400">
          We automate: BOQs, estimations, DPRs, material logs, blueprint interpretation, 
          safety checklists, compliance reports, site documentation and more — all using AI.
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import { ArrowRight, Mail } from 'lucide-react';

// const Hero = ({ onExploreServices }: { onExploreServices: () => void;  }) => {
//   return (
//     <section className="min-h-[70vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
//       <div className="mx-auto max-w-6xl px-6 py-20">
        
//         <p className="text-sm uppercase tracking-[0.25em] text-blue-400 mb-4">
//           AI-Powered Business Automation
//         </p>

//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
//           We help companies<br />
//           <span className="text-blue-400">
//             eliminate manual work using AI automation.
//           </span>
//         </h1>

//         <p className="text-base md:text-lg text-slate-300 max-w-3xl mb-10">
//           From document processing, data extraction, workflow automation, 
//           to intelligent analysis and reporting — 
//           we transform repetitive manual tasks into automated AI-powered solutions.
//         </p>

//         <div className="flex flex-wrap gap-4">
//           <a
//             href="mailto:director@aarambhly.com"
//             className="rounded-xl px-6 py-3 text-sm md:text-base font-medium bg-blue-400 text-slate-950 hover:bg-blue-300 transition flex items-center gap-2"
//           >
//             <Mail className="h-4 w-4" />
//             Book a Demo
//           </a>
//           <button 
//             onClick={onExploreServices}
//             className="rounded-xl px-6 py-3 text-sm md:text-base font-medium border border-slate-600 text-slate-100 hover:bg-slate-800/60 transition flex items-center gap-2"
//           >
//             See Our Solutions
//             <ArrowRight className="h-4 w-4" />
//           </button>
//         </div>

//         <div className="mt-10 text-xs md:text-sm text-slate-400">
//           We automate: Document processing, data extraction, invoice verification, 
//           workflow automation, intelligent analysis, compliance reporting, and more.
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;