export const PROBLEMS_DATA = [
  {
    id: 1,
    title: "Valid Palindrome",
    lcNumber: 125,
    difficulty: "Easy",
    day: 1,
    pattern: "Left + Right",
    link: "https://leetcode.com/problems/valid-palindrome/",
    summary: "Check if a string is a palindrome considering only alphanumeric characters and ignoring cases.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function isPalindrome(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}`,
    visualizerData: {
      initialArray: ['A', 'm', 'a', 'n', ',', ' ', 'n', 'a', 'm', 'A'],
      steps: [
        { left: 0, right: 9, comment: "Compare s[0]='A' and s[9]='A' -> Match!", status: "matching" },
        { left: 1, right: 8, comment: "Compare s[1]='m' and s[8]='m' -> Match!", status: "matching" },
        { left: 2, right: 7, comment: "Compare s[2]='a' and s[7]='a' -> Match!", status: "matching" },
        { left: 3, right: 6, comment: "Compare s[3]='n' and s[6]='n' -> Match!", status: "matching" },
        { left: 4, right: 5, comment: "Skip punctuation and spaces, left meets right -> Done!", status: "success" }
      ]
    }
  },
  {
    id: 2,
    title: "Two Sum II - Input Array Is Sorted",
    lcNumber: 167,
    difficulty: "Medium",
    day: 1,
    pattern: "Left + Right",
    link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    summary: "Find two 1-indexed numbers in a sorted array that add up to a specific target number.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}`,
    visualizerData: {
      initialArray: [2, 7, 11, 15],
      target: 9,
      steps: [
        { left: 0, right: 3, comment: "Target = 9. Sum = 2 + 15 = 17 (> 9) -> Move right leftwards", status: "checking" },
        { left: 0, right: 2, comment: "Target = 9. Sum = 2 + 11 = 13 (> 9) -> Move right leftwards", status: "checking" },
        { left: 0, right: 1, comment: "Target = 9. Sum = 2 + 7 = 9 (=== 9) -> Found pair at indices [1, 2]!", status: "success" }
      ]
    }
  },
  {
    id: 3,
    title: "Remove Duplicates from Sorted Array",
    lcNumber: 26,
    difficulty: "Easy",
    day: 1,
    pattern: "Slow + Fast",
    link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    summary: "Remove duplicates in-place from a sorted array such that each unique element appears once.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}`,
    visualizerData: {
      initialArray: [0, 0, 1, 1, 1, 2, 2, 3],
      steps: [
        { slow: 0, fast: 1, comment: "nums[fast]=0 === nums[slow]=0 -> Duplicate! Advance fast.", status: "checking" },
        { slow: 0, fast: 2, comment: "nums[fast]=1 !== nums[slow]=0 -> Unique! Increment slow and write nums[1] = 1.", status: "writing" },
        { slow: 1, fast: 3, comment: "nums[fast]=1 === nums[slow]=1 -> Duplicate! Advance fast.", status: "checking" },
        { slow: 1, fast: 4, comment: "nums[fast]=1 === nums[slow]=1 -> Duplicate! Advance fast.", status: "checking" },
        { slow: 1, fast: 5, comment: "nums[fast]=2 !== nums[slow]=1 -> Unique! Increment slow and write nums[2] = 2.", status: "writing" },
        { slow: 2, fast: 7, comment: "nums[fast]=3 !== nums[slow]=2 -> Unique! Increment slow and write nums[3] = 3. Done! Length = 4.", status: "success" }
      ]
    }
  },
  {
    id: 4,
    title: "Remove Element",
    lcNumber: 27,
    difficulty: "Easy",
    day: 2,
    pattern: "Slow + Fast",
    link: "https://leetcode.com/problems/remove-element/",
    summary: "Remove all occurrences of val in-place and return the new length.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}`
  },
  {
    id: 5,
    title: "Move Zeroes",
    lcNumber: 283,
    difficulty: "Easy",
    day: 2,
    pattern: "Slow + Fast",
    link: "https://leetcode.com/problems/move-zeroes/",
    summary: "Move all 0's to the end of the array while maintaining the relative order of non-zero elements.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function moveZeroes(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
}`,
    visualizerData: {
      initialArray: [0, 1, 0, 3, 12],
      steps: [
        { slow: 0, fast: 0, comment: "nums[fast]=0 -> Skip zero", status: "checking" },
        { slow: 0, fast: 1, comment: "nums[fast]=1 -> Non-zero! Swap with nums[slow=0]. Array: [1, 0, 0, 3, 12]", status: "swap" },
        { slow: 1, fast: 2, comment: "nums[fast]=0 -> Skip zero", status: "checking" },
        { slow: 1, fast: 3, comment: "nums[fast]=3 -> Non-zero! Swap with nums[slow=1]. Array: [1, 3, 0, 0, 12]", status: "swap" },
        { slow: 2, fast: 4, comment: "nums[fast]=12 -> Non-zero! Swap with nums[slow=2]. Array: [1, 3, 12, 0, 0]. Complete!", status: "success" }
      ]
    }
  },
  {
    id: 6,
    title: "Squares of a Sorted Array",
    lcNumber: 977,
    difficulty: "Easy",
    day: 2,
    pattern: "Left + Right",
    link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
    summary: "Given an integer array sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `function sortedSquares(nums) {
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
}`
  },
  {
    id: 7,
    title: "Container With Most Water",
    lcNumber: 11,
    difficulty: "Medium",
    day: 3,
    pattern: "Left + Right",
    link: "https://leetcode.com/problems/container-with-most-water/",
    summary: "Find two lines that together with the x-axis form a container that contains the most water.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function maxArea(height) {
  let left = 0, right = height.length - 1, maxWater = 0;
  while (left < right) {
    const h = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, h * (right - left));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxWater;
}`,
    visualizerData: {
      initialArray: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      steps: [
        { left: 0, right: 8, comment: "h = min(1,7)=1, w = 8, area = 8. Move left (height[left]=1 is shorter)", status: "checking" },
        { left: 1, right: 8, comment: "h = min(8,7)=7, w = 7, area = 49 (Max=49!). Move right (height[right]=7 is shorter)", status: "checking" },
        { left: 1, right: 7, comment: "h = min(8,3)=3, w = 6, area = 18. Move right", status: "checking" },
        { left: 1, right: 6, comment: "h = min(8,8)=8, w = 5, area = 40. Heights equal, move right.", status: "checking" },
        { left: 1, right: 5, comment: "Max water container found is 49 units!", status: "success" }
      ]
    }
  },
  {
    id: 8,
    title: "3Sum",
    lcNumber: 15,
    difficulty: "Medium",
    day: 4,
    pattern: "Multi-Pointer",
    link: "https://leetcode.com/problems/3sum/",
    summary: "Find all unique triplets in the array which gives the sum of zero.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `function threeSum(nums) {
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
}`
  },
  {
    id: 9,
    title: "3Sum Closest",
    lcNumber: 16,
    difficulty: "Medium",
    day: 4,
    pattern: "Multi-Pointer",
    link: "https://leetcode.com/problems/3sum-closest/",
    summary: "Find three integers in nums such that the sum is closest to target.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `function threeSumClosest(nums, target) {
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
}`
  },
  {
    id: 10,
    title: "Sort Colors",
    lcNumber: 75,
    difficulty: "Medium",
    day: 5,
    pattern: "Multi-Pointer",
    link: "https://leetcode.com/problems/sort-colors/",
    summary: "Sort an array with 0s, 1s, and 2s in-place in a single pass (Dutch National Flag problem).",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function sortColors(nums) {
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
}`,
    visualizerData: {
      initialArray: [2, 0, 2, 1, 1, 0],
      steps: [
        { low: 0, mid: 0, high: 5, comment: "nums[mid]=2 -> Swap with high (index 5). high--. Array: [0, 0, 2, 1, 1, 2]", status: "swap" },
        { low: 0, mid: 0, high: 4, comment: "nums[mid]=0 -> Swap with low (index 0). low++, mid++.", status: "swap" },
        { low: 1, mid: 1, high: 4, comment: "nums[mid]=0 -> Swap with low (index 1). low++, mid++.", status: "swap" },
        { low: 2, mid: 2, high: 4, comment: "nums[mid]=2 -> Swap with high (index 4). high--.", status: "swap" },
        { low: 2, mid: 2, high: 3, comment: "nums[mid]=1 -> Move mid++.", status: "checking" },
        { low: 2, mid: 4, high: 3, comment: "mid > high -> Array is fully sorted: [0, 0, 1, 1, 2, 2]!", status: "success" }
      ]
    }
  },
  {
    id: 11,
    title: "Merge Sorted Array",
    lcNumber: 88,
    difficulty: "Easy",
    day: 5,
    pattern: "Two Arrays",
    link: "https://leetcode.com/problems/merge-sorted-array/",
    summary: "Merge nums2 into nums1 as one sorted array in-place from back to front.",
    timeComplexity: "O(M + N)",
    spaceComplexity: "O(1)",
    code: `function merge(nums1, m, nums2, n) {
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
}`
  },
  {
    id: 12,
    title: "Is Subsequence",
    lcNumber: 392,
    difficulty: "Easy",
    day: 3,
    pattern: "Two Arrays",
    link: "https://leetcode.com/problems/is-subsequence/",
    summary: "Given two strings s and t, return true if s is a subsequence of t.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function isSubsequence(s, t) {
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }
  return i === s.length;
}`
  },
  {
    id: 13,
    title: "Trapping Rain Water",
    lcNumber: 42,
    difficulty: "Hard",
    day: 7,
    pattern: "Left + Right",
    link: "https://leetcode.com/problems/trapping-rain-water/",
    summary: "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function trap(height) {
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
}`
  },
  {
    id: 14,
    title: "4Sum",
    lcNumber: 18,
    difficulty: "Medium",
    day: 4,
    pattern: "Multi-Pointer",
    link: "https://leetcode.com/problems/4sum/",
    summary: "Find all unique quadruplets in the array which give the target sum.",
    timeComplexity: "O(N³)",
    spaceComplexity: "O(1)",
    code: `function fourSum(nums, target) {
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
}`
  },
  {
    id: 15,
    title: "Boats to Save People",
    lcNumber: 881,
    difficulty: "Medium",
    day: 6,
    pattern: "Left + Right",
    link: "https://leetcode.com/problems/boats-to-save-people/",
    summary: "Return the minimum number of boats to carry every given person where each boat holds at most 2 people.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(1)",
    code: `function numRescueBoats(people, limit) {
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
}`
  },
  {
    id: 16,
    title: "Backspace String Compare",
    lcNumber: 844,
    difficulty: "Easy",
    day: 6,
    pattern: "Two Arrays",
    link: "https://leetcode.com/problems/backspace-string-compare/",
    summary: "Given two strings s and t, return true if they are equal when both are typed into empty text editors.",
    timeComplexity: "O(N + M)",
    spaceComplexity: "O(1)",
    code: `function backspaceCompare(s, t) {
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
}`
  },
  {
    id: 17,
    title: "Remove Duplicates from Sorted Array II",
    lcNumber: 80,
    difficulty: "Medium",
    day: 1,
    pattern: "Slow + Fast",
    link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
    summary: "Remove duplicates such that each unique element appears at most twice in-place.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function removeDuplicates(nums) {
  if (nums.length <= 2) return nums.length;
  let slow = 2;
  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}`
  },
  {
    id: 18,
    title: "Palindrome Linked List",
    lcNumber: 234,
    difficulty: "Easy",
    day: 1,
    pattern: "Fast & Slow",
    link: "https://leetcode.com/problems/palindrome-linked-list/",
    summary: "Given the head of a singly linked list, return true if it is a palindrome.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function isPalindrome(head) {
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
}`
  },
  {
    id: 19,
    title: "Linked List Cycle",
    lcNumber: 141,
    difficulty: "Easy",
    day: 7,
    pattern: "Fast & Slow",
    link: "https://leetcode.com/problems/linked-list-cycle/",
    summary: "Determine if the linked list has a cycle using Floyd's Tortoise and Hare algorithm.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`
  },
  {
    id: 20,
    title: "Linked List Cycle II",
    lcNumber: 142,
    difficulty: "Medium",
    day: 7,
    pattern: "Fast & Slow",
    link: "https://leetcode.com/problems/linked-list-cycle-ii/",
    summary: "Return the node where the cycle begins in a linked list.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function detectCycle(head) {
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
}`
  },
  {
    id: 21,
    title: "Find the Duplicate Number",
    lcNumber: 287,
    difficulty: "Medium",
    day: 7,
    pattern: "Fast & Slow",
    link: "https://leetcode.com/problems/find-the-duplicate-number/",
    summary: "Given an array of integers containing n + 1 integers where each integer is in range [1, n], find duplicate number.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function findDuplicate(nums) {
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
}`
  },
  {
    id: 22,
    title: "Remove Nth Node From End of List",
    lcNumber: 19,
    difficulty: "Medium",
    day: 7,
    pattern: "Fast & Slow",
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    summary: "Remove the nth node from the end of the list and return its head in one pass.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `function removeNthFromEnd(head, n) {
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
}`
  }
];
