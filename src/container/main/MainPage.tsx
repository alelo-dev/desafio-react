import React, {useMemo, useEffect, useState} from 'react';
import Widget from '../../components/Widget/Widget';
import Tabela from '../../components/tabela';
import StringFormat from '../../util/StringFormat';
import styles from './MainPage.module.scss';
import { getProdutos, updateProduto } from '../../services/produto';
import Modal from '../../components/modal'



const MainPage = () => {

  const [produtos, setProdutos] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [dadosEdicao, setDadosEdicao] = useState({
    category: '',
    description: '',
    id: '',
    image: '',
    price: 0,
    title: '',

  });
  let dados: any;
 
    useEffect(() => {
      getProdutos(async(cb: any)=>{
        setProdutos(cb);
      });
      
    }, [])

    const columns = useMemo(
      () => [
          {
              Header: 'Produto',
              accessor: 'produto',
              sortType: 'alphanumeric'
          },
          {
              Header: 'Valor',
              accessor: 'valor',
              sortType: 'alphanumeric'
          },
          {
            Header: 'Categoria',
            accessor: 'category',
            sortType: 'alphanumeric'
          },
          {
            Header: 'Descrição',
            accessor: 'description',
            sortType: 'alphanumeric'
          }
      ],
      [],
  )
  
  async function openModalEditar (id: any){
    produtos.map((data: any)=>{
        if(data.id == id){
          setDadosEdicao({
            category: data.category,
            description: data.description,
            id: data.id,
            image: data.image,
            price: data.price,
            title: data.title})
        }  
    })
    
    setModalEditar(true);
  }

  async function closeModalEditar (){
    setDadosEdicao({
      category: '',
      description: '',
      id: '',
      image: '',
      price: 0,
      title: '',
  
    });
    setModalEditar(false);
  }

  async function salvarAlteracoes() {    
    await updateProduto(dadosEdicao.id, dadosEdicao.title, dadosEdicao.price, dadosEdicao.description, dadosEdicao.image, dadosEdicao.category, (cb: any)=>{
        console.log('CB :', cb);
    })
  }

  return (
    <div className={styles.container}>
        {modalEditar &&
        <Modal
                title="Editar"
                center="false"
                requestClose={closeModalEditar}
            >   
                <form className={styles.formEdicao}>
                    <div className={styles.divForm}>
                        <input className={styles.input} style={{width: 250}} id="produto" type="text" value={dadosEdicao.title} onChange={(e)=> dadosEdicao.title = e.target.value} placeholder="Produto"></input>
                        <input className={styles.input} style={{width: 80}}id="valor" type="text" value={dadosEdicao.price} onChange={(e)=> dadosEdicao.price = parseFloat(e.target.value)} placeholder="Valor"></input>
                        <input className={styles.input} style={{width: 150}}id="categoria" type="text" value={dadosEdicao.category} onChange={(e)=> dadosEdicao.category = e.target.value} placeholder="Valor"></input>
                        <input className={styles.input} style={{width: 300}}id="descricao" type="text" value={dadosEdicao.description} onChange={(e)=> dadosEdicao.description = e.target.value} placeholder="Valor"></input>
                    </div>
                    <div className={styles.divButton}>
                      <button className={styles.button} onClick={()=>salvarAlteracoes()}>Salvar Alterações</button>
                      <button className={styles.buttonGhost} onClick={()=>closeModalEditar()}>Cancelar</button>
                    </div>
                </form>
        </Modal>}

        {/* <Widget widget="promo" /> */}
        <div className={styles.header}>
          <Widget widget="promo" />
        </div>
        <div className={styles.title}>
           Conheça nossos produtos
        </div> 
        <div className={styles.tabela}>
        <Tabela>
          <table >
            <thead>
              <tr>
                {columns.map(column => (
                  <th className="cursorPointer mr-4">
                    {column.Header}
                  </th>
                ))}
              </tr>
              </thead>
                <tbody>
                   {produtos?.length > 0 &&
                    produtos.map((data: any, i: any) =>{
                      return  <tr>
                                <td className="mr-4">{data?.title.substring(0, 20)}</td>
                                <td className="mr-4">{data?.price ? StringFormat.convertToReal(data.price) : null}</td>
                                <td className="mr-4">{data?.category}</td>
                                <td className="mr-4">{data?.description.substring(0, 40)}</td>
                                <td className="mr-4"><a onClick={()=>openModalEditar(data.id)}><span className="link">Editar</span></a></td>
                                <td className="mr-4"><a><span className="link">Contratar</span></a></td>
                              </tr>
                    })}
                    {produtos?.length === 0 &&
                      <tr>
                        <td className="mr-5" >Dados não encontrados</td>
                      </tr>}
                  </tbody>
                </table>
              </Tabela>
            </div>
        <div className={styles.promocoes}>
          <Widget widget="card" />
          <Widget widget="info" />
        </div>
    </div>
  )
};

export default MainPage;
