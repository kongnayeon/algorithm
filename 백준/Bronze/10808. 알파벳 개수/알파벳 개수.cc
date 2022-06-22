#include <iostream>
#include <string>
#include <algorithm>

using namespace std; 

int main(){

    string word;
    int alphabet[26] = { 0 };

    cin >> word;

    for(int i = 0; i < word.length(); i++){
        alphabet[word[i] - 97]++;
    }

    for(int i = 0; i < 26; i++){
        cout << alphabet[i] << " ";
    }
}