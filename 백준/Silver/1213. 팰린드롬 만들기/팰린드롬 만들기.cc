#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

 string name, ret;
    int cnt[200];
    int flag = 0;
    char mid;

int main(){

    cin >> name;

    for(int i = 0; i < name.length(); i++){
        cnt[name[i] - 65]++;
    }

    for(int i = 25; i >= 0; i--){
        if(cnt[i]){
            if(cnt[i] & 1){
                mid = char(i + 65);
                flag++;
                cnt[i]--;
            }
            if(flag == 2) break;
            for(int j = 0; j < cnt[i]; j += 2){
                ret = char(i + 65) + ret;
                ret += char(i + 65);
            }
        }

    }

    if(mid){
        ret.insert(ret.begin() + ret.size() / 2, mid);
    }
    if(flag == 2){
        cout << "I'm Sorry Hansoo\n";
    }
    else{
        cout << ret << "\n";
    }
}