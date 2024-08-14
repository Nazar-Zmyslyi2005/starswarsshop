import Box from "@mui/material/Box";
import { styled, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

export const Footer = () => {
    return (
        <StyledBox>
            <Typography variant="h6" component="div">
                StarWars Shop
            </Typography>
            <SocialIcons>
                <a href="https://www.instagram.com/nazarzmyslyi/#" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://www.facebook.com/share/kGiryW7L9Cs8iTq5/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://t.me/BROOKISAME" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon />
                </a>
            </SocialIcons>
        </StyledBox>
    );
};

const StyledBox = styled(Box)`
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 60px;
    background: black;
    color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-family: 'Star Jedi', sans-serif;
`;

const SocialIcons = styled(Box)`
    display: flex;
    gap: 15px;

    a {
        color: yellow;
        transition: color 0.3s ease-in-out;
    }

    a:hover {
        color: white;
    }

    svg {
        font-size: 28px;
    }
`;
