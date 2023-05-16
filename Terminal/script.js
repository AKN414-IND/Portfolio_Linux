const commandInput = document.getElementById('command-input');
const output = document.getElementById('output');

commandInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = commandInput.value;
        output.innerHTML += '[Who@Arun_K_Nair]~' + command + '\n';

        // Process the command and generate the output
        const outputText = processCommand(command);
        if (outputText === 'null') {
            output.innerHTML += '';
            commandInput.value = '';

        }
        else {
            output.innerHTML += outputText +' \n';
            commandInput.value = '';
        }
    }
});

function processCommand(command) {
    // help command
    if (command === 'help') {
        return ' ———————————————————————————————————————————————————————————————————————————\n|                          Commands                                         |\n ———————————————————————————————————————————————————————————————————————————\n|  about  \t\t|   display details                                 |\n|  contact  \t\t|   display ways on contact                         |\n|  clear  \t\t|   clear the terminal                              |\n|  skills  \t\t|   display the skills                              |\n|  experience \t\t|   display the experience                          |\n|  education \t\t|   display all educational qualification           |\n|  languages\t\t|   display languages i communicate in              |\n|  planguages\t\t|   display programming languages i am familar with |\n ———————————————————————————————————————————————————————————————————————————\n ';    }
    else if (command.startsWith('echo ')) {
        return command.substring(5);
    }
    // custom command
    else if (command === 'about') {
        return 'This is a terminal based portfolio.\nIt is made using HTML, CSS and JavaScript.\nIt is hosted on GitHub Pages.\nThe source code is available on GitHub.\nThis is made by Arun K Nair ';
    }
    else if (command === 'contact') {
        return ' ———————————————————————————————————————-\n|           Contact Options              |\n ———————————————————————————————————————-\n| LinkedIn  | CL                         |\n| Twitter   | CT                         |\n| Email     | CE                         |\n| Phone     | CP                         |\n| GitHub    | CG                         |\n ———————————————————————————————————————-\n';
    }
    else if (command === 'clear') {
        output.innerHTML = '';
        return 'null';
    }
    else if (command === 'skills') {
        return 'I possess strong skills in various areas, including Python programming, HTML, and CSS.\nI am also experienced in content writing, UI design, and being a team player.\nCommunication is one of my greatest strengths as \nI am proficient in English, Malayalam, and Hindi.\nI also have intermediate-level proficiency in Tamil.';
    }
    else if (command === 'experience') {
        return 'My work and volunteer experience includes :\n -> Co-Lead Media for the College FOSS Community\n -> Student Ambassador for the ICT Academy\n -> Student Ambassador for the GeeksforGeeks\n -> Executive Member of the CESA\n -> Treasurer for CSI at the college\n -> Campus IG at Gtech';

    }
    else if (command === 'education') {
        return 'My Educational qualification :\n -> Completed Class X at Jyothis Central School \n -> Completed Class XII at Jyothis Central School \n -> Pursuing Btech at Jyothi Engineering College ';
    }
    else if (command === 'languages') {
        return'I am proficient with\n ->English\n ->Malayalam\n ->Hindi\nI am intermediate-level proficiency\n ->Tamil \n';
    }
    else if (command === 'planguages') {
        return'I am familiar with\n ->Python\n ->HTML\n ->CSS\n ->JavaScript\n ->Java\n ->SQL';
    }
    // contact 
    else if (command === 'CL') {
        window.open('https://www.linkedin.com/in/arunknair-/', '_blank');
        return 'https://www.linkedin.com/in/arunknair-/';
    }
    else if (command === 'CG') {
        window.open('https://github.com/AKN414-IND');
        return 'https://github.com/AKN414-IND';}
    else if (command === 'CM') {
        window.open('https://medium.com/@arunknair2003', '_blank');
        return 'https://medium.com/@arunknair2003';
    }
    else if (command === 'CT') {
        window.open('https://twitter.com/Arun_K_Nair_', '_blank');
        return 'https://twitter.com/Arun_K_Nair_';
    }
    else if (command === 'CE') {
        const recipient = 'arunknair2003@gmail.com';
        return 'mailto : ' + recipient;
      }
    else if (command === 'CP') {
        const phone = '+91 8075648949';
        return 'Dial : ' + phone;
    }
    else {
        return 'Command not found : ' + command + '\nType "help" for more information.';
    }
}
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function() {
    window.close();
});
const maximizeButton = document.querySelector('.maximize-button');

