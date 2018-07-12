function random(number){
    console.log(Math.random() * number);
}
random(10); // 4
random(100); // 78
random(2); // 0

function randomLetter(string){
    console.log(string.charAt(Math.floor(Math.random() * string.length)));
}
randomLetter("blah"); // “b”
randomLetter("abcdefg"); // “g”
randomLetter("z"); // “z”

function myGuy(s){
    console.log(s + ", my guy.");
}
myGuy("Take it easy"); // “Take it easy, my guy”

function string_N_times(str, N){
    for(i = 0; i < N; i++){
        console.log(str);
    }
}
string_N_times("owo", 5);

function hypotenuse(n1, n2){
    console.log(Math.sqrt((n1 * n1) + (n2 * n2)));
}
hypotenuse(3,4);