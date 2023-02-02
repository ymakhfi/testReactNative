import { CondOperator, RequestQueryBuilder } from '@nestjsx/crud-request';
import { useQuery } from '@tanstack/react-query';
import UserHolder from 'app/components/userHolder';
import { getUsers } from 'app/services/react-query/queries/user';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { FloatingMenu } from 'react-native-floating-action-menu';
import { Text } from 'react-native-paper';
const items = [
  { label: '', letter: 'A' },
  { label: '', letter: 'B' },
  { label: '', letter: 'C' },
  { label: '', letter: 'D' },
  { label: '', letter: 'E' },
  { label: '', letter: 'F' },
  { label: '', letter: 'G' },
  { label: '', letter: 'H' },
  { label: '', letter: 'I' },
  { label: '', letter: 'J' },
  { label: '', letter: 'K' },
  { label: '', letter: 'L' },
  { label: '', letter: 'M' },
  { label: '', letter: 'N' },
];
//A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
import styles from './styles';
const Home: React.FC = () => {
  const [usersPage, setUsersPage] = useState(1);
  const [filterLetter, setFilterLetter] = useState<string | undefined>(
    undefined,
  );
  const [pageCount, setPageCount] = useState(0);
  const [usersList, setUsersList] = useState([]);
  const usersQuery = RequestQueryBuilder.create()
    .setLimit(50)
    .setPage(usersPage)
    .query();
  const [usersCurrentQuery, setUsersCurrentQuery] = useState(usersQuery);
  const [floatingMenuVisible, setFloatingMenuVisible] = useState(false);
  const usersQueryString = filterLetter
    ? usersQuery + filterLetter
    : usersQuery;
  const usersListApi = useQuery(
    ['studentNextPlannings', { usersQueryString }],
    () => getUsers(usersQueryString),
    {
      onSuccess: response => {
        var newUsers: any = usersList
          ? usersList?.concat(response.data.data)
          : response.data.data;
        console.log('response', response.data.pageCount);
        setPageCount(response.data.pageCount);
        setUsersList(newUsers);
      },
    },
  );
  const handleMenuToggle = (isMenuOpen: boolean) => {
    setFloatingMenuVisible(isMenuOpen);
  };
  const handleItemPress = (item, index) => {
    //setIsFiltering(true);
    setFilterLetter(
      '&filter%5B0%5D=first_name%7C%7C%24starts%7C%7C' + item.letter,
    );
    setFloatingMenuVisible(false);
    setUsersList(null);
    setUsersPage(0);
    // const usersFilterQuery = RequestQueryBuilder.create()
    //   .setLimit(50)
    //   .setPage(usersPage)
    //   .setFilter({
    //     field: 'first_name',
    //     operator: CondOperator.STARTS,
    //     value: item.letter,
    //   })
    //   .query();
    // const usersQuery = RequestQueryBuilder.create()
    //   .setLimit(50)
    //   .setPage(usersPage)
    //   .query();
    // console.log('usersFilterQuery', usersFilterQuery, 'usersQuery', usersQuery);

    // setUsersCurrentQuery(usersFilterQuery);
  };
  return (
    <View style={styles.container}>
      {usersList?.length >= 1 && (
        <FlatList
          data={usersList}
          renderItem={({ item }) => <UserHolder user={item} />}
          keyExtractor={(item, index) => index}
          onEndReached={() => {
            console.log('usersPage', usersPage, 'pageCount', pageCount);

            if (usersPage < pageCount) {
              setUsersPage(usersPage + 1);
            }
          }}
        />
      )}
      <FloatingMenu
        items={items}
        isOpen={floatingMenuVisible}
        onMenuToggle={handleMenuToggle}
        onItemPress={handleItemPress}
        buttonWidth={40}
        innerWidth={30}
        renderItemIcon={(item, index) => (
          <Text style={styles.filterLetters}>{item.letter}</Text>
        )}
      />
    </View>
  );
};

export default Home;
