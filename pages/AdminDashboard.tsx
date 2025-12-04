import React, { useState } from 'react';
import { useWebsite } from '../context/WebsiteContext';
import { generateBlogPost } from '../services/geminiService';
import { BlogPost } from '../types';
import { Plus, Trash2, Wand2, RefreshCw } from 'lucide-react';

export const AdminDashboardHome: React.FC = () => {
    const { blogPosts, services } = useWebsite();
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h3 className="text-slate-400 text-sm font-medium uppercase">Total Posts</h3>
                    <p className="text-4xl font-bold text-white mt-2">{blogPosts.length}</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h3 className="text-slate-400 text-sm font-medium uppercase">Active Services</h3>
                    <p className="text-4xl font-bold text-white mt-2">{services.length}</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h3 className="text-slate-400 text-sm font-medium uppercase">System Status</h3>
                    <p className="text-4xl font-bold text-emerald-400 mt-2">Active</p>
                </div>
            </div>
        </div>
    );
};

export const AdminBlogManager: React.FC = () => {
    const { blogPosts, addBlogPost, deleteBlogPost } = useWebsite();
    const [isGenerating, setIsGenerating] = useState(false);
    const [topic, setTopic] = useState('');
    const [tone, setTone] = useState('Professional');

    const handleAiGenerate = async () => {
        if (!topic) return alert("Please enter a topic");
        setIsGenerating(true);
        const result = await generateBlogPost(topic, tone);
        if (result) {
            const newPost: BlogPost = {
                id: Date.now().toString(),
                title: result.title,
                excerpt: result.excerpt,
                content: result.content,
                author: 'AI Assistant',
                date: new Date().toISOString().split('T')[0],
                category: 'AI Generated',
                imageUrl: `https://picsum.photos/seed/${Date.now()}/800/400`,
                tags: ['AI', 'Generated']
            };
            addBlogPost(newPost);
            setTopic('');
        } else {
            alert("Failed to generate content. Check API Key.");
        }
        setIsGenerating(false);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Blog Manager</h2>
            </div>

            {/* AI Generator */}
            <div className="bg-gradient-to-r from-indigo-900/40 to-cyan-900/40 border border-indigo-500/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                    <Wand2 className="text-cyan-400" size={20} /> AI Content Generator
                </h3>
                <div className="flex gap-4 items-end">
                    <div className="flex-1">
                        <label className="block text-xs text-slate-400 mb-1">Topic / Title Idea</label>
                        <input 
                           type="text" 
                           value={topic}
                           onChange={e => setTopic(e.target.value)}
                           className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2"
                           placeholder="e.g. Benefits of Social Media Marketing"
                        />
                    </div>
                    <div className="w-48">
                        <label className="block text-xs text-slate-400 mb-1">Tone</label>
                        <select 
                          value={tone} 
                          onChange={e => setTone(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2"
                        >
                            <option>Professional</option>
                            <option>Persuasive</option>
                            <option>Educational</option>
                            <option>Futuristic</option>
                        </select>
                    </div>
                    <button 
                        onClick={handleAiGenerate}
                        disabled={isGenerating}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-50"
                    >
                        {isGenerating ? <RefreshCw className="animate-spin" size={18} /> : <Plus size={18} />}
                        Generate Post
                    </button>
                </div>
            </div>

            {/* Post List */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-800 text-slate-400 text-xs uppercase">
                        <tr>
                            <th className="p-4">Title</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Category</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {blogPosts.map(post => (
                            <tr key={post.id} className="hover:bg-slate-800/50">
                                <td className="p-4 font-medium text-white">{post.title}</td>
                                <td className="p-4 text-slate-400">{post.date}</td>
                                <td className="p-4">
                                    <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-xs">
                                        {post.category}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <button 
                                      onClick={() => deleteBlogPost(post.id)}
                                      className="text-red-400 hover:text-red-300 p-2 hover:bg-red-900/20 rounded"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export const AdminSettings: React.FC = () => {
    const { settings, updateSettings } = useWebsite();
    const [localSettings, setLocalSettings] = useState(settings);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLocalSettings(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSave = () => {
        updateSettings(localSettings);
        alert('Settings Saved!');
    };

    return (
        <div className="space-y-8">
             <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Global Settings</h2>
                <button onClick={handleSave} className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-medium">
                    Save Changes
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Branding */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
                    <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Branding</h3>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Company Name</label>
                        <input name="brandName" value={localSettings.brandName} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Logo Text / Brand Title</label>
                        <input name="logoText" value={localSettings.logoText} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white" />
                    </div>
                </div>

                {/* Contact */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
                    <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Contact Info</h3>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Email</label>
                        <input name="contactEmail" value={localSettings.contactEmail} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Phone</label>
                        <input name="contactPhone" value={localSettings.contactPhone} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white" />
                    </div>
                     <div>
                        <label className="block text-sm text-slate-400 mb-1">WhatsApp</label>
                        <input name="whatsappNumber" value={localSettings.whatsappNumber} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white" />
                    </div>
                </div>

                 {/* SEO */}
                 <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4 md:col-span-2">
                    <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">SEO Configuration</h3>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Meta Title</label>
                        <input name="seoTitle" value={localSettings.seoTitle} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Meta Description</label>
                        <textarea name="seoDescription" value={localSettings.seoDescription} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white h-24" />
                    </div>
                </div>
            </div>
        </div>
    );
}