import { describe, expect, test } from 'vitest';
import { developers } from '../utils/data/developerData/developers';
import { reviews } from '../utils/data/developerData/reviews';

describe('Rating calculation — unit test', () => {
  test('Developer 1 average rating is 4.4', () => {
    const dev = developers[0];

    const devReviews = reviews.filter(r => r.devId === dev.devId);

    const avgRating =
      devReviews.reduce((sum, r) => sum + r.rating, 0) / devReviews.length;

    expect(avgRating.toFixed(1)).toBe('4.4');
  });
});
