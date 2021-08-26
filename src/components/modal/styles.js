import styled from 'styled-components'

const ModalWrapper = styled.div`
    // start dimmer
    animation-fill-mode: both;
    animation-duration: .5s;
    background-color: rgba(0,0,0,0.5);
    display: flex !important;
    align-items: center;
    flex-direction: column;
    top: 0!important;
    left: 0!important;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    -webkit-box-align: center;
    padding: 1em;
    perspective: 2000px;
    position: fixed;
    opacity: 1;
    line-height: 1;
    transform-origin: center center;
    visibility: visible!important;
    -webkit-box-pack: center;
    user-select: none;
    will-change: opacity;
    z-index: 1000;

    // start modal box
    .modal {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.05);
      display: block !important;
      flex: 0 0 auto;
      padding: 16px 0px 0px 0px;
      position: absolute;
      text-align: left;
      visibility: visible!important;
      max-height: 90%;
      overflow-y: auto;
      overflow-x: hidden;
      width: 1112px;
      margin: 0;
      user-select: text;
      will-change: top,left,margin,transform,opacity;
      z-index: 1001;
      scrollbar-width: 22px;
      scrollbar-color: #888A8D white;

      &::-webkit-scrollbar {
        width: 22px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #888A8D;
        border-radius: 20px;
        border: 8px solid white;
      }

      header {
        display: flex;
        justify-content: space-between;
        padding: 0px 16px 32px 48px;
        width: 100%;

        div:first-child {
          flex-grow: 1;

          h2 {
            height: 36px;
            color: #0E7F61;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0;
            line-height: 36px;
            margin-top: 15px;
          }
        }

        button {
          border-radius: 10em;
          padding: 12px 16px;
          cursor: pointer;
          display: inline-block;
          min-height: 1em;
          outline: 0;
          border: none;
          vertical-align: baseline;
          background: #e0e1e2 none;
          color: rgba(0,0,0,.6);

          i {
            font-size: 16px;
          }
        }

        .info {
          margin: 26px 40px 0 0;

          h5 {
            color: #282828;
            font-weight: 300;
            font-size: 18px;
            opacity: 0.7;

            strong {
              font-weight: 700;
            }
          }
        }
      }

      &.negative {
        header {
          h2 {
            color: #D7464D!important;
          }
        }
      }

      &.compact {
        width: fit-content;
      }

      &.center {
        text-align: center;

        header {
          div:first-child {
            flex-grow: 1;
          }
        }

        h4 {
          color: #525457;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }
      }

      footer {
        background-color: #F7F7F7;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        height: 101px;
        margin: 26px 0 0 0;
        padding: 28px 47px 29px 47px;
      }

      h3 {
        color: #525457;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0;
        line-height: 17px;
        text-transform: uppercase;
      }
    }
`

export default ModalWrapper;