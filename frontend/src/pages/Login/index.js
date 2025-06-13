import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../services/authService';

function Login({ onLoginSuccess }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(formData.email, formData.password, formData.remember);
            // Lưu user vào localStorage để Header nhận diện đăng nhập
            if (data && data.data && data.data.user) {
                localStorage.setItem('user', JSON.stringify(data.data.user));
                console.log('User info saved to localStorage:', data.data.user);
                if (onLoginSuccess) onLoginSuccess(); // Gọi callback để ẩn form login
            } else {
                console.log('No user info returned from API');
            }
            // window.location.href = '/'; // Đã comment lại để ở lại trang đăng nhập
        } catch (error) {
            // Xử lý khi đăng nhập thất bại
            alert(error.message || 'Login failed');
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/" className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    E-Learning
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="flex justify-center text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
                            Sign in
                        </h1>
                        <form className="space-y-4 md:space-y-2" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg text-base"
                                    placeholder="example@gmail.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg text-base"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            name="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            checked={formData.remember}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="ml-3 text-base">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <Link
                                    to="/forgot-password"
                                    className="text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>

                            {/* Ngăn cách */}
                            <div className="flex items-center my-4">
                                <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
                                <span className="mx-4 text-gray-400 text-base">or</span>
                                <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
                            </div>

                            {/* Nút đăng nhập mạng xã hội */}
                            <div className="flex justify-center gap-4 mb-4">
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition overflow-hidden p-0 mt-2"
                                    onClick={() => window.location.href = '/api/auth/google'}
                                    aria-label="Sign in with Google"
                                >
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-full h-full object-contain" />
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-10 h-12 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition overflow-hidden p-0"
                                    onClick={() => window.location.href = '/api/auth/facebook'}
                                    aria-label="Sign in with Facebook"
                                >
                                    <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" className="w-full h-full object-contain" />
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition overflow-hidden p-0 mt-2"
                                    onClick={() => window.location.href = '/api/auth/github'}
                                    aria-label="Sign in with GitHub"
                                >
                                    <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-full h-full object-contain" />
                                </button>
                            </div>

                            <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{' '}
                                <Link
                                    to="/register"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
