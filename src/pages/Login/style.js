import styled from 'styled-components';

export const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
`;

export const NavList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const LogoText = styled.span`
  font-size: 24px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* Alinha os links à direita */
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 20px; /* Adicione uma margem à esquerda para separar os links */
`;


export const FormContainer = styled.div`
  width: 90%;
  max-width: 600px;
  border-radius: 10px;
  background-color: #262625;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 20px;
`;

export const FormHeader = styled.div`
  background-color: #363739;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  border-radius: 10px 10px 0 0;
`;

export const FormFieldWrapper = styled.div`
  width: 80%;
  box-sizing: border-box;
  margin: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #3f434a;
  color: #fff;
  border: none;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #845695;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 32px;
`;
