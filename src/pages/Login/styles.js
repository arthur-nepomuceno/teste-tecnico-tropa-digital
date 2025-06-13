import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F8F9FB;   padding: 20px; 
  @media (max-width: 768px) {
    padding: 10px;   }
`;

export const Card = styled.div`
  display: flex;
  background-color: #FFFFFF;
  border-radius: 20px;   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);   overflow: hidden;   width: 100%;
  max-width: 950px;   min-height: 550px; 
  @media (max-width: 768px) {
    flex-direction: column;     max-width: 500px;     min-height: unset;   }
`;

export const LeftContent = styled.div`
  flex: 1;   padding: 60px 50px;   display: flex;
  flex-direction: column;
  justify-content: center;   align-items: flex-start; 
  @media (max-width: 768px) {
    padding: 30px 25px;     align-items: center;     text-align: center;   }
`;

export const LogoContainer = styled.div`
  margin-bottom: 25px; 
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 120px;   height: auto;
`;

export const Title = styled.h1`
  font-size: 2.2em;   color: #333333;   margin-bottom: 8px;   font-weight: 700;   letter-spacing: -0.5px; 
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const Subtitle = styled.p`
  font-size: 1em;   color: #7A7A7A;   margin-bottom: 35px;   line-height: 1.4; 
  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 25px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px; 
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  position: relative;   display: flex;
  flex-direction: column;
  gap: 8px; `;

export const Label = styled.label`
  font-size: 0.9em;   color: #555555;   font-weight: 600; `;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;   border: 1px solid #E0E0E0;   border-radius: 10px;   font-size: 1em;   color: #333333;
  outline: none;   transition: border-color 0.3s ease, box-shadow 0.3s ease; 
  &:focus {
    border-color: #B0B0B0;     box-shadow: 0 0 0 3px rgba(176, 176, 176, 0.2);   }

  &::placeholder {
    color: #A9A9A9;   }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;   display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;   color: #A9A9A9;   transition: color 0.2s ease;

  &:hover {
    color: #7A7A7A;
  }
`;

export const PasswordIcon = styled.span`
  `;

export const Button = styled.button`
  width: 100%;
  padding: 15px 20px;
  background-color: #FD7E4D;   color: white;
  border: none;
  border-radius: 10px;   font-size: 1.1em;   font-weight: 600;   cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;   margin-top: 15px;   box-shadow: 0 5px 15px rgba(253, 126, 77, 0.3); 
  &:hover {
    background-color: #E66A3D;     transform: translateY(-2px);   }

  &:active {
    transform: translateY(0);   }
`;

export const RightContent = styled.div`
  flex: 1;   background-color: #FF7043;   border-radius: 0 25px 25px 0;   display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;   
  @media (max-width: 768px) {
    display: none;   }
`;

export const Illustration = styled.img`
  max-width: 100%;   max-height: 100%;   object-fit: contain;   display: block; `