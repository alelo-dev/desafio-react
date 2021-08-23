import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import {darken} from 'polished'
interface ContainerProps{
    type?: 'promo' | 'card' | 'info'
}

export const Container = styled.div<ContainerProps>`
    display: block;
    max-width: 420px;
    min-width: 250px;
    margin: 10px;
    height: fit-content;
    padding: 15px 10px;
    border-radius: 5px;
    margin-top: 20px;
    float: left;
    width: 100%;
    #promo{
        background: ${props => props.theme.colors.green900};
        text-align: center;
        padding: 1rem 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 16px;
        h2{
            font-size: 1.5rem;
            color: ${({theme})=> theme.colors.gray100 };
        }
        a > img{
            width: 100px;
            margin-left: 1rem;
        }
    }
    #card{
        border-radius: 16px;
        background: ${props => props.theme.colors.green500};
        min-height: 160px;
        text-align: center;
        p{
            text-align: center;
            padding: 1rem;
            font-size: 0.75rem;
            font-weight: bold;
            color: ${props => props.theme.colors.gray800};
        }
    }
    #info{
        border-radius: 16px;
        min-height: 160px;
        background: ${props => props.theme.colors.green900};
        text-align: center;
        padding: 1rem;
        h2{
            color: ${props => props.theme.colors.green500};
            font-size: 1.5rem;
        }
    }

`

export const GetCardButton = styled(Button)`
    color: ${props => props.theme.colors.green900};
    background: ${props => props.theme.colors.green500};
    &:hover{
        background-color: ${props => darken(0.1, props.theme.colors.green500)};
        color: ${props => props.theme.colors.green900};
    }
`