import React, { useState } from 'react';
import { useWebsite } from '../context/WebsiteContext';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const { blogPosts } = useWebsite();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => 
     post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
         <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Digital Insights</h1>
         <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Expert articles on AI, Marketing Automation, and Business Strategy.
         </p>
         
         <div className="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Search topics..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white px-5 py-3 rounded-full focus:outline-none focus:border-cyan-500 pl-12"
            />
            <Search className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
         </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all group flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
               <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.category}
               </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
               </div>
               
               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
               <p className="text-slate-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
               
               <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                  <div className="flex gap-2">
                     {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">#{tag}</span>
                     ))}
                  </div>
                  <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1">
                     Read <ArrowRight size={14} />
                  </button>
               </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
         <div className="text-center py-20 text-slate-500">
            No posts found matching your search.
         </div>
      )}
    </div>
  );
};

export default Blog;