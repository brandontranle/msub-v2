import { Container } from '@mui/material';
import {Banner} from '../components/Home/Banner';

const Home = () => {
    return (
        <Container
            sx={{
                bgcolor: 'background.paper',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                
            }}
        >
            <Banner />
            
            
        </Container>

    );
};
export default Home;