import { useState, useEffect, useRef } from 'react';
import { Camera, Users, CheckCircle, Clock, Eye, Shield, Zap } from 'lucide-react';

const LiveAttendance = () => {
  const [isLive, setIsLive] = useState(true);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [recognizedFaces, setRecognizedFaces] = useState([
    { id: 1, name: 'Emma Johnson', confidence: 98.5, status: 'present', time: '09:15 AM' },
    { id: 2, name: 'Michael Chen', confidence: 96.2, status: 'present', time: '09:16 AM' },
    { id: 3, name: 'Sarah Williams', confidence: 99.1, status: 'present', time: '09:17 AM' },
    { id: 4, name: 'David Rodriguez', confidence: 97.8, status: 'present', time: '09:18 AM' }
  ]);
  const [attendanceStats, setAttendanceStats] = useState({
    totalStudents: 28,
    present: 24,
    absent: 4,
    accuracy: 98.7
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Request camera access
  const startCamera = async () => {
    try {
      console.log('Starting camera...');
      setIsVideoLoading(true);
      
      // First try with ideal constraints
      let mediaStream;
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280, min: 640 },
            height: { ideal: 720, min: 480 },
            facingMode: 'user'
          },
          audio: false
        });
        console.log('Camera stream obtained with ideal constraints');
      } catch (error) {
        // Fallback to basic constraints if ideal ones fail
        console.warn('Ideal camera constraints failed, trying basic constraints:', error);
        mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { min: 320 },
            height: { min: 240 }
          },
          audio: false
        });
        console.log('Camera stream obtained with fallback constraints');
      }
      
      setStream(mediaStream);
      setHasPermission(true);
      setIsLive(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        
        // Wait for video to load and then play
        videoRef.current.onloadedmetadata = () => {
          console.log('Video metadata loaded, starting playback');
          setIsVideoLoading(false);
          if (videoRef.current) {
            videoRef.current.play()
              .then(() => {
                console.log('Video playback started successfully');
              })
              .catch((playError) => {
                console.error('Error starting video playback:', playError);
              });
          }
        };
        
        // Also try to play immediately as fallback
        videoRef.current.play().catch((playError) => {
          console.warn('Immediate play failed, waiting for metadata:', playError);
        });
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasPermission(false);
      setIsLive(false);
      setIsVideoLoading(false);
      
      // Provide specific error messages
      if (error instanceof Error) {
        if (error.name === 'NotAllowedError') {
          alert('Camera access denied. Please allow camera access in your browser settings and refresh the page.');
        } else if (error.name === 'NotFoundError') {
          alert('No camera found. Please connect a camera and try again.');
        } else if (error.name === 'NotReadableError') {
          alert('Camera is already in use by another application. Please close other applications using the camera.');
        } else {
          alert(`Camera error: ${error.message}`);
        }
      }
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop();
        console.log('Camera track stopped:', track.kind);
      });
      setStream(null);
    }
    setIsLive(false);
    setIsVideoLoading(false);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
      videoRef.current.pause();
    }
  };

  // Toggle camera
  const toggleCamera = () => {
    if (isLive) {
      stopCamera();
    } else {
      startCamera();
    }
  };

  // Initialize camera permission check and cleanup
  useEffect(() => {
    // Check for camera permission on component mount
    const checkCameraPermission = async () => {
      try {
        // Check if we're on HTTPS or localhost (required for camera access)
        const isSecureContext = window.isSecureContext || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        
        if (!isSecureContext) {
          console.warn('Camera access requires HTTPS or localhost');
          setHasPermission(false);
          return;
        }

        // Just check if getUserMedia is available, don't actually request access yet
        if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
          setHasPermission(null); // Reset to null to show loading state
        } else {
          setHasPermission(false);
        }
      } catch (error) {
        console.error('Camera not available:', error);
        setHasPermission(false);
      }
    };

    checkCameraPermission();
      
    // Cleanup on unmount
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  // Simulate face detection on video frames
  useEffect(() => {
    let detectionInterval: NodeJS.Timeout;
    
    if (isLive && videoRef.current && canvasRef.current) {
      detectionInterval = setInterval(() => {
        // Simulate face detection with random probability
        if (Math.random() > 0.6) {
          const names = ['Alex Thompson', 'Maria Garcia', 'James Wilson', 'Lisa Chen', 'Robert Brown'];
          const randomName = names[Math.floor(Math.random() * names.length)];
          
          const newStudent = {
            id: Date.now(),
            name: randomName,
            confidence: 94 + Math.random() * 5,
            status: 'present' as const,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          
          setRecognizedFaces(prev => [newStudent, ...prev.slice(0, 4)]);
          setAttendanceStats(prev => ({
            ...prev,
            present: Math.min(prev.present + 1, prev.totalStudents)
          }));
        }
      }, 4000);
    }

    return () => {
      if (detectionInterval) {
        clearInterval(detectionInterval);
      }
    };
  }, [isLive]);

  const features = [
    {
      icon: Eye,
      title: "Real-Time Recognition",
      description: "Advanced AI algorithms identify students instantly as they enter the classroom"
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Encrypted facial data with GDPR compliance and secure storage protocols"
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Automatic attendance marking with real-time parent notifications"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Live Attendance System</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            AI-Powered Facial Recognition
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Revolutionary CCTV system that automatically recognizes students and tracks attendance with 99% accuracy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Live Camera Feed */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
                  <span className="text-white font-medium">
                    {isLive ? 'LIVE' : 'OFFLINE'} - Smart Thinkers Demo
                  </span>
                </div>
                <div className="flex items-center text-white text-sm">
                  <Camera className="w-4 h-4 mr-2" />
                  HD 1080p
                </div>
              </div>
              
              <div className="relative h-80 bg-gray-900 flex items-center justify-center overflow-hidden">
                {isLive && hasPermission ? (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      controls={false}
                      className="w-full h-full object-cover"
                      style={{
                        transform: 'scaleX(-1)', // Mirror the video for better user experience
                        minHeight: '100%',
                        minWidth: '100%'
                      }}
                      onLoadedMetadata={() => {
                        console.log('Video metadata loaded');
                        if (videoRef.current) {
                          videoRef.current.play().catch(console.error);
                        }
                      }}
                      onCanPlay={() => {
                        console.log('Video can play');
                        if (videoRef.current) {
                          videoRef.current.play().catch(console.error);
                        }
                      }}
                      onError={(e) => {
                        console.error('Video error:', e);
                      }}
                    />
                    <canvas
                      ref={canvasRef}
                      className="absolute inset-0 pointer-events-none"
                      width="1280"
                      height="720"
                      style={{
                        transform: 'scaleX(-1)' // Mirror the canvas to match the video
                      }}
                    />
                    
                    {/* Loading indicator */}
                    {isVideoLoading && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                          <p className="text-sm">Loading camera...</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Simulated face detection overlays */}
                    {isLive && !isVideoLoading && (
                      <>
                        <div className="absolute top-4 left-4 w-20 h-24 border-2 border-green-400 rounded-lg animate-pulse">
                          <div className="absolute -bottom-8 left-0 bg-green-400 text-white text-xs px-2 py-1 rounded">
                            You (95.2%)
                          </div>
                        </div>
                        
                        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                          AI Recognition Active
                        </div>
                      </>
                    )}
                  </>
                ) : hasPermission === false ? (
                  <div className="text-center text-white p-6">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">Camera Access Denied</p>
                    <p className="text-sm opacity-75 mb-4">
                      {!window.isSecureContext && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
                        ? 'Camera access requires HTTPS or localhost. Please use a secure connection.'
                        : 'Please allow camera access in your browser settings to see live facial recognition'
                      }
                    </p>
                    <div className="space-y-2">
                      <button
                        onClick={startCamera}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-2"
                      >
                        Try Again
                      </button>
                      <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Refresh Page
                      </button>
                    </div>
                  </div>
                ) : hasPermission === null ? (
                  <div className="text-center text-white p-6">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-lg font-medium mb-2">Checking Camera...</p>
                    <p className="text-sm opacity-75">Please wait while we check camera availability</p>
                  </div>
                ) : (
                  <div className="text-center text-white p-6">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">Smart Thinkers AI Recognition</p>
                    <p className="text-sm opacity-75 mb-4">Click "Start Camera" to begin live facial recognition demo</p>
                    <button
                      onClick={startCamera}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Start Camera Demo
                    </button>
                  </div>
                )}
              </div>

              {/* Camera controls */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={toggleCamera}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isLive 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {isLive ? 'Stop Camera' : 'Start Camera'}
                  </button>
                  <span className="text-sm text-gray-600">
                    {isLive ? 'Live Camera Feed' : 'Camera Offline'} | AI Recognition: {isLive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Status: {isLive ? 'Recording' : 'Standby'} | {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Dashboard */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Present Today</p>
                    <p className="text-3xl font-bold text-green-600">{attendanceStats.present}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Accuracy Rate</p>
                    <p className="text-3xl font-bold text-blue-600">{attendanceStats.accuracy}%</p>
                  </div>
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Recent Recognitions */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Recent Recognitions
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {recognizedFaces.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{student.name}</p>
                          <p className="text-xs text-gray-500">Confidence: {student.confidence.toFixed(1)}%</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Present
                        </div>
                        <p className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {student.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">99.2%</div>
              <p className="text-gray-600">Recognition Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">&lt;0.5s</div>
              <p className="text-gray-600">Processing Time</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Face Database</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAttendance;