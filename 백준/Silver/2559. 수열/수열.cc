#include <iostream>
#include <string>
#include <algorithm>

using namespace std;


int main(){
    
    int n, k;
    int psum[100001];
    int m = -10000004;
    int num;

    cin >> n >> k;

    for(int i = 1; i <= n; i++){
        cin >> num;
        psum[i] = psum[i - 1] + num;
    }

    for(int i = k; i <= n; i++){
        m = max(m, psum[i] - psum[i - k]);
    }

    cout << m << endl;

}