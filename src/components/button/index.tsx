import React from 'react'
import ButtonWrapper from './styles'

const Button = ( children: any, type: any, kind: any, size: any, style: any, className: any, icon: any, onClick: any, dataTip: any, dataFor: any, disabled: any, ...otherProps: any ) => {

    return (
        <>
            <ButtonWrapper 
                className={`${kind}` + (size ? ' '+size : '') + (className ? ' '+className : '') + (icon ? ' icon' : '')}
                {...otherProps}
                onClick={onClick}
                disabled={disabled}
                type={type}
                style={style}
                icon={icon ? '\\'+icon : ''}
                // Tooltip:
                data-tip={dataTip}
                data-for={dataFor}
            >
                {icon && 
                    <i></i>
                }
                {children}
            </ButtonWrapper>
        </>
    )
}

export default Button;