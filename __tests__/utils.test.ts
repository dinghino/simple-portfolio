import { cn } from '@/lib/utils';

describe('cn utility function', () => {
  it('should combine class names correctly', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('should handle conditional classes correctly', () => {
    const result = cn('base-class', {
      'conditional-class': true,
      'false-class': false,
    });
    expect(result).toBe('base-class conditional-class');
  });

  it('should handle array of classes correctly', () => {
    const result = cn('base-class', ['array-class1', 'array-class2']);
    expect(result).toBe('base-class array-class1 array-class2');
  });

  it('should merge tailwind classes correctly', () => {
    const result = cn('px-4 py-2', 'py-4');
    expect(result).toBe('px-4 py-4');
  });
});