/**
 * Fractal Terrain Page
 * Interactive viewer for PS-SHA∞ fractal terrain generation
 */

import FractalTerrainViewer from '@/components/FractalTerrainViewer';

export const metadata = {
  title: 'Fractal Terrain - Lucidia Earth',
  description: 'Interactive fractal terrain generation with PS-SHA∞ deterministic seeds and 64×64 recursive subdivision',
};

export default function FractalTerrainPage() {
  return <FractalTerrainViewer />;
}
