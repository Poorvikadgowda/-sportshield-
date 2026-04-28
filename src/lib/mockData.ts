export const MOCK_INCIDENTS = [
  {
    id: "INC-9942",
    thumbnail: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=300&h=200&fit=crop",
    platform: "YouTube",
    url: "youtube.com/watch?v=hx8...",
    matchConfidence: 98,
    timeDetected: "2 mins ago",
    riskLevel: "High",
    status: "Pending Action",
    originalAsset: "FC_Final_Highlights_1080p.mp4",
  },
  {
    id: "INC-9941",
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32fc3e6ed?q=80&w=300&h=200&fit=crop",
    platform: "X",
    url: "x.com/sports_leaks/17...",
    matchConfidence: 92,
    timeDetected: "15 mins ago",
    riskLevel: "High",
    status: "Pending Action",
    originalAsset: "Interview_Manager_PostMatch.mp4",
  },
  {
    id: "INC-9940",
    thumbnail: "https://images.unsplash.com/photo-1518605368461-1ee7e543666f?q=80&w=300&h=200&fit=crop",
    platform: "Instagram",
    url: "instagram.com/reels/Cxw...",
    matchConfidence: 76,
    timeDetected: "1 hour ago",
    riskLevel: "Medium",
    status: "Investigating",
    originalAsset: "Team_Training_B-Roll.mxf",
  },
  {
    id: "INC-9939",
    thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=300&h=200&fit=crop",
    platform: "Unknown Website",
    url: "sportstreamz.live/hd-1",
    matchConfidence: 99,
    timeDetected: "2 hours ago",
    riskLevel: "High",
    status: "Takedown Sent",
    originalAsset: "Live_Feed_Cam_A.ts",
  },
  {
    id: "INC-9938",
    thumbnail: "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?q=80&w=300&h=200&fit=crop",
    platform: "TikTok",
    url: "tiktok.com/@football_hub/v...",
    matchConfidence: 45,
    timeDetected: "4 hours ago",
    riskLevel: "Low",
    status: "False Positive",
    originalAsset: "Official_Logo_Package.zip",
  }
];

export const MOCK_ASSETS = [
  {
    id: "ASSET-101",
    thumbnail: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=150&h=150&fit=crop",
    fileName: "FC_Final_Highlights_1080p.mp4",
    type: "Video",
    uploadDate: "2026-04-28 09:12 AM",
    owner: "Premier League Org",
    status: "Protected",
    hash: "0x8f72a9...d4b4a2"
  },
  {
    id: "ASSET-102",
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32fc3e6ed?q=80&w=150&h=150&fit=crop",
    fileName: "Interview_Manager_PostMatch.mp4",
    type: "Video",
    uploadDate: "2026-04-28 08:45 AM",
    owner: "Premier League Org",
    status: "Protected",
    hash: "0x11a2b9...e8f9c1"
  },
  {
    id: "ASSET-103",
    thumbnail: "https://images.unsplash.com/photo-1518605368461-1ee7e543666f?q=80&w=150&h=150&fit=crop",
    fileName: "Team_Training_B-Roll.mxf",
    type: "Video",
    uploadDate: "2026-04-27 15:30 PM",
    owner: "FC Arsenal Media",
    status: "Protected",
    hash: "0x44c5d6...a1b2c3"
  }
];

// Dashboard chart data
export const PLATFORM_DATA = [
  { name: 'YouTube', value: 450, fill: '#FF0000' },
  { name: 'X (Twitter)', value: 320, fill: '#000000' },
  { name: 'Instagram', value: 210, fill: '#E1306C' },
  { name: 'TikTok', value: 180, fill: '#00F0FF' },
  { name: 'Web/Other', value: 340, fill: '#808080' },
];

export const TIMELINE_DATA = [
  { time: '00:00', detections: 12 },
  { time: '04:00', detections: 18 },
  { time: '08:00', detections: 55 },
  { time: '12:00', detections: 85 },
  { time: '16:00', detections: 110 },
  { time: '20:00', detections: 95 },
  { time: '23:59', detections: 45 },
];
