import githubLogo from '../images/logo-github.png'
function SignUp() {
    let mailValid = false
    let pwValid = false

    function mailValidation() {
        const mailInput = document.getElementById("input-mail");
        const mailValue = mailInput.value;
        if (mailValue === "") {
            mailInput.classList.add("outline-0");
            mailInput.classList.add("bg-black1");
            mailInput.classList.add("border-gray1");
        } else {
            if (mailValue.includes(".com") && mailValue.includes("@")) {
                mailInput.classList.add("outline-0");
                mailInput.classList.add("border-btnGreen");
                mailInput.classList.add("bg-btnGreen/30");
                mailValid = true;
            } else {
                mailInput.classList.add("outline-0");
                mailInput.classList.add("bg-black1");
                mailInput.classList.add("border-linkBlue");
                mailValid = false;
            }
        }
    }
    
    /*Password input validation*/
    function passwordValidation() {
        const pwInput = document.getElementById("input-pw");
        const pwValue = pwInput.value;
        const messageContainerOne = document.getElementsByClassName("message-container-one")
        if (pwValue === "") {
            pwInput.classList.add("outline-0");
            pwInput.style.background = "#0d1117";
            pwInput.style.border = "1px solid #30363d";
        } else {
            if (pwValue.length < 4 || pwValue.length > 12) {
                pwInput.style.outline = "none";
                pwInput.style.border = "1px solid #54aeff";
                pwInput.style.background = "#0d1117";
                pwValid = false;
            } else {
                messageContainerOne.style.display = "none";
                const numbers = new RegExp(/\d/);
                const capitals = new RegExp(/[A-Z]/);
                if (numbers.test(pwValue) && capitals.test(pwValue)) {
                    pwInput.style.outline = "none";
                    pwInput.style.border = "1px solid #238636";
                    pwInput.style.background = "rgba(35, 134, 54, 0.3)";
                    pwValid = true;
                } else {
                    pwInput.style.outline = "none";
                    pwInput.style.border = "1px solid #54aeff";
                    pwInput.style.background = "#0d1117";
                    pwValid = false;
                }
            }
        }
    }

    /*Sign in button validation*/
    function SignUpValidation() {
        const btnSignUp = document.getElementById('btn-sign-up');

        const inputMail = document.getElementById("input-mail");
        const mailValue = inputMail.value;

        const inputPw = document.getElementById("input-pw");
        const pwValue = inputPw.value;

        const mailError = document.getElementById("mail-error");
        const pwError = document.getElementById("pw-error");

        const messageContainerOne = document.querySelector(".message-container-one");
        const messageOne = document.querySelector('.message-one');

        const messageContainerTwo = document.querySelector(".message-container-two");
        const messageTwo = document.querySelector('.message-two');

        if (mailValue === "" || pwValue === "") { //Error message if either email or password not entered.
            mailError.style.display = "none";
            pwError.style.display = "none";
            messageContainerOne.style.display = "flex";
            messageOne.innerText = "Please enter the email and password."
        } else if (mailValid === false) { //Invalid email.
            mailError.style.display = "block";
            pwError.style.display = "none";
            mailError.innerText = '⚠️ Please enter a valid mail(Must contain "@" and ".com").';
        } else if (pwValid === false) { //Invalid password.
            mailError.style.display = "none";
            pwError.style.display = "block";
            pwError.innerText = "⚠️ Please enter a valid password(Must contain at least one number(0-9) and at least one uppercase alphabet)."
        } else { //Valid email and password.
                mailError.style.display = "none";
                pwError.style.display = "none";
                messageContainerTwo.style.display = "flex";
                messageTwo.innerText = "Success. Creating account."
                btnSignUp.innerText = "Signing up..."
        }
    }

    /*Error message close buttons*/
    function btnOneHandler() {
        const messageContainerOne = document.querySelector(".message-container-one");
        messageContainerOne.style.display = "none";
    }

    function btnTwoHandler() {
        const messageContainerTwo = document.querySelector(".message-container-two");
        messageContainerTwo.style.display = "none";
    }

    return(
    <div className="sign-up-container block mx-auto">
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <img className="w-11 h-11 my-7 opacity-80" src={githubLogo} alt='github-logo' />
                <h1 className="text-gray1 text-[24px] mb-4 font-light tracking-[-0.5px]">Create an account.</h1>
            </div>

            <div className="message-container-one hidden justify-between items-center text-gray1 font-light text-sm border-errorRed/40 border-[1px] rounded-md mb-4 bg-errorRed/20 w-[280px] p-3">
                <p className="message-one"></p>
                <button className="btn-close-one text-errorRed font-thin text-lg" type="button"></button>
            </div>

            <div className="message-container-two collapse hidden justify-between items-center text-gray1 font-light text-sm border-btnGreen/40 border-[1px] rounded-md mb-4 bg-btnGreen/20 w-[280px] p-3">
                <p className='message-two'></p>
                <button className="btn-close-two text-btnGreen font-thin text-lg" type="button"></button>
            </div>

            <div className="p-4 rounded-md w-[280px] min-h-[210px] bg-black2 flex flex-col border-[1px] border-borderGray2">
                <form>
                    <div>
                        <label className="text-left text-gray1 mb-2 text-sm font-normal" for="input-mail">Enter a mail address</label>
                        <input className="text-gray1 text-xs px-[12px] py-[5px] focus:outline-none focus:border-linkBlue border-[1px] rounded-md border-borderGray1 w-full bg-black1 mt-1 self-center block" onInput={mailValidation} id='input-mail' type='email' autoComplete='off'/>
                        <p className="text-errorYellow mt-1 text-xs font-thin" id='mail-error'></p>
                    </div>
                    <div className="mt-4 mb-2">
                        <label className="text-gray1 text-sm font-normal" for='input-pw'>Enter a password</label>
                        <input className="text-gray1 text-xs px-[12px] py-[5px] focus:outline-none focus:border-linkBlue border-[1px] rounded-md border-borderGray1 w-full bg-black1 mt-1 self-center block" onInput={passwordValidation} id='input-pw' type='password'/>
                        <p className="text-errorYellow mt-1 text-xs font-thin" id='pw-error'></p>
                    </div>
                    <button onClick={SignUpValidation} className="hover:brightness-125  w-full rounded-md py-1 px-4 text-sm text-white mt-4 font-medium bg-btnGreen" id='btn-sign-up' type="button">Sign Up</button>
                </form>
                <div className="w-[250px] text-center border-gray1/50 rounded-md border-[1px] mt-4 p-4">
                    <p className="text-sm text-gray1">Already have an account? <button className="text-linkBlue" type='button'>Sign in</button></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp