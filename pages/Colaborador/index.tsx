import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
// import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/router'

import { 
    Container, 
    ContainerInfo,
    ContainerChild,
    ContainerTable,
    ContainerDad,
    ContentUser,
    InputLabel,
    ContentStatus,
    StatusBar,
    Title,
    ContentImage, 
    Image,
    Button,
    Content,
    Text,
    TextTable,
    StatusText,
    Input,
    Nav,
    TextUser,
    ToggleSettings,
    Icon,
    Label,
} from './styles'

import Dropdown from '../../components/Dropdown/Dropdown'

interface AxiosProps {
    items: {
        agent_id: string;
        branch?: string;
        department: string;
        image: string;
        name: string;
        role: string;
        status: "active" | "inactive" | string;
    }[]
}

interface ModalProps {
    title: string;
    key: string;
    active: boolean;
}

const Colaborador: React.FC = () => {

  const router = useRouter()
  const { query } = router
  console.log(query)
  
  const [state, setState] = useState<AxiosProps>({
    items: []
  })
  
  useEffect(() => {
    axios.get('https://pp-api-desafio.herokuapp.com/agents')
      .then(res => setState(res.data))
  },[])

  const { items } = state
  console.log("state 👾:")
  console.log(items)

  const [input, setInput] = useState<string>("")

  const [name, setName] = useState("");
  const [modal, setModal] = useState<ModalProps>({active: false, key: "0" ,title: ""});
  const handleOpenModal = (key: string, title: string) => {
      if(modal.active == false) {
        setModal({active: true, key: key, title: title})
      } else 
      setModal({active: false, key: "0", title: ""})
  }


  return (
    <Container>
        
        <Title style={{ fontSize: 40, paddingTop: 0}}>Organização</Title>

        <ContainerChild>
            <Nav>
                <Link href={`/Colaborador`}>
                    <Button>Colaboradores</Button>
                </Link>
                <Link href={`/Cargos`}>
                    <Button>Cargo</Button>
                </Link>
            </Nav>

            <InputLabel>
                <Label>Pesquisar por</Label>
                <Input
                    type="text"
                    placeholder='Pesquiser por nome ou cpf' 
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

            <Title>Listagem de Colaboradores</Title>

            <ContainerTable>
                <Content>
                    <TextTable>
                        Nome Completo
                    </TextTable>
                </Content>
                <Content>
                    <TextTable>
                        Departamento
                    </TextTable>
                </Content>
                <Content>
                    <TextTable>
                        Cargo
                    </TextTable>
                </Content>
                <Content>
                    <TextTable>
                        Unidade
                    </TextTable>
                </Content>
                <Content>
                    <TextTable>
                        Status
                    </TextTable>
                </Content>
            </ContainerTable>

            { items.filter((value) => {
                if (input == "") {
                    return value
                }  else if (value.name.toLowerCase().includes(input.toLowerCase())) {
                    return value
                }
            }).map((item, key) => 
                item ? (
                    <ContainerDad>
                        <ContainerInfo 
                            key={`${item.agent_id}${key}`}
                        >    
                            <ContentUser onClick={() => {router.push(`/Colaborador/${item.agent_id}`)}}>      
                                <ContentImage>
                                    <Image
                                        // loader={() => item.image}
                                        // layout="responsive"
                                        // width={44}
                                        // height={44}
                                        key={item.agent_id} 
                                        src={item.image} 
                                        alt={item.name} 
                                    />
                                </ContentImage>
                                
                                <TextUser>
                                    <Text>
                                        {item.name}
                                    </Text>
                                </TextUser>

                            </ContentUser>
                            
                            <Content>
                                <Text>
                                    {item.department}
                                </Text>
                            </Content>

                            <Content>
                                <Text>
                                    {item.role}
                                </Text>
                            </Content>

                            <Content>
                                <Text>
                                    {item.branch}
                                </Text>
                            </Content>

                            <ContentStatus>
                                <StatusBar>
                                    <Text status={item.status}>
                                        {item.status}
                                    </Text>
                                </StatusBar>
                            </ContentStatus>

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

export default Colaborador