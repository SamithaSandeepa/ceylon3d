import type { ProcessStep as ProcessStepType } from "@/types";

interface ProcessStepProps {
  process: ProcessStepType;
  /** Whether to show the connecting line to the next step */
  showConnector: boolean;
}

export function ProcessStep({ process, showConnector }: ProcessStepProps) {
  return (
    <div className="relative text-center group">
      {showConnector && (
        <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent" />
      )}
      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/10 border-2 border-orange-500/40 group-hover:border-orange-500 transition-colors mb-6 mx-auto">
        <span className="text-orange-400 font-black text-2xl">{process.step}</span>
      </div>
      <h3 className="text-white font-bold text-xl mb-3">{process.title}</h3>
      <p className="text-gray-400 leading-relaxed">{process.desc}</p>
    </div>
  );
}
