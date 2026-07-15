import React, { useState, useEffect } from "react";
import { BookOpen, Play, CheckCircle, Database, Bot, Zap, ArrowRight, HelpCircle, AlertCircle, RefreshCw } from "lucide-react";
import { COURSE_MODULES } from "../data/courseData";
import { CourseModule } from "../types";

export default function Modules() {
  const [activeModuleId, setActiveModuleId] = useState<string>("module-1");
  const [pulseNodeId, setPulseNodeId] = useState<string>("1");
  const [simulationState, setSimulationState] = useState<string>("Ready");

  const activeModule = COURSE_MODULES.find((m) => m.id === activeModuleId) || COURSE_MODULES[0];

  // Simple simulator automation timer
  useEffect(() => {
    let nodeIds: string[] = [];
    if (activeModule.n8nSimulationStep) {
      nodeIds = activeModule.n8nSimulationStep.nodes.map((n) => n.id);
    } else if (activeModule.zapierSimulationStep) {
      nodeIds = activeModule.zapierSimulationStep.steps.map((s) => s.id);
    }

    if (nodeIds.length === 0) return;

    let index = 0;
    setPulseNodeId(nodeIds[0]);
    setSimulationState("Executing Node " + nodeIds[0]);

    const interval = setInterval(() => {
      index = (index + 1) % nodeIds.length;
      const nextId = nodeIds[index];
      setPulseNodeId(nextId);
      
      if (index === 0) {
        setSimulationState("Incoming trigger captured");
      } else if (index === nodeIds.length - 1) {
        setSimulationState("All actions completed successfully!");
      } else {
        setSimulationState("Processing step: " + nextId);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeModuleId, activeModule]);

  // Dynamic node icon renderer for the simulator canvas
  const renderSimNodeIcon = (type: string) => {
    switch (type) {
      case "trigger":
        return <Zap className="h-4 w-4 text-orange-400" />;
      case "router":
        return <AlertCircle className="h-4 w-4 text-yellow-400" />;
      case "action":
        return <Bot className="h-4 w-4 text-emerald-400" />;
      default:
        return <Database className="h-4 w-4 text-blue-400" />;
    }
  };

  return (
    <section id="modules" className="py-24 bg-gradient-to-b from-[#1d353f] to-[#264653] text-white scroll-mt-20 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2A9D8F_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#2A9D8F]/15 border border-[#2A9D8F]/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#2A9D8F] uppercase">
            <BookOpen className="h-4 w-4 text-[#2A9D8F]" />
            What You'll Learn
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            AI Automation Course Curriculum
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Click on individual modules to expand their specific curriculum details and view interactive workflow diagrams.
          </p>
          <div className="w-16 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Modules list Accordion */}
          <div className="lg:col-span-6 space-y-4">
            {COURSE_MODULES.map((module) => {
              const isSelected = module.id === activeModuleId;
              return (
                <div
                  key={module.id}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 p-5 text-left relative overflow-hidden group ${
                    isSelected
                      ? "bg-[#2A9D8F]/15 border-[#2A9D8F] shadow-lg shadow-[#2A9D8F]/5 scale-[1.01]"
                      : "bg-[#1f3741]/40 border-white/5 hover:border-white/10 hover:bg-[#1f3741]/60"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                        isSelected ? "bg-[#2A9D8F] text-white" : "bg-gray-800 text-gray-400"
                      }`}>
                        M{module.number}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#2A9D8F] transition-all">
                          {module.title}
                        </h3>
                        {module.durationEstimate && (
                          <span className="inline-block text-[11px] font-mono text-gray-400 mt-1">
                            Estimated Duration: <strong className="text-gray-200">{module.durationEstimate}</strong>
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <ArrowRight className={`h-5 w-5 text-gray-500 transition-all ${
                        isSelected ? "rotate-90 text-[#2A9D8F]" : "group-hover:translate-x-1"
                      }`} />
                    </div>
                  </div>

                  {/* Topics expansion */}
                  {isSelected && (
                    <div className="mt-5 pt-5 border-t border-white/10 space-y-3 animate-fadeIn">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#E9C46A] mb-2">
                        Topics Covered:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4.5 w-4.5 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Simulator Stage */}
          <div className="lg:col-span-6">
            <div className="bg-[#16272e] rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden">
              
              {/* Simulator Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-white">Visual Blueprint Simulator</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Automated n8n/Zapier pipeline logic for Module {activeModule.number}</p>
                </div>
                <div className="flex items-center gap-2 bg-black/30 border border-white/5 px-2.5 py-1 rounded-lg text-[10px] font-mono text-[#E9C46A]">
                  <RefreshCw className="h-3.5 w-3.5 animate-spin text-[#E9C46A]" />
                  <span>{simulationState}</span>
                </div>
              </div>

              {/* Render n8n Simulation */}
              {activeModule.n8nSimulationStep && (
                <div className="h-64 bg-black/45 rounded-2xl border border-white/5 relative flex items-center justify-center p-4 overflow-hidden">
                  
                  {/* SVG background connections */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {activeModule.n8nSimulationStep.connections.map((conn, idx) => {
                      const fromNode = activeModule.n8nSimulationStep?.nodes.find((n) => n.id === conn.from);
                      const toNode = activeModule.n8nSimulationStep?.nodes.find((n) => n.id === conn.to);
                      if (!fromNode || !toNode) return null;

                      // Draw simple quadratic curves
                      const x1 = fromNode.x + 40;
                      const y1 = fromNode.y + 15;
                      const x2 = toNode.x;
                      const y2 = toNode.y + 15;
                      
                      const isActive = pulseNodeId === conn.from;

                      return (
                        <g key={idx}>
                          <path
                            d={`M ${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}`}
                            fill="none"
                            stroke={isActive ? "#2A9D8F" : "#ffffff"}
                            strokeWidth={isActive ? "2" : "1"}
                            strokeDasharray={isActive ? "4,4" : "none"}
                            className={isActive ? "animate-dash" : "opacity-20"}
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* Render simulated Nodes */}
                  {activeModule.n8nSimulationStep.nodes.map((node) => {
                    const isPulsed = pulseNodeId === node.id;
                    return (
                      <div
                        key={node.id}
                        style={{ left: `${node.x}px`, top: `${node.y}px` }}
                        className={`absolute w-36 bg-[#1f3741] border rounded-lg p-2 flex items-center gap-2 transition-all duration-300 ${
                          isPulsed
                            ? "border-[#2A9D8F] bg-[#2A9D8F]/10 ring-2 ring-[#2A9D8F]/20 scale-105"
                            : "border-white/5 opacity-80"
                        }`}
                      >
                        <div className={`p-1.5 rounded ${
                          isPulsed ? "bg-[#2A9D8F] text-white" : "bg-black/30 text-gray-400"
                        }`}>
                          {renderSimNodeIcon(node.type)}
                        </div>
                        <div className="text-[10px] font-medium text-left truncate text-white max-w-[90px]">
                          {node.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Render Zapier Simulation */}
              {activeModule.zapierSimulationStep && (
                <div className="space-y-3 bg-black/45 rounded-2xl border border-white/5 p-4 text-left max-h-64 overflow-y-auto font-mono text-xs">
                  {activeModule.zapierSimulationStep.steps.map((step) => {
                    const isPulsed = pulseNodeId === step.id;
                    return (
                      <div
                        key={step.id}
                        className={`p-3 rounded-xl border transition-all duration-300 flex items-start gap-3 ${
                          isPulsed
                            ? "border-[#E9C46A] bg-[#E9C46A]/5 text-white scale-[1.01]"
                            : "border-white/5 opacity-50"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                          isPulsed ? "bg-[#E9C46A] text-gray-900" : "bg-gray-800 text-gray-500"
                        }`}>
                          ✓
                        </div>
                        <div>
                          <p className="font-bold text-[#E9C46A]">{step.label}</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">{step.details}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Simulation explanation */}
              <div className="mt-6 text-left p-4 rounded-xl bg-black/25 border border-white/5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#2A9D8F]">
                  Simulator Description
                </h5>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  {activeModule.n8nSimulationStep?.description || activeModule.zapierSimulationStep?.description}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
