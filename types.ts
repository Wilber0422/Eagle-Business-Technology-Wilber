
export enum Page {
  Home = 'home',
  Pos = 'pos',
  Wrappers = 'wrappers',
  Esl = 'esl',
  Voice = 'voice',
  Signage = 'signage',
  Wifi = 'wifi',
  Slicers = 'slicers',
  AiStudio = 'ai-studio',
  Terms = 'terms',
  About = 'about',
  Contact = 'contact',
  Aw5600 = 'aw5600',
  Aw5600Fx = 'aw5600fx',
  AwAiPop = 'aw-ai-pop',
  HandWrapper = 'hand-wrapper'
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