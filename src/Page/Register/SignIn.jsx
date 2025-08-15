import Lottie from 'lottie-react';
import registerAnimation from '../../assets/Loti/register.json'
import { useContext } from 'react';
import AuthContext from '../../ConText/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



const SignIn = () => {
    
    const {signIn}=useContext(AuthContext)
    const location=useLocation();
    // console.log('signin',location)
    const from = location.state || '/'
    const navigate= useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const submitData = { email, password }
        console.log(submitData)

        signIn(email, password)
        .then((reault)=>{
            console.log(reault.user.email)
            const user = {email: email}
            axios.post('http://localhost:5000/jwt', user)
            .then(res=>{
                console.log(res.data)
            })
        

            navigate(from)
        })
        .catch((error)=>{
            console.loo(error.message)
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
                            <form onSubmit={handleSignIn}>
                                <h1 className="text-5xl font-bold">Login Now!</h1>
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name='password' />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">SignIn</button>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;