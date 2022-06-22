#include <iostream>
#include <string>

using namespace std;

int main(){
    int n;
    string p;
    string front, end;
    string file;

    cin >> n;
    cin >> p;

    int pos = p.find('*');
    front = p.substr(0, pos);
    end = p.substr(pos + 1);

    for(int i = 0; i < n; i++){
        cin >> file;
        if(front.size() + end.size() > file.size()){
            cout << "NE" << endl;
        }
        else{
            if(front == file.substr(0, front.size()) && end == file.substr(file.size() - end.size())){
                cout << "DA"<< endl;
            }
            else{
                cout << "NE" << endl;
            }
        }
        
    }

    return 0;
}