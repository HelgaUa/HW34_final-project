import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default styled(Paper)((arg) => {
    return (
        {
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 800,
            margin: 'auto'
        }
    )
})