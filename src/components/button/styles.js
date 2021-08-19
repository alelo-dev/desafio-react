import styled from 'styled-components'

    const ButtonWrapper = styled.button`
      border-radius: 8px;
      border-width: 0;
      outline: 0;
      cursor: pointer;
      color: #01664D;
      display: inline-flex;
      align-items: center;
      font-family: "Museo Sans";
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.44px;
      line-height: 21px;
      // margin-right: 16px;
      padding: 11px 22px;
      position: relative;
      text-transform: uppercase;
      white-space:nowrap;

      &.sm {
        font-size: 12px;
        padding: 8px 16px 5px 16px;
      }

      /* ghost */
      &.ghost {
        background-color: #FFFFFF;
        border-style: solid;
        border-width: 1px;
        border-color: #067C60;
        color: #067C60;

        &:hover {
          background-color: #f4f9f7;
          color: #067C60;
        }

        &:disabled {
          background-color: #f5f5f5;
          color: #737373;
          border-color: #737373;
          opacity: 0.7;
          cursor: default;
        }
      }
      &.ghost > i {
        background-color: #0E7F61;
      }

      /* primary */
      &.primary {
        background-color: #067C60;
        color: #FFF;
      }
      &.primary:hover {
        background-color: #084C3A;
        color: #FFF;
      }
      &.primary:disabled {
        background-color: #a2a2a2;
        color: #FFFFFF;
        cursor: default;
      }

      /* secondary */
      &.secondary {
        background-color: #C8DD52;
        color: #01664D;
      }
      &.secondary:hover {
        background-color: #084C3A;
        color: #FFF;
      }
      &.secondary:disabled {
        background-color: #C3C3C3;
        color: #FFFFFF;
        cursor: default;
      }

      /* cancel */
      &.cancel {
        background-color: #D4131D;
        color: #FFFFFF;

        &:hover {
          background-color: #812A2E;
          color: #FFFFFF;
        }

        &:disabled {
          background-color: #a2a2a2;
          color: #FFFFFF;
          cursor: default;
        }

        &.ghost {
          background: #FFFFFF;
          border-color: #D7464D;
          color: #D7464D;

          &:hover {
            background: #FAEFF4;
          }
        }

        &.icon {
          i::before {
            color: #D7464D;
          }
        }
      }

      &.icon {
        padding-left:44px;

        i::before { 
          content: '${props => props.icon}';
          font-family: "Font Awesome 5 Free";
          font-weight: 700;
          font-style: normal;
          margin-right: 10px;
          pointer-events: none;
          position: absolute;
          left: 22px;
          top: 11px;
          font-size: 12px;
        }
      }

      &.small {
        padding: 8px 16px;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;

        &.icon {
          padding-left: 33px;

          i::before {
            left: 16px;
            top: 8px;
          }
        }
      }
    `

    export default ButtonWrapper;