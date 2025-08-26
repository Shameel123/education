'use client';
import React, { useState } from 'react';
import {
  FolderWrapper,
  Folder,
  FolderBack,
  Paper,
  FolderFront
} from './styles'; // Import the styled components

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map((c) => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    '#' +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const FolderComponent: React.FC<FolderProps> = ({
  color = '#5227FF',
  size = 1,
  items = [],
  className = ''
}) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <FolderWrapper
      style={{
        '--folder-color': color,
        '--folder-back-color': folderBackColor,
        '--paper-1': paper1,
        '--paper-2': paper2,
        '--paper-3': paper3
      } as React.CSSProperties}
    >
      <div style={{ transform: `scale(${size})` }} className={className}>
        <Folder className={open ? 'open' : ''} onClick={handleClick}>
          <FolderBack>
            {papers.map((item, i) => (
              <Paper key={i}>{item}</Paper>
            ))}
            <FolderFront />
            <FolderFront className="right" />
          </FolderBack>
        </Folder>
      </div>
    </FolderWrapper>
  );
};

export default FolderComponent;
