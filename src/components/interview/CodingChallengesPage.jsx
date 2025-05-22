import React, { useState } from "react";

// More coding challenge data (with additional questions)
const codingChallenges = [
  {
    topic: "Arrays",
    questions: [
      {
        question: "Find the maximum subarray sum (Kadane's Algorithm).",
        solution: `
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}
        `,
      },
      {
        question: "Remove duplicates from a sorted array.",
        solution: `
function removeDuplicates(nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}
        `,
      },
      {
        question: "Find the intersection of two arrays.",
        solution: `
function intersection(nums1, nums2) {
  let set = new Set(nums1);
  return nums2.filter(num => set.has(num));
}
        `,
      },
    ],
  },
  {
    topic: "Strings",
    questions: [
      {
        question: "Check if a string is a palindrome.",
        solution: `
function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return s === s.split("").reverse().join("");
}
        `,
      },
      {
        question: "Find the longest substring without repeating characters.",
        solution: `
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
        `,
      },
      {
        question: "Reverse a string.",
        solution: `
function reverseString(s) {
  return s.split('').reverse().join('');
}
        `,
      },
    ],
  },
  {
    topic: "Linked Lists",
    questions: [
      {
        question: "Reverse a linked list.",
        solution: `
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}
        `,
      },
      {
        question: "Detect a cycle in a linked list.",
        solution: `
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
        `,
      },
      {
        question: "Find the middle element of a linked list.",
        solution: `
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
        `,
      },
    ],
  },
  {
    topic: "Trees",
    questions: [
      {
        question: "Find the maximum depth of a binary tree.",
        solution: `
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
        `,
      },
      {
        question: "Check if a binary tree is symmetric.",
        solution: `
function isSymmetric(root) {
  if (!root) return true;

  function isMirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    return (
      t1.val === t2.val &&
      isMirror(t1.right, t2.left) &&
      isMirror(t1.left, t2.right)
    );
  }

  return isMirror(root.left, root.right);
}
        `,
      },
      {
        question: "Find the lowest common ancestor in a binary tree.",
        solution: `
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left ? left : right;
}
        `,
      },
    ],
  },
  {
    topic: "Dynamic Programming",
    questions: [
      {
        question: "Climbing stairs problem (You can take 1 or 2 steps at a time).",
        solution: `
function climbStairs(n) {
  if (n <= 2) return n;
  
  let first = 1, second = 2;
  
  for (let i = 3; i <= n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }
  
  return second;
}
        `,
      },
      {
        question: "Find the longest increasing subsequence.",
        solution: `
function lengthOfLIS(nums) {
  let dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
        `,
      },
      {
        question: "0/1 Knapsack problem.",
        solution: `
function knapsack(weights, values, capacity) {
  let dp = Array(capacity + 1).fill(0);

  for (let i = 0; i < weights.length; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
    }
  }

  return dp[capacity];
}
        `,
      },
    ],
  },
];

// Function to shuffle array (randomize order)
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const CodingChallengesPage = () => {
  const [visibleSolution, setVisibleSolution] = useState({});
  const [randomizedQuestions, setRandomizedQuestions] = useState([]);

  // Flatten the codingChallenges array into a single array of questions
  const flattenChallenges = codingChallenges.reduce((acc, challenge) => {
    return [...acc, ...challenge.questions];
  }, []);

  // Handle "Surprise Me" button click
  const handleSurpriseMe = () => {
    const shuffledQuestions = shuffleArray(flattenChallenges);
    setRandomizedQuestions(shuffledQuestions);
  };

  // Toggle solution visibility
  const toggleSolution = (index) => {
    setVisibleSolution((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-gradient-to-r from-teal-100 to-indigo-200 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-teal-600">
          Coding Challenges
        </h1>
        <p className="text-lg text-center text-gray-600 mt-4">
          Sharpen your skills with these carefully selected coding problems!
        </p>

        <button
          onClick={handleSurpriseMe}
          className="bg-teal-600 text-white px-6 py-3 rounded-full mt-8 mx-auto block hover:bg-teal-700 transition transform hover:scale-105"
        >
          Surprise Me!
        </button>

        <div className="mt-12">
          {randomizedQuestions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {randomizedQuestions.map((item, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.question}
                  </h3>
                  <button
                    onClick={() => toggleSolution(index)}
                    className="mt-4 text-teal-600 text-sm font-medium hover:underline"
                  >
                    {visibleSolution[index] ? "Hide Solution" : "View Solution"}
                  </button>
                  {visibleSolution[index] && (
                    <pre className="bg-gray-100 p-4 mt-4 text-sm rounded overflow-x-auto">
                      {item.solution}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-4">
              Click "Surprise Me!" to see a random selection of challenges!
            </p>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-16">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition-all transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CodingChallengesPage;
