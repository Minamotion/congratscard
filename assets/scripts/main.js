document.addEventListener("DOMContentLoaded",()=>{
    let params = new URLSearchParams(window.location.search)
                    let achievement = params.get('achievement');
                    let other = params.get('other');
                    let name = params.get('name');

                    if (achievement == null) {
                        achievement = ''
                        console.error("Error at \"index.html\": \"?achievement=<string>\" is missing")
                    }

                    if (other == null) {
                        other = ''
                        console.log("Warning at \"index.html\": \"?other=<string>\" is missing, it is optional.")
                    }

                    if (name == null) {
                        name = ''
                        console.log("Warning at \"index.html\": \"?name=<string>\" is missing, it is optional.")
                    }
                    
                    document.getElementById("contents").innerHTML = "<h1 class='Congrats'>Congratulations!</h1> <p id='achievementTxt'>"+achievement+"</p> <p id='OtherTxt'>"+other+"</p> <p style='color: yellow'>Put your name below and then screenshot! (Note: It doesn't necessarily have to be your real name, you can put your nickname also)</p><input type='text' placeholder='Your name here' value='"+name+"' id='nameInput'>"
})