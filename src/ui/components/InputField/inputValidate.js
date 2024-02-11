export function inputValidate(values) {
    let errors = {}
    if(!values.inputTodo) {
        errors.inputTodo = 'Required!'
    }
    return errors;
}