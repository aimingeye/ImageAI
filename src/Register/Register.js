import React from "react";
import './reg.css'

const Register = ({onRouteChange}) =>{
    return (
        <article className="br4 ba b--black-10 mv4 w-50 w-40-m w-20-1 mw6 tl ph3 shadow-4">
        <main className="pa4 black-80">
        <form className="measure">
        <fieldset
        id="sign_up"
        className="ba b--transparent ph0 mh0"
        >
            <legend className="f1 fw6 ph0 mh0">
            Register
            </legend>
            <div className="mt3">
                <label
                className="db fw6 lh-copy f6"
                htmlFor="name"
                >
                Name
                </label>
                <input
                className="pa2 input-reset ba bg-transparent b--white hover-bg-black hover-white inp inpform"
                type="text"
                name="name"
                id="name"
                />
            </div>
            <div className="mt3">
                <label
                className="db fw6 lh-copy f6"
                htmlFor="email-address"
                >
                Email
                </label>
                <input
                className="pa2 input-reset ba bg-transparent b--white hover-bg-black hover-white inp inpform"
                type="email"
                name="email-address"
                id="email-address"
                />
            </div>
            <div className="mv3">
                <label
                className="db fw6 lh-copy f6"
                htmlFor="password"
                >
                Password
                </label>
                <input
                className="b pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white inp inpform"
                type="password"
                name="password"
                id="password"
                />
            </div>
        </fieldset>
            <section className="buttons">
            <div className="container">
                <input
                onClick={()=>onRouteChange('signin')}
                className="btn btn-6 boxsz center"
                type="submit"
                value="Register"
                />
            </div>
            </section>
        </form>
        </main>
        </article>
    );
}

export default Register;