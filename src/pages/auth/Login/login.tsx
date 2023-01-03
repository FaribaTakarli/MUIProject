import { Box, Button, TextField, Typography } from "@mui/material"
import { useAuth } from "./useAuth"
const Login = () => {
    const { UserName, userlogin, changeName } = useAuth();
    return (
        <Box className="w-full flex flex-col justify-center p-8">
            <Typography variant="body1" >Add new Product </Typography>
            <TextField fullWidth label="Name" focused className="m-4" value={UserName} onChange={(event) => changeName(event.target.value)} />
            <Button className="mx-auto w-1/2" onClick={userlogin} variant="contained" >login</Button>
        </Box>
    )
}


export default Login