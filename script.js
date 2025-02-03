const textLines = [
    "I am currently pursuing a B.Tech in Computer Science and Engineering.",
    "I have a strong passion for backend development, Machine Learning and AI",
    "I am also exploring cloud technologies.",
  ];

let i = 0;
let timer;
  
function typingEffect() {
    let word = textLines[i].split("");
    var loopTyping = function() 
    {
        if (word.length > 0) {
            document.getElementById('text-line').innerHTML += word.shift();
        } 
        else 
        {
            setTimeout(deletingEffect, 2000);
            return false;
        };
        timer = setTimeout(loopTyping, 70);
    };

    loopTyping();
};

function deletingEffect() {
    let word = textLines[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('text-line').innerHTML = word.join("");
        } 
        else 
        {
            if (textLines.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 40);
    };
    loopDeleting();
};

typingEffect();