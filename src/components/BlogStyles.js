import styled from 'styled-components';
import { white, black, navy, sky, gray, lightGray } from '../utils/colors';
import { mobileHeroHeight, desktopHeroHeight, mediumBp } from '../utils/variables';
import { darken } from 'polished';
import prismTheme from './prismTheme';

export const ImageContainer = styled.div`
  background-image: url('${props => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${mobileHeroHeight};
  width: 100%;

  @media(min-width: ${mediumBp}){
    height: ${desktopHeroHeight};
  }
`;

export const BlogContainer =  styled.div`
  background-color: ${navy};
  font-family: Arial, Helvetica, sans-serif;
  margin: -80px 20px 20px;
  max-width: 800px;
  position: relative;

  @media(min-width: ${mediumBp}){
    margin: -80px auto 40px;
  }
`;

export const BlogDateContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -18px;
  width: 100%;
`;

export const BlogDate = styled.span`
  background-color: ${sky};
  color: ${white};
  font-size: 12px;
  padding: 8px 16px;
  text-transform: uppercase;
`;

export const BlogTitle = styled.h1`
  color: ${white};
  display: block;
  font-size: 44px;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px 0;

  @media(min-width: ${mediumBp}){
    padding: 60px 80px 0;
    max-width: 1000px;
  }  
`;

export const BlogAuthor = styled.div`
color: ${white};
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

export const BlogContent = styled.div`
${prismTheme}
color: ${white};
  font-size: 18px;
  line-height: 30px;
  padding: 20px 20px;

  @media(min-width: ${mediumBp}){
    padding: 40px 60px 20px 60px;
  }

  a {
    color: #4F86C6;
    text-decoration: underline;

    &:hover {
      color: ${darken(0.2, '#4F86C6')};
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 5px solid ${lightGray};
    margin-left: 0;
    padding-left: 2em;
  }
`