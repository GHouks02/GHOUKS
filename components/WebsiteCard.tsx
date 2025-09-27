
import React from 'react';
import { Website } from '../types';
import { CheckCircleIcon, LinkIcon } from './Icons';

interface WebsiteCardProps {
  website: Website;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website }) => {
  return (
    <a
      href={website.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transform transition-all duration-300 group"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start mb-4">
          <img src={website.icon} alt={`${website.name} logo`} className="w-16 h-16 rounded-lg mr-4 border-2 border-gray-700" />
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">{website.name}</h3>
            <div className="flex items-center text-sm text-gray-400 mt-1">
              <LinkIcon className="w-4 h-4 mr-1"/>
              <span>{website.link.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0]}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-5 flex-grow">{website.description}</p>
        
        <div className="mb-5">
            <h4 className="font-semibold text-gray-200 mb-2 text-sm">Key Features:</h4>
            <ul className="space-y-1">
                {website.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400 text-sm">
                        <CheckCircleIcon className="w-4 h-4 mr-2 text-teal-400 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex flex-wrap gap-2">
            {website.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-semibold text-cyan-200 bg-cyan-900/50 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default WebsiteCard;
