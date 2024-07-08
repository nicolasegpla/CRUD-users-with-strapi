import { fn } from "@storybook/test";
import ModalEmailSendForgotPassword from "./index";







export const ActionsData = {
    navigateToLogin: fn()
  };


export default {
    component: ModalEmailSendForgotPassword,
    title: "ModalEmailSendForgotPassword",
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
      },
    args: {
        onClick: fn(),
        label: 'Continue',
        default: true,
      },
    
}
