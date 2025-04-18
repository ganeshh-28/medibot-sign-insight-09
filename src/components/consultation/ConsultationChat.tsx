
import React, { useRef, useEffect } from 'react';
import { useConsultation } from '@/context/ConsultationContext';
import { Message as MessageType } from '@/types/consultation';
import { FileText, Download } from 'lucide-react';

const Message: React.FC<{ message: MessageType; isCurrentUser: boolean }> = ({ message, isCurrentUser }) => {
  const messageClass = isCurrentUser
    ? 'bg-primary text-primary-foreground ml-auto'
    : message.sender === 'system'
    ? 'bg-muted text-muted-foreground mx-auto'
    : 'bg-accent text-accent-foreground';

  return (
    <div className={`max-w-[80%] rounded-lg p-3 mb-3 ${messageClass}`}>
      <div className="flex items-center gap-2 mb-1 text-xs opacity-80">
        <span>{message.sender === 'doctor' ? 'Doctor' : message.sender === 'patient' ? 'Patient' : 'System'}</span>
        <span>{message.timestamp.toLocaleTimeString()}</span>
        {message.isTranscript && <span className="rounded-full bg-blue-500/20 px-2 py-0.5">Transcript</span>}
        {message.isSignLanguage && <span className="rounded-full bg-green-500/20 px-2 py-0.5">Sign Language</span>}
      </div>
      
      <div>{message.text}</div>
      
      {message.fileAttachment && (
        <div className="mt-2 p-2 bg-black/10 rounded flex items-center gap-2">
          <FileText size={16} />
          <span className="text-sm flex-1 truncate">{message.fileAttachment.name}</span>
          <a 
            href={message.fileAttachment.url} 
            download={message.fileAttachment.name}
            className="p-1 hover:bg-black/10 rounded"
          >
            <Download size={16} />
          </a>
        </div>
      )}
    </div>
  );
};

const ConsultationChat: React.FC<{ userRole: 'doctor' | 'patient' }> = ({ userRole }) => {
  const { state } = useConsultation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  return (
    <div className="h-full flex flex-col border rounded-lg bg-card overflow-hidden">
      <div className="p-3 border-b bg-muted">
        <h3 className="font-medium">Consultation Chat</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3">
        {state.messages.map((message) => (
          <Message 
            key={message.id} 
            message={message} 
            isCurrentUser={message.sender === userRole}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ConsultationChat;
