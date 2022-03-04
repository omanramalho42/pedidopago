import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'

import { 
    ContainerDad,
    Container,
    ContainerInfo,
    ContainerChild,
    ContainerTable,
    ContentUser,
    InputLabel,
    Label,
    Title,
    Button,
    Content,
    Text,
    ToggleSettings,
    Icon,
    TextTable,
    Input,
    Nav,
    TextUser,
} from './styles'
import Dropdown from '../../components/Dropdown/Dropdown'
import { AiOutlineSearch } from 'react-icons/ai'

interface AxiosProps {
    roles: {
        name: string;
        departament: string;
        agents_quantity: 5   
    }[]
}

interface ModalProps {
    title: string;
    key: string;
    active: boolean;
}

const Cargos: React.FC = () => {
  
  const [input, setInput] = useState<string>("")
  const [modal, setModal] = useState<ModalProps>({active: false, key: "0" ,title: ""})
  const handleOpenModal = (key: string, title: string) => {
      if(modal.active == false) {
        setModal({active: true, key: key, title: title})
      } else 
      setModal({active: false, key: "0", title: ""})
  }

  const router = useRouter()
  const { query } = router

  const [state, setState] = useState<AxiosProps>({
    roles: []
  })
  
  useEffect(() => {
    axios.get('https://pp-api-desafio.herokuapp.com/roles')
      .then(res => setState(res.data))
  },[])

  const { roles } = state
  console.log("roles 👾:")
  console.log(roles)


  return (
    <Container>
        <Title style={{ fontSize: 40, paddingTop: 0}}>Cargos</Title>
        <ContainerChild>

            <Nav>
                <Link passHref href={`/Colaborador`}>
                    <Button>Colaboradores</Button>
                </Link>
                <Link passHref href={`/Cargos`}>
                    <Button>Cargo</Button>
                </Link>
            </Nav>

            <InputLabel>
                <Label>Pesquisar por</Label>
                <Input
                    type="text"
                    placeholder='Pesquiser por nome do cargo' 
                    onChange={
                        (e) => setInput(e.target.value)
                    }
                    value={input}
                />
                <AiOutlineSearch
                    style={{ position: 'relative', top: -38, left: 15 }} 
                    size={24}
                />
            </InputLabel>
            <Title>Listagem de Cargos</Title>

            <ContainerTable>
                <Content>
                    <TextTable>
                        Cargo
                    </TextTable>
                </Content>
                <Content>
                    <TextTable>
                        Departamento
                    </TextTable>
                </Content>
                <Content>
                    <TextTable>
                        Colaboradores
                    </TextTable>
                </Content>
            </ContainerTable>

            { roles.filter((value) => {
                if (input == "") {
                    return value
                }  else if (value.name.toLowerCase().includes(input.toLowerCase())) {
                    return value
                }
            }).map((item, key) => item ? (
                    <ContainerDad>
                    <ContainerInfo key={key}>    
                        <ContentUser 
                            onClick={() => {router.push(`/Cargos/${item.agents_quantity}`)}}>
                            <TextUser>
                                <Text>
                                    {item.name}
                                </Text>
                            </TextUser>

                        </ContentUser>
                        
                        <Content>
                            <Text>
                                {item.departament}
                            </Text>
                        </Content>

                        <Content>
                            <Text>
                                {item.agents_quantity}
                            </Text>
                        </Content>
                        <ToggleSettings>
                            <Icon 
                                onClick={() => {handleOpenModal(item.name, item.name)}}
                            />
                        </ToggleSettings>
                    </ContainerInfo>
                    <Dropdown modal={modal} />
                    </ContainerDad>
                ) : ( 
                    <Content>
                        {/* {item} */}
                    </Content>
                )
            )}
        </ContainerChild>
    </Container>
  )
}

export default Cargos