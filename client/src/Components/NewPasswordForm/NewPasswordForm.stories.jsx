import NewPasswordform from "./index";

export default {
    title: 'Componentes/Forms/new-password-form',
}

const Template = ({h1, spanh, ph, buttont, pl, spanl, ...args}) => {
    return NewPasswordform({
        h1,
        spanh,
        ph,
        buttont,
        pl,
        spanl,
        ...args
    })
}

export const Default = Template.bind({})
Default.args = {
    h1: 'PATRON',
    spanh: 'Set your new password',
    ph: 'Your new password should be different from passwords previously used.',
    buttont: 'Confirm',
    pl: 'Back',
    spanl: 'login',
}