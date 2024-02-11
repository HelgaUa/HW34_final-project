import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import selectors from "../../../engine/todo/redux/selectors.js";
import { clearDataAsyncAction } from "../../../engine/todo/saga/asyncActions.js";

export function Footer() {
    const items = useSelector(selectors.itemsSelector);
    const dispatch = useDispatch();
    const onClear = () => {
        dispatch(clearDataAsyncAction());
        localStorage.clear();
    };
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '10px'}}>
            <Chip label={`Number of tasks: ${items.length}`} />
            <Button variant='contained' onClick={onClear} startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    )
}