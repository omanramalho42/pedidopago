import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import { useRouter } from 'next/router'
import axios from 'axios'

import { 
  AiOutlineArrowLeft, 
  AiOutlineArrowDown, 
  AiOutlineIdcard, 
  AiOutlinePhone,
  AiOutlineUser
} from 'react-icons/ai'
import { BsCalendar4Week } from 'react-icons/bs'

import { 
  DataContent, 
  Title, 
  Grid, 
  GridContent, 
  ContentIcon,
  Container,
  ContainerUser,
  ContainerChild,
  Input,
  Label,
  DisplayInfo,
  ContentDisplay,
  ContentDisplayUser,
  DisplayText,
  Info,
  Back,
  InputLabel
} from './styles'

interface ColaboradorProps {
  agent: {

    agent: {
      agent_id: string;
      birth_date: string;
      branch?: string;
      department: string;
      image: string;
      name: string;
      email: string;
      document: {
        number: number;
        type: string; 
      }
      phone: {
        ddd: string;
        ddi: string;
        number: string;
      }
      role: string;
      status: "active" | "inactive" | string;
    }

  }
}

const Colaborador: React.FC = () => {
  const [state, setState] = useState<ColaboradorProps>({
    agent: {

        agent: {
        agent_id: '',
        birth_date:  '',
        department: '',
        document: {
          number: 1,
          type: '',
        },
        email: '',
        phone: {
          ddd: '',
          ddi: '',
          number: '',
        },
        image: '',
        name: '',
        role: '',
        status: '',
        branch: '',
      }

    }
  });
  const { query } = useRouter();
  useEffect(() => {

    const getItems = async () => {
      try {
        await axios.get(`https://pp-api-desafio.herokuapp.com/agent/${query.id}`)
        .then(res => setState({
          agent: res.data
        }));
      } catch (err) {
        console.log(err)
      }
    }

    getItems();
  }, [query])

  console.log("☀ agent:")
  console.log(state);

  const { agent } = state;
  return (
    <Container>
      
       <Link href={'/'}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <Back />
            <Title style={{ fontSize: 30 }}>
              Detalhes do colaborador
            </Title>
          </div>
         
        </Link>
      <ContainerChild>
        <div>
          <div>
            <ContentDisplayUser>

              <ContainerUser>
                <AiOutlineUser size={24} />
              </ContainerUser>
                  
              <Info>
                <DisplayText>
                  {agent.agent.name}
                </DisplayText>
                <DisplayText style={{ fontWeight: 'bold'}}>
                  {agent.agent.email}
                </DisplayText>
              </Info>

            </ContentDisplayUser>
          </div>

          <div>
            <Title style={{ fontSize: 20, marginLeft: 10 }}>Informaçoes pessoais</Title>

            <DisplayInfo>

                <ContentDisplay>
                  <ContentIcon>
                    <AiOutlineIdcard />
                  </ContentIcon>
                  
                  <Info>
                    <DisplayText>
                      {agent.agent.document.type}
                    </DisplayText>
                    <DisplayText style={{ fontWeight: 'bold'}}>
                      {agent.agent.document.number}
                    </DisplayText>
                  </Info>

                </ContentDisplay>

                <ContentDisplay>

                  <ContentIcon>
                    <AiOutlinePhone />
                  </ContentIcon>

                  <Info>
                    <DisplayText>
                      telefone  
                    </DisplayText>
                    <DisplayText style={{ fontWeight: 'bold'}}>
                      +{agent.agent.phone.ddi} ({agent.agent.phone.ddd}) {agent.agent.phone.number}
                    </DisplayText>
                  </Info>

                </ContentDisplay>

                <ContentDisplay>

                  <ContentIcon>
                    <BsCalendar4Week />
                  </ContentIcon>
                  <Info>
                    <DisplayText>
                      nascimento
                    </DisplayText>
                    <DisplayText style={{ fontWeight: 'bold'}}>
                      {agent.agent.birth_date}
                    </DisplayText>
                  </Info>

                </ContentDisplay>

            </DisplayInfo>
          </div>

          <DataContent>
            <Title style={{ fontSize: 20, marginLeft: 10 }}>Dados organizacionais</Title>
            <Grid>

              <GridContent>
                <InputLabel>
                  <Label style={{ 
                    fontSize: 14, 
                    padding: 1, 
                    backgroundColor: 'transparent', 
                    color: '#000',
                    top: 10
                  }}>
                    Departamento
                  </Label>
                  <Input placeholder='Departamento'/>
                  <AiOutlineArrowDown size={20} style={{ position: 'relative', top: -36, left: 15 }}/>
                </InputLabel>
              </GridContent>

              <GridContent>
                <InputLabel>
                  <Label style={{ 
                    fontSize: 14, 
                    padding: 1, 
                    backgroundColor: 'transparent', 
                    color: '#000',
                    top: 10
                  }}>
                    Unidade
                  </Label>
                  <Input placeholder='Unidade'/>
                  <AiOutlineArrowDown size={20} style={{ position: 'relative', top: -36, left: 15 }}/>
                </InputLabel>
              </GridContent>
              
              <GridContent>
                <InputLabel>
                  <Label style={{ 
                    fontSize: 14, 
                    padding: 1, 
                    backgroundColor: 'transparent',
                    color: '#000',
                    top: 10 
                  }}>
                    Gerente
                  </Label>
                  <Input placeholder='Gerente'/>
                  <AiOutlineArrowDown size={20} style={{ position: 'relative', top: -36, left: 15 }}/>
                </InputLabel>
              </GridContent>

              <GridContent>
                <InputLabel>
                  <Label style={{ 
                    fontSize: 14, 
                    padding: 1, 
                    backgroundColor: 'transparent', 
                    color: '#000',
                    top: 10
                  }}>
                    Status
                  </Label>
                  <Input placeholder='Departamento'/>
                  <AiOutlineArrowDown size={20} style={{ position: 'relative', top: -36, left: 15 }}/>
                </InputLabel>
              </GridContent>

            </Grid>
          </DataContent>

        </div>
      </ContainerChild>
    </Container>
  )
}

export default Colaborador
