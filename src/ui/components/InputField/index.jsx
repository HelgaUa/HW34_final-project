import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import Box from '@mui/material/Box';
import Container from "./styles.jsx";
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../../engine/todo/redux/selectors.js";
import {setDataAsyncAction} from "../../../engine/todo/saga/asyncActions.js";
import { useFormik, FormikProvider, Form } from "formik";
import {inputValidate} from "./inputValidate.js";

export function InputField() {
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

    return (
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
                    <IconButton type='submit'  color="primary" disabled={ loading || !!Object.keys(formik.errors).length } sx={{p: '10px'}} aria-label="directions">
                        <DirectionsIcon/>
                    </IconButton>
                </Container>
            </Form>

        </FormikProvider>
    )
}