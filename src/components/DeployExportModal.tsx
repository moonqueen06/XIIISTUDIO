import React, { useState } from 'react';
import { X, Copy, Check, Globe, ExternalLink, Code, Terminal, Zap } from 'lucide-react';

interface DeployExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployExportModal: React.FC<DeployExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedVercel, setCopiedVercel] = useState(false);

  const vercelServerlessCode = `// api/contact.js - Free Vercel Serverless Function for XIII Studio Contact Form
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, company, projectType, budget, message } = req.body;
    
    // Process or forward inquiry to email / Telegram / Discord / Webhook
    console.log("New XIII Inquiry:", name, email);

    return res.status(200).json({
      success: true,
      message: "Inquiry received! Fernanda will reach out within 24 hours.",
      data: { name, email, projectType, createdAt: new Date() }
    });
  }
  return res.status(405).json({ error: "Method not allowed" });
}
`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(vercelServerlessCode);
    setCopiedVercel(true);
    setTimeout(() => setCopiedVercel(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 font-mono">
      <div className="bg-[#0a0a0a] text-white max-w-2xl w-full max-h-[90vh] border border-white/20 shadow-2xl overflow-y-auto p-6 sm:p-8 relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#800020] hover:bg-[#a00028] transition-colors text-white"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <div className="flex items-center space-x-2.5 mb-2">
          <Globe size={22} className="text-[#800020]" />
          <h3 className="font-syne text-2xl font-bold uppercase tracking-tight text-white">
            Host & Deploy Standalone
          </h3>
        </div>

        <p className="text-xs text-white/70 font-sans mb-6 leading-relaxed border-l-2 border-[#800020] pl-3">
          This codebase is 100% standard Vite + React + TypeScript. You can export the project ZIP file and deploy it instantly for free on <strong className="text-white">Vercel</strong> or <strong className="text-white">Netlify</strong>.
        </p>

        {/* Vercel Steps */}
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-[#050505] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#f5a6b0] font-bold uppercase flex items-center space-x-1 tracking-wider">
                <Zap size={14} className="text-[#800020]" />
                <span>Option 1: Deploy on Vercel (Recommended)</span>
              </span>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-mono uppercase tracking-wider text-white/80 hover:text-white underline flex items-center space-x-1"
              >
                <span>Vercel Dashboard</span>
                <ExternalLink size={10} />
              </a>
            </div>

            <ol className="list-decimal list-inside text-xs text-white/80 space-y-1 font-sans">
              <li>Export project ZIP from AI Studio menu or push to GitHub.</li>
              <li>Import repository into Vercel Dashboard.</li>
              <li>Framework Preset: <code className="text-[#f5a6b0] font-mono">Vite</code> (Build Command: <code className="text-white/90 font-mono">npm run build</code>, Output: <code className="text-white/90 font-mono">dist</code>).</li>
              <li>Click <strong>Deploy</strong> — Your site is live in ~30 seconds with custom SSL!</li>
            </ol>
          </div>

          {/* Optional Serverless Function for Vercel */}
          <div className="p-4 bg-[#050505] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white font-bold flex items-center space-x-1 tracking-wider uppercase">
                <Code size={14} className="text-[#800020]" />
                <span>Optional: Vercel Serverless Contact API Snippet</span>
              </span>
              <button
                onClick={handleCopyCode}
                className="px-3 py-1 bg-[#800020] hover:bg-[#a00028] text-white text-[10px] font-mono uppercase font-bold flex items-center space-x-1 transition-colors"
              >
                {copiedVercel ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedVercel ? 'Copied!' : 'Copy API Code'}</span>
              </button>
            </div>

            <pre className="p-3 bg-black border border-white/10 text-[10px] font-mono text-white/70 overflow-x-auto max-h-36">
              {vercelServerlessCode}
            </pre>
          </div>
        </div>

        {/* Netlify Steps */}
        <div className="p-4 bg-[#050505] border border-white/10 space-y-2 mb-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#f5a6b0] font-bold uppercase flex items-center space-x-1 tracking-wider">
              <Terminal size={14} className="text-[#800020]" />
              <span>Option 2: Deploy on Netlify</span>
            </span>
            <a
              href="https://app.netlify.com"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-mono uppercase tracking-wider text-white/80 hover:text-white underline flex items-center space-x-1"
            >
              <span>Netlify App</span>
              <ExternalLink size={10} />
            </a>
          </div>

          <p className="text-xs text-white/80 font-sans">
            Drag & drop the compiled <code className="text-[#f5a6b0] font-mono">dist/</code> folder directly into Netlify Drop or link your GitHub repo. Set build command to <code className="text-white font-mono">npm run build</code> and publish directory to <code className="text-white font-mono">dist</code>.
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="bg-[#800020] hover:bg-[#a00028] text-white px-6 py-2.5 text-xs uppercase font-mono font-bold tracking-[0.2em] transition-all"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
