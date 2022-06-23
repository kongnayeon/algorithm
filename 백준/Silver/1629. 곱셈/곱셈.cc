#include <iostream>
#include <string>
#include <algorithm>
#include <cstdio>
#include <vector>
#include <queue>
#include <stack>

using namespace std;

typedef long long ll;

ll a, b, c;
ll work (ll a, ll b){
    if(b == 1) return a % c; // 제곱 x인 경우
    ll _c = work(a, b / 2); 
    _c = (_c * _c) % c;
    if(b % 2){ // 제곱하는 수가 홀수인 경우
        _c = (_c * a) % c; // 한 번 더 a를 곱해야
    }
    return _c;
}    

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> a >> b >> c;
    cout << work(a, b) << "\n";

    return 0;
}