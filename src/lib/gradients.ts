// Shared gradient map for portfolio projects
// Used across portfolio pages and components

export const gradientMap: Record<string, string> = {
  'from-blue-900 to-purple-500': 'linear-gradient(135deg, #1E3A8A, #8B5CF6)',
  'from-orange-900 to-red-500': 'linear-gradient(135deg, #92400E, #EF4444)',
  'from-purple-900 to-pink-500': 'linear-gradient(135deg, #581C87, #EC4899)',
  'from-green-900 to-emerald-500': 'linear-gradient(135deg, #065F46, #10B981)',
  'from-amber-900 to-yellow-500': 'linear-gradient(135deg, #92400E, #F59E0B)',
  'from-blue-900 to-blue-500': 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
  'from-blue-900 to-cyan-500': 'linear-gradient(135deg, #1E3A8A, #06B6D4)',
};

// Default gradient fallback
export const defaultGradient = 'linear-gradient(135deg, #1E3A8A, #8B5CF6)';

// Helper to get gradient with fallback
export function getGradient(key: string): string {
  return gradientMap[key] || defaultGradient;
}
