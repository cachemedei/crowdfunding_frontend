import './Login.css';

const Login = () => {
    return (
        <section className='login'>
            <h1>Welcome back</h1>
            <form>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='email' />

                <label htmlFor='password'>Password:</label>
                <input type='password' />

                <button>Log In</button>
            </form>
        </section>
    );
};
export default Login;
