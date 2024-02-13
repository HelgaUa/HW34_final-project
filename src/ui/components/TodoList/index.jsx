import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../../engine/todo/redux/selectors.js";
import { useEffect } from "react";
import {getDataAsyncAction, checkingItemsAction} from '../../../engine/todo/saga/asyncActions.js';


export function TodoList() {
    const items = useSelector(selectors.itemsSelector);
    const dispatch = useDispatch();
    const sortedItems = [...items].sort((a, b) => (a.isChecked === b.isChecked)
        ? 0
        : a.isChecked
            ? 1
            : -1);

    const filteredItems = () => {

        if (formik.values.search.trim() === "") {
            return sortedItems;
        } else {
            return sortedItems.filter(item => item.text.includes(formik.values.search.trim()));
        }
    };

    // const handleRemoveItem = (id) => {
    //     dispatch(todoSlice.actions.removeItem(id));
    // }

    useEffect(() => {
        dispatch(getDataAsyncAction());
    }, []);

    const handleToggle = (id) => {
        dispatch(checkingItemsAction(id));
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
                    sortedItems.length === 0
                    ? <Box sx={{padding: '10px'}}>No items</Box>
                    : (
                            sortedItems.map((item) => {
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