import React, { useState } from 'react';
import { useWebsite } from '../context/WebsiteContext';

export const AdminDashboardHome: React.FC = () => {
    const { services } = useWebsite();
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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