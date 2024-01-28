
import { Box, Stack } from '@mui/material';
import { Outlet } from "react-router-dom";
import Navbarmenu from './components/mui/Navbarmenu';

const Layout = () => {
    return (
        <>
            <Box style={{backgroundColor:'red'}}>
                {/* Navbar */}
                <Navbarmenu/>
                <Stack direction={"row"} spacing={2} justifyContent={'space-evenly'}>
                    <Outlet />
                </Stack>
                
            </Box>
        </>
    );
};
export default Layout;
