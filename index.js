const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstHalf = document.getElementById("password-firsthalf")
let secondHalf = document.getElementById("password-secondhalf")

function generatePassword() {
    let one = characters[Math.floor(Math.random() * characters.length)]
    let two = characters[Math.floor(Math.random() * characters.length)]
    let three = characters[Math.floor(Math.random() * characters.length)]
    let four = characters[Math.floor(Math.random() * characters.length)]
    let five = characters[Math.floor(Math.random() * characters.length)]
    let six = characters[Math.floor(Math.random() * characters.length)]
    let seven = characters[Math.floor(Math.random() * characters.length)]
    let eight = characters[Math.floor(Math.random() * characters.length)]
    let nine = characters[Math.floor(Math.random() * characters.length)]
    let ten = characters[Math.floor(Math.random() * characters.length)]
    let eleven = characters[Math.floor(Math.random() * characters.length)]
    let twelve = characters[Math.floor(Math.random() * characters.length)]
    let thirteen = characters[Math.floor(Math.random() * characters.length)]
    let fourteen = characters[Math.floor(Math.random() * characters.length)]
    let fifteen = characters[Math.floor(Math.random() * characters.length)]
    
    let sixteen = characters[Math.floor(Math.random() * characters.length)]
    let seventeen = characters[Math.floor(Math.random() * characters.length)]
    let eighteen = characters[Math.floor(Math.random() * characters.length)]
    let nineteen = characters[Math.floor(Math.random() * characters.length)]
    let twenty = characters[Math.floor(Math.random() * characters.length)]
    let twentyone = characters[Math.floor(Math.random() * characters.length)]
    let twentytwo = characters[Math.floor(Math.random() * characters.length)]
    let twentythree = characters[Math.floor(Math.random() * characters.length)]
    let twentyfour = characters[Math.floor(Math.random() * characters.length)]
    let twentyfive = characters[Math.floor(Math.random() * characters.length)]
    let twentysix = characters[Math.floor(Math.random() * characters.length)]
    let twentyseven = characters[Math.floor(Math.random() * characters.length)]
    let twentyeight = characters[Math.floor(Math.random() * characters.length)]
    let twentynine = characters[Math.floor(Math.random() * characters.length)]
    let thirty = characters[Math.floor(Math.random() * characters.length)]
    
    firstHalf.textContent = one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + thirteen + fourteen + fifteen
    
    secondHalf.textContent = sixteen + seventeen + eighteen + nineteen + twenty + twentyone + twentytwo + twentythree + twentyfour + twentyfive + twentysix + twentyseven + twentyeight + twentynine + thirty
}



