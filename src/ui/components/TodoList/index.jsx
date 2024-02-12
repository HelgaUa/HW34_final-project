import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../../engine/todo/redux/selectors.js";
import todoSlice from "../../../engine/todo/redux/todoSlice.js";
import { useEffect } from "react";
import { getDataAsyncAction } from '../../../engine/todo/saga/asyncActions.js';
// import { useFormik } from "formik";


export function TodoList() {
    const items = useSelector(selectors.itemsSelector);
    const dispatch = useDispatch();
    // const handleRemoveItem = (id) => {
    //     dispatch(todoSlice.actions.removeItem(id));
    // }

    useEffect(() => {
        dispatch(getDataAsyncAction());
    }, []);
    const handleToggle = (id) => {
        dispatch(todoSlice.actions.toggleItem(id));
    }

    return(
        <Box sx={{
            width: '100%',
            marginTop: '10px',
            borderRadius: '5px'
        }}>
            <List sx={{
                bgcolor: 'background.paper',
                borderRadius: '5px',
            }}>
                {
                    items.length === 0
                    ? <Box sx={{padding: '10px'}}>No items</Box>
                    : (
                        items.map((item) => {

                            return (
                                <ListItem
                                    key={item.id}
                                    disablePadding
                                    //onClick = {()=> handleRemoveItem(item.id)}
                                >
                                    <ListItemButton component='label' dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={item.isChecked}
                                                onClick = {() => handleToggle(item.id)}

                                                // checked={checked.indexOf(value) !== -1}
                                                // tabIndex={-1}
                                                // disableRipple
                                                inputProps={{ 'aria-labelledby': item.text }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={item.id}>{item.text}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })
                    )
                }
            </List>
        </Box>

    )
}