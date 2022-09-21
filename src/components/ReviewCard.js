import styled from "styled-components";

const getStars = (ratings) => {
    let stars = [];

    for (let index = 0; index < ratings; index++) {
        stars.push(
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_55_300)">
                    <path
                        d="M1.32695 12.4L4.88695 15L3.53495 19.187C3.31646 19.8363 3.31369 20.539 3.52706 21.19C3.74042 21.8411 4.1585 22.4058 4.71895 22.8C5.2698 23.2067 5.93734 23.4247 6.6221 23.4212C7.30686 23.4178 7.97219 23.1932 8.51895 22.781L11.9999 20.219L15.4819 22.778C16.0318 23.1824 16.6957 23.4021 17.3783 23.4054C18.0609 23.4087 18.7269 23.1955 19.2807 22.7965C19.8345 22.3974 20.2474 21.833 20.4602 21.1844C20.673 20.5359 20.6747 19.8365 20.4649 19.187L19.1129 15L22.6729 12.4C23.2221 11.9985 23.6303 11.4337 23.8393 10.7863C24.0483 10.139 24.0473 9.44214 23.8366 8.79534C23.6259 8.14854 23.2162 7.58488 22.666 7.18486C22.1158 6.78484 21.4532 6.56892 20.7729 6.56795H16.3999L15.0729 2.43195C14.8643 1.78091 14.4542 1.21297 13.9019 0.81002C13.3496 0.407071 12.6836 0.189941 11.9999 0.189941C11.3163 0.189941 10.6503 0.407071 10.098 0.81002C9.54568 1.21297 9.13563 1.78091 8.92695 2.43195L7.59995 6.56795H3.23095C2.55069 6.56892 1.88814 6.78484 1.33793 7.18486C0.787717 7.58488 0.377989 8.14854 0.16727 8.79534C-0.0434492 9.44214 -0.0443818 10.139 0.164605 10.7863C0.373593 11.4337 0.78181 11.9985 1.33095 12.4H1.32695Z"
                        fill="#F8D457"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_55_300">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        );
    }

    return stars;
};

const ReviewCard = styled.div`
    background-color: ${(props) => props.theme.white};
    min-width: 300px;
    min-height: 350px;
    box-shadow: 10px 10px ${(props) => props.theme.black};
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.black};
    padding: 20px;
    display: grid;
`;

const getRandomcolor = (props) => {
    var colors = ["blue", "green", "pink", "yellow", "purple"];
    var randomNumber = Math.floor(Math.random() * colors.length);
    return props.theme[colors[randomNumber]];
};

// background-color: ${(props) =>
//         typeof props.theme[props.color] !== "undefined"
//             ? props.theme[props.color]
//             : props.theme.beige}
const ReviewCardCompany = styled.div`
    background-color: ${(props) => getRandomcolor(props)};
    box-shadow: 5px 5px ${(props) => props.theme.black};
    transform: skewY(${(props) => (props.anticlock ? "2deg" : "-2deg")});
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.black};
    width: fit-content;
    padding: 20px 40px 20px 40px;
    height: 20px;
    margin-top: -50px;
`;

const ReviewCardRatings = styled.div`
    display: flex;
    justify-content: start;
    gap: 10px;
    margin-top: 50px;
`;

const ReviewCardText = styled.p`
    text-align: left;
    margin-top: 20px;
`;

const ReviewCardCountry = styled.div`
    color: ${(props) => props.theme.black};
    opacity: 40%;
    display: flex;
`;

export default ReviewCard;
export {
    ReviewCard,
    ReviewCardCompany,
    ReviewCardCountry,
    ReviewCardRatings,
    ReviewCardText,
    getStars,
};
