import { useEffect, useState } from 'react';
import Article from 'components/Article';
import Information from 'components/Information';
import Promotion from 'components/Promotion';
import Table from 'components/Table';
import { getAllProducts } from 'services/getAllProducts';
import { ProductType } from 'types/ProductType';
import * as S from './styles'
import { Loading } from 'components/Loading/styles';
import { getProduct } from 'services/getProduct';

const thead = [
  'Produto',
  'Preço',
  'categoria',
  'descrição'

]

const MainPage = () => {
  const [products, setProducts] = useState<ProductType[]>()

  const handleChangeSales = (product: ProductType) => {
    getProduct(product.id).then(res => {
      alert(JSON.stringify(res.data))
    })

  }

  useEffect(() => {
    getAllProducts().then(res => {
      setProducts(res.data)
    })
  }, [])

  return (
    <S.Container data-testid="MainPage">
          <S.Content>
            <Promotion/>
            <S.Article>
              <S.Paragraph> Conheça nossos produtos </S.Paragraph>
              {products ? <Table thead={thead} tbody={products} handleChangeSales={handleChangeSales}/> : <Loading/>}
            </S.Article>
              <S.Box>
                <Article/>
                <Information/>
              </S.Box>
          </S.Content>
    </S.Container>
  )
};

export default MainPage;
