#include <iostream>
using namespace std;
// Function to calculate factorial using recursion
int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int num;
    cout << "Enter a number to calculate its factorial: ";
    cin >> num;

    if (num < 0) {
        cout << "Factorial is not defined for negative numbers.\n";
    } else {
        int result = factorial(num);
        cout << "Factorial of " << num << " is: " << result << std::endl;
    }

    return 0;
}
