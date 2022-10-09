/*
ABC Problem
You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. 
A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:

(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.

Some rules to keep in mind:

Once a letter on a block is used, that block cannot be used again.
The function should be case-insensitive.
*/

function canMakeWord(word){
    word = word.toLowerCase();
    let index = 0;
    let result = true;
    let findLetter = 0;
    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < abcBlocks.length; j++){
            index = abcBlocks[j].indexOf(word[i]);
            if(index !== -1){
                findLetter++;
                abcBlocks.splice(j,1);
                break;
            }
        }
    }
    if(findLetter !== word.length){
        result = false;
    }
    console.log(result);
    return result;
}

let abcBlocks = [["b","o"],["x","k"],["d","q"],["c","p"],["n","a"],["g","t"],["r","e"],["t","g"],["q","d"],["f","s"],["j","w"],["h","u"],["v","i"],["a","n"],["o","b"],["e","r"],["f","s"],["l","y"],["p","c"],["z","m"]];

canMakeWord('conFUSE');
