export default class SignUp {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/
            `
        <main id="signUp" class="page">
            <section class="pages_body" id="signup_body">
                <div class="parts">
                    <img id="part1" src="/Images/app/BSSFood.png" alt="">
                
                <!-- signup form -->  
                <div class="parts" id="part2">
                    <header class="topbar">
                        <h1>Sign Up</h1>
                     </header>
                    <p> please enter your personal details to continue with the app.</p>

                        <form class="form_container">

                            <input id="signup-firstname" type="text" name="firstname" placeholder="Firstname">
                            <input id="signup-lastname" type="text" name="lastname" placeholder="Lastname">
                            <input id="signup-address" type="text" name="address" placeholder="Address">
                            <input id="signup-city" type="text" name="city" placeholder="City name">
                            <input id="signup-email" type="text" name="email" placeholder="Email">
                            <input id="signup-phone" type="number" name="phone" placeholder="Phone number">
                            <input id="signup-password" type="password" placeholder="Password" autocomplete="new-password">
                            <input id="signup-password-check" type="password" placeholder="Confirm password" autocomplete="new-password">

                            <button type="button" id="btn-signup">Sign up</button>
                        </form>
                    
                </div>  
                </div> 
                  
                <div class="parts" id="part3">
                    <h1>Hello, Friend!</h1>
                    <p>Please enter your personal details and start your journey.</p>
                    <div class="inner_child">
                        <p>Already have an account?</p>
                        <a href="#logIn"><button>LOG IN</button></a>
                    </div>
                </div>  

            </section>
        </main>

    `;
    }
}