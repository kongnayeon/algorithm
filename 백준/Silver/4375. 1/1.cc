#include <iostream>
#include <string>

using namespace std;

int n; 

int main(){
    ios_base::sync_with_stdio(false); 
    cin.tie(NULL); 
    cout.tie(NULL);

    while(cin >> n){
        int ret = 1;
        int cnt = 1;

        while(1){
            if(cnt % n == 0){ // cnt와 n이 같아지면 출력
                cout << ret <<  "\n"; // 자릿수
                break;
            }
            else{
                cnt = (cnt * 10) + 1; // 1, 11, 111로 계속 올라감
                cnt %= n; // 나머지만 계산
                ret++; // 자릿수 + 1
            }
        }
    }
    return 0;
}