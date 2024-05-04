// NUMBER 1: Minimum Steps
// Given an array of N integers, find how many times you have to add up the 
// smallest numbers in the array to get their Sum greater than or equal to K.
// minimumSteps({1, 10, 9, 2, 3}, 6)  ==>  return 2 // 1 + 2 + 3 = 6 in 2 steps

import java.util.Arrays;

public class Kata {
    public static int minimumSteps(int[] numbers, int k) {
        int totalSteps = 0;
        int count = 0;
        Arrays.sort(numbers);

        while (count < k) {
            count = count + numbers[totalSteps];
            totalSteps++;
        }
        return totalSteps - 1;
    }
}
