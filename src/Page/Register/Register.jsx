import Lottie from 'lottie-react';
import registerAnimation from '../../assets/Loti/register.json'
import { useContext } from 'react';
import AuthContext from '../../ConText/AuthContext/AuthContext';

const Register = () => {
    const { CreateUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const submitData = { email, password }
        console.log(submitData)

        CreateUser(email, password)
        .then((result)=>{
            console.log(result.user)
            form.reset();
        })
        .catch((error)=>{
            console.log(error.message)
        })


    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <form onSubmit={handleRegister}>
                                <h1 className="text-5xl font-bold">Register Now!</h1>
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name='password' />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;