
import React, { useState, useRef, useEffect } from 'react';
import { generateImage, editImage, generateVideoFromImage, chatWithAi } from '../services/geminiService';
import { ImageSize, AspectRatio, AiTask } from '../types';

const AiStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'edit' | 'animate' | 'chat'>('generate');
  const [prompt, setPrompt] = useState('');
  const [imageSize, setImageSize] = useState<ImageSize>(ImageSize.OneK);
  const [ratio, setRatio] = useState<AspectRatio>(AspectRatio.SixteenNine);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<AiTask[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mandatory API Key Selection State for Veo and Gemini 3 Pro
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  // Check for selected API key on mount
  useEffect(() => {
    const checkKey = async () => {
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    };
    checkKey();
  }, []);

  // Handle triggering the API key selection dialog
  const handleSelectKey = async () => {
    await window.aistudio.openSelectKey();
    // Assume success to prevent race conditions as per SDK guidelines
    setHasKey(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setSelectedImage(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const runTask = async () => {
    if (!prompt && activeTab !== 'animate') return;
    
    setLoading(true);
    const newTask: AiTask = {
      id: Math.random().toString(36).substr(2, 9),
      type: activeTab,
      status: 'processing',
      prompt: prompt,
      timestamp: Date.now(),
      originalUrl: selectedImage || undefined
    };
    
    setTasks(prev => [newTask, ...prev]);

    try {
      let resultUrl = '';
      if (activeTab === 'generate') {
        resultUrl = await generateImage(prompt, imageSize, ratio);
      } else if (activeTab === 'edit' && selectedImage) {
        resultUrl = await editImage(prompt, selectedImage);
      } else if (activeTab === 'animate' && selectedImage) {
        resultUrl = await generateVideoFromImage(prompt, selectedImage, 'image/png', ratio === AspectRatio.NineSixteen ? '9:16' : '16:9');
      } else if (activeTab === 'chat') {
        const text = await chatWithAi(prompt);
        resultUrl = text; // For chat, we store text in resultUrl as a simple way
      }

      setTasks(prev => prev.map(t => t.id === newTask.id ? { ...t, status: 'done', resultUrl } : t));
    } catch (err: any) {
      // Reset key state if key not found error occurs
      if (err.message?.includes("Requested entity was not found")) {
        setHasKey(false);
      }
      setTasks(prev => prev.map(t => t.id === newTask.id ? { ...t, status: 'error', error: err.message } : t));
    } finally {
      setLoading(false);
      setPrompt('');
    }
  };

  // Enforce API Key Selection before showing the Studio
  if (hasKey === false) {
    return (
      <div className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <div className="mb-8">
          <span className="material-symbols-outlined text-6xl text-primary mb-4">key</span>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">Advanced AI Access Required</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed mb-6">
            To use the video generation and high-quality image tools, you must select a paid API key from your Google Cloud project.
          </p>
          <a 
            href="https://ai.google.dev/gemini-api/docs/billing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary font-bold hover:underline text-sm"
          >
            Check Billing Documentation
          </a>
        </div>
        <button 
          onClick={handleSelectKey}
          className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all"
        >
          Select Paid API Key
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-2">Eagle AI Studio</h1>
        <p className="text-slate-600 dark:text-slate-400">Powering retail visual assets with Gemini & Veo.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-6">
              {(['generate', 'edit', 'animate', 'chat'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all capitalize ${activeTab === tab ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-500'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {activeTab !== 'generate' && activeTab !== 'chat' && (
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Reference Image</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full aspect-video border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors overflow-hidden relative"
                  >
                    {selectedImage ? (
                      <img src={selectedImage} alt="Selected" className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-3xl text-slate-300">image</span>
                        <span className="text-xs text-slate-400 mt-2">Click to upload</span>
                      </>
                    )}
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {activeTab === 'chat' ? 'Ask Gemini' : 'Prompt'}
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={activeTab === 'chat' ? 'Analyze our retail trends...' : 'Describe what to create...'}
                  className="w-full h-32 p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none dark:text-white"
                />
              </div>

              {activeTab === 'generate' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Resolution</label>
                    <select 
                      value={imageSize}
                      onChange={(e) => setImageSize(e.target.value as ImageSize)}
                      className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                    >
                      <option value={ImageSize.OneK}>1K Standard</option>
                      <option value={ImageSize.TwoK}>2K High Def</option>
                      <option value={ImageSize.FourK}>4K Ultra</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Aspect Ratio</label>
                    <select 
                      value={ratio}
                      onChange={(e) => setRatio(e.target.value as AspectRatio)}
                      className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                    >
                      <option value={AspectRatio.SixteenNine}>16:9 Landscape</option>
                      <option value={AspectRatio.NineSixteen}>9:16 Portrait</option>
                      <option value={AspectRatio.OneOne}>1:1 Square</option>
                    </select>
                  </div>
                </div>
              )}

              <button
                disabled={loading || (!prompt && activeTab !== 'animate')}
                onClick={runTask}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${loading ? 'bg-slate-200 text-slate-400' : 'bg-primary text-white hover:bg-primary-dark shadow-primary/20'}`}
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">auto_awesome</span>
                    {activeTab === 'animate' ? 'Generate Video' : 'Generate Assets'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Recent Output</h3>
            <button 
              onClick={() => setTasks([])}
              className="text-xs font-bold text-slate-400 hover:text-primary transition-colors"
            >
              Clear History
            </button>
          </div>

          <div className="grid gap-6">
            {tasks.length === 0 ? (
              <div className="bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl h-96 flex flex-col items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-4xl mb-4">history</span>
                <p>Your AI creations will appear here.</p>
              </div>
            ) : (
              tasks.map(task => (
                <div key={task.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        {task.type}
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 truncate max-w-xs">{task.prompt}</span>
                    </div>
                    {task.status === 'processing' && <span className="text-[10px] font-bold text-primary animate-pulse">PROCESSING</span>}
                  </div>
                  
                  <div className="p-6">
                    {task.status === 'error' ? (
                      <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">{task.error}</div>
                    ) : task.status === 'processing' ? (
                      <div className="flex flex-col items-center justify-center h-64 bg-slate-50 dark:bg-slate-800 rounded-xl animate-pulse">
                        <span className="material-symbols-outlined text-4xl text-slate-200 mb-4">magic_button</span>
                        <p className="text-sm text-slate-400">Gemini is thinking...</p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        {task.type === 'chat' ? (
                          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                            {task.resultUrl}
                          </div>
                        ) : task.type === 'animate' ? (
                          <video src={task.resultUrl} controls className="w-full rounded-xl shadow-lg bg-black" />
                        ) : (
                          <img src={task.resultUrl} alt="Result" className="w-full rounded-xl shadow-lg" />
                        )}
                        
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = task.resultUrl!;
                              link.download = `eagle-ai-${task.id}.png`;
                              link.click();
                            }}
                            className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 transition-colors"
                          >
                            <span className="material-symbols-outlined">download</span>
                          </button>
                          <button className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 transition-colors">
                            <span className="material-symbols-outlined">share</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiStudio;
