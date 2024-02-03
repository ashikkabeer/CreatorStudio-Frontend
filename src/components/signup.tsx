import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
    const router = useRouter();

    useEffect(() => {
        // Function to handle the OAuth flow with Google
        const handleGoogleOAuth = async () => {
            // Perform the necessary OAuth steps with Google
            // ...

            // Redirect to the desired page after successful signup
            router.push('/dashboard');
        };

        handleGoogleOAuth();
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default Signup;
