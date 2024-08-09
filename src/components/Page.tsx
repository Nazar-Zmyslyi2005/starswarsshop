import {Header} from "./Header.tsx";
import {HomePage} from "./HomePage.tsx";
import {Footer} from "./Footer.tsx";
import * as React from "react";
import {styled} from "@mui/material";
import Box from "@mui/material/Box";

export const Page = () => {
    return (
        <PageContainer>
            <Header/>
            <HomePage/>
            <Footer/>
        </PageContainer>
    );
};

const PageContainer = styled(Box)`
    width: 100%;
    height: 100%;
`;