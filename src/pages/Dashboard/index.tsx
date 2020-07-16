import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import EmployeeItem from '../../components/Employee';
import ModalAddEmployee from '../../components/ModalAddEmployee';
import ModalEditEmployee from '../../components/ModalEditEmployee';
import { Creators as UserActions } from '../../store/ducks/user';

import { Container, Content } from './styles';

interface IEmployee {
  id: number;
  image: string;
  name: string;
  secondName: string;
  role: IRole;
  birth: string;
  salary: boolean;
}

interface IRole {
  description: string;
}

interface IRootState {
  user: IUser;
}

interface IUser {
  users: IEmployee[];
  loading: boolean;
}

const Dashboard: React.FC = () => {
  const [editingEmployee, setEditingEmployee] = useState<IEmployee>(
    {} as IEmployee,
  );
  const [modalOpen, setModalOpen] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const { getUsersRequest, addUserRequest } = UserActions;
  const { users } = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadEmployees(): Promise<void> {
      dispatch(getUsersRequest());
    }
    loadEmployees();
  }, []);

  async function handleAddEmployee(employee: IEmployee): Promise<void> {
    console.log(employee);
    dispatch(addUserRequest(employee));
  }

  async function handleUpdateEmployee(employee: IEmployee): Promise<void> {
    // TODO UPDATE A FOOD PLATE ON THE API
  }

  async function handleDeleteEmployee(id: number): Promise<void> {
    // TODO DELETE A FOOD PLATE FROM THE API
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditEmployee(employee: IEmployee): void {
    // TODO SET THE CURRENT EDITING FOOD ID IN THE STATE
  }

  return (
    <Container>
      <ModalAddEmployee
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddEmployee={handleAddEmployee}
      />
      <ModalEditEmployee
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingEmployee={editingEmployee}
        handleUpdateEmployee={handleUpdateEmployee}
      />
      <Header openModal={toggleModal} />
      <Content>
        {users &&
          users.map(employee => (
            <EmployeeItem
              key={employee.id}
              employee={employee}
              handleDelete={handleDeleteEmployee}
              handleEditEmployee={handleEditEmployee}
            />
          ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
