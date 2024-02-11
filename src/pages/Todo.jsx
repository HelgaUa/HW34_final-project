import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from '@mui/icons-material/Directions';
import Container from "../ui/components/InputField/styles.jsx";

export function Todo() {
    const items = [
        {id: '1', text: 'MUI'},
        {id: '2', text: 'React'}
    ];

    return(
        <Box sx={{
            width: '100%',
            marginTop: '10px',
            borderRadius: '5px'
        }}>
            <Container component='div'>
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Add a task"
                    inputProps={{'aria-label': 'search google maps'}}
                />
                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                <IconButton color="primary" sx={{p: '10px'}} aria-label="directions">
                    <DirectionsIcon/>
                </IconButton>
            </Container>

            <List sx={{
                bgcolor: 'background.paper',
            }}>
                {items.map((item) => {
                    const { id, text } = item;

                    return (
                        <ListItem
                            key={id}
                            disablePadding
                        >
                            <ListItemButton component='label' dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        //checked={checked.indexOf(value) !== -1}
                                        // tabIndex={-1}
                                        // disableRipple
                                        inputProps={{ 'aria-labelledby': text }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={text}>{text}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>

    )
}