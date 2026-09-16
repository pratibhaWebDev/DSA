# 🚀 Master Two-Pointer DSA Practice Sheet (JavaScript)

A structured, battle-tested Two Pointer practice list for JavaScript DSA technical interview preparation, organized by patterns and arranged from **Easy → Medium → Hard**.

---

## 💡 The 4 Two-Pointer Core Patterns

### 1. Opposite Direction Pointers (Left + Right)
```text
Array: [ 1,  2,  3,  4,  5,  6 ]
         ↑                 ↑
       left              right
```
* **Mechanism**: Start one pointer at index `0` and another at index `n - 1`. Move towards each other based on comparison conditions.
* **Common Use Cases**: Two Sum II, Valid Palindrome, Container With Most Water, 3Sum, 4Sum.

### 2. Same Direction Pointers (Slow + Fast)
```text
Array: [ 1,  2,  3,  4,  5,  6 ]
         ↑     ↑
       slow   fast
```
* **Mechanism**: Both pointers start from the beginning. `fast` scans array elements while `slow` keeps track of valid boundary or write position.
* **Common Use Cases**: Remove Duplicates, Remove Element, Move Zeroes, Linked List Cycle (Floyd's Cycle Detection).

### 3. Two Arrays / Two Sequences
```text
Array A: [ 1,  3,  5,  7 ]
            ↑ (i)

Array B: [ 2,  4,  6,  8 ]
            ↑ (j)
```
* **Mechanism**: Use pointer `i` for sequence `A` and pointer `j` for sequence `B`. Advance the pointer corresponding to the smaller element or match criteria.
* **Common Use Cases**: Merge Sorted Array, Is Subsequence, Intersection of Two Arrays.

### 4. Multi-Pointer / Partitioning
```text
Array: [ 0,  1,  2,  0,  1,  2 ]
         ↑       ↑       ↑
        low    mid     high
```
* **Mechanism**: Use 3 pointers (`low`, `mid`, `high`) to partition elements into 3 distinct sections in a single pass.
* **Common Use Cases**: Sort Colors (Dutch National Flag problem), 3Sum/4Sum inner loops.

---

## 📅 7-Day Action Plan Checklist

- [ ] **Day 1**: Valid Palindrome, Two Sum II, Remove Duplicates from Sorted Array
- [ ] **Day 2**: Remove Element, Move Zeroes, Squares of a Sorted Array
- [ ] **Day 3**: Container With Most Water, Is Subsequence
- [ ] **Day 4**: 3Sum, 3Sum Closest
- [ ] **Day 5**: Sort Colors, Merge Sorted Array
- [ ] **Day 6**: Boats to Save People, Backspace String Compare
- [ ] **Day 7**: Trapping Rain Water, Revise & practice fast/slow pointer linked list problems

---

## 🟢 Level 1: Build the Two Pointer Pattern

| #  | Status | Problem                             | Difficulty | Day   | Pattern      | LeetCode Link                                                                    |
|----|--------|-------------------------------------|------------|-------|--------------|----------------------------------------------------------------------------------|
| 1  | [ ]    | Valid Palindrome                    | Easy       | Day 1 | Left + Right | [LC 125](https://leetcode.com/problems/valid-palindrome/)                        |
| 2  | [ ]    | Two Sum II - Input Array Is Sorted  | Medium     | Day 1 | Left + Right | [LC 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)        |
| 3  | [ ]    | Remove Duplicates from Sorted Array | Easy       | Day 1 | Slow + Fast  | [LC 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)     |
| 4  | [ ]    | Remove Element                      | Easy       | Day 2 | Slow + Fast  | [LC 27](https://leetcode.com/problems/remove-element/)                           |
| 5  | [ ]    | Move Zeroes                         | Easy       | Day 2 | Slow + Fast  | [LC 283](https://leetcode.com/problems/move-zeroes/)                             |
| 6  | [ ]    | Squares of a Sorted Array           | Easy       | Day 2 | Left + Right | [LC 977](https://leetcode.com/problems/squares-of-a-sorted-array/)              |

### Level 1 Problem Solutions & Explanations

#### 1. Valid Palindrome (LC 125)
* **Strategy**: Clean string of non-alphanumeric chars. Place `left` at start, `right` at end. Compare lowercase characters moving inwards.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function isPalindrome(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}
```

#### 2. Two Sum II - Input Array Is Sorted (LC 167)
* **Strategy**: Array is sorted. If `numbers[left] + numbers[right] > target`, move `right--`. If sum is smaller, move `left++`.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}
```

#### 3. Remove Duplicates from Sorted Array (LC 26)
* **Strategy**: Use `slow` pointer to track place for unique values. `fast` iterates array. Write when `nums[fast] !== nums[slow]`.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}
```

#### 4. Remove Element (LC 27)
* **Strategy**: `k` pointer keeps count of valid non-val elements. Move non-val items to index `k`.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
```

#### 5. Move Zeroes (LC 283)
* **Strategy**: `slow` tracks location for next non-zero. Swap `nums[slow]` and `nums[fast]` whenever non-zero found.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function moveZeroes(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
}
```

#### 6. Squares of a Sorted Array (LC 977)
* **Strategy**: Negatives squared could be larger than positive squares. Compare `nums[left]^2` and `nums[right]^2`, place larger value at index `pos` filling backwards.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(N)**
```javascript
function sortedSquares(nums) {
  const n = nums.length;
  const result = new Array(n);
  let left = 0, right = n - 1, pos = n - 1;
  while (left <= right) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;
    if (leftSquare > rightSquare) {
      result[pos] = leftSquare;
      left++;
    } else {
      result[pos] = rightSquare;
      right--;
    }
    pos--;
  }
  return result;
}
```

---

## 🟡 Level 2: Interview Practice

| #  | Status | Problem                           | Difficulty | Day   | Pattern       | LeetCode Link                                                                    |
|----|--------|-----------------------------------|------------|-------|---------------|----------------------------------------------------------------------------------|
| 7  | [ ]    | Container With Most Water         | Medium     | Day 3 | Left + Right  | [LC 11](https://leetcode.com/problems/container-with-most-water/)               |
| 8  | [ ]    | 3Sum                              | Medium     | Day 4 | Multi-Pointer | [LC 15](https://leetcode.com/problems/3sum/)                                     |
| 9  | [ ]    | 3Sum Closest                      | Medium     | Day 4 | Multi-Pointer | [LC 16](https://leetcode.com/problems/3sum-closest/)                             |
| 10 | [ ]    | Sort Colors                       | Medium     | Day 5 | Multi-Pointer | [LC 75](https://leetcode.com/problems/sort-colors/)                             |
| 11 | [ ]    | Merge Sorted Array                | Easy       | Day 5 | Two Arrays    | [LC 88](https://leetcode.com/problems/merge-sorted-array/)                      |
| 12 | [ ]    | Is Subsequence                    | Easy       | Day 3 | Two Arrays    | [LC 392](https://leetcode.com/problems/is-subsequence/)                         |

### Level 2 Problem Solutions & Explanations

#### 7. Container With Most Water (LC 11)
* **Strategy**: `area = min(height[left], height[right]) * (right - left)`. To maximize area, always shrink the shorter height pointer.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function maxArea(height) {
  let left = 0, right = height.length - 1, maxWater = 0;
  while (left < right) {
    const h = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, h * (right - left));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxWater;
}
```

#### 8. 3Sum (LC 15)
* **Strategy**: Sort array. Fix `nums[i]`, use `left = i + 1` and `right = n - 1` to find pairs summing to `-nums[i]`. Skip duplicate numbers.
* **Time Complexity**: **O(N²)** | **Space Complexity**: **O(1)** extra space
```javascript
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}
```

#### 9. 3Sum Closest (LC 16)
* **Strategy**: Sort array. Fix first element `i`, search with `left` and `right`. Maintain `closestSum` updated on minimum absolute difference with `target`.
* **Time Complexity**: **O(N²)** | **Space Complexity**: **O(1)**
```javascript
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
        closestSum = currentSum;
      }
      if (currentSum < target) left++;
      else if (currentSum > target) right--;
      else return currentSum;
    }
  }
  return closestSum;
}
```

#### 10. Sort Colors (LC 75 - Dutch National Flag)
* **Strategy**: `low` tracks end of 0s, `high` tracks start of 2s, `mid` scans array. Swap `nums[mid]` with `low` if 0, or `high` if 2.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function sortColors(nums) {
  let low = 0, mid = 0, high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}
```

#### 11. Merge Sorted Array (LC 88)
* **Strategy**: Fill `nums1` from **back to front** starting at `p = m + n - 1`. Compare `nums1[p1]` and `nums2[p2]`.
* **Time Complexity**: **O(M + N)** | **Space Complexity**: **O(1)**
```javascript
function merge(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1, p = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
}
```

#### 12. Is Subsequence (LC 392)
* **Strategy**: `i` tracks string `s`, `j` tracks string `t`. Whenever `s[i] === t[j]`, increment `i`. If `i === s.length`, `s` is subsequence.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function isSubsequence(s, t) {
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }
  return i === s.length;
}
```

---

## 🔴 Level 3: Strong Interview Questions

| #  | Status | Problem                                | Difficulty | Day   | Pattern       | LeetCode Link                                                                    |
|----|--------|----------------------------------------|------------|-------|---------------|----------------------------------------------------------------------------------|
| 13 | [ ]    | Trapping Rain Water                    | Hard       | Day 7 | Left + Right  | [LC 42](https://leetcode.com/problems/trapping-rain-water/)                      |
| 14 | [ ]    | 4Sum                                   | Medium     | Day 4 | Multi-Pointer | [LC 18](https://leetcode.com/problems/4sum/)                                     |
| 15 | [ ]    | Boats to Save People                   | Medium     | Day 6 | Left + Right  | [LC 881](https://leetcode.com/problems/boats-to-save-people/)                   |
| 16 | [ ]    | Backspace String Compare               | Easy       | Day 6 | Two Arrays    | [LC 844](https://leetcode.com/problems/backspace-string-compare/)                |
| 17 | [ ]    | Remove Duplicates from Sorted Array II | Medium     | Day 1 | Slow + Fast   | [LC 80](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)  |
| 18 | [ ]    | Palindrome Linked List                 | Easy       | Day 1 | Fast & Slow   | [LC 234](https://leetcode.com/problems/palindrome-linked-list/)                 |

### Level 3 Problem Solutions & Explanations

#### 13. Trapping Rain Water (LC 42)
* **Strategy**: Track `leftMax` and `rightMax`. Water trapped at `left` is `leftMax - height[left]`. Move pointer with smaller max barrier.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0, totalWater = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) leftMax = height[left];
      else totalWater += leftMax - height[left];
      left++;
    } else {
      if (height[right] >= rightMax) rightMax = height[right];
      else totalWater += rightMax - height[right];
      right--;
    }
  }
  return totalWater;
}
```

#### 14. 4Sum (LC 18)
* **Strategy**: Fix two loops `i` and `j`, then use two pointers `left` and `right` for remaining two numbers. Skip duplicate values at every level.
* **Time Complexity**: **O(N³)** | **Space Complexity**: **O(1)** extra space
```javascript
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1, right = n - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }
  return res;
}
```

#### 15. Boats to Save People (LC 881)
* **Strategy**: Sort people weights. Try pairing heaviest person (`right`) with lightest person (`left`). If `people[left] + people[right] <= limit`, pair them up (`left++`). Always carry heaviest person (`right--`).
* **Time Complexity**: **O(N log N)** | **Space Complexity**: **O(1)**
```javascript
function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0, right = people.length - 1, boats = 0;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    boats++;
  }
  return boats;
}
```

#### 16. Backspace String Compare (LC 844)
* **Strategy**: Iterate strings from end (`i = s.length - 1`, `j = t.length - 1`) backwards, tracking `#` count to skip deleted characters.
* **Time Complexity**: **O(N + M)** | **Space Complexity**: **O(1)**
```javascript
function backspaceCompare(s, t) {
  let i = s.length - 1, j = t.length - 1;
  let skipS = 0, skipT = 0;
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') { skipS++; i--; }
      else if (skipS > 0) { skipS--; i--; }
      else break;
    }
    while (j >= 0) {
      if (t[j] === '#') { skipT++; j--; }
      else if (skipT > 0) { skipT--; j--; }
      else break;
    }
    if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
    if ((i >= 0) !== (j >= 0)) return false;
    i--; j--;
  }
  return true;
}
```

#### 17. Remove Duplicates from Sorted Array II (LC 80)
* **Strategy**: Allow at most 2 occurrences of each element. Check `nums[fast] !== nums[slow - 2]`. Write to `nums[slow]` if true.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function removeDuplicates(nums) {
  if (nums.length <= 2) return nums.length;
  let slow = 2;
  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}
```

#### 18. Palindrome Linked List (LC 234)
* **Strategy**: Find middle using fast & slow pointers. Reverse second half of linked list. Compare first half and reversed second half.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function isPalindrome(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null, curr = slow;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  let left = head, right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
}
```

---

## ⭐ Level 4: Fast & Slow Pointers (Linked List & Special Patterns)

| #  | Status | Problem                          | Difficulty | Day   | Pattern     | LeetCode Link                                                                    |
|----|--------|----------------------------------|------------|-------|-------------|----------------------------------------------------------------------------------|
| 19 | [ ]    | Linked List Cycle                | Easy       | Day 7 | Fast & Slow | [LC 141](https://leetcode.com/problems/linked-list-cycle/)                       |
| 20 | [ ]    | Linked List Cycle II             | Medium     | Day 7 | Fast & Slow | [LC 142](https://leetcode.com/problems/linked-list-cycle-ii/)                    |
| 21 | [ ]    | Find the Duplicate Number        | Medium     | Day 7 | Fast & Slow | [LC 287](https://leetcode.com/problems/find-the-duplicate-number/)              |
| 22 | [ ]    | Remove Nth Node From End of List | Medium     | Day 7 | Fast & Slow | [LC 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)       |

### Level 4 Problem Solutions & Explanations

#### 19. Linked List Cycle (LC 141 - Floyd's Cycle Finding)
* **Strategy**: `slow` moves 1 step, `fast` moves 2 steps. If there is a cycle, `fast` will meet `slow`.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
```

#### 20. Linked List Cycle II (LC 142)
* **Strategy**: Detect cycle with fast/slow pointers. Once met, reset `slow = head`. Move both `slow` and `fast` by 1 step; meeting node is cycle entry.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function detectCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}
```

#### 21. Find the Duplicate Number (LC 287 - Array as Linked List)
* **Strategy**: Treat array values as pointers (`nums[i]`). Use Floyd's cycle detection to find entry point of the cycle without modifying array.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function findDuplicate(nums) {
  let slow = nums[0], fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
```

#### 22. Remove Nth Node From End of List (LC 19)
* **Strategy**: Advance `fast` pointer `n + 1` steps ahead. Then move `fast` and `slow` together until `fast` reaches `null`. `slow.next = slow.next.next`.
* **Time Complexity**: **O(N)** | **Space Complexity**: **O(1)**
```javascript
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let slow = dummy, fast = dummy;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}
```

---

## 🎯 Master Rules for Interviews

1. **When to use Two Pointers**:
   - The array/string is **sorted** (or can be sorted).
   - Looking for pairs, triplets, or sub-ranges meeting a target condition.
   - Searching for cycles or linked list middle nodes.
   - Need in-place modification (**O(1)** extra space constraint).

2. **Pointer Advancement Logic**:
   - Always ask: *"Which pointer should move and why?"*
   - Avoid infinite loops by ensuring at least one pointer moves in every iteration step.
