
export enum Page {
  Home = 'home',
  Pos = 'pos',
  Wrappers = 'wrappers',
  PosSIM = 'possim',
  Store = 'store',
  Business = 'business',
  Food = 'Food',
  // AiStudio = 'ai-studio',
  Terms = 'erms',
  About = 'about',
  Contact = 'contact',
  AW5600 = 'aw5600',
  HandWrapper = 'handwrapper',
  AWAiPop = 'awaipop',
  Linea470 = 'linea470',
  Scales = 'scales',
  Sg2 = 'Sg2',
  Ishidawm = 'Ishidawm',
  Kitchen = "Kitchen"
}

export enum ImageSize {
  OneK = '1K',
  TwoK = '2K',
  FourK = '4K'
}

export enum AspectRatio {
  OneOne = '1:1',
  ThreeFour = '3:4',
  FourThree = '4:3',
  NineSixteen = '9:16',
  SixteenNine = '16:9'
}

export interface AiTask {
  id: string;
  type: 'generate' | 'edit' | 'animate' | 'chat';
  status: 'idle' | 'processing' | 'done' | 'error';
  prompt: string;
  resultUrl?: string;
  originalUrl?: string;
  error?: string;
  timestamp: number;
}