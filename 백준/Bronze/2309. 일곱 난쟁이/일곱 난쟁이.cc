#include <iostream>
#include <algorithm>

using namespace std; 

int main(){

    int height[9];
    int sum = 0;

    for(int i = 0; i <9; i++){
        cin >> height[i];
    }   

   sort(height, height+9);

   do{
    int sum = 0;
    for(int i = 0; i < 7; i++) sum += height[i];
    if(sum == 100) break;
   }while(next_permutation(height, height+9));

    for(int i = 0; i <7; i++){
        cout << height[i] << endl;
    }


    return 0;
}