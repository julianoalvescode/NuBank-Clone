import styled from 'styled-components';

export const Body = styled.body`

  background-color: #81259d;

`;

export const Content = styled.main`

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiInputBase-input {
    font-family: 'Nunito';
  }

`

export const FormBox = styled.div`

    background-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    @media  (max-width: 1400px) {
      width: 35%;
    }
    @media (max-width: 1249px) {
      width: 40%;
    }
    height: 520px;

    h2 {
      text-align: center;
    }

    form {
      margin-top: 35px;

      .btn-block {
        text-align: center;
        margin-top: 1.8rem;

        .btn-submit {
          padding: 1.5rem 1rem;
          width: 93%;
          background: none;
          box-shadow: 0;
          border: 1px solid #81259d;
          color: #81259d;
          font-weight: bold;
          border-radius: 4px;
          text-transform: uppercase;
          transition: all 0.1s ease-in;
          cursor: pointer;

          &:hover {
            background-color: #81259d;
            color: #fff;
          }
        }
      }
    
    }

    .btn-block-password {
        text-align: center;
        margin-top: 1.9rem;

        .btn-forgetPassword {
          text-decoration: none;
          font-weight: bold;
          color: #8d3dc8;
        }


      }

`;