import { TailSpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsLoading,
  selectError,
  selectContacts,
  selectFilter,
} from '../../redux/Selectors';
import { deleteContact } from '../../redux/Operations';
import {
  List,
  Item,
  Button,
  Name,
  Number,
  SubContainer,
  SubTitle,
  Loader,
} from './Contact.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contact = useSelector(selectContacts);
  const contactFilter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const visiblesContact = contact
    .filter(contact =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    )
    .sort((firstName, secondName) =>
      firstName.name.localeCompare(secondName.name)
    );

  return (
    <div>
      <SubTitle>Contacts</SubTitle>
      <Loader>
        {isLoading && !error && (
          <TailSpin
            height="50"
            width="50"
            color="#575859"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </Loader>

      <List>
        {visiblesContact.map(({ name, number, id }) => (
          <Item key={id}>
            <Name>{name}</Name>
            <SubContainer>
              <Number>{number}</Number>
              <Button onClick={() => dispatch(deleteContact(id))}>╳</Button>
            </SubContainer>
          </Item>
        ))}
      </List>
    </div>
  );
};
