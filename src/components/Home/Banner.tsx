import { Box, Toolbar, Button } from "@mui/material"
import BannerImg from "../../assets/images/group-photo1.webp"


export const Banner = () => {


    return (
        <Box
        sx={{
            py: 8,  
        }}
        >
            <Box 
             component="img"
            alt="banner"
            src={BannerImg}
            sx={{
                width: '100%',
                height: '550px',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                borderRadius: 2,                

            }}
            />
            <Toolbar
            sx={{
                position: 'absolute',
                bottom: '5%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
            }}
            >
               {/* circle buttons with white border radius */}
                <Box
                sx={{
                    display: 'flex',
                    gap: {xs: 2, md: 4, lg: 10},
                    justifyContent: 'center',
                }}
                >
                    <Box
                    sx={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        bgcolor: 'white',
                       
                    }}
                    >
                        {/* inner circle with a logo*/}
                        <Button
                        sx={{
                            width: '125px',
                            height: '125px',
                            borderRadius: '50%',
                            bgcolor: 'secondary.main',
                            position: 'relative',
                            top: '12.5px',
                        }}
                       >

                        </Button>
                            



                    </Box>
                    <Box
                    sx={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        bgcolor: 'white',
                    }}
                    >
                          <Button
                        sx={{
                            width: '125px',
                            height: '125px',
                            borderRadius: '50%',
                            bgcolor: 'black',
                            position: 'relative',
                            top: '12.5px',
                        }}
                       >
                            
                            </Button>

                    </Box>
                    <Box
                    sx={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        bgcolor: 'white',
                    }}
                    >
                          <Button
                        sx={{
                            width: { lg: "125px"},
                            height: {lg: "125px"},
                            borderRadius: '50%',
                            bgcolor: 'gray',
                            position: 'relative',
                            top: '12.5px',
                        }}
                       >

                       </Button>
                        </Box>
                </Box>

                

            </Toolbar>
            
            
              
        </Box>
    )


}
