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
  ContentDisplayUser,
  Container,
  ContainerUser,
  ContainerChild,
  Input,
  DisplayInfo,
  ContentDisplay,
  Back,
  InputLabel,
  Label,
  DisplayText,
  Info
} from './styles'

interface AxiosProps {
  roles: {
      role: {
        departament: string;
        name: string;
        grouprules?: {

        }
    }
  }
}

const Cargos:React.FC = () => {
  const [state, setState] = useState<AxiosProps>({
    roles: {
        role: {
          name: '',
          departament: '',
          grouprules: {
            
          }
        }
      }
  })
  const { query } = useRouter();

  useEffect(() => {

    const getItems = async () => {
      try {
        await axios.get(`https://pp-api-desafio.herokuapp.com/role/${query.id}`)
        .then(res => setState(
          {roles: res.data}
        ))
      } catch (err) {
        console.log(err)
      }
    }

    getItems();
  }, [query])

  console.log("☀ roles:")
  console.log(state)
  const { roles } = state

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
               {roles.role.name}
             </DisplayText>
             <DisplayText style={{ fontWeight: 'bold'}}>
               {roles.role.departament}
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
                   {roles.role.name}
                 </DisplayText>
                 <DisplayText style={{ fontWeight: 'bold'}}>
                  {roles.role.name}
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
                   {roles.role.name}
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
                 {roles.role.name}
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

export default Cargos
