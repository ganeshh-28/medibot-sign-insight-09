
import React, { useRef, useEffect, useState } from 'react';
import { Mic, MicOff, Video, VideoOff, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoFeedProps {
  isSelfFeed?: boolean;
  label: string;
  isMicActive: boolean;
  isCameraActive: boolean;
  onToggleMic?: () => void;
  onToggleCamera?: () => void;
}

const VideoFeed: React.FC<VideoFeedProps> = ({
  isSelfFeed = false,
  label,
  isMicActive,
  isCameraActive,
  onToggleMic,
  onToggleCamera,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    let mediaStream: MediaStream | null = null;

    // For demo purposes, only get real camera for self feed
    if (isSelfFeed && isCameraActive) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: isMicActive })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            setStream(stream);
          }
        })
        .catch((err) => {
          console.error("Error accessing media devices:", err);
        });
    } else {
      // For remote feed in demo, just show a black screen (or could use a placeholder)
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
      
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isSelfFeed, isCameraActive, isMicActive]);

  return (
    <div className="relative rounded-lg overflow-hidden border border-border bg-card h-full">
      <div className={`h-full w-full flex items-center justify-center ${isCameraActive ? '' : 'bg-gray-900'}`}>
        {isCameraActive ? (
          <video
            ref={videoRef}
            autoPlay
            muted={true}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <User size={64} />
            <p className="mt-2">Camera is off</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 flex justify-between items-center">
        <span className="text-white text-sm font-medium">{label}</span>
        
        <div className="flex gap-2">
          {onToggleMic && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full bg-black/30 hover:bg-black/50 text-white h-8 w-8 p-0" 
              onClick={onToggleMic}
            >
              {isMicActive ? <Mic size={16} /> : <MicOff size={16} />}
            </Button>
          )}
          
          {onToggleCamera && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full bg-black/30 hover:bg-black/50 text-white h-8 w-8 p-0" 
              onClick={onToggleCamera}
            >
              {isCameraActive ? <Video size={16} /> : <VideoOff size={16} />}
            </Button>
          )}
        </div>
      </div>
      
      {isMicActive && (
        <div className="absolute top-2 right-2">
          <div className="flex gap-1 items-center">
            <div className="w-2 h-4 bg-green-500 animate-pulse rounded"></div>
            <div className="w-2 h-6 bg-green-500 animate-pulse rounded delay-75"></div>
            <div className="w-2 h-3 bg-green-500 animate-pulse rounded delay-150"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoFeed;
