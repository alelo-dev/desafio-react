import { IconType } from 'react-icons';

import * as S from './styles';

export type SizeButton = 'fullSize' | 'small' | 'medium' | 'large'
export type ColorButton = 'primary' | 'secondary' | 'default' | 'link'

type ButtonProps = {
  label?: string,
  StartIcon?: IconType,
  size?: SizeButton,
  color?: ColorButton,
  onClick?: () => void
}

export default function Button({ 
  label = '', 
  StartIcon, size = 'medium', 
  color = 'default',
  onClick,
  ...rest 
  }: ButtonProps){

  const handleIconSize  =  (size: SizeButton) => {
    switch (size) {
      case 'fullSize':
        return 25
      case 'large':
        return 25
      case 'medium':
        return 20
      case 'small':
        return 15
    } 
  }

  return (
    <S.Button onClick={onClick} color={color} size={size} {...rest}>
      {StartIcon && <StartIcon size={handleIconSize(size)} />}
      {label.toUpperCase()}
    </S.Button>
  );
};
