import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: ${(props) => props.theme.black};
    justify-content: center;
    display: grid;
    color: ${(props) => props.theme.white};
    align-items: center;
    padding: 50px;
`;

const FooterLogo = styled.div`
    display: flex;
    justify-content: center;
`;

const WhiteLogo = () => {
    return (
        <FooterLogo>
            <svg
                width="89"
                height="35"
                viewBox="0 0 89 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_16_165)">
                    <path
                        d="M8.41206 28.3824H19.2509V34.3135H0V30.1043L10.2937 15.735H0.47998V9.80386H18.772V14.0069L8.41206 28.3824Z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M27.7229 24.6571C28.5691 27.7292 30.8638 29.2648 34.6071 29.2641C37.0153 29.2641 38.838 28.4471 40.0752 26.8132L45.1532 29.7543C42.7457 33.2507 39.1986 34.999 34.5119 34.999C30.4756 34.999 27.2367 33.7735 24.7955 31.3225C22.3542 28.8716 21.1335 25.7836 21.1335 22.0587C21.1335 18.3663 22.338 15.2853 24.7468 12.8156C27.1557 10.346 30.248 9.1122 34.0237 9.11428C37.6035 9.11428 40.5572 10.356 42.8847 12.8395C45.2122 15.323 46.3759 18.3951 46.3759 22.0556C46.3706 22.9266 46.2889 23.7954 46.1318 24.6519L27.7229 24.6571ZM27.6246 19.7552H40.0772C39.7193 18.088 38.979 16.8459 37.8563 16.0289C36.7454 15.2168 35.4029 14.787 34.0289 14.8034C32.3351 14.8034 30.9352 15.2365 29.829 16.1026C28.7229 16.9688 27.9888 18.1863 27.6267 19.7552H27.6246Z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M73.2786 34.3135H65.9548L57.069 23.1772V34.3135H50.7703V0H57.069V20.6307L65.4665 9.80386H72.9859L63.1732 21.9133L73.2786 34.3135Z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M76.4037 34.3135V9.80386H82.7013V34.3135H76.4037Z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M82.7013 9.80386V3.48016H89V9.80386H82.7013Z"
                        fill="#FFFFFF"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_16_165">
                        <rect width="89" height="35" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </FooterLogo>
    );
};

const Container = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: ${(props) =>
        props.theme[props.backgroudColor] || props.theme.white};
    border: ${(props) => props.borderThickness}px solid
        ${(props) => props.theme[props.borderColor] || props.theme.black};
    border-radius: ${(props) => props.borderRadius}px;
    box-shadow: ${(props) => props.shadowThickness}px
        ${(props) => props.shadowThickness}px
        ${(props) => props.shadowColor || props.theme.black};
    color: ${(props) => props.theme[props.color] || props.theme.black};
`;

const FooterContent = styled.div`
    display: flex;
    padding-top: 50px;
    gap: 50px;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const FooterItem = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FooterEnd = styled.div`
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: space-between;
    opacity: 40%;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    padding-top: 50px;
    width: 80vw;
`;

const FooterEndRight = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }
`;

const Footer = (props) => {
    return (
        <FooterContainer>
            <WhiteLogo />
            <FooterContent>
                <FooterItem
                    height={300}
                    width={300}
                    backgroudColor="black"
                    borderThickness={2}
                    borderColor="white"
                    borderRadius={10}
                    shadowThickness={10}
                    shadowColor="white"
                    color="white"
                >
                    <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M45.9563 25.5936C45.5063 25.5936 45.1032 25.4342 44.747 25.1155C44.3907 24.7967 44.1751 24.3936 44.1001 23.9061C43.5751 20.0811 41.9438 16.8092 39.2063 14.0905C36.4688 11.3717 33.2063 9.73109 29.4188 9.16859C28.8938 9.09359 28.472 8.87796 28.1532 8.52171C27.8345 8.16546 27.6751 7.74359 27.6751 7.25609C27.6751 6.69359 27.8626 6.23421 28.2376 5.87796C28.6126 5.52171 29.0626 5.38109 29.5876 5.45609C34.3876 6.01859 38.4845 8.00609 41.8782 11.4186C45.272 14.8311 47.2501 18.9373 47.8126 23.7373C47.8876 24.2623 47.747 24.703 47.3907 25.0592C47.0345 25.4155 46.5563 25.5936 45.9563 25.5936ZM35.8876 25.5936C35.5126 25.5936 35.1376 25.4623 34.7626 25.1998C34.3876 24.9373 34.1251 24.5811 33.9751 24.1311C33.6376 22.9686 33.0376 21.9655 32.1751 21.1217C31.3126 20.278 30.3188 19.6686 29.1938 19.2936C28.7438 19.1436 28.3782 18.8998 28.097 18.5623C27.8157 18.2248 27.6751 17.8498 27.6751 17.4373C27.6751 16.7998 27.8813 16.2936 28.2938 15.9186C28.7063 15.5436 29.2126 15.4498 29.8126 15.6373C31.7251 16.1248 33.3845 17.0717 34.7907 18.478C36.197 19.8842 37.1813 21.5623 37.7438 23.5123C37.8938 24.0748 37.7813 24.5623 37.4063 24.9748C37.0313 25.3873 36.5251 25.5936 35.8876 25.5936ZM44.6063 47.9811C39.9188 47.9811 35.2688 46.8373 30.6563 44.5498C26.0438 42.2623 21.9001 39.2811 18.2251 35.6061C14.5501 31.9311 11.5688 27.778 9.28135 23.1467C6.99385 18.5155 5.8501 13.8748 5.8501 9.22484C5.8501 8.28734 6.16885 7.49984 6.80635 6.86234C7.44385 6.22484 8.23135 5.90609 9.16885 5.90609H16.9876C17.8501 5.90609 18.5907 6.15921 19.2095 6.66546C19.8282 7.17171 20.2313 7.87484 20.4188 8.77484L21.8813 15.3561C21.9938 16.1436 21.9751 16.8373 21.8251 17.4373C21.6751 18.0373 21.3563 18.5623 20.8688 19.0123L15.1313 24.4686C17.0813 27.6936 19.247 30.478 21.6282 32.8217C24.0095 35.1655 26.6626 37.1436 29.5876 38.7561L35.1563 33.1311C35.6813 32.5686 36.272 32.1842 36.9282 31.978C37.5845 31.7717 38.2688 31.7623 38.9813 31.9498L45.0001 33.3561C45.9376 33.5811 46.6595 34.003 47.1657 34.6217C47.672 35.2405 47.9251 35.9998 47.9251 36.8998V44.6623C47.9251 45.5998 47.597 46.3873 46.9407 47.0248C46.2845 47.6623 45.5063 47.9811 44.6063 47.9811Z"
                            fill="#A4D677"
                        />
                    </svg>
                    <h3>+91 7738 617 600</h3>
                </FooterItem>
                <FooterItem
                    height={300}
                    width={300}
                    backgroudColor="black"
                    borderThickness={2}
                    borderColor="white"
                    borderRadius={10}
                    shadowThickness={10}
                    shadowColor="white"
                    color="white"
                >
                    <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.15615 45.7875C6.95615 45.7875 5.91553 45.3469 5.03428 44.4656C4.15303 43.5844 3.7124 42.5438 3.7124 41.3438V12.6562C3.7124 11.4188 4.15303 10.3594 5.03428 9.47813C5.91553 8.59688 6.95615 8.15625 8.15615 8.15625H45.8437C47.0812 8.15625 48.1405 8.59688 49.0218 9.47813C49.903 10.3594 50.3437 11.4188 50.3437 12.6562V41.3438C50.3437 42.5438 49.903 43.5844 49.0218 44.4656C48.1405 45.3469 47.0812 45.7875 45.8437 45.7875H8.15615ZM26.9999 28.575C27.2249 28.575 27.4312 28.5375 27.6187 28.4625C27.8062 28.3875 28.0124 28.2937 28.2374 28.1812L45.1687 16.9875C45.3562 16.875 45.5155 16.7062 45.6468 16.4812C45.778 16.2562 45.8437 15.9937 45.8437 15.6937C45.8437 15.0937 45.5718 14.6156 45.028 14.2594C44.4843 13.9031 43.9312 13.9125 43.3687 14.2875L26.9999 24.9187L10.6874 14.2875C10.1249 13.95 9.5624 13.9312 8.9999 14.2312C8.4374 14.5312 8.15615 15 8.15615 15.6375C8.15615 15.9 8.23115 16.1531 8.38115 16.3969C8.53115 16.6406 8.6999 16.8375 8.8874 16.9875L25.7624 28.1812C25.9874 28.2937 26.1937 28.3875 26.3812 28.4625C26.5687 28.5375 26.7749 28.575 26.9999 28.575Z"
                            fill="#FEB3EB"
                        />
                    </svg>

                    <h3>zeki@gmail.com</h3>
                </FooterItem>
            </FooterContent>
            <FooterEnd>
                <p>ALL RIGHTS RESERVED BY ZEKI.IN</p>
                <FooterEndRight>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS AND CONDITIONS</p>
                </FooterEndRight>
            </FooterEnd>
        </FooterContainer>
    );
};

export default Footer;
