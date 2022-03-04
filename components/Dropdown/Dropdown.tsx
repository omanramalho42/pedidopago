import React, { useState, useEffect } from 'react'
import router from 'next/router'
import { 
  Container, 
  ContainerChild,
  Title,
  Content,
} from './styles'
import { AiOutlineEye } from 'react-icons/ai'
import { FiTrash2 } from 'react-icons/fi'

interface DropdownProps {
  id: number;
  title: string;
  icon: string;
}

interface ModalProps {
  modal: {
    title: string;
    active: boolean;
    key: string;
  }
}

const Dropdown = ( {modal}: ModalProps) => {
  const [state, setState] = useState<DropdownProps[]>([])
  const { active, title, key } = modal 

  const { query } = router
  
  useEffect(() => {
    // console.log(modal)
    setState(
      [
        {
          id: 1, 
          title: '', 
          icon: '',
        },
        {
          id: 2, 
          title: '', 
          icon: '',
        },
      ]
    )
  }
  ,[]);

  const options = [
    {
      id: 1,
      text: 'ver colaborador',
      icon: ''
    },
    {
      id: 2,
      text: 'Excluir',
      icon: ''
    },
  ]

  return (
    <Container>
      {active && title === key ? (
        <ContainerChild>
          <Content onClick={() => router.push(`https://localhost:3000/${query.id}`)}>
            <AiOutlineEye size={30}/>
            <Title>Ver colaborador</Title>
          </Content>
          <Content>
            <FiTrash2 size={24}/>
            <Title>Excluir</Title>
          </Content>
      </ContainerChild>
      ) : (
        <></>
      )}
      
    </Container>
  )
}

export default Dropdown