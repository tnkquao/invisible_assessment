public class LongestPalindromicSubstring {

    public static String longestPalindrome(String s) {
        if (s == null || s.isEmpty()) return "";

        int start = 0;
        int end = 0;

        for (int i = 0; i < s.length(); i++) {
            // Check for palindromes with odd length
            int len1 = expandAroundCenter(s, i, i);
            // Check for palindromes with even length
            int len2 = expandAroundCenter(s, i, i + 1);

            System.out.println("len1: " + len1);
            System.out.println("len2: " + len2);

            int len = Math.max(len1, len2);

            // Update start and end if we found a longer palindrome
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        System.out.println(s.substring(start, end + 1));
        return s.substring(start, end + 1);
    }

    private static int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
            System.out.println("left: " + left);
            System.out.println("right: " + right);

        }
        return right - left - 1;
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad")); // Output: "bab" or "aba"

    }
}
