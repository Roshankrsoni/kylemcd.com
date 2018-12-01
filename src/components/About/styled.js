import styled from 'styled-components';
import { navy, white, black, gray } from '../../utils/colors';
import { mediumBp, globalMw } from '../../utils/variables';

export const AboutContainer = styled.div`
  align-items: center;
  background-color: ${gray};
  display: flex;
  justify-content: center;
  padding: 20px 0;

  @media(min-width: ${mediumBp}){
    padding: 60px 0;
  }
`;

export const AboutContentContainer = styled.div`
  max-width: ${globalMw};
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media(min-width: ${mediumBp}){
    flex-direction: row;
  }
`;

export const AboutContent = styled.div`
  background-color: ${white};
  order: 1;
  padding: 40px;
  width: 100%;
  
  @media(min-width: ${mediumBp}){
    order: 0;
    width: 75%;
  }
`;
export const AboutTitle = styled.h2`
  font-size: 24px;
  color: ${black};
  margin-bottom: 15px;
`;

export const AboutDescription = styled.p`
  font-size: 16px;
  color: ${black};
  line-height: 24px;
`;

export const AboutImageContainer = styled.div`
  align-items: center;
  background-color: ${navy};
  display: flex;
  justify-content: center;
  order: 0;
  padding: 40px;
  width: 100%;

  @media(min-width: ${mediumBp}){
    order: 1;
    width: 25%;
  }
`;

export const AboutImage = styled.img`
  border: 8px solid ${gray};
  height: auto;
  margin: 0;
  width: 75%;
`;

