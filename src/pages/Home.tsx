import { Box } from '@mui/material';
import {Banner} from '../components/Home/Banner';

const Home = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                
            }}
        >
            <Banner />
            
            
        </Box>

    );
};
export default Home;