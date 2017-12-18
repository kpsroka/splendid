/*
 * Copyright 2017 K. P. Sroka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ContainsResources, ReduceResources } from './ResourceHelper';

describe('ResourceHelper', () => {
  describe('ReduceResources', () => {
    it('returns empty object for non-array args', () => {
      expect(ReduceResources({ foo: 'bar' })).toEqual({});
      expect(ReduceResources(undefined)).toEqual({});
      expect(ReduceResources(null)).toEqual({});
      expect(ReduceResources(3213)).toEqual({});
      expect(ReduceResources('abc')).toEqual({});
    });

    it('returns empty object for empty array', () => {
      expect(ReduceResources([])).toEqual({});
    });

    it('returns aggregated resources', () => {
      expect(ReduceResources([1, 2, 3, 4, 3, 2, 1, 1, 1, 0])).toEqual({
        0: 1,
        1: 4,
        2: 2,
        3: 2,
        4: 1
      });
    });
  });

  describe('ContainsResources', () => {
    it('returns true on content in container', () => {
      expect(ContainsResources([], [])).toBe(true);
      expect(ContainsResources([1, 2, 3], [])).toBe(true);
      expect(ContainsResources([1, 2, 3], [1, 3])).toBe(true);
      expect(ContainsResources([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(ContainsResources([1, 2, 3], [3, 2, 1])).toBe(true);
      expect(ContainsResources([2, 2, 2], [2, 2, 2])).toBe(true);
    });

    it('returns false on content not in container', () => {
      expect(ContainsResources([], [1])).toBe(false);
      expect(ContainsResources([0], [1])).toBe(false);
      expect(ContainsResources([1, 2, 3], [1, 3, 4])).toBe(false);
      expect(ContainsResources([1, 2, 3], [4, 3, 2, 1])).toBe(false);
      expect(ContainsResources([1, 2, 3], [1, 1, 1, 2, 2, 3])).toBe(false);
    });
  });
});
