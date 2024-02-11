import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";


export function Header() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: '15px',
            borderBottom: '1px solid #797979',
            }}>
            <Typography component='h1' sx={{ fontSize: '30px', color: '#1876d1' }}>
                TODO-list
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button href="/todo">Todo</Button>
                <Button href="/info">Info</Button>
            </Stack>
        </Box>

    )
}