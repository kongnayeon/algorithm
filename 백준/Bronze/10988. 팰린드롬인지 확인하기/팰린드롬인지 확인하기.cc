#include <iostream>
#include <string>

using namespace std;

int main(){
   string word;

   cin >> word;

   int center = 0;

   center = int(word.length());

   int check = 1;

   for(int i = 0; i < center; i++){
    if(word[i] == word[word.length() - 1 - i]){
        continue;
    }
    else{
        check = 0;
        break;
    }
   }

   cout << check;
   
}