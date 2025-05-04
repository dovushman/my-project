import React, { ReactNode } from "react";

type IDEAboutCardProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

const IDEAboutCard: React.FC<IDEAboutCardProps> = ({ title, icon, children }) => {
  // Convert content to string to display with syntax highlighting
  const contentStr = React.Children.toArray(children)
    .map((child) => {
      if (React.isValidElement(child) && child.type === "p") {
        if (React.isValidElement(child) && child.props && (child.props as { children?: ReactNode }).children) {
          return React.Children.toArray((child.props as { children?: ReactNode }).children).join("");
        }
        return "";
      } else if (React.isValidElement(child) && child.type === "ul") {
        return React.Children.toArray((child as React.ReactElement<{ children?: ReactNode }>).props.children)
          .map((li) => {
            if (React.isValidElement(li)) {
              return `• ${React.Children.toArray((li as React.ReactElement<{ children?: ReactNode }>).props.children).join("")}`;
            }
            return "";
          })
          .join("\n");
      }
      return String(child);
    })
    .join("");

  // Generate content with syntax highlighting
  const highlightedContent = syntaxHighlight(contentStr);
  
  // Generate line numbers
  const lineCount = contentStr.split("\n").length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="ide-card h-full rounded-lg shadow-lg overflow-hidden border border-[#2A2A3A] font-mono flex flex-col bg-[#1e1e1e]">
      {/* IDE Header/Tab */}
      <div className="flex items-center bg-[#252526] border-b border-[#2A2A3A] py-1 px-2">
        <div className="flex space-x-1 mr-3">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <div className="bg-[#1e1e1e] rounded px-2 py-1 text-[#9cdcfe] flex items-center text-sm">
          {icon}
          <span className="font-medium">{title}.jsx</span>
        </div>
      </div>
      
      {/* IDE Content - using flex-grow to take available space */}
      <div className="flex flex-grow overflow-auto">
        {/* Line Numbers */}
        <div className="line-numbers text-right pr-2 select-none border-r border-[#2A2A3A] text-[#858585] font-mono text-sm p-2 bg-[#1e1e1e]">
          {lineNumbers.map((num) => (
            <div key={num} className="leading-relaxed">
              {num}
            </div>
          ))}
        </div>
        
        {/* Code Content */}
        <div className="pl-2 text-[#d4d4d4] font-mono whitespace-pre-wrap leading-relaxed text-sm overflow-auto flex-grow p-2">
          <span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">{title}</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#569cd6]">()</span> <span className="text-[#d4d4d4]">=&gt;</span> <span className="text-[#c586c0]">{"{"}</span>
          <div className="pl-4">
            <span className="text-[#c586c0]">return</span> <span className="text-[#d4d4d4]">(</span>
            <div className="pl-4">
              <span className="text-[#9cdcfe]">&lt;div&gt;</span>
              <div className="pl-4" dangerouslySetInnerHTML={{ __html: highlightedContent }} />
              <span className="text-[#9cdcfe]">&lt;/div&gt;</span>
            </div>
            <span className="text-[#d4d4d4]">);</span>
          </div>
          <span className="text-[#c586c0]">{"}"}</span>;
          
          <div className="mt-1">
            <span className="text-[#569cd6]">export</span> <span className="text-[#569cd6]">default</span> <span className="text-[#9cdcfe]">{title}</span>;
          </div>
        </div>
      </div>
      
      {/* Status Bar - like in VS Code */}
      <div className="bg-[#007acc] text-white text-xs py-1 px-2 flex justify-between">
        <div className="flex items-center">
          <span className="mr-3">JSX</span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center">
          <span>Ln 1, Col 1</span>
        </div>
      </div>
    </div>
  );
};

// Function to apply syntax highlighting
function syntaxHighlight(text: string): string {
  // Replace keywords with VS Code theme colors from your globals.css
  const highlighted = text
    // Replace HTML tags and attributes that might be in the content
    .replace(/<strong>/g, '<span class="text-[#9cdcfe]">')
    .replace(/<\/strong>/g, '</span>')
    
    // Handle bullet points for lists
    .replace(/• /g, '<span class="text-[#d4d4d4]">• </span>')
    
    // Style important terms
    .replace(/(Bachelor of Science|Computer Science|Financial Technology|GPA|Academic Honors|High Distinction|Worcester Polytechnic Institute)/g, 
      '<span class="text-[#9cdcfe]">$1</span>')
    
    // Style numbers - using the same color as in your VS Code theme
    .replace(/(\d+\.\d+|\d+)/g, '<span class="text-[#b5cea8]">$1</span>')
    
    // Style dates and years
    .replace(/(Graduated: \d+)/g, '<span class="text-[#dcdcaa]">$1</span>')
    
    // Style technologies and special terms
    .replace(/(TypeScript|Next\.js|TailwindCSS|Full Stack Engineer)/g, 
      '<span class="text-[#4ec9b0]">$1</span>');

  return highlighted;
}

export default IDEAboutCard;