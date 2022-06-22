#include <iostream>
#include <string>
#include <algorithm>
#include <map>
#include <cstdlib>

using namespace std;

int main(){
    int test, n;
    string name, sort;

    cin >> test;

    for(int i = 0; i < test; i++){
        map<string, int> cloth;
        cin >> n;
        for(int j = 0; j < n; j++){
            cin >> name >> sort;
            cloth[sort] ++;
        }
        long long ret = 1; // 값이 클 수 있으므로 long long으로 선언하는 것이 안전
        for(auto c: cloth){
            ret *= ((long long)c.second + 1);
        }
        ret--; // 하나도 안 입는 경우 한 번 빼 주기
        cout << ret << "\n";
    }
}
