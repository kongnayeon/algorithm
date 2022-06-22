#include <iostream>
#include <string>
#include <algorithm>
#include <map>
#include <cstdlib>

using namespace std;

int main(){
    int n, m;
    int a[1050001];
    int cnt = 0;

    cin >> n >> m;
    
    for(int i = 0; i < n; i++){
        cin >> a[i];
    }
    // 갑옷이 0개인 경우
    if( m > 200000){
        cout << 0 << "\n";
    }
    else{
        for(int i = 0; i < n; i++){
            for(int j = i + 1 ; j < n; j++){
               if( a[i] + a[j] == m){
                cnt++;
               }
            }
        }
        cout << cnt << "\n";
    }
}