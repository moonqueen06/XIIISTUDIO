import React, { useEffect, useState } from 'react';
import { X, Inbox, Trash2, CheckCircle, RefreshCw, Mail, Phone, Calendar, Download } from 'lucide-react';
import { ContactInquiry } from '../types';

interface AdminInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminInboxModal: React.FC<AdminInboxModalProps> = ({ isOpen, onClose }) => {
  const [contacts, setContacts] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact');
      if (res.ok) {
        const json = await res.json();
        setContacts(json.data || []);
      } else {
        // Fallback to localstorage
        loadLocalContacts();
      }
    } catch {
      loadLocalContacts();
    } finally {
      setLoading(false);
    }
  };

  const loadLocalContacts = () => {
    const raw = localStorage.getItem('xiii_contacts');
    if (raw) {
      setContacts(JSON.parse(raw));
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchContacts();
    }
  }, [isOpen]);

  const handleToggleRead = async (id: string, currentRead?: boolean) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: !currentRead }),
      });
    } catch {
      // ignore
    }
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, read: !currentRead } : c))
    );
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/contact/${id}`, { method: 'DELETE' });
    } catch {
      // ignore
    }
    setContacts((prev) => prev.filter((c) => c.id !== id));
    if (selectedInquiry?.id === id) setSelectedInquiry(null);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(contacts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `xiii_inquiries_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200 font-mono">
      <div className="bg-[#0a0a0a] text-white w-full max-w-xl h-full border-l border-white/20 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center space-x-2">
              <Inbox size={20} className="text-[#C8102E]" />
              <h3 className="font-syne text-xl font-bold uppercase tracking-wider text-white">Studio Inbox</h3>
              <span className="text-[10px] font-mono bg-[#C8102E] px-2 py-0.5 font-bold text-white">
                {contacts.length}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={fetchContacts}
                title="Refresh Inquiries"
                className="p-2 bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              </button>
              <button
                onClick={handleExportJson}
                title="Export Inquiries as JSON"
                className="p-2 bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <Download size={16} />
              </button>
              <button
                onClick={onClose}
                className="p-2 bg-[#C8102E] hover:bg-[#d91635] text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <p className="text-[10px] text-white/50 font-mono uppercase tracking-widest mb-6">
            Real-time backend inquiry database storing project leads from the XIII Studio contact form.
          </p>

          {/* List of Submissions */}
          {contacts.length === 0 ? (
            <div className="text-center py-16 text-white/40 space-y-2">
              <Inbox size={32} className="mx-auto text-white/20" />
              <p className="text-xs uppercase tracking-widest font-mono">No contact submissions yet.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {contacts.map((inquiry) => (
                <div
                  key={inquiry.id}
                  onClick={() => setSelectedInquiry(inquiry)}
                  className={`p-4 border transition-all cursor-pointer ${
                    selectedInquiry?.id === inquiry.id
                      ? 'bg-[#C8102E]/20 border-[#C8102E] shadow-xl'
                      : inquiry.read
                      ? 'bg-[#050505] border-white/10 opacity-60'
                      : 'bg-[#050505] border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white font-syne uppercase">{inquiry.name}</span>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                      {inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleDateString() : 'Recent'}
                    </span>
                  </div>

                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#f5a6b0] mb-2">{inquiry.projectType}</p>
                  
                  <p className="text-xs text-white/80 line-clamp-2 font-sans mb-3 italic">
                    "{inquiry.message}"
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-white/60 font-mono">
                    <span>{inquiry.email}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (inquiry.id) handleToggleRead(inquiry.id, inquiry.read);
                        }}
                        className="p-1 hover:text-white"
                        title={inquiry.read ? 'Mark as Unread' : 'Mark as Read'}
                      >
                        <CheckCircle size={14} className={inquiry.read ? 'text-[#f5a6b0]' : 'text-white/30'} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (inquiry.id) handleDelete(inquiry.id);
                        }}
                        className="p-1 hover:text-red-400"
                        title="Delete Inquiry"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detail Inspection Modal / Card */}
        {selectedInquiry && (
          <div className="mt-6 pt-6 border-t border-white/10 bg-[#050505] p-4 border border-white/20 text-xs space-y-3 font-mono">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#800020] font-bold">Selected Lead Detail</span>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-white/50 hover:text-white uppercase tracking-widest text-[9px]"
              >
                Close Detail
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-white/80 text-[10px] uppercase tracking-wider">
              <div><strong className="text-white">Budget:</strong> {selectedInquiry.budget}</div>
              <div><strong className="text-white">Company:</strong> {selectedInquiry.company || 'N/A'}</div>
              <div><strong className="text-white">Phone:</strong> {selectedInquiry.phone || 'N/A'}</div>
            </div>

            <div className="p-3 bg-black border border-white/10 text-white/90 font-sans text-xs italic">
              "{selectedInquiry.message}"
            </div>

            <div className="flex justify-end space-x-2 pt-1">
              <a
                href={`mailto:${selectedInquiry.email}?subject=RE: XIII Studio Project Inquiry`}
                className="bg-[#C8102E] hover:bg-[#d91635] text-white px-4 py-2 text-[9px] font-mono font-bold uppercase tracking-[0.2em] transition-all"
              >
                Reply via Email
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
