import LoginComp from "../components/LoginComp";

const Login = () => {
    return (
        <>
            <LoginComp onLogin={
                function (username: string, password: string): void {
                    throw new Error("Function not implemented.");
                } 
            } />
        </>
    )
};

export default Login