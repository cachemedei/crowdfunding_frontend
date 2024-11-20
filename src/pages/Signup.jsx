import './Signup.css'

const Signup = () => {
    return (
        <section className='signup'>
            <h1>Sign Up</h1>
            <form>
                <label htmlFor='fname'>First Name:</label>
                <input id='fname' type='text' />

                <label htmlFor='lname'>Last Name:</label>
                <input id='lname' type='text' />

                <label htmlFor='email'>Email:</label>
                <input id='email' type='email' />
                
                <label htmlFor='password'>Password:</label>
                <input type='password' />

                <button>Create Account</button>
            </form>
        </section>
    );
};
export default Signup;
