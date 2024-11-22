import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subtitle?: string;
  buttons: PromptButton[];
  placeHolder?: string;
  type?: 'default' | 'plain-text' | 'secure-text' | undefined;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title,
  subtitle,
  buttons,
  placeHolder,
  defaultValue,
  type,
}: Options) => {
  prompt(title, subtitle, buttons, {
    type: type,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeHolder,
  });
};
