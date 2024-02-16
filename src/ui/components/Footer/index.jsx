import {useEffect} from "react";
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import selectors from "../../../engine/todo/redux/selectors.js";
import { clearDataAsyncAction } from "../../../engine/todo/saga/asyncActions.js";
import {Form, FormikProvider, useFormik} from "formik";
import todoSlice from "../../../engine/todo/redux/todoSlice.js";

export function Footer() {
    const items = useSelector(selectors.itemsSelector);
    const dispatch = useDispatch();
    const onClear = () => {
        dispatch(clearDataAsyncAction());
        localStorage.clear();
    };

    const formik = useFormik({
        initialValues: {
            search: '',
        },
    });

    useEffect(() => {
        dispatch(todoSlice.actions.setSearch(formik.values.search));
    }, [formik.values.search]);

    const resetSearch = () => {
            formik.setFieldValue('search', '');
            dispatch(todoSlice.actions.clearSearch());
    }

    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'fixed',
            bottom: 0,
            maxWidth: '860px',
            width: '100%',
            boxSizing: 'border-box',
            padding: '10px 30px 30px 30px',
            bgcolor: '#c9e0f7',
            alignItems: 'center',
        }}
        >
            <Chip label={`Number of tasks: ${items.length}`} />
            <Button variant='contained' onClick={onClear} startIcon={<DeleteIcon />}>
                Delete all
            </Button>
            <FormikProvider value={formik}>
                <Form>
                    <Paper
                        component="div"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            name='search'
                            value={formik.values.search}
                            onChange={formik.handleChange}
                        />
                        <IconButton
                            aria-label="delete"
                            type="button"
                            onClick= {resetSearch}
                            sx={{color: '#1876d1'}}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Paper>
                </Form>
            </FormikProvider>
        </Box>
    )
}