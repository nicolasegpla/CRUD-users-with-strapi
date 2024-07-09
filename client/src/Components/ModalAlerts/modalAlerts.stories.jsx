import ModalAlerts from "./index";

export default {
    title: 'molecule',

}

const Template = ({title, text, fn, label, ...args}) => {
    return ModalAlerts({
        title,
        text,
        fn,
        label,
        ...args
    })
}

export const Default = Template.bind({})
Default.args = {
    title: 'titulo de prueba',
    text: 'este es un texto de prueba y nada mas. este es un texto de prueba y nada mas.',
    fn: null,
    label: 'insert text'
}