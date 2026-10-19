import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div>
                    <Join> Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1> Welcome to your Professional Community</h1>
                    <img src="/images/login-hero.svg" alt="" />
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
padding: 0px;
`;
const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;

& > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px){
    padding: 0 5px;
    }
    @media (max-width: 480px){
        width: 110px;
        flex-shrink: 0;
    }
}

& > div {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

@media (max-width: 768px){
    padding: 12px 16px 16px;
}

`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 24px;
    text-decoration: none;
    border-radius: 25px;
    color: rgba(0,0,0, 0.5);
    margin-right: 12px;
    white-space: nowrap;
    &:hover {
        background-color: rgba(0,0,0, 0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;

    }
    @media (max-width: 480px){
        font-size: 14px;
        padding: 8px 12px;
        margin-right: 6px;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    white-space: nowrap;
    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }
    @media (max-width: 480px){
        font-size: 14px;
        line-height: 32px;
        padding: 4px 16px;
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 50px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 0;
    }

    h1 {
        padding-bottom: 0;
        flex: 1 1 50%;
        width: 50%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img {
        flex: 1 1 50%;
        width: 50%;
        max-width: 600px;
        height: auto;
        object-fit: contain;
        @media (max-width: 768px){
            width: 100%;
            max-width: 100%;
        }
    }
`;

const Form = styled.div`
    margin-top: 30px;
    width: 408px;
    @media ( max-width: 768px){
        margin: 20px auto 0;
        width: 100%;
        max-width: 408px;
        padding: 0 16px;
        box-sizing: border-box;
    }
    `;
const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    padding: 15px 50px;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb( 0 0 0 / 0%);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0,0,0,0.6);
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0,0,0,0.75);
    }
    @media (max-width: 768px){
        width: 100%;
        padding: 15px 20px;
        font-size: 18px;
        box-sizing: border-box;
    }

`;

export default Login;