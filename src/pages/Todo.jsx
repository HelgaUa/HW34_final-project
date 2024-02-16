import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import selectors from "../engine/todo/redux/selectors.js";
import {useEffect} from "react";
import {getDataAsyncAction, checkingItemsAction, deleteItemAction} from '../engine/todo/saga/asyncActions.js';
import {Form, FormikProvider, useFormik} from "formik";
import {setDataAsyncAction} from "../engine/todo/saga/asyncActions.js";
import {inputValidate} from "../ui/components/InputField/inputValidate.js";
import Container from "../ui/components/InputField/styles.jsx";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import DirectionsIcon from "@mui/icons-material/Directions";


export function Todo() {
    const items = useSelector(selectors.itemsSelector);
    const search = useSelector(selectors.searchSelector);
    const dispatch = useDispatch();
    const loading = useSelector(selectors.loadingSelector);
    const formik = useFormik({
        initialValues: {
            inputTodo: '',
        },
        onSubmit: (values) => {
            dispatch(setDataAsyncAction(values));
            formik.resetForm();
            console.log(values)
        },

        validate: (values) => inputValidate(values),
    })
    const sortedItems = [...items].sort((a, b) => (a.isChecked === b.isChecked)
        ? 0
        : a.isChecked
            ? 1
            : -1);

    const filteredItems = search.trim() === ""
        ? sortedItems
        : sortedItems.filter(item => item.text.includes(search.trim()))

    const handleRemoveItem = (id) => {
        dispatch(deleteItemAction(id));
    }

    useEffect(() => {
        dispatch(getDataAsyncAction());
    }, []);

    const handleToggle = (id) => {
        dispatch(checkingItemsAction(id));
    }

    return (
        <>
            <FormikProvider value={formik}>
                <Form>
                    <Container component='div'>
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Add a task"
                            inputProps={{'aria-label': 'search google maps'}}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.inputTodo}
                            name="inputTodo"
                        />
                        {formik.touched.inputTodo && formik.errors.inputTodo
                            ? <Box sx={{color: 'red'}}>{formik.errors.inputTodo}</Box>
                            : null
                        }
                        <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                        <IconButton type='submit' color="primary"
                                    disabled={loading || !!Object.keys(formik.errors).length} sx={{p: '10px'}}
                                    aria-label="directions">
                            <DirectionsIcon/>
                        </IconButton>
                    </Container>
                </Form>
            </FormikProvider>
            <Box sx={{
                flex: 1,
                width: '100%',
                marginTop: '10px',
                paddingBottom: '50px',
                borderRadius: '5px'
            }}>
                <List sx={{
                    bgcolor: 'background.paper',
                    borderRadius: '5px',
                }}>
                    {
                        filteredItems.length === 0 && search.length === 0
                            ? <Box sx={{padding: '10px', color: 'green'}}>There is no items!</Box>
                            : (
                                filteredItems.map((item) => {
                                    return (
                                        <ListItem
                                            key={item.id}
                                            disablePadding
                                        >
                                            <ListItemButton component='label' dense>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={item.isChecked}
                                                        onClick={() => handleToggle(item.id)}
                                                        inputProps={{'aria-labelledby': item.text}}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText id={item.id}>{item.text}</ListItemText>
                                                <IconButton
                                                    aria-label="delete"
                                                    sx={{color: '#1876d1'}}
                                                    onClick={() => handleRemoveItem(item.id)}
                                                >
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })
                            )
                    }
                    {filteredItems.length === 0 && search.length !== 0
                        && <Box sx={{padding: '10px', color: 'green'}}>No one item found!</Box>}
                </List>
            </Box>
        </>
    )
}