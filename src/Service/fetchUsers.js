import axios from 'axios';

export default async function getUsers(page) {
  const url = new URL('https://6463ed7b127ad0b8f8947a58.mockapi.io/users');
  url.searchParams.append('page', `${page}`);
  url.searchParams.append('limit', 3);

  try {
    const res = await axios.get(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.error('error');
  }
}

// export const updateUserFollowers = async (id, body) => {
//   try {
//     console.log('BODY =', body);
//     return await axios.put(
//       `https://6463ed7b127ad0b8f8947a58.mockapi.io/users${id}`,
//       body
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
