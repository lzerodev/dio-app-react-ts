import { Center, Container, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom"
import CardInfo from "../components/Cards/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data = await api;
      setUserData(data);
    };
    getData();
  }, []);

  const actualData = new Date();

  const { id } = useParams()
  const navigate = useNavigate()

  if(userData && id !== userData.id) {
      navigate('/')
  }

  return (
    <Container w="100vh" paddingTop={100} paddingBottom={300}>
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16} maxHeight="100vh">
          {userData === undefined || userData === null ? (
            <Center>
              <Spinner size={"xl"} color="white" />
            </Center>
          ) : (
            <>
              <CardInfo
                mainContent={`Bem vindo ${userData?.name}`}
                content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()}  ${actualData.getHours()}:${actualData.getMinutes()}`}
              />

              <CardInfo
                mainContent="Saldo"
                content={`R$ ${userData.balance}`}
              />
            </>
          )}
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default Conta;
