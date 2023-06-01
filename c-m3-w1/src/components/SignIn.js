import githubLogo from "../images/logo-github.png"
function SignIn() {
    let mailValid = false
    let pwValid = false
    function mailValidation() {
        const mailInput = document.getElementById("input-mail");
        const mailValue = mailInput.value;
        if (mailValue === "") {
            mailInput.classList.remove("border-btnGreen")
            mailInput.classList.remove("bg-btnGreen/30")
            mailInput.classList.remove("bg-black1")
            mailInput.classList.remove("border-linkBlue")
            mailInput.classList.remove("focus:border-btnGreen")

            mailInput.classList.add("focus:border-linkBlue")
            mailInput.classList.add("outline-0")
            mailInput.classList.add("bg-black1")
            mailInput.classList.add("border-borderGray1")

        } else {
            if (mailValue.includes(".com") && mailValue.includes("@")) {
                mailInput.classList.remove("bg-black1")
                mailInput.classList.remove("border-borderGray1")
                mailInput.classList.remove("bg-black1")
                mailInput.classList.remove("border-linkBlue")
                mailInput.classList.remove("focus:border-linkBlue")

                mailInput.classList.add("outline-0")
                mailInput.classList.add("border-btnGreen")
                mailInput.classList.add("bg-btnGreen/30")
                mailInput.classList.add("focus:border-btnGreen")
                mailValid = true;
            } else {
                mailInput.classList.remove("bg-black1")
                mailInput.classList.remove("border-borderGray1")
                mailInput.classList.remove("bg-black1")
                mailInput.classList.remove("border-linkBlue")
                mailInput.classList.remove("focus:border-btnGreen")
                mailInput.classList.remove("border-btnGreen")
                mailInput.classList.remove("bg-btnGreen/30")

                mailInput.classList.add("focus:border-linkBlue")
                mailInput.classList.add("outline-0")
                mailInput.classList.add("bg-black1")
                mailInput.classList.add("border-linkBlue")
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
            pwInput.classList.add("bg-black1");
            pwInput.classList.add("border-gray1");
        } else {
            if (pwValue.length < 4 || pwValue.length > 12) {
                pwInput.classList.add("outline-0");
                pwInput.classList.add("border-linkBlue");
                pwInput.classList.add("bg-black1");
                pwValid = false;
            } else {
                messageContainerOne.classList.add("collapse");
                const numbers = new RegExp(/\d/);
                const capitals = new RegExp(/[A-Z]/);
                if (numbers.test(pwValue) && capitals.test(pwValue)) {
                    pwInput.classList.add("outline-0");
                    pwInput.classList.add("border-btnGreen");
                    pwInput.classList.add("bg-btnGreen/30");
                    pwValid = true;
                } else {
                    pwInput.classList.add("outline-0")
                    pwInput.classList.add("border-linkBlue");
                    pwInput.classList.add("bg-black1");
                    pwValid = false;
                }
            }
        }
    }
    
    
    /*Sign in button validation*/
    function SignInValidation () {
        const btnSignIn = document.getElementById('btn-sign-in');

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
            mailError.classList.add("hidden");
            pwError.classList.add("hidden");
            messageContainerOne.classList.add("flex");
            messageOne.innerText = "Please enter the email and password."
        } else if (mailValid === false) { //Invalid email.
            mailError.style.display = "block";
            pwError.style.display = "none";
            mailError.innerText = '⚠️ Please enter a valid mail(Must contain "@" and ".com").';
        } else if (pwValid === false) { //Invalid password.
            mailError.style.display = "none";
            pwError.style.display = "block";
            pwError.innerText = "⚠️ Please enter a valid password(Must contain at least one number(0-9) and at least one uppercase alphabet)."
        } else { //Checking if password contains the username part of the mail.
            const userName = mailValue.substring(0, mailValue.indexOf("@"));
            if(pwValue.includes(userName)) { //True
                mailError.style.display = "none";
                pwError.style.display = "none";
                messageContainerTwo.style.display = "flex";
                messageTwo.innerText = "Success. Signing in."
                btnSignIn.innerText = "Signing in..."
            } else { //False
                btnSignIn.innerText = "Signing in..."
            }
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
      <div className="block mx-auto sign-in-container">
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <img className="w-11 h-11 my-7 opacity-80" src={githubLogo} alt='github-logo' />
                <h1 className="text-gray1 text-[24px] mb-4 font-light tracking-[-0.5px]">Create an account.</h1>
            </div>

            <div className="message-container-one hidden justify-between items-center text-gray1 font-light text-sm border-errorRed/40 border-[1px] rounded-md mb-4 bg-errorRed/20 w-[280px] p-3">
                <p className='message-one'></p>
                <button onClick={btnOneHandler} className="btn-close-one text-errorRed font-thin text-lg" type="button"></button>
            </div>

            <div className="message-container-two hidden justify-between items-center text-gray1 font-light text-sm border-btnGreen/40 border-[1px] rounded-md mb-4 bg-btnGreen/20 w-[280px] p-3">
                <p className='message-two'></p>
                <button onClick={btnTwoHandler} className="btn-close-two text-btnGreen font-thin text-lg" type="button"></button>
            </div>

            <div className="p-4 rounded-md w-[280px] min-h-[210px] bg-black2 flex flex-col border-[1px] border-borderGray2">
                <form>
                        <label className="text-left text-gray1 mb-2 text-sm font-normal" for='input-mail'>Enter mail address</label>
                        <input className="text-gray1 text-xs px-[12px] py-[5px] focus:outline-none focus:border-linkBlue border-[1px] rounded-md border-borderGray1 w-full bg-black1 mt-1 self-center block" onInput={mailValidation} id='input-mail' type='email' autoComplete='off'/>
                        <p className="text-errorYellow mt-1 text-xs font-thin" id='mail-error'></p>

                    <div className="mt-4 mb-2 flex items-center justify-between">
                        <label className="text-gray1 text-sm font-normal" for='input-pw'>Enter password</label>
                        <a href="#" className="text-linkBlue text-xs">Forgot password?</a>
                    </div>
                    <input className="text-gray1 text-xs px-[12px] py-[5px] focus:outline-none focus:border-linkBlue border-[1px] rounded-md border-borderGray1 w-full bg-black1 mt-1 self-center block" onInput={passwordValidation} id='input-pw' type='password'/>

                    <p className="text-errorYellow mt-1 text-xs font-thin" id='pw-error'></p>
                    
                    <button className="hover:brightness-125  w-full rounded-md py-1 px-4 text-sm text-white mt-4 font-medium bg-btnGreen " onClick={SignInValidation} id='btn-sign-in' type="button">Sign in</button>
                </form>
            </div>
            <div className="w-[280px] text-center border-gray1/50 rounded-md border-[1px] mt-4 p-4">
                <p className="text-sm text-gray1">New to Github?  <button className="text-linkBlue" type='button'>Create an account.</button></p>
            </div>
        </div> 
      </div>
    )
}

export default SignIn