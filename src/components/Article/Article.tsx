import Card from 'components/Card';
import React from 'react';

import * as S from './styles';

const Article: React.FC = () => {
  return (
    <Card bgColor="primary" >
      <S.Container>
        <S.Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
          sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </S.Paragraph>
      </S.Container>
    </Card>
  );
};

export default Article;
